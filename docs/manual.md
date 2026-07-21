# JIWU Mission 홈페이지 제작 매뉴얼

> **대상 독자**: 정적 홈페이지를 처음 접하는 초보자
> **목적**: 이 사이트가 어떻게 만들어졌는지, 앞으로 어떻게 관리하면 되는지를 이해한다.
> **최종 수정**: 2026-07-17

---

## 1. 정적 홈페이지란 무엇인가?

### 동적 vs 정적 홈페이지

홈페이지를 만드는 방식은 크게 두 가지로 나뉩니다.

| 구분 | 동적 홈페이지 | 정적 홈페이지 |
|---|---|---|
| 예시 | 워드프레스, 네이버 블로그 | 이 사이트 (Hugo) |
| 작동 방식 | 방문자 요청 시마다 서버가 페이지를 생성 | 미리 완성된 HTML 파일을 그대로 전달 |
| 서버 필요 | 데이터베이스 + 웹서버 | 단순 파일 호스팅만 필요 |
| 속도 | 상대적으로 느림 | 매우 빠름 |
| 보안 | 해킹 취약점 존재 | 공격 표면 거의 없음 |
| 비용 | 서버 운영비 발생 | 무료 또는 매우 저렴 |

**이 사이트는 정적 홈페이지입니다.** 글을 작성하면 Hugo가 HTML 파일로 변환(빌드)하고, 그 파일을 GitHub Pages 서버에 올려서 방문자에게 제공합니다.

---

## 2. 기술 스택 (사이트를 구성하는 도구들)

```
글 작성 (Markdown)
    ↓
Hugo (정적 사이트 빌더, 빌드 엔진)
    ↓
Hugoplate 테마 (Tailwind CSS 기반 디자인)
    ↓
GitHub (코드 및 콘텐츠 저장소)
    ↓
GitHub Actions (자동 빌드 파이프라인)
    ↓
jesusiswith.us (실제 서비스 도메인)
```

### 각 도구 설명

| 도구 | 역할 | 비유 |
|---|---|---|
| **Markdown** | 글 작성 형식 | 특수 문법을 쓰는 메모장 |
| **Hugo** | 마크다운 → HTML 변환기 | 원고를 책으로 인쇄하는 인쇄소 |
| **Hugoplate** | 사이트 디자인 템플릿 | 인쇄소에서 사용하는 디자인 양식 |
| **GitHub** | 파일 저장 및 버전 관리 | 클라우드 저장소 + 모든 수정 이력 보관 |
| **GitHub Actions** | 자동 빌드·배포 | 원고가 업로드되면 자동으로 인쇄·배송하는 시스템 |
| **Tailwind CSS** | 화면 스타일(디자인) 적용 | 인쇄 레이아웃 규칙 |

---

## 3. 사이트 구축 히스토리

### Phase 1 — 기반 구축 (2026년 4월)

- Hugoplate 템플릿을 기반으로 Hugo 프로젝트 초기화
- GitHub 저장소(`ccumgol/jiwumission`) 생성 및 첫 push
- GitHub Actions 자동 배포 파이프라인 연결
- 초기 도메인 설정: `ccumgol.github.io/jiwumission`
- 홈 페이지 배너, 소개 섹션, 사역 안내 카드 기본 레이아웃 구성

### Phase 2 — 콘텐츠 구조 설계 (2026년 4월~5월)

- 커스텀 도메인 `jesusiswith.us` 연결
- Blog / Class / Databank 3개 섹션으로 콘텐츠 구조 분리
- 메뉴 계층 구조 설계 (드롭다운 서브메뉴)
- 블로그 카드 3열 + 사이드바 레이아웃 완성
- 댓글 시스템(OpenRemark) 전역/개별 설정

### Phase 3 — 기능 고도화 (2026년 5월~6월)

- 보안형 Git 기반 관리자 페이지(`/admin/`) 구현
  - GitHub API를 통해 브라우저에서 설정 변경 → 자동 배포
- 섹션별 정렬 기준 설정화 (날짜순/제목순 선택 가능)
- WebP 이미지 최적화 (전체 이미지 WebP 변환)
- Git 히스토리에서 PNG 원본 영구 삭제 (저장소 용량 989MB → 134MB)

