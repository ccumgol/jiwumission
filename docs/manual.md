# JIWU Mission 홈페이지 제작 매뉴얼

> **대상 독자**: 정적 홈페이지를 처음 접하는 초보자
> **목적**: 이 사이트가 어떻게 만들어졌는지, 앞으로 어떻게 관리하면 되는지를 이해한다.
> **최종 수정**: 2026-07-07

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
│   ├── blog/              ← 블로그 섹션
│   │   ├── weekly-ai-trends/   ← 주간 AI 트렌드
│   │   ├── daily-it-news/      ← 매일의 IT 뉴스
│   │   ├── conference-review/
│   │   ├── second-brain/
│   │   ├── presentation/
│   │   └── singularity/
│   ├── class/             ← 강의 자료
│   │   ├── affinity/
│   │   ├── ssg/           ← 정적홈페이지 강의
│   │   ├── llm-wiki/
│   │   ├── computer-basic/
│   │   └── ...
│   └── databank/          ← 자료실
│       ├── daily-bible/   ← 오늘의 QT
│       ├── rain-card/
│       ├── bible-resources/
│       └── pds/
│
├── layouts/               ← HTML 레이아웃 템플릿
│   ├── home.html          ← 첫 페이지 레이아웃
│   ├── blog/
│   │   ├── list.html      ← 목록 페이지
│   │   └── single.html    ← 개별 글 페이지
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
name = "Blog"
url = "/blog/"
weight = 3          # 숫자가 작을수록 앞에 표시
hasChildren = true  # 하위 메뉴가 있을 경우 true

  # 2단계 하위 메뉴
  [[main]]
  parent = "Blog"       # 부모 메뉴 이름과 정확히 일치해야 함
  name = "주간 AI 트렌드"
  url = "/blog/weekly-ai-trends/"
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
/databank/daily-bible/[오늘날짜]/index.txt 파일 fetch
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

- **오늘의 QT** (`content/databank/daily-bible/YYYY-MM-DD.md`): AI 스크립트 자동 생성 + push
- **매일의 IT뉴스** (`content/blog/daily-it-news/YYYY-MM-DD.md`): AI 스크립트 자동 생성 + push

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
1. **자동 푸시 스크립트**: [scripts/auto_push.sh](file:///Users/gihyunpark/Desktop/jiwumission/scripts/auto_push.sh)
   - 로컬의 변경사항(신규 마크다운 파일 등) 유무를 검사
   - 변경 사항이 있을 때만 날짜를 포함한 커밋 생성 및 `git push` 실행
   - 무의미한 충돌 방지를 위해 `git pull --rebase` 선행 수행
2. **Mac 백그라운드 스케줄러**: `~/Library/LaunchAgents/com.jiwumission.autopush.plist`
   - 매일 새벽 1시 정각(`01:00`)에 `auto_push.sh` 스크립트를 무인 백그라운드 호출

### 모니터링 및 문제해결
- 스크립트의 작동 및 Git 상태 로그: `scripts/auto_push.log`
- macOS launchd 자체 에러 로그: `scripts/launchd_stderr.log`
- 스케줄러 서비스 수동 재기동:
  ```bash
  # 서비스 언로드 (해제)
  launchctl unload ~/Library/LaunchAgents/com.jiwumission.autopush.plist
  # 서비스 로드 (등록)
  launchctl load ~/Library/LaunchAgents/com.jiwumission.autopush.plist
  ```


