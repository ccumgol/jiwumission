# Cloudflare Pages 배포 및 DNS 연동 가이드

이 문서는 JIWU Mission 홈페이지를 기존 GitHub Pages에서 **Cloudflare Pages** 정적 호스팅 서비스로 마이그레이션(이전)하고, 기존 커스텀 도메인(`jesusiswith.us`)의 DNS 네임서버 연동을 완료하기까지의 전체 과정과 주요 설정값을 상세하게 기록한 문서입니다.

---

## 1. 개요 및 마이그레이션 효과

| 구분 | GitHub Pages (기존) | Cloudflare Pages (신규) |
|---|---|---|
| **동작 방식** | GitHub Actions가 빌드하여 브랜치에 푸시 | GitHub 리포지토리 Push 감지 후 자체 빌드 |
| **속도 및 성능** | 전 세계 캐싱(CDN) 성능 평이함 | 전 세계 310개 이상의 초고속 Edge 서버 배포 |
| **대역폭 제한** | 월 100GB 소프트 리밋 있음 | 기본 무제한 무료 대역폭 제공 |
| **미리보기** | 메인 도메인 배포만 지원 | 브랜치별 작업 시 개별 Preview URL 제공 |

---

## 2. Cloudflare Pages 서비스 생성 및 설정

### 1) 대시보드 진입 메뉴 찾기 (개편된 UI 적용)
Cloudflare 대시보드(`dash.cloudflare.com`)의 최근 UI 개편으로 인해 기존의 "Workers & Pages" 메뉴가 통합되었습니다.
- **올바른 경로**: **`대시보드 좌측 메뉴 -> 빌드 -> 컴퓨트 (Compute)`**
- 해당 메뉴로 진입 후, Pages 탭에서 **[Create a project]** (프로젝트 생성) -> **[Connect to Git]**을 클릭하여 시작합니다.

### 2) 빌드 매개변수 및 환경 설정
- **GitHub 저장소 연결**: `ccumgol/jiwumission` 선택
- **Production branch**: `main`
- **Framework preset**: `Hugo`
- **Build command (빌드 명령)**: 
  ```bash
  pnpm run project-setup && pnpm run build
  ```
  *(초기에 `npm install && npm run build`를 사용했으나, 저장소 내부의 `pnpm-lock.yaml` 파일과 충돌하여 설치 에러가 발생했습니다. Cloudflare Pages가 백그라운드에서 `pnpm install`을 자동 완료해 주기 때문에, 빌드 명령에는 `pnpm` 빌드 스크립트 실행 명령어만 써주면 됩니다.)*
- **Build output directory**: `public`

### 3) 필수 환경 변수 (Environment Variables) 설정
Cloudflare 빌드 컨테이너가 로컬 및 GitHub Actions와 동일한 빌드 규격을 만족하도록 아래 3가지 환경 변수를 지정했습니다.

| Variable name (변수명) | Value (값) | 용도 |
|---|---|---|
| **`HUGO_VERSION`** | `0.158.0` | Extended 버전 빌드를 활성화하기 위함 |
| **`GO_VERSION`** | `1.23.3` | Hugo Go 모듈 종속성 해결 |
| **`NODE_VERSION`** | `22` | Tailwind CSS 테마 생성기 구동 환경 제공 |

> **참고**: GitHub Actions Secrets에 존재하던 `TINA_CLIENT_ID`, `TINA_TOKEN` 등은 실제 사이트 빌드 및 렌더링에 사용되지 않는 더미(Dummy) 설정이므로 Cloudflare 환경 변수에 별도로 복사/입력하지 않고 생략했습니다.

---

## 3. 커스텀 도메인 (`jesusiswith.us`) DNS 연동 및 트러블슈팅

### 1) 혼동하기 쉬운 DNS 레코드 규칙 (루트 도메인 설정)
- Cloudflare Pages 대시보드의 **Custom domains** 탭에서 `jesusiswith.us` 도메인을 추가할 때, 사용자가 직접 수동 CNAME 레코드를 추가하려 시도하면 다음 오류가 발생합니다:
  ```
  CNAME content cannot reference itself
  ```
- **원인**: 루트 도메인(`jesusiswith.us`)이 자기 자신을 가리키는 CNAME을 설정하려 했기 때문입니다.
- **해결책**:
  1. 도메인의 주 권한을 가진 네임서버(Nameserver)가 이미 Cloudflare로 되어 있으므로, 페이지 하단의 DNS 설정 테이블에서 기존 GitHub Pages의 목적지 IP 정보인 **A 레코드 4개만 모두 삭제**합니다.
     - 삭제 대상 IP: `185.199.109.153`, `185.199.110.153`, `185.199.108.153`, `185.199.111.153`
  2. A 레코드 삭제가 완료된 후 도메인 등록 절차를 완료하면, Cloudflare Pages 시스템이 자동으로 루트 도메인과 Pages 서버 간의 바인딩(CNAME Flattening 기술)을 처리합니다.

### 2) Registrar (도메인 등록 대행업체) 관리와 네임서버 판별법
- **DNS가 작동하는 실제 주체**: 도메인을 가비아, 후이즈, 고대디 등 도메인 등록처(Registrar)에서 샀더라도, 그 등록처 설정 화면의 **네임서버** 항목이 `xxxx.ns.cloudflare.com`으로 바뀐 상태라면 **모든 DNS 설정은 Cloudflare 대시보드 웹페이지 내에서만 작동**합니다.
- 이에 따라, 원래 구매한 사이트가 아닌 Cloudflare의 DNS 설정 탭에서 레코드를 수정해야 실제 인터넷 망에 반영됩니다.

---

## 4. 임시 URL에서 레이아웃이 깨지던 문제 (baseURL 수정)

### 1) 현상
- 최초 빌드 성공 후 Cloudflare가 제공한 임시 URL(`https://xxxxx.jiwumission.pages.dev`)로 들어가면 뼈대(HTML)만 나오고 모든 디자인 스타일(CSS)이 다 깨지는 현상이 발생했습니다.

### 2) 원인
- `hugo.toml` 설정 파일 내에 사이트 주소가 `baseURL = "https://jesusiswith.us/"`로 고정되어 배포되었습니다.
- 브라우저는 임시 Pages URL로 접속했으나, 사이트 내부 CSS/JS 에셋들은 원래 도메인의 파일(`https://jesusiswith.us/css/bundle.css`)을 참조하려고 시도하면서 파일 로드 차단(또는 404)이 일어나 디자인이 깨진 것입니다.

### 3) 해결책
임시 미리보기 주소와 실제 운영 주소 모두에서 디자인이 잘 나오도록 **Build command**를 아래와 같이 개선하여 배포 인수가 동적으로 주입되도록 수정했습니다:
```bash
pnpm run project-setup && pnpm run build -- --baseURL $CF_PAGES_URL
```
Cloudflare Pages 빌드 시 자동으로 주입되는 환경 변수 `$CF_PAGES_URL`을 Hugo 빌드 시점의 `--baseURL` 플래그 인자로 토스해 줌으로써, 배포 주소에 관계없이 스타일시트 경로가 유연하게 매핑됩니다.