### Phase 4 — 일일 콘텐츠 자동화 (2026년 7월)

- `daily-bible` 서비스 개시: 오늘의 QT를 홈 화면 모달로 자동 표시
  - JSON API + JavaScript 모달 구현
- `daily-it-news` 섹션 추가: 매일 아침 AI 생성 IT 뉴스 자동 게시
- GitHub Actions 스케줄 워크플로우로 매일 06:00 KST 자동 빌드·배포

---

## 4. 폴더 구조 이해

```
jiwumission/               ← 프로젝트 루트
│
├── config/                ← Hugo 설정 파일들
│   └── _default/
│       ├── hugo.toml      ← 사이트 기본 설정 (도메인, 언어 등)
│       ├── menus.toml     ← 상단/하단 메뉴 구성
│       └── params.toml    ← 테마 파라미터, 정렬 설정, 카드 옵션
│
├── content/               ← 모든 글 파일 (마크다운)
│   ├── bible/             ← 성경 관련 자료 (이전 databank)
│   │   ├── daily-bible/   ← 오늘의 QT (연도별 폴더, 예: /2026/)
│   │   ├── bible-overview/← 성경개론 (66권)
│   │   ├── bible-resources/ ← 성경 자료
│   │   ├── rain-card/     ← 이슬비카드 (말씀카드)
│   │   └── ancestry/      ← 믿음의 계보
│   ├── digest/            ← 글 및 트렌드 모음 (이전 blog)
│   │   ├── weekly-ai-trends/   ← 주간 AI 트렌드
│   │   ├── daily-it-news/      ← 매일의 IT 뉴스 (연도별 폴더 포함)
│   │   ├── conference-review/
│   │   ├── second-brain/
│   │   ├── presentation/
│   │   └── singularity/
│   ├── class/             ← 강의 자료
│   │   ├── affinity/
│   │   ├── ssg/           ← 정적홈페이지 강의
│   │   ├── llm-wiki/
│   │   └── computer-basic/
│   └── extra/             ← 기타 (제작기·자료실·정책)
│       ├── site-story.md  ← 사이트 제작기 + 변경 이력
│       └── pds/           ← 자료실
│
├── layouts/               ← HTML 레이아웃 템플릿
│   ├── home.html          ← 첫 페이지 레이아웃
│   ├── digest/
│   │   ├── list.html      ← 목록 페이지
│   │   └── single.html    ← 개별 글 페이지
│   ├── bible/             ← 성경 섹션 레이아웃
│   ├── partials/          ← 재사용 가능한 부분 레이아웃
│   └── shortcodes/        ← 마크다운 내 사용할 수 있는 특수 태그
│
├── assets/css/
│   └── custom.css         ← 커스텀 스타일 (테마 오버라이드)
│
├── static/
│   └── admin/
│       └── index.html     ← 관리자 패널 (GitHub API 기반)
│
├── archetypes/            ← 새 글 생성 시 기본 템플릿
│   ├── default.md
│   └── daily-it-news.md   ← IT 뉴스 전용 템플릿
│
├── .github/workflows/
│   ├── main.yml           ← push 시 자동 빌드·배포
│   └── scheduled-publish.yml ← 매일 06:00 KST 자동 빌드
│
└── docs/                  ← 교육 문서
    ├── manual.md          ← 제작 매뉴얼 (현재 파일)
    └── issue_report.md    ← 문제 해결 기록
```

---

## 5. 콘텐츠 작성 방법

### 마크다운(Markdown)이란?

마크다운은 특수 기호를 사용해 서식을 표현하는 글쓰기 방식입니다.

```markdown
# 제목 1단계
## 제목 2단계
### 제목 3단계

일반 문단 텍스트입니다.

**굵게** 표시하려면 별표 두 개로 감쌉니다.
*기울임*은 별표 하나입니다.

- 목록 항목 1
- 목록 항목 2

> 인용구는 꺾쇠(>)로 시작합니다.

![이미지 설명](images/파일명.webp)
```

### 프론트매터(Front Matter)란?

각 마크다운 파일 맨 위에 `---`으로 감싸진 설정 영역입니다.  
Hugo가 이 정보를 읽어서 페이지 제목, 날짜, 썸네일 이미지 등을 처리합니다.

