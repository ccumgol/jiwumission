---
title: "교회 홈페이지 무료 제작 매뉴얼 Chapter 5. GitHub 연결과 첫 배포"
date: 2026-06-11T03:55:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-22
summary: "이 챕터에서는 GitHub 저장소를 만들고 로컬 프로젝트와 연결한 뒤, 자동 배포 워크플로우 파일을 설정·커밋하고 첫 푸시를 통해 Hugo 기반 교회 홈페이지를 GitHub Pages에 배포하는 전체 과정을 단계별로 안내합니다."
description: "이 챕터에서는 GitHub 저장소를 만들고 로컬 프로젝트와 연결한 뒤, 자동 배포 워크플로우 파일을 설정·커밋하고 첫 푸시를 통해 Hugo 기반 교회 홈페이지를 GitHub Pages에 배포하는 전체 과정을 단계별로 안내합니다."
tags: ["잎새 36호"]
image: "images/교회-홈페이지-무료-제작-매뉴얼-Chapter-5.-GitHub-연결과-첫-배포.webp"
comments: false
notion_url: https://app.notion.com/p/Chapter-5-GitHub-37c091c284f68077af2ad29588bf9ef1
notion_id: 37c091c2-84f6-8077-af2a-d29588bf9ef1
Categories: ["blog", "홈페이지"]
---

# 교회 홈페이지 무료 제작 매뉴얼

## Chapter 5. GitHub 연결과 첫 배포 — 인터넷에 사이트 올리기

> **이 챕터는 약 30–40분이 소요됩니다.**
> 이 챕터를 마치면 전 세계 누구나 접속할 수 있는 주소에 교회 홈페이지가 올라갑니다.

---

## 목차

