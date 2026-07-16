# GitHub Actions로 배포하기 — 초보자 완전 가이드

> **대상 독자**: 정적 홈페이지 배포를 처음 접하는 초보자, 그리고 이걸 남에게 가르쳐야 하는 분
> **목적**: "push하면 사이트가 자동으로 바뀌는" 그 과정이 **정확히 어떻게 돌아가는지** 이해한다.
> **핵심 질문 3개에 답합니다**: ① GitHub Actions 방식은 어떻게 동작하나 ② Cloudflare 웹훅 방식은 뭐가 다른가 ③ 결국 뭘 써야 하나
> **최종 수정**: 2026-07-15

---

## 0. 먼저 — "배포"가 뭔지 한 문장으로

우리가 쓴 글은 **Markdown 파일**입니다. 방문자의 브라우저는 Markdown을 못 읽고 **HTML**만 읽습니다.
그래서 누군가 **① Markdown을 HTML로 변환(빌드)** 하고 **② 그 HTML을 인터넷 서버에 올려야(배포)** 합니다.

> **배포(deploy) = "빌드한 결과물(HTML)을 사람들이 접속하는 서버에 올려 두는 일"**

이 문서는 그 "빌드 + 배포"를 **자동으로** 시키는 두 가지 방법을 다룹니다.

---

## 1. 등장인물 정리 (헷갈리지 않게)

| 이름 | 역할 | 한 줄 비유 |
|---|---|---|
| **GitHub** | 소스 코드·글이 저장되는 곳 | 원고 창고 |
| **GitHub Actions** | GitHub이 제공하는 **자동 작업 로봇** | 창고에 딸린 자동 작업장 |
| **Hugo** | Markdown → HTML 변환기(빌드 엔진) | 인쇄기 |
| **Cloudflare Pages** | 완성된 HTML을 전 세계에 **서빙(호스팅)** | 전국 배송망을 갖춘 매장 |
| **웹훅(Webhook)** | "새 글 올라왔다!"고 알려주는 **자동 알림 전화** | 창고 → 매장으로 거는 전화 |
| **wrangler** | Cloudflare에 파일을 올리는 **명령줄 도구** | 매장에 물건 넣는 택배 기사 |
| **API 토큰** | wrangler가 Cloudflare에 들어갈 때 쓰는 **열쇠** | 매장 출입 카드 |

> 💡 **가장 흔한 혼동 포인트**: "Cloudflare"와 "Cloudflare로 배포하는 방법"은 다릅니다.
> **어느 방법을 쓰든 최종적으로 사이트를 서빙하는 곳은 똑같이 Cloudflare Pages입니다.**
> 두 방법의 차이는 **"누가 빌드하고, 누가 Cloudflare에 파일을 올리느냐"** 뿐입니다.

---

## 2. 두 가지 방법, 그림으로 비교

### 방법 A — Cloudflare 웹훅 방식 (Cloudflare가 직접 빌드)
```
내가 git push
      ↓  (웹훅이 Cloudflare에 "새 커밋 있어!" 전화)
Cloudflare 빌드 서버가 저장소를 복제
      ↓
Cloudflare가 Hugo로 빌드
      ↓
Cloudflare가 그대로 자기 서버에 배포 → 전 세계 서빙
```
→ **Cloudflare가 "빌드 + 배포"를 전부 함.** 나는 push만.

### 방법 B — GitHub Actions 방식 (GitHub이 빌드해서 Cloudflare에 올림) ★ 우리가 채택
```
내가 git push
      ↓  (GitHub Actions가 자동 실행)
GitHub 작업장(러너)이 저장소를 복제
      ↓
GitHub이 Hugo로 빌드 → public/ 폴더 생성
      ↓
wrangler(+API 토큰)로 public/ 을 Cloudflare Pages에 업로드
      ↓
Cloudflare가 전 세계 서빙
```
→ **GitHub이 "빌드"하고, wrangler로 Cloudflare에 "배포"만 맡김.** 웹훅이 필요 없음.

---

## 3. 방법 B (GitHub Actions) 따라하기 — 실제 설정

우리가 이 프로젝트에 실제로 적용한 방식입니다. 순서대로 따라 하면 됩니다.

### 3-1. 워크플로우 파일 만들기
`.github/workflows/deploy-cloudflare.yml` 파일을 만듭니다. 이 파일이 "언제, 무엇을 자동으로 할지"를 적어둔 **작업 지시서**입니다.

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: ["main"]   # main에 push되면 실행
  workflow_dispatch:       # 수동 실행 버튼도 만듦

permissions:
  contents: read