```yaml
---
title: "글 제목"                          # 페이지 제목
date: 2026-07-07T06:00:00+09:00           # 게시 날짜 (KST 명시 필수)
author: "Gihyun Park"                     # 작성자
summary: "목록 페이지에 표시될 한 줄 요약"   # 150자 이내 권장
description: "SEO용 설명 (summary와 동일 가능)"
tags: ["태그1", "태그2"]                  # 검색용 태그
image: "images/썸네일.webp"               # 썸네일 이미지
comments: false                           # 댓글 비활성화
categories: ["섹션명", "blog"]            # 분류 카테고리
---
```

### 주의해야 할 프론트매터 규칙

| 항목 | 올바른 예 | 잘못된 예 |
|---|---|---|
| 키 대소문자 | `categories:` | `Categories:` ← 빌드 경고 발생 |
| 날짜 타임존 | `2026-07-07T06:00:00+09:00` | `2026-07-07` ← 서버 UTC 기준 처리 |
| 이미지 확장자 | `images/파일명.webp` | `images/파일명.png` ← WebP 파일인데 .png 쓰면 빌드 오류 |
| path 필드 | (사용 안 함) | `path: /blog/글제목` ← Hugo v0.144+ 오류 |

---

## 6. 이미지 파일 관리 규칙

### 저장 위치

이미지는 글이 속한 **섹션 폴더 안의 `images/` 서브폴더**에 저장해야 합니다.

```
content/
  blog/
    weekly-ai-trends/
      images/               ← 이 섹션 글들의 이미지 저장 위치
        thumbnail.webp
      2026년-6월-2주차.md
```

### 파일 형식

- **WebP 형식 권장**: PNG 대비 26% 이상 용량 절감
- 파일명에 한글이나 공백보다는 영문·하이픈 사용 권장
- 실제 파일 포맷과 확장자를 반드시 일치시켜야 합니다 (파일은 WebP인데 `.png`로 저장하면 빌드 실패)

---

## 7. 로컬 개발 서버 실행

### 필수 설치 도구

- **Hugo Extended v0.144+**
- **Node.js v22+**
- **Go v1.23+**

### 실행 방법

```bash
# 터미널에서 프로젝트 폴더로 이동
cd /Users/gihyunpark/Desktop/jiwumission

# 개발 서버 시작 (초안(draft)까지 포함해서 미리 보기)
hugo server -D

# 브라우저에서 확인 (자동 배정 포트로 접속)
# 예: http://localhost:59122/
```

> **포트 충돌 시**: 이미 다른 Hugo 서버가 실행 중이면 다른 포트가 배정됩니다.  
> `lsof -i :1313` 명령으로 기존 프로세스를 찾아 `kill [PID]`로 종료할 수 있습니다.

---

## 8. Git을 통한 파일 관리 기본

이 사이트의 모든 파일은 Git으로 관리됩니다. Git은 모든 수정 이력을 저장하는 버전 관리 도구입니다.

### 기본 작업 흐름

```bash
# 1. 원격 저장소의 최신 내용 가져오기 (작업 시작 전 항상 먼저!)
git pull --rebase

# 2. 파일 수정 후 변경사항 확인
git status

# 3. 변경 파일 전체 스테이징
git add -A

# 4. 커밋 (이력 저장)
git commit -m "설명: 어떤 내용을 변경했는지"

# 5. 원격 저장소(GitHub)에 업로드
git push origin main
```

### 푸시 후 자동 배포

`git push`가 완료되면 GitHub Actions가 자동으로:
1. Hugo 빌드 실행 (마크다운 → HTML)
2. 빌드 결과물을 GitHub Pages에 배포
3. 약 1~3분 후 `jesusiswith.us`에 반영

---

## 9. 메뉴 수정 방법

메뉴는 `config/_default/menus.toml` 파일에서 관리합니다.

```toml
# 1단계 메뉴 예시
[[main]]
name = "Digest"
url = "/digest/"
weight = 4          # 숫자가 작을수록 앞에 표시
hasChildren = true  # 하위 메뉴가 있을 경우 true

  # 2단계 하위 메뉴
  [[main]]
  parent = "Digest"     # 부모 메뉴 이름과 정확히 일치해야 함
  name = "주간 AI 트렌드"
  url = "/digest/weekly-ai-trends/"
  weight = 2
```