- [이 챕터에서 할 일](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9D%B4-%EC%B1%95%ED%84%B0%EC%97%90%EC%84%9C-%ED%95%A0-%EC%9D%BC)
- [STEP 1. GitHub 저장소 만들기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-1-github-%EC%A0%80%EC%9E%A5%EC%86%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [STEP 2. 로컬 프로젝트와 GitHub 연결하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-2-%EB%A1%9C%EC%BB%AC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%99%80-github-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0)
- [STEP 3. 자동 배포 워크플로우 파일 만들기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-3-%EC%9E%90%EB%8F%99-%EB%B0%B0%ED%8F%AC-%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%EC%9A%B0-%ED%8C%8C%EC%9D%BC-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [STEP 4. 첫 번째 Push — GitHub에 업로드하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-4-%EC%B2%AB-%EB%B2%88%EC%A7%B8-push--github%EC%97%90-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0)
- [STEP 5. GitHub Pages 배포 소스 설정하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-5-github-pages-%EB%B0%B0%ED%8F%AC-%EC%86%8C%EC%8A%A4-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [STEP 6. 배포 결과 확인하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-6-%EB%B0%B0%ED%8F%AC-%EA%B2%B0%EA%B3%BC-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0)
- [최종 확인 및 체크리스트](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B5%9C%EC%A2%85-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8)
- [용어 해설](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9A%A9%EC%96%B4-%ED%95%B4%EC%84%A4)
- [초보자 Tips](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B4%88%EB%B3%B4%EC%9E%90-tips)
- [전문가의 제언](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%A0%84%EB%AC%B8%EA%B0%80%EC%9D%98-%EC%A0%9C%EC%96%B8)
- [FAQ](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#faq)

---

## 이 챕터에서 할 일

| 단계 | 작업 | 소요 시간 |
| --- | --- | --- |
| STEP 1 | GitHub 저장소 만들기 | 5분 |
| STEP 2 | 로컬 프로젝트와 GitHub 연결 | 5분 |
| STEP 3 | 자동 배포 워크플로우 파일 작성 | 10분 |
| STEP 4 | 첫 번째 Push | 5분 |
| STEP 5 | GitHub Pages 배포 소스 설정 | 5분 |
| STEP 6 | 배포 결과 확인 | 5분 |

### 🏁 이 챕터의 체크포인트

> `https://내아이디.github.io` 주소를 브라우저에 입력했을 때 교회 홈페이지가 열린다.

---

## 이 챕터에서 일어나는 일 — 전체 그림

```plain text
내 컴퓨터                     GitHub                    인터넷 방문자
─────────────                ──────────────             ─────────────
church-website/    push →   저장소(Repository)
  hugo.toml                   ↓ (GitHub Actions 자동 실행)
  content/                  Hugo 빌드 실행
  themes/                     ↓
                            완성된 HTML 파일  →  방문자 브라우저에 전달
```

> 💡 **핵심 개념:** 여러분은 글 파일(.md)만 push하면 됩니다. GitHub Actions가 자동으로 Hugo를 실행해서 완성된 웹사이트를 만들고, GitHub Pages가 그것을 전 세계에 공개합니다. 직접 서버를 관리하거나 빌드 명령어를 실행할 필요가 없습니다.

---

## STEP 1. GitHub 저장소 만들기

### 🎯 무엇을 위한 작업인가?

사이트 파일이 저장될 GitHub 저장소(Repository)를 만듭니다. 저장소 이름에 특별한 규칙이 있는데, 이 규칙을 따라야만 GitHub Pages 무료 호스팅이 자동으로 활성화됩니다.

---

### 1-1. 새 저장소 만들기

브라우저에서 GitHub에 로그인한 상태로 아래 주소 접속:

```plain text
https://github.com/new
```

또는 GitHub 메인 페이지 오른쪽 상단 **`+`** 아이콘 클릭 → **"New repository"** 클릭

---

### 1-2. 저장소 설정 입력

아래 항목을 순서대로 입력합니다.

**① Repository name (저장소 이름)**

```plain text
내아이디.github.io
```

> ⚠️ **이 이름 형식이 반드시 지켜져야 합니다.**
>
> - `내아이디` 자리에 Chapter 2에서 만든 **GitHub 사용자 이름**을 그대로 입력합니다
> - 예: 사용자 이름이 `gracechurch`라면 → `gracechurch.github.io`
> - 대소문자, 오타 없이 정확히 입력해야 합니다
> - 이 형식이어야만 `https://gracechurch.github.io` 주소가 자동 생성됩니다

**② Description (설명) — 선택 사항**

```plain text
○○교회 공식 홈페이지
```

**③ Public / Private 선택**

반드시 **"Public"** 선택

> ⚠️ Private을 선택하면 GitHub Pages 무료 호스팅이 작동하지 않습니다.

**④ Initialize this repository 항목들 — 모두 체크 해제**

```plain text
□ Add a README file       ← 체크 해제
□ Add .gitignore          ← 체크 해제
□ Choose a license        ← 체크 해제
```

> ⚠️ 이 항목들을 체크하면 GitHub 저장소에 초기 커밋이 생겨, 나중에 내 컴퓨터 프로젝트를 올릴 때 충돌이 발생합니다. 반드시 모두 비워두세요.

**⑤ "Create repository" 버튼 클릭**

---

### 1-3. 저장소 주소 복사

저장소가 만들어지면 아래와 같은 빈 저장소 화면이 나타납니다.

```plain text
Quick setup — if you've done this kind of thing before

  HTTPS  SSH

  https://github.com/내아이디/내아이디.github.io.git   [복사 아이콘]
```

**HTTPS 주소 오른쪽의 복사 아이콘 클릭** 또는 주소 전체를 마우스로 드래그해서 복사합니다.

아래에 기록해두세요:

```plain text
내 GitHub 저장소 주소: https://github.com/________________/________________.github.io.git
```

```plain text
✅ 완료 확인: 빈 저장소 화면이 표시되고 HTTPS 주소가 복사됨
```

---

## STEP 2. 로컬 프로젝트와 GitHub 연결하기

### 🎯 무엇을 위한 작업인가?

내 컴퓨터의 `church-website` 폴더와 방금 만든 GitHub 저장소를 연결합니다. 이 연결이 설정되어야 `git push` 명령어로 파일을 GitHub에 업로드할 수 있습니다.

---

### 2-1. Antigravity IDE에서 프로젝트 폴더 열기

Antigravity IDE를 실행하고, `church-website` 폴더가 열려 있는지 확인합니다.

열려 있지 않다면:

- 메뉴 **"파일(File)" → "폴더 열기(Open Folder)"** 클릭
- `church-website` 폴더 선택

---

### 2-2. 내장 터미널 열기

`Ctrl+`` (Windows / Mac 공통)

터미널 프롬프트가 `church-website` 폴더를 가리키는지 확인:

```plain text
# Windows 예시
PS C:\church-website>

# Mac 예시
사용자이름@MacBook church-website %
```

다른 위치라면 이동:

```bash
# Windows
cd C:\church-website

# Mac
cd ~/church-website
```

---

### 2-3. 원격 저장소 연결

아래 명령어에서 `내아이디` 부분을 본인의 GitHub 사용자 이름으로 바꿔서 실행합니다.

```bash
git remote add origin https://github.com/내아이디/내아이디.github.io.git
```

**예시 (사용자 이름이 gracechurch인 경우):**

```bash
git remote add origin https://github.com/gracechurch/gracechurch.github.io.git
```

연결이 제대로 됐는지 확인:

```bash
git remote -v
```

**성공 시 출력:**

```plain text
origin  https://github.com/내아이디/내아이디.github.io.git (fetch)
origin  https://github.com/내아이디/내아이디.github.io.git (push)
```

`origin`이라는 이름으로 GitHub 저장소 주소가 등록되면 성공입니다.

```plain text
✅ 완료 확인: git remote -v 출력에 origin 주소가 표시됨
```

---

## STEP 3. 자동 배포 워크플로우 파일 만들기

### 🎯 무엇을 위한 작업인가?

파일을 push할 때마다 GitHub가 자동으로 Hugo를 실행해서 사이트를 빌드하고 배포하도록 하는 "자동화 지시서"를 만듭니다. 이 파일이 있으면 앞으로 매주 설교 파일을 올릴 때 별도의 빌드 작업 없이 push만 하면 사이트가 자동으로 업데이트됩니다.

이 파일은 Antigravity 에이전트에게 만들어 달라고 요청할 수 있습니다.

---

### 3-1. 방법 A — Antigravity 에이전트에게 요청

Antigravity 오른쪽 **에이전트 채팅창**에 아래 내용을 입력:

```plain text
.github/workflows/hugo.yml 파일을 만들어줘.
Hugo 사이트를 GitHub Pages에 자동 배포하는 GitHub Actions 워크플로우야.
조건:
- main 브랜치에 push할 때 자동 실행
- Hugo Extended 최신 버전 사용
- 테마가 서브모듈로 추가되어 있어서 submodules: recursive 옵션 필요
- 빌드 후 GitHub Pages에 배포
```

에이전트가 파일을 생성하면 내용을 확인합니다. 아래 3-2의 내용과 비교하여 누락된 부분이 있으면 에이전트에게 수정을 요청합니다.

---

### 3-2. 방법 B — 직접 파일 만들기

Antigravity 내장 터미널에서 폴더를 먼저 만듭니다.

**🪟 Windows:**

```powershell
New-Item -ItemType Directory -Path .github\workflows -Force
```

**🍎 Mac:**

```bash
mkdir -p .github/workflows
```

Antigravity 탐색기에서 `.github` → `workflows` 폴더 클릭 → 새 파일 아이콘 클릭 → 파일 이름 `hugo.yml` 입력

파일이 열리면 아래 내용을 **전체 복사해서 붙여넣기** 합니다.

```yaml
# ──────────────────────────────────────────────────
#  교회 홈페이지 자동 배포 워크플로우
#  main 브랜치에 push할 때마다 자동으로 실행됩니다
# ──────────────────────────────────────────────────

name: 교회 홈페이지 자동 배포

on:
  push:
    branches: ["main"]       # main 브랜치에 push할 때 실행
  workflow_dispatch:         # GitHub Actions 탭에서 수동 실행도 허용

# GitHub Pages 배포에 필요한 권한
permissions:
  contents: read
  pages: write
  id-token: write

# 동시에 하나의 배포만 실행 (진행 중인 배포는 완료될 때까지 대기)
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # ── 1단계: Hugo로 사이트 빌드 ──────────────────
  build:
    runs-on: ubuntu-latest
    steps:

      - name: 소스 코드 내려받기
        uses: actions/checkout@v4
        with:
          submodules: recursive  # PaperMod 테마(서브모듈) 함께 내려받기
          fetch-depth: 0         # 전체 커밋 이력 (글 수정일 표시에 필요)

      - name: Hugo Extended 설치
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
          extended: true         # Extended 에디션 (테마의 SCSS 처리에 필요)

      - name: GitHub Pages 설정 읽기
        id: pages
        uses: actions/configure-pages@v5

      - name: Hugo 빌드 실행
        env:
          HUGO_ENVIRONMENT: production
        run: |
          hugo --minify --baseURL "${{ steps.pages.outputs.base_url }}/"

      - name: 빌드 결과물 업로드
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public

  # ── 2단계: GitHub Pages에 배포 ─────────────────
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build             # build 작업이 완료된 후에만 실행
    steps:

      - name: GitHub Pages에 배포
        id: deployment
        uses: actions/deploy-pages@v4
```

파일 저장: `Ctrl+S` (Windows) / `Cmd+S` (Mac)

---

### 3-3. 폴더 구조 확인

저장 후 Antigravity 탐색기에서 아래 구조가 만들어졌는지 확인합니다.

```plain text
church-website/
├── .github/
│   └── workflows/
│       └── hugo.yml   ← 방금 만든 파일
├── content/
├── themes/
└── hugo.toml
```

---

### 3-4. 워크플로우 파일 커밋

```bash
git add .github/workflows/hugo.yml
```

```bash
git commit -m "GitHub Actions 자동 배포 워크플로우 추가"
```

```plain text
✅ 완료 확인: .github/workflows/hugo.yml 파일이 생성되고 커밋됨
```

---

## STEP 4. 첫 번째 Push — GitHub에 업로드하기

### 🎯 무엇을 위한 작업인가?

내 컴퓨터의 모든 파일을 GitHub 저장소에 처음으로 업로드합니다. push가 완료되는 순간 GitHub Actions가 자동으로 실행되어 사이트 빌드와 배포가 시작됩니다.

---

### 4-1. 현재까지의 모든 변경사항 확인

```bash
git status
```

커밋되지 않은 파일이 있다면 모두 커밋합니다.

```bash
git add .
git commit -m "Chapter 3-4 작업 내용 포함 초기 사이트 구성"
```

---

### 4-2. GitHub에 Push

```bash
git push -u origin main
```

> 💡 명령어 설명:
>
> - `git push` : 내 컴퓨터의 커밋을 GitHub에 올려라
> - `u origin main` : `origin`(GitHub 저장소)의 `main` 브랜치에 올리되, 앞으로 이 연결을 기본으로 기억해라 (다음번부터는 `git push`만 입력해도 됨)

---

### 4-3. 첫 번째 Push의 인증 처리

처음 push할 때 GitHub 인증이 필요합니다. 상황에 따라 아래 중 하나가 나타납니다.

**경우 A — 브라우저 인증 창이 자동으로 열리는 경우 (Windows)**

```plain text
info: please complete authentication in your browser...
```

→ 브라우저에서 GitHub 로그인 또는 **"Authorize Git Credential Manager"** 클릭

**경우 B — 사용자 이름·비밀번호 입력 요청이 오는 경우**

```plain text
Username for 'https://github.com':
Password for 'https://...':
```

> ⚠️ **여기서 비밀번호는 GitHub 비밀번호가 아닙니다.** Personal Access Token(PAT)을 입력해야 합니다. PAT 발급 방법은 아래 FAQ Q3을 참고하세요.

**경우 C — 아무 요청 없이 바로 진행되는 경우**

이미 인증이 저장된 상태입니다. 그대로 진행합니다.

---

### 4-4. Push 성공 확인

```plain text
Enumerating objects: 35, done.
Counting objects: 100% (35/35), done.
Delta compression using up to 8 threads
Compressing objects: 100% (22/22), done.
Writing objects: 100% (35/35), 48.23 KiB | 2.84 MiB/s, done.
Total 35 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), done.
To https://github.com/내아이디/내아이디.github.io.git
 * [new branch]      main -> main
branch 'main' set up to track 'remote/origin/main'.
```

마지막 줄에 `main -> main` 이 보이면 성공입니다.

```plain text
✅ 완료 확인: git push 완료 메시지에 오류 없이 branch 정보가 표시됨
```

---

## STEP 5. GitHub Pages 배포 소스 설정하기

### 🎯 무엇을 위한 작업인가?

GitHub Pages에게 "일반 파일 배포가 아닌, GitHub Actions를 통한 자동 빌드·배포 방식을 사용하겠다"고 알립니다. 이 설정이 되어 있어야 워크플로우 파일이 올바르게 작동합니다.

---

### 5-1. 저장소 Settings 페이지 이동

브라우저에서 내 저장소 주소 접속:

```plain text
https://github.com/내아이디/내아이디.github.io
```

상단 탭 메뉴에서 **"Settings"** 클릭

- 탭 순서: Code | Issues | Pull requests | Actions | Projects | **Settings**

---

### 5-2. Pages 설정 페이지 이동

Settings 페이지 왼쪽 사이드바에서:

1. 스크롤을 내려 **"Code and automation"** 섹션 찾기
2. **"Pages"** 클릭

---

### 5-3. 배포 소스 변경

**"Build and deployment"** 섹션에서:

1. **"Source"** 드롭다운 확인
2. **"Deploy from a branch"** 로 되어 있다면 → 클릭 후 **"GitHub Actions"** 로 변경
3. 이미 **"GitHub Actions"** 로 되어 있다면 변경 불필요

변경 후 별도 저장 버튼은 없습니다. 드롭다운 선택만으로 자동 저장됩니다.

---

### 5-4. GitHub Actions 자동 실행 확인

Settings을 변경하면 GitHub이 자동으로 워크플로우를 다시 실행할 수 있습니다. 또는 STEP 4에서 push한 것이 이미 실행 중일 수 있습니다.

브라우저에서 저장소 상단 탭 **"Actions"** 클릭 → 워크플로우가 실행 중(노란 원 ●) 또는 완료(초록 체크 ✓) 상태인지 확인

```plain text
✅ 완료 확인: Settings → Pages → Source가 "GitHub Actions"로 설정됨
```

---

## STEP 6. 배포 결과 확인하기

### 🎯 무엇을 위한 작업인가?

GitHub Actions가 빌드와 배포를 완료했는지 확인하고, 실제 인터넷 주소로 사이트를 열어봅니다.

---

### 6-1. GitHub Actions 탭에서 진행 상황 확인

저장소 상단 탭 **"Actions"** 클릭

**실행 중인 경우 (노란 원 ●):**

```plain text
● 교회 홈페이지 자동 배포    main    just now
```

클릭하면 각 단계별 진행 상황을 볼 수 있습니다:

```plain text
build    ● 실행 중
  ✓ 소스 코드 내려받기
  ✓ Hugo Extended 설치
  ✓ GitHub Pages 설정 읽기
  ● Hugo 빌드 실행 ...
  ─ 빌드 결과물 업로드 (대기 중)
deploy   ─ 대기 중
```

**완료된 경우 (초록 체크 ✓):**

```plain text
✓ 교회 홈페이지 자동 배포    main    2 minutes ago
```

→ 사이트가 배포 완료된 상태입니다.

**오류가 발생한 경우 (빨간 X ✗):**

→ 클릭 후 어느 단계에서 오류가 났는지 확인합니다. FAQ Q5를 참고하세요.

---

### 6-2. 실제 사이트 접속

브라우저 주소창에 입력:

```plain text
https://내아이디.github.io
```

**예시:** `https://gracechurch.github.io`

Chapter 4에서 확인한 것과 동일한 PaperMod 디자인의 사이트가 열리면 배포 성공입니다! 🎉

> 💡 **처음 배포 후 사이트가 바로 열리지 않을 수 있습니다.** GitHub Pages는 DNS 전파에 최대 10분이 소요될 수 있습니다. Actions 탭에서 초록 체크가 확인된 후 몇 분 기다렸다가 다시 접속해보세요.

---

### 6-3. HTTPS 보안 연결 확인

브라우저 주소창 왼쪽에 **자물쇠 아이콘(🔒)** 이 보이면 HTTPS 보안 연결이 적용된 것입니다.

보이지 않는다면 Settings → Pages 페이지에서 **"Enforce HTTPS"** 체크박스를 활성화합니다.

> 💡 HTTPS 인증서 발급은 GitHub가 자동으로 처리합니다. 처음 배포 직후에는 아직 발급 중일 수 있으니 10–15분 후 다시 확인하세요.

---

### 6-4. 앞으로의 업데이트 흐름

이제부터 매주 콘텐츠를 올릴 때의 흐름은 아래와 같이 단순합니다.

```plain text
설교/소식 파일 작성
      ↓
git add .
git commit -m "2026-05-25 주보 및 설교 추가"
git push
      ↓
      (GitHub Actions가 자동으로 빌드·배포)
      ↓
2–3분 후 사이트 자동 업데이트 ✅
```

```plain text
✅ 완료 확인: https://내아이디.github.io 에서 교회 홈페이지가 열림
```

---

## 최종 확인 및 체크리스트

### 최종 폴더 구조 확인

```plain text
church-website/
│
├── .github/
│   └── workflows/
│       └── hugo.yml       ← 자동 배포 워크플로우
├── .gitignore
├── .gitmodules            ← PaperMod 서브모듈 정보
├── content/
│   └── sermons/
│       └── 첫번째설교.md
├── themes/
│   └── PaperMod/
└── hugo.toml
```

---

### ✅ 최종 체크리스트

```plain text
□ GitHub에 내아이디.github.io 저장소 생성 (Public, README 없음)
□ git remote -v 에서 origin 주소 확인
□ .github/workflows/hugo.yml 파일 생성 및 커밋
□ git push -u origin main 완료
□ GitHub 인증 처리 완료
□ Settings → Pages → Source = "GitHub Actions" 설정
□ Actions 탭에서 초록 체크(✓) 확인
□ https://내아이디.github.io 에서 사이트 접속 확인
□ 브라우저 주소창 자물쇠 아이콘(🔒) 확인
```

모든 항목이 체크되었다면 **Chapter 6(교회 정보 페이지 만들기)** 으로 이동할 준비 완료입니다! 🎉

---

## 📖 용어 해설

---

**저장소 (Repository)**

> GitHub에서 하나의 프로젝트를 담는 공간입니다. 내 컴퓨터의 `church-website` 폴더와 대응합니다. 줄여서 "레포(repo)"라고도 합니다.

**`username.github.io`**** 형식의 의미**

> GitHub는 `사용자이름.github.io` 라는 특수한 이름의 저장소에 대해 자동으로 `https://사용자이름.github.io` 주소를 부여하고 무료 호스팅을 제공합니다. 이 형식을 벗어나면 다른 주소 체계가 적용됩니다.

**`git remote add origin`**

> 로컬 Git 저장소에 원격 저장소(GitHub) 주소를 `origin`이라는 이름으로 등록하는 명령어입니다. 한 번 등록하면 이후에는 주소 전체 대신 `origin`이라고만 써도 됩니다.

**Push**

> 내 컴퓨터(로컬)의 커밋 내용을 GitHub(원격 저장소)에 업로드하는 행위입니다. Push하면 GitHub Actions가 자동으로 실행됩니다.

**GitHub Actions**

> GitHub가 제공하는 자동화 도구입니다. 특정 조건(예: push 발생)이 되면 미리 정의된 작업(Hugo 빌드, 배포 등)을 자동으로 실행합니다. `.github/workflows/` 폴더의 YAML 파일에 작업 순서를 정의합니다.

**워크플로우 (Workflow)**

> GitHub Actions에서 실행할 자동화 작업의 흐름을 정의한 파일입니다. 이 매뉴얼에서는 "push하면 Hugo 빌드 → GitHub Pages에 배포"가 워크플로우입니다.

**YAML (.yml)**

> 설정 파일을 작성하는 형식입니다. 들여쓰기로 구조를 표현하며, 들여쓰기가 하나라도 틀리면 오류가 발생합니다. GitHub Actions 워크플로우 파일은 이 형식으로 작성됩니다.

**GitHub Pages**

> GitHub 저장소 파일을 웹사이트로 공개하는 무료 호스팅 서비스입니다. `사용자이름.github.io` 주소가 자동 부여됩니다.

**배포 소스 (Deploy Source)**

> GitHub Pages가 어디서 파일을 가져와 호스팅할 것인지 결정하는 설정입니다. "Deploy from a branch"는 특정 브랜치의 파일을 직접 서빙하고, "GitHub Actions"는 워크플로우가 생성한 결과물을 서빙합니다.

**`submodules: recursive`**

> `actions/checkout` 단계에서 서브모듈(PaperMod 테마)도 함께 내려받도록 하는 옵션입니다. 이 옵션이 없으면 테마 파일이 없어서 빌드가 실패합니다.

**HTTPS 보안 연결 (SSL)**

> 웹사이트 주소가 `http://`가 아닌 `https://`로 시작하며 자물쇠 아이콘이 표시됩니다. GitHub Pages는 이 인증서를 자동으로 무료 발급합니다.

**Personal Access Token (PAT)**

> GitHub 비밀번호 대신 사용하는 인증 토큰입니다. GitHub의 보안 정책상 2021년부터 터미널에서 push할 때 비밀번호 대신 PAT를 사용해야 합니다.

---

## 💡 초보자 Tips

---

**Tip 1. 저장소 이름 오타가 가장 흔한 실수입니다**

`내아이디.github.io` 에서 `내아이디` 부분을 GitHub 사용자 이름과 정확히 일치하게 입력해야 합니다. 대소문자, 하이픈 위치까지 동일해야 합니다.

확인 방법: GitHub 로그인 후 오른쪽 상단 프로필 아이콘 클릭 → 첫 번째 줄에 표시된 이름이 정확한 사용자 이름입니다.

---

**Tip 2. Actions 탭 진행 상황 새로고침**

GitHub Actions 실행 중 화면이 자동으로 갱신되지 않을 수 있습니다. 브라우저에서 `F5` (또는 `Cmd+R`) 를 눌러 새로고침하면 최신 상태를 확인할 수 있습니다.

---

**Tip 3. Antigravity Source Control 패널 활용**

터미널 명령어 대신 Antigravity 왼쪽 사이드바의 **Source Control 아이콘(나뭇가지 모양)** 을 사용하면 버튼 클릭만으로 add, commit, push를 처리할 수 있습니다.

- `①` 변경된 파일 옆 **`+`** 클릭 → `git add`
- `②` 커밋 메시지 입력창에 메모 작성
- `③` **"커밋(Commit)"** 버튼 클릭 → `git commit`
- `④` **"변경 사항 동기화(Sync Changes)"** 버튼 클릭 → `git push`

---

**Tip 4. YAML 파일 들여쓰기 주의**

YAML 파일은 들여쓰기가 정확해야 합니다. 규칙:

- 스페이스(공백)를 사용합니다 (탭 키를 사용하면 안 됩니다)
- 이 매뉴얼의 파일 내용을 그대로 복사·붙여넣기 하면 들여쓰기 오류가 생기지 않습니다
- 직접 수정할 경우 같은 수준의 항목은 동일한 스페이스 수로 맞춥니다

---

**Tip 5. 배포 후 사이트 내용이 반영 안 된다면**

브라우저 캐시 문제일 수 있습니다. 강력 새로고침을 시도합니다:

- Windows: `Ctrl+Shift+R`
- Mac: `Cmd+Shift+R`

---

**Tip 6. Push 후 빌드 시간**

GitHub Actions는 push 후 약 1–3분이 소요됩니다. 빌드가 완료되어도 사이트 캐시 갱신에 추가로 수 분이 걸릴 수 있습니다. Actions 탭에서 초록 체크를 확인한 후 5분 정도 기다렸다 접속해보세요.

---

## 🎓 전문가의 제언

---

**제언 1. ****`workflow_dispatch`**** 옵션을 적극 활용하세요**

워크플로우 파일에 `workflow_dispatch:` 가 포함되어 있으면 GitHub Actions 탭에서 **"Run workflow"** 버튼을 눌러 push 없이도 수동으로 배포를 실행할 수 있습니다. 배포가 제대로 됐는지 테스트하거나, 사이트를 강제로 재빌드해야 할 때 유용합니다.

---

**제언 2. ****`--minify`**** 옵션의 역할**

워크플로우 파일의 Hugo 빌드 명령어에 `--minify` 옵션이 있습니다. 이 옵션은 HTML, CSS, JavaScript 파일의 불필요한 공백과 주석을 제거하여 파일 크기를 줄입니다. 사이트 로딩 속도가 빨라지는 효과가 있습니다. 로컬 미리보기(`hugo server`)에서는 사용하지 않고, 실제 배포 시에만 적용되도록 설계되어 있습니다.

---

**제언 3. 저장소를 Public으로 유지하는 이유**

GitHub Pages 무료 플랜은 Public 저장소에서만 제공됩니다. Private 저장소에서 GitHub Pages를 사용하려면 GitHub Pro($4/월) 이상이 필요합니다. 교회 홈페이지는 공개 정보가 대부분이므로 Public으로 운영해도 문제가 없습니다. 단, 저장소를 Public으로 설정하면 소스 코드(hugo.toml, 글 파일 등)도 모두 공개됩니다. 개인 정보가 담긴 파일은 저장소에 올리지 않도록 주의하세요.

---

**제언 4. ****`fetch-depth: 0`****의 의미**

`actions/checkout`에서 `fetch-depth: 0`은 전체 Git 커밋 이력을 모두 내려받으라는 옵션입니다. Hugo는 각 글의 "마지막 수정일"을 Git 커밋 이력에서 읽어오는데, 이 옵션이 없으면 수정일이 제대로 표시되지 않습니다. 저장소가 매우 커질 경우 빌드 시간이 늘어날 수 있지만, 교회 홈페이지 규모에서는 거의 차이가 없습니다.

---

**제언 5. 나중에 커스텀 도메인을 연결할 때**

`www.우리교회.org` 같은 커스텀 도메인을 연결하려면 `hugo.toml`의 `baseURL`과 GitHub Pages Settings의 "Custom domain" 설정을 함께 변경해야 합니다. 순서가 중요하므로 Chapter 12에서 자세히 다룹니다. 지금은 `github.io` 주소로 먼저 운영하다가 나중에 연결하는 것을 권장합니다.

---

## ❓ FAQ

---

**Q1. 저장소 이름을 ****`내아이디.github.io`**** 형식이 아닌 다른 이름으로 만들었어요**

이름이 다른 경우 GitHub Pages 주소가 `내아이디.github.io/저장소이름` 형식이 되어 hugo.toml의 `baseURL`과 맞지 않을 수 있습니다. 저장소를 삭제하고 올바른 이름으로 새로 만드는 것이 가장 간단합니다. 저장소 삭제는 Settings 페이지 맨 아래 "Danger Zone" → "Delete this repository"에서 할 수 있습니다.

---

**Q2. ****`git push`**** 시 "rejected" 또는 "non-fast-forward" 오류가 납니다**

저장소 생성 시 README 파일을 추가해서 GitHub 저장소에 이미 커밋이 있는 경우입니다. 해결 방법:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

pull 중 에디터가 열리면 `:q` 입력 후 엔터로 닫습니다.

---

**Q3. push 시 비밀번호를 물어보는데 GitHub 비밀번호가 안 됩니다**

GitHub는 2021년부터 터미널 push 인증에 비밀번호 대신 Personal Access Token(PAT)을 요구합니다. PAT 발급 방법:

1. GitHub 로그인 → 오른쪽 상단 프로필 아이콘 → **"Settings"**
2. 왼쪽 사이드바 맨 아래 **"Developer settings"**
3. **"Personal access tokens"** → **"Tokens (classic)"**
4. **"Generate new token (classic)"** 클릭
5. Note(메모): `church-website` 입력
6. Expiration: `No expiration` 선택 (또는 원하는 기간)
7. **`repo`**** 체크박스** 전체 체크
8. 맨 아래 **"Generate token"** 클릭
9. 생성된 토큰(ghp_로 시작하는 문자열) 복사 → 안전한 곳에 저장
10. push 시 비밀번호 입력란에 이 토큰 붙여넣기

---

**Q4. Actions 탭이 보이지 않아요**

Settings → Actions → General → Actions permissions에서 **"Allow all actions and reusable workflows"** 를 선택하고 저장하세요.

---

**Q5. Actions 탭에서 빨간 X(✗)가 표시됩니다**

빨간 X를 클릭하면 어느 단계에서 오류가 났는지 확인할 수 있습니다. 자주 발생하는 원인:

| 오류 단계 | 원인 | 해결 |
| --- | --- | --- |
| 소스 코드 내려받기 | 서브모듈 설정 문제 | `.gitmodules` 파일 확인 |
| Hugo 빌드 실행 | YAML 오타 또는 hugo.toml 오류 | 로컬에서 `hugo` 실행해 오류 확인 |
| GitHub Pages에 배포 | Pages 소스 설정 미완료 | STEP 5 다시 확인 |

---

**Q6. 사이트는 열리는데 CSS가 깨져서 못생긴 화면이 나와요**

`hugo.toml`의 `baseURL`이 실제 사이트 주소와 다를 때 발생합니다. 확인 방법:

```toml
# hugo.toml 확인
baseURL = "https://내아이디.github.io/"   ← 마지막 / 포함
```

`내아이디` 부분이 실제 GitHub 사용자 이름과 정확히 일치하는지, 끝에 슬래시(`/`)가 있는지 확인합니다. 수정 후 커밋·push하면 자동 재배포됩니다.

---

**Q7. 배포는 됐는데 사이트가 비어 있거나 "Page Not Found"가 나와요**

`content/` 폴더에 `draft: false`인 글이 하나도 없는 경우입니다. Chapter 4에서 만든 테스트 글 파일(`첫번째설교.md`)의 `draft: false` 여부를 확인하세요.

---

## 다음 챕터 예고

**Chapter 6. 교회 정보 페이지 만들기 — 방문자가 꼭 알아야 할 내용 채우기**

- Hugo의 고정 페이지(Page) vs 글(Post) 개념 차이
- 교회 소개, 예배 안내, 오시는 길, 섬기는 분들 페이지 만들기
- 카카오맵 지도 삽입 방법
- 상단 메뉴와 페이지 연결하기
- Antigravity 에이전트로 레이아웃 커스터마이징

---

*이 매뉴얼은 2026년 5월 기준으로 작성되었습니다.GitHub 인터페이스나 GitHub Actions 버전 업데이트에 따라 일부 화면 구성이 달라질 수 있습니다.*