concurrency:
  group: "cloudflare-pages-deploy"
  cancel-in-progress: true   # 새 배포가 오면 이전 배포 취소(최신만)

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: "0.158.0"
      HUGO_ENVIRONMENT: production
    steps:
      - name: Checkout                       # ① 저장소 내려받기
        uses: actions/checkout@v4
        with: { submodules: recursive, fetch-depth: 0 }

      - name: Setup Go                        # ② 빌드에 필요한 도구 설치
        uses: actions/setup-go@v5
        with: { go-version: "1.23" }

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with: { version: 9 }

      - name: Setup Node
        uses: actions/setup-node@v4
        with: { node-version: "22", cache: pnpm }

      - name: Install Hugo Extended
        run: |
          wget -O "${RUNNER_TEMP}/hugo.deb" \
            "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb"
          sudo dpkg -i "${RUNNER_TEMP}/hugo.deb"

      - name: Install dependencies            # ③ 의존성 설치
        run: pnpm install --frozen-lockfile

      - name: Project setup
        run: pnpm run project-setup

      - name: Build site                      # ④ 빌드 (Markdown → HTML)
        run: pnpm run build

      - name: Deploy to Cloudflare Pages      # ⑤ Cloudflare에 업로드
        run: npx --yes wrangler@3 pages deploy public --project-name=jiwumission --branch=main
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

> ⚠️ **왜 `npx wrangler`이고 `wrangler-action`이 아닌가?**
> 처음엔 공식 `cloudflare/wrangler-action`을 썼는데, 이 저장소가 **pnpm 워크스페이스**라서 그 액션이 wrangler를 설치하다 `ERR_PNPM_ADDING_TO_ROOT` 오류로 실패했습니다.
> `npx`는 패키지를 워크스페이스에 넣지 않고 임시로 받아 실행하므로 이 충돌을 피합니다. (실전에서 겪은 함정입니다.)

### 3-2. Cloudflare에서 열쇠 2개 준비
1. **API 토큰**: Cloudflare 대시보드 → 우측 상단 프로필 → **My Profile → API Tokens → Create Token → Create Custom Token**
   - 권한: `Account` → `Cloudflare Pages` → **Edit**
   - 만들면 나오는 토큰 문자열을 복사 (이 화면에서만 보임)
2. **Account ID**: 대시보드 우측 사이드바, 또는 주소창 `dash.cloudflare.com/<여기가 Account ID>/…`

### 3-3. GitHub에 열쇠를 안전하게 등록 (Secrets)
저장소 폴더에서 (또는 GitHub 웹 → Settings → Secrets and variables → Actions):
```bash
gh secret set CLOUDFLARE_API_TOKEN     # 실행 후 토큰 붙여넣기
gh secret set CLOUDFLARE_ACCOUNT_ID    # 실행 후 Account ID 붙여넣기
```
> 🔒 Secrets는 **암호화 저장**되고 Actions 로그에도 `***`로 가려집니다. 절대 코드(yaml)에 직접 토큰을 쓰지 마세요.

### 3-4. push하고 결과 확인
```bash
git add .github/workflows/deploy-cloudflare.yml
git commit -m "ci: GitHub Actions로 Cloudflare Pages 배포"
git push origin main
```
- GitHub 저장소 → **Actions 탭**에서 실행 상태(초록 체크 = 성공)를 봅니다.
- 실패하면 실패한 스텝을 눌러 로그를 읽고 고칩니다.

---

## 4. 방법 A (Cloudflare 웹훅) 사용하기

Cloudflare가 GitHub를 직접 지켜보다 빌드하는 방식입니다. **워크플로우 파일도, API 토큰도 필요 없습니다.**

### 4-1. 설정 절차
1. Cloudflare 대시보드 → **빌드 > 컴퓨트(Compute)** → Pages → **Create a project → Connect to Git**
2. GitHub 인증 → **저장소 소유 계정**으로 로그인 → **Cloudflare Pages GitHub App**에 저장소 접근 허용
3. 저장소·**Production branch(main)** 선택
4. **빌드 설정** 입력:
   - Framework preset: `Hugo`
   - Build command: `pnpm run project-setup && pnpm run build`
   - Build output directory: `public`
5. **환경 변수** 등록: `HUGO_VERSION=0.158.0`, `GO_VERSION=1.23.3`, `NODE_VERSION=22`
6. 저장 → 이때 Cloudflare가 GitHub 저장소에 **웹훅을 자동 설치**합니다.

### 4-2. 이후 동작
`git push` → GitHub이 웹훅으로 Cloudflare에 알림 → Cloudflare가 알아서 빌드·배포. 끝.

### 4-3. 이 방식이 고장 났을 때 (우리가 실제로 겪음)
- 증상: push해도 사이트가 안 바뀜. Cloudflare에 새 빌드가 안 뜸.
- 원인: **GitHub ↔ Cloudflare 웹훅/GitHub App 연결이 끊김** (저장소 웹훅이 사라짐).
- 확인 방법 (관리자 권한 필요):
  ```bash
  gh api repos/<계정>/<저장소>/hooks   # [] 이면 웹훅 없음 = 끊김
  ```
- 복구: Cloudflare 프로젝트 → Settings → Git 연결 **Manage/Reconnect** → GitHub 재인증.
  - 단, **기존 프로젝트의 Git 재연결은 Cloudflare UI에서 잘 안 되는 경우가 많습니다.** (이 프로젝트가 그랬고, 그래서 방법 B로 전환했습니다.)

---

## 5. 두 방법 장단점 비교