---

## 10. 자동 퍼블리시 시스템

### 매일 06:00 KST 자동 배포

`.github/workflows/scheduled-publish.yml` 파일이 매일 21:00 UTC(= 한국 시간 06:00)에  
빈 커밋을 생성하고 push합니다. 이 push가 `main.yml` 빌드를 자동으로 트리거합니다.

### 오늘의 QT 모달 동작 방식

```
방문자가 첫 페이지 접속
    ↓
JavaScript가 오늘 날짜 계산 (YYYY-MM-DD)
    ↓
/bible/daily-bible/[연도]/[오늘날짜]/index.txt 파일 fetch
    ↓
qt_status: "done" 이면 → 모달 표시
그 외 → 조용히 스킵
    ↓
"오늘 하루 보지 않기" 체크 시 localStorage에 날짜 저장 → 당일 재표시 안 됨
```

---

## 11. 앞으로의 관리 가이드

### 일상적인 콘텐츠 업로드

1. 마크다운 파일 작성
2. 프론트매터 규칙 확인 (날짜, categories, image 경로 등)
3. 이미지를 해당 섹션의 `images/` 폴더에 저장
4. `git add -A && git commit -m "글 제목" && git push`
5. 1~3분 후 사이트 반영 확인

### 자동 업로드되는 콘텐츠

- **오늘의 QT** (`content/bible/daily-bible/[연도]/YYYY-MM-DD.md`): AI 스크립트 자동 생성 + push
- **매일의 IT뉴스** (`content/digest/daily-it-news/[연도]/YYYY-MM-DD.md`): AI 스크립트 자동 생성 + push

### 주의사항

- Admin 페이지(`/admin/`)를 사용한 후에는 로컬 작업 전 반드시 `git pull --rebase` 실행
- 이미지 업로드 전 WebP 변환 권장
- GitHub 저장소 용량은 현재 약 134MB (최대 권장 500MB 이내 유지)

---

## 12. Cloudflare Pages 서비스 배포 관리

이 홈페이지는 기존 GitHub Pages에서 **Cloudflare Pages**로 호스팅 환경이 이전되었습니다.

### 배포 파이프라인 구조
```
GitHub 저장소 (Push 감지) 
    ↓
Cloudflare Pages 빌드 서버 구동
    ↓
pnpm run project-setup && pnpm run build -- --baseURL $CF_PAGES_URL
    ↓
전 세계 310개+ Edge 서버로 캐싱 배포 (수십 초 이내)
```

### 로컬 작업과 배포의 관계
- 기존과 동일하게 마크다운 글을 쓰고 `git push`를 실행하면 Cloudflare Pages에서 자동으로 새 커밋을 감지해 재빌드 및 배포를 완료합니다.
- 매일 아침 06시 KST에 트리거되는 자동 배포 스케줄러(`scheduled-publish.yml`)도 GitHub에 빈 커밋을 push함으로써 Cloudflare 배포 파이프라인을 정상 작동시킵니다.
- 상세한 배포 구성 및 DNS 연동 트러블슈팅 히스토리는 [docs/cloudflare_build.md](file:///Users/gihyunpark/Desktop/jiwumission/docs/cloudflare_build.md) 파일을 참고하십시오.

---

## 13. 로컬 자동 퍼블리시 및 Git Push 스케줄러 구성

매일 로컬에서 AI 등으로 자동 생성되는 콘텐츠(IT 뉴스, 오늘의 QT 등)를 매일 특정 시각에 감지하여 자동으로 GitHub에 업로드(push)하고 배포하는 시스템입니다.

### 구성 요소
1. **자동 푸시 스크립트**: `~/.scripts/auto_push.sh` (실제 구동본) / 프로젝트 소스: [scripts/auto_push.sh](file:///Users/gihyunpark/Desktop/jiwumission/scripts/auto_push.sh)
   - 로컬의 변경사항(신규 마크다운 파일 등) 유무를 검사
   - 변경 사항이 있을 때만 날짜를 포함한 커밋 생성 및 `git push` 실행
   - 무의미한 충돌 방지를 위해 `git pull --rebase` 선행 수행
   - macOS TCC 보안 정책(바탕화면 직접 접근 차단)을 우회하기 위해 사용자 홈 디렉토리 아래의 별도 숨김 폴더에 복사되어 실행됩니다.
2. **Mac 백그라운드 스케줄러**: `~/Library/LaunchAgents/com.jiwumission.autopush.plist`
   - 매일 밤 11시 30분(`23:30`)에 `auto_push.sh` 스크립트를 무인 백그라운드 호출 (바탕화면 chdir 에러를 피하기 위해 WorkingDirectory 속성이 제거되었습니다.)

### 모니터링 및 문제해결
- 스크립트의 작동 및 Git 상태 로그: `~/.scripts/auto_push.log`
- macOS launchd 자체 에러 로그: `~/.scripts/launchd_stderr.log`
- 스케줄러 서비스 수동 재기동 및 즉시 트리거:
  ```bash
  # 서비스 등록 해제
  launchctl unload ~/Library/LaunchAgents/com.jiwumission.autopush.plist
  # 서비스 신규 등록
  launchctl load ~/Library/LaunchAgents/com.jiwumission.autopush.plist
  # 수동 강제 1회 즉시 실행 테스트
  launchctl start com.jiwumission.autopush
  ```

---

## 14. 보안 및 민감한 정보 노출 방지 안전 수칙

안전한 웹사이트 운영과 불필요한 GitHub 보안 경고(Secret scanning alerts)를 사전에 차단하기 위해 글을 쓰고 배포할 때 아래 규칙들을 준수하십시오.

### 1) 노션(Notion) 마크다운 추출물 업로드 시 파일 링크 제거
- **주의사항**: 노션 페이지에 파일(PDF, 동영상 등)이 포함된 상태로 마크다운으로 내보내면, 파일 링크 주소에 **`ASIA...`로 시작하는 AWS S3 읽기 토큰** 파라미터가 자동으로 동봉되어 추출됩니다.
- **영향**: 이 토큰은 **1시간만 유효한 임시 키**이므로 유출되어도 무해하지만, GitHub에 업로드되면 **Secret Scanning** 시스템이 해킹용 Access Key 유출인 것으로 오진하여 지속적인 보안 경고 메일을 발송합니다.
- **방지책**: 노션에서 변환한 마크다운을 업로드하기 전에, 파일 상단이나 본문에 포함되어 있는 `[file](https://prod-files-secure.s3.us-west-2.amazonaws.com/...)` 형태의 임시 다운로드 주소를 **반드시 완전히 지우고** Git에 push하십시오.

### 2) API Key 및 비밀값은 소스 코드 하드코딩 금지
- 구글 지도 API, 메일서비스 토큰 등 외부 시스템 연계 시 필요한 비밀값은 `params.toml`이나 마크다운 본문에 하드코딩하지 않습니다.
- **실수로 커밋된 경우 대처**:
  1. 즉시 로컬 소스 코드에서 해당 키 값을 지운 뒤 새로 커밋하여 push합니다.
  2. **가장 중요**: 이미 Git 과거 히스토리상에 흔적이 영구 보존된 상태이므로, **해당 API를 제공하는 공급업체 콘솔(예: Google Cloud Console)에 즉시 로그인하셔서 해당 키를 폐기(Delete/Revoke)하거나 재생성**해야만 요금 도용 등의 실제 리스크를 소멸시킬 수 있습니다.
  3. GitHub Web에 남아있는 경고 알림은 **Security > Secret scanning** 탭에서 **[Close alert]**를 누른 뒤 `False positive` 또는 `Revoked`를 선택해 비활성화 처리하십시오.

---

## 15. 배포 방식 두 가지 — Cloudflare 웹훅 vs GitHub Actions

이 사이트는 **어느 방식이든 최종적으로 Cloudflare Pages가 사이트를 서빙**합니다. 차이는 "누가 빌드하고 누가 Cloudflare에 올리느냐"뿐입니다.

| 방식 | 동작 | 특징 |
|---|---|---|
| **① Cloudflare 웹훅(네이티브)** | push → Cloudflare가 감지해 직접 빌드·배포 (§12) | 설정 쉬움. 단, GitHub App/웹훅 연결이 끊기면 조용히 멈출 수 있음 |
| **② GitHub Actions** | push → GitHub이 빌드 → `wrangler`로 Cloudflare Pages에 업로드 | 설정이 저장소 파일로 남아 안정적·투명. 웹훅에 의존 안 함 |

### GitHub Actions 방식 (`.github/workflows/deploy-cloudflare.yml`)
- 필요한 것: GitHub 저장소 **Secrets 2개**
  - `CLOUDFLARE_API_TOKEN` (Cloudflare → My Profile → API Tokens → **Cloudflare Pages: Edit** 권한)
  - `CLOUDFLARE_ACCOUNT_ID` (대시보드 우측 사이드바 / 주소창의 계정 ID)
  - 등록: `gh secret set CLOUDFLARE_API_TOKEN` / `gh secret set CLOUDFLARE_ACCOUNT_ID`
- push하면 GitHub **Actions 탭**에서 빌드·배포 진행 상황을 볼 수 있습니다(초록 체크 = 성공).
- 급할 때 수동 배포: `pnpm run build` 후 `npx wrangler pages deploy public --project-name=jiwumission`

> 📘 **두 방식의 상세 비교·따라하기·트러블슈팅**은 [docs/github-actions-deploy.md](file:///Users/gihyunpark/Desktop/jiwumission/docs/github-actions-deploy.md)에 별도로 정리되어 있습니다. (2026-07 기준, 웹훅 연결이 끊긴 이력이 있어 GitHub Actions 방식을 마련해 두었습니다 — [issue_report.md](file:///Users/gihyunpark/Desktop/jiwumission/docs/issue_report.md) Issue 31~32 참고)

---

## 16. 성경개론(Bible)과 매일 QT 자동 링크

`bible/bible-overview`의 성경개론 66권에는 **'각 장 및 문단의 내용 정리'(내용구분)** 섹션이 있습니다. 이 항목들에서 해당 본문의 **매일 QT(`bible/daily-bible`)로 바로 이동하는 링크**를 자동으로 붙일 수 있습니다.

### 사용법
저장소 루트에서 아래 한 줄을 실행합니다.
```bash
python3 scripts/link_qt_to_overview.py
```
- QT 파일의 `book`·`passage`·`date` 정보를 읽어, 개론 내용구분 항목 중 **본문이 속한 가장 좁은 항목**에 링크를 붙입니다.
- 링크 형식: `- 1:1-31 6일간의 창조  · 📖 [1:1-13](/bible/daily-bible/2026/2026-01-01/) [1:14-25](...)`

### 특징 (알아두면 좋은 점)
- **발행된 QT만** 링크합니다(미발행 draft 제외) → 깨진 링크가 생기지 않습니다.
- **재실행해도 중복되지 않습니다(idempotent)**. QT가 더 발행되면 **다시 실행만** 하면 링크가 자동으로 채워집니다.
- QT가 있는 책(창세기·요한복음·사사기·고린도전서·시편·이사야·고린도후서·야고보서 등)만 처리합니다.

> ⚠️ **마이그레이션 반영 필요**: 폴더가 `databank`→`bible`로 바뀌었으므로, 스크립트(`scripts/link_qt_to_overview.py`) 내부 경로 상수(`content/databank/daily-bible`, `/databank/daily-bible/...`)를 `content/bible/daily-bible`, `/bible/daily-bible/[연도]/...`로 갱신해야 정상 동작합니다.

---

## 17. 잎새 소식지(뉴스레터) 제작 — Canva 연동

매주 발행하는 '잎새' 소식지는 **Canva의 email 디자인**으로 제작합니다. Claude의 Canva 커넥터를 이용하면 지난 호를 바탕으로 새 호를 빠르게 만들 수 있습니다.

### 새 호 만드는 흐름
1. **지난 호 복제** (예: 38호 → 39호 초안) 후 제목·인사말의 호수 변경
2. 이번 주 **사이트 발행 글**로 각 섹션 교체 — 특집, 주간 AI 트렌드(최신 주차), Affinity(다음 강), 성경 자료 등의 제목·요약·URL을 넣음
3. **대표 이미지(썸네일)** 교체
4. Canva에서 검토 후 발송(발송은 기존 방식대로 직접)

### 주의 (제약)
- 잎새는 **반응형(email) 디자인**이라, 커넥터/자동화로는 **하이퍼링크 URL을 바꿀 수 없습니다**(텍스트·이미지 교체는 가능). 따라서 **글 제목에 걸린 링크 주소 교체는 Canva 편집기에서 수동**으로 해야 합니다. (자세한 배경: [issue_report.md](file:///Users/gihyunpark/Desktop/jiwumission/docs/issue_report.md) Issue 34)
- 사이트에 아직 배포되지 않은 새 글의 링크·이미지는 열리지 않으므로, **배포가 끝난 뒤** 뉴스레터에 넣는 것이 안전합니다.

---

## 18. 추천 GitHub 리포지터리 자동 분류 및 갱신

IT 뉴스(`content/digest/daily-it-news/*.md`)에서 매일 발행하는 리포지터리 추천 건을 추출하여 자료실(`content/extra/pds/github-repos.md`) 문서에 카테고리별로 자동 분류 및 요약 한 줄 설명을 추가해 주는 기능입니다.

> ⚠️ **마이그레이션 반영 필요**: `scripts/updateRepos.js`가 아직 옛 경로(`content/blog/daily-it-news`, `content/databank/pds`)를 참조하므로 새 구조(`content/digest/daily-it-news`, `content/extra/pds`)로 갱신이 필요합니다.

### 동작 원리 및 사용법
1. **수동 실행**:
   저장소 루트에서 다음 명령을 실행하면 즉시 뉴스 본문을 스캔하여 신규 리포지터리 정보를 파싱 및 추가합니다.
   ```bash
   pnpm run update-repos
   ```
2. **자동 실행 (스케줄러)**:
   로컬 Mac의 백그라운드 일일 배포 프로세스(`auto_push.sh` 및 `~/.scripts/auto_push.sh`)에 이 스크립트 실행이 포함되어 있어, 매일 밤 23:30에 자동으로 수집·빌드되어 Git에 푸시됩니다.

---

## 19. 이슬비카드(말씀카드) 및 성경개론 관리

### 이슬비카드 (구 말씀카드)
- **위치**: `content/bible/rain-card/`
- **글로벌 메뉴**: `Bible ➡️ 이슬비카드` 메뉴로 연결되며 각 말씀카드를 이미지 및 텍스트 형태로 목록화합니다.
- **수정**: 파일의 카테고리(`categories: ["이슬비전도카드", "말씀카드"]`) 및 정적 빌드 구조가 유지되어 있으며, 글로벌 메뉴 및 내부 인덱스 제목이 기존 '말씀카드'에서 '이슬비카드'로 단일 동기화되었습니다.

### 성경개론
- **위치**: `content/bible/bible-overview/`
- **정렬 방식**: 성경 66권이 창세기(1)부터 요한계시록(66)까지 순서대로 정렬되도록 Frontmatter에 `weight: [성경 순번]`을 부여했습니다.
- **글로벌 메뉴**: `Bible ➡️ 성경개론` (주소: `/bible/bible-overview/`) 메뉴로 등록되어 있습니다.
- **본문 정제**: 성경 본문 위키 링크 및 작업 언어 콜아웃 안내 문구가 일괄 제거되어 깔끔한 정적 페이지 본문만 노출됩니다.

---

## 20. 어드민 페이지(Admin Panel) 및 방문자 통계 설정

브라우저상에서 작동하는 관리자 패널(`static/admin/index.html`)에는 사이트 방문자 수 및 행동 패턴을 분석하는 구글 애널리틱스 4(GA4) 및 Looker Studio 연동용 통계 기능이 탑재되어 있습니다.

### 설정 방법
1. **어드민 패널 ➡️ 방문자 통계** 탭으로 이동합니다.
2. **Google Tag Manager ID** (또는 GA4 측정 ID)를 입력하고, 구글 Looker Studio에서 임베드한 보고서의 **공유 임베드 URL** 주소를 입력합니다.
3. `통계 설정 저장하기` 버튼을 누르면 설정 파일(`config/_default/params.toml`)에 정보가 즉시 저장 및 커밋되며, 배포 완료 후 어드민 페이지 내부에서 바로 방문자 수 통계 차트가 출력됩니다.