| 항목 | 방법 A — Cloudflare 웹훅 | 방법 B — GitHub Actions |
|---|---|---|
| **초기 설정 난이도** | 쉬움 (클릭 몇 번) | 보통 (yaml + 토큰·시크릿) |
| **빌드 설정 위치** | Cloudflare 대시보드 (화면) | **저장소 안 yaml 파일 (버전관리 O)** |
| **재현성** | 낮음 (설정이 화면에만 존재) | **높음 (파일로 박제, 누구나 재현)** |
| **디버깅** | 어려움 (Cloudflare 로그) | **쉬움 (Actions 탭에 단계별 로그)** |
| **연결 안정성** | 웹훅/GitHub App 끊기면 조용히 멈춤 | **웹훅 불필요 → 끊길 일 없음** |
| **브랜치별 미리보기 URL** | **자동 제공** | 수동 설정 필요 |
| **빌드 환경 통제** | Cloudflare가 정한 범위 | **내가 버전까지 완전 통제** |
| **빌드 사용량** | Cloudflare 무료 빌드 횟수 제한 있음 | **public 저장소는 Actions 무료·무제한** |
| **필요한 비밀값** | 없음 | API 토큰 1개 (Secrets로 관리) |
| **최종 호스팅** | Cloudflare Pages | Cloudflare Pages (**동일**) |

> 📌 **저장 공간 오해 정리**: "빌드를 어디서 하느냐"는 GitHub 저장소 용량과 무관합니다. 빌드 결과물(`public/`)은 어느 방식이든 저장소에 커밋되지 않으므로(=.gitignore), 저장소 크기는 그대로입니다. GitHub Actions 빌드는 임시 러너에서 일어나고 끝나면 삭제됩니다.

---

## 6. 그래서, 결국 뭘 써야 하나? (최선의 선택)

한 줄 결론부터:

> ### ✅ 이 프로젝트의 최선: **방법 B (GitHub Actions)**

**이유:**
1. **안정성** — 방법 A는 웹훅/GitHub App 연결이 **소리 없이 끊기는** 사고가 실제로 났고, 재연결도 잘 안 됐습니다. 방법 B는 그 약한 고리 자체가 없습니다.
2. **투명성·디버깅** — 무엇이 왜 실패했는지 Actions 탭에 단계별 로그로 다 보입니다. 초보자에게 "지금 여기서 이게 실패했어"라고 가르치기 좋습니다.
3. **재현성** — 배포 방법이 `deploy-cloudflare.yml` 파일 하나에 다 적혀 있습니다. 화면 설정이 아니라 **코드로 남아** 있어, 다른 사람도 그대로 재현하고 이해할 수 있습니다.
4. **비용 걱정 없음** — public 저장소라 Actions가 무료·무제한입니다.

**그럼 방법 A는 언제?**
- "일단 가장 빠르게, 클릭만으로 시작"하고 싶은 **아주 단순한 첫 사이트**, 또는 **브랜치별 미리보기 URL이 꼭 필요한** 경우엔 방법 A가 편합니다.
- 다만 "왜 갑자기 배포가 멈췄지?"를 겪을 수 있고, 그때 원인이 대시보드 깊숙이 숨어 있어 초보자가 혼자 고치기 어렵습니다.

**가르칠 때 핵심 메시지 (혼동 방지용 한 문단):**
> "두 방법 다 **최종 호스팅은 Cloudflare**로 같다. 차이는 **빌드를 Cloudflare가 하느냐(A), GitHub이 하느냐(B)** 뿐이다.
> A는 클릭이 쉽지만 연결이 조용히 끊기면 고치기 어렵고, B는 설정이 파일로 남아 안정적이고 눈에 보인다.
> **초보자에게 원리를 정확히 가르치고 오래 안정적으로 운영하려면 B(GitHub Actions)를 권한다.**"

---

## 7. 자주 겪는 문제(Troubleshooting)

| 증상 | 원인 | 해결 |
|---|---|---|
| push해도 사이트 안 바뀜 | (A) 웹훅 끊김 / (B) 워크플로우 미실행 | (A) 웹훅 확인·재연결 / (B) Actions 탭에서 실행·오류 확인 |
| 배포 스텝 `ERR_PNPM_ADDING_TO_ROOT` | pnpm 워크스페이스와 wrangler-action 충돌 | 배포를 `npx --yes wrangler@3 pages deploy …` 로 교체 |
| `project-name` 오류 | Cloudflare 실제 프로젝트명과 불일치 | 대시보드에서 정확한 이름 확인 후 yaml 수정 |
| 빌드 실패 `image: unknown format` | 확장자와 실제 포맷 불일치 | 이미지 확장자를 실제 포맷과 일치(WebP 등) |
| 토큰 노출 걱정 | — | 절대 코드에 안 씀. Secrets 사용. 유출 시 Cloudflare에서 즉시 폐기·재발급 |

---

## 8. 관련 문서
- [manual.md](./manual.md) — 사이트 전체 제작·운영 매뉴얼
- [cloudflare_build.md](./cloudflare_build.md) — Cloudflare Pages 초기 구축·DNS 연동 기록
- [issue_report.md](./issue_report.md) — 구축 과정 문제 해결 모음
- 실제 워크플로우 파일: `.github/workflows/deploy-cloudflare.yml`
