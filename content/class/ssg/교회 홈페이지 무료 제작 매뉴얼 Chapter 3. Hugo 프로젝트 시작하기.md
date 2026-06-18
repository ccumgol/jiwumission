---
title: "교회 홈페이지 무료 제작 매뉴얼 Chapter 3. Hugo 프로젝트 시작하기"
date: 2026-06-05T00:31:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-18
summary: "이 챕터는 Hugo 프로젝트를 초기화하고 폴더 구조, 설정 파일(hugo.toml) 수정, Git 저장소 초기화, 로컬 서버 실행 등 교회 홈페이지를 만들기 위한 기본 단계들을 상세히 안내한다."
description: "이 챕터는 Hugo 프로젝트를 초기화하고 폴더 구조, 설정 파일(hugo.toml) 수정, Git 저장소 초기화, 로컬 서버 실행 등 교회 홈페이지를 만들기 위한 기본 단계들을 상세히 안내한다."
tags: ["잎새 34호"]
image: "images/교회-홈페이지-무료-제작-매뉴얼-Chapter-3.-Hugo-프로젝트-시작하기.png"
comments: false
notion_url: https://app.notion.com/p/Chapter-3-Hugo-376091c284f680ad893ff9e993b35ff8
notion_id: 376091c2-84f6-80ad-893f-f9e993b35ff8
Categories: ["홈페이지"]
---

# 교회 홈페이지 무료 제작 매뉴얼

## Chapter 3. Hugo 프로젝트 시작하기 — 사이트의 뼈대 세우기

> **이 챕터는 약 30–40분이 소요됩니다.**
> 이 챕터를 마치면 내 컴퓨터에서 처음으로 사이트가 열리는 순간을 경험하게 됩니다.

---

> 
>
> ## Hugo 프로젝트란 무엇인가?
> 
> Hugo가 처음이라면 이렇게 생각해보세요. Hugo는 **"원고를 넣으면 완성된 책을 찍어내는 인쇄기"** 입니다.
> 
> ---
> 
> ### 🏗️ Hugo가 하는 일
> 
> 웹사이트는 결국 HTML 파일들의 모음입니다. 그런데 HTML을 직접 쓰는 건 복잡하고 반복적이에요. Hugo는 여러분이 **마크다운(Markdown)** 이라는 간단한 형식으로 글만 쓰면, 나머지 복잡한 HTML/CSS를 자동으로 만들어줍니다.
> 
> `여러분이 하는 일          Hugo가 하는 일
> ──────────────────        ──────────────────────────────
> 글쓰기 (.md 파일)   →    완성된 웹사이트 (HTML 파일들)`
> 
> ---
> 
> ### 📁 Hugo 프로젝트의 폴더 구조
> 
> Hugo 프로젝트를 처음 만들면 이런 폴더들이 생깁니다.
> 
> `내-교회-웹사이트/
> ├── hugo.toml          ← 웹사이트 설정 파일 (이름, 언어 등)
> ├── content/           ← ✍️ 글을 쓰는 곳 (여기만 자주 씁니다)
> ├── themes/            ← 🎨 웹사이트 디자인 테마
> ├── layouts/           ← 페이지 틀(레이아웃) 파일
> ├── static/            ← 사진, 로고 등 그대로 올라가는 파일
> ├── assets/            ← CSS, JS 등 가공이 필요한 파일
> └── public/            ← 🚀 Hugo가 최종 생성한 완성 파일들`
> 
> ### 초보자가 실제로 만지는 폴더는?
> 
> > 솔직히 말씀드리면, 일상적인 운영에서는 **`content/`** 폴더와 **`hugo.toml`** 파일, 그리고 **`static/`** 폴더만 알아도 충분합니다.
> 
> | 폴더 / 파일 | 역할 | 자주 쓰나요? |
> | --- | --- | --- |
> | `hugo.toml` | 사이트 이름, 언어, 테마 설정 | 처음에만 주로 편집 |
> | `content/` | 글, 공지, 소개 등 모든 내용 | ✅ 매우 자주 |
> | `static/` | 로고, 사진 파일 업로드 | ✅ 자주 |
> | `themes/` | 테마 설치 폴더 (건드리지 않음) | 거의 안 씀 |
> | `public/` | Hugo가 자동 생성 (건드리지 않음) | 건드리면 안 됨 |
> 
> ---
> 
> ### ✍️ 글 쓰는 방법 (마크다운)
> 
> `content/` 폴더 안에 `.md` 파일을 만들면 그게 곧 웹사이트의 페이지가 됩니다.
> 
> 예를 들어 `content/about.md` 파일을 만들고 이렇게 쓰면:
> 
> markdown
> 
> ```plain text
> --
> title: "교회 소개"
> date: 2026-06-09
> --
> 지우교회는 2010년에 설립된 한인 교회입니다.
> ## 예배 시간 
>  주일예배: 오전 11시
>  수요예배: 오후 7시
> ```
> 
> Hugo가 자동으로 이 파일을 아름다운 웹페이지로 변환해줍니다.
> 
> 맨 위의 `---` 사이 부분은 **프론트매터(Front Matter)** 라고 부르며, 제목이나 날짜 같은 **페이지 정보**를 담습니다.
> 
> ---
> 
> ### 🖥️ Hugo의 작동 흐름
> 
> `1. hugo server 실행
>       ↓
> 2. content/ 폴더의 .md 파일들을 읽음
>       ↓
> 3. themes/ 의 디자인 틀과 결합
>       ↓
> 4. 완성된 HTML 웹페이지 생성
>       ↓
> 5. 브라우저에서 미리보기 (localhost:1313)`
> 
> 실제로 인터넷에 올릴 때는 `hugo` 명령어 하나만 치면 `public/` 폴더에 완성된 웹사이트 파일이 전부 만들어집니다. 이 파일들을 GitHub Pages에 올리는 것이 바로 우리 프로젝트의 배포 방식입니다.
> 
> ---
> 
> ### 🎨 테마란?
> 
> 테마는 **웹사이트의 외관 디자인 전체**를 담은 패키지입니다. 지우교회 프로젝트에서는 **PaperMod** 테마를 사용하고 있는데, 이 테마 하나만 설치하면 깔끔하고 빠른 웹사이트 디자인이 바로 적용됩니다.
> 
> 테마를 바꾸면 내용(글)은 그대로 두고 디자인만 완전히 바꿀 수 있습니다. 마치 스마트폰 케이스를 바꾸는 것과 같습니다.
> 
> ---
> 
> ### 💡 핵심 요약
> 
> | 개념 | 쉬운 설명 |
> | --- | --- |
> | Hugo | 마크다운 글 → 웹사이트로 변환해주는 도구 |
> | `content/` | 교회 글/공지를 쓰는 폴더 |
> | `hugo.toml` | 웹사이트의 기본 설정 파일 |
> | 테마(Theme) | 웹사이트 디자인 패키지 |
> | `hugo server` | 내 컴퓨터에서 미리보기 실행 |
> | `hugo` | 최종 웹사이트 파일 생성 |
> | `public/` | 완성된 파일이 모이는 곳 (GitHub에 올라가는 것) |

## 목차

- [이 챕터에서 할 일](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9D%B4-%EC%B1%95%ED%84%B0%EC%97%90%EC%84%9C-%ED%95%A0-%EC%9D%BC)
- [STEP 1. 작업 폴더 만들기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-1-%EC%9E%91%EC%97%85-%ED%8F%B4%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [STEP 2. Hugo 프로젝트 초기화](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-2-hugo-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%B4%88%EA%B8%B0%ED%99%94)
- [STEP 3. 폴더 구조 이해하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-3-%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
- [STEP 4. 사이트 기본 정보 설정하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-4-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EA%B8%B0%EB%B3%B8-%EC%A0%95%EB%B3%B4-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0)
- [STEP 5. Git 저장소 초기화하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-5-git-%EC%A0%80%EC%9E%A5%EC%86%8C-%EC%B4%88%EA%B8%B0%ED%99%94%ED%95%98%EA%B8%B0)
- [STEP 6. 로컬 미리보기 실행하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-6-%EB%A1%9C%EC%BB%AC-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0-%EC%8B%A4%ED%96%89%ED%95%98%EA%B8%B0)
- [최종 확인 및 체크리스트](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B5%9C%EC%A2%85-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8)
- [용어 해설](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9A%A9%EC%96%B4-%ED%95%B4%EC%84%A4)
- [초보자 Tips](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B4%88%EB%B3%B4%EC%9E%90-tips)
- [전문가의 제언](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%A0%84%EB%AC%B8%EA%B0%80%EC%9D%98-%EC%A0%9C%EC%96%B8)
- [FAQ](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#faq)

---

## 이 챕터에서 할 일

| 단계 | 작업 | 소요 시간 |
| --- | --- | --- |
| STEP 1 | 작업 폴더 만들기 | 2분 |
| STEP 2 | Hugo 프로젝트 초기화 | 3분 |
| STEP 3 | 폴더 구조 이해하기 | 5분 |
| STEP 4 | 사이트 기본 정보 설정 | 10분 |
| STEP 5 | Git 저장소 초기화 | 5분 |
| STEP 6 | 로컬 미리보기 실행 | 5분 |

### 🏁 이 챕터의 체크포인트

> 브라우저에서 `http://localhost:1313` 주소로 내 사이트가 열린다.

---

## STEP 1. 작업 폴더 만들기

### 🎯 무엇을 위한 작업인가?

교회 홈페이지의 모든 파일이 저장될 폴더를 만듭니다. 앞으로 이 폴더가 작업의 중심이 됩니다. 나중에 GitHub에 올라가는 것도, AI가 수정하는 것도 모두 이 폴더 안의 파일들입니다.

---

### 1-1. VS Code 열기

Chapter 2에서 설치한 VS Code를 실행합니다.

- **Windows:** 시작 메뉴(`⊞`) → `Visual Studio Code` 검색 → 실행
- **Mac:** Launchpad 또는 Spotlight(`Cmd+Space`) → `Visual Studio Code` 검색 → 실행

---

### 1-2. VS Code 내장 터미널 열기

VS Code 상단 메뉴에서 **"보기" → "터미널"** 클릭

- 단축키: `Ctrl+`` (Windows / Mac 공통, 숫자 `1` 왼쪽 키)

화면 아래쪽에 터미널 패널이 열립니다.

---

### 1-3. 작업 폴더 생성

터미널에서 아래 명령어를 실행합니다.

**🪟 Windows:**

```powershell
mkdir C:\church-website
```

**🍎 Mac:**

```bash
mkdir ~/church-website
```

> 💡 `~` 기호는 Mac에서 내 홈 폴더(`/Users/사용자이름/`)를 뜻하는 단축 표기입니다.
> Windows의 `C:\Users\사용자이름\` 과 동일한 역할입니다.

---

### 1-4. 작업 폴더로 이동

생성한 폴더 안으로 이동합니다.

**🪟 Windows:**

```powershell
cd C:\church-website
```

**🍎 Mac:**

```bash
cd ~/church-website
```

터미널 프롬프트가 아래처럼 바뀌면 성공입니다.

```plain text
# Windows 예시
PS C:\church-website>

# Mac 예시
사용자이름@MacBook church-website %
```

---

### 1-5. VS Code에서 폴더 열기

지금 이동한 폴더를 VS Code의 작업 공간으로 지정합니다.

터미널에서 아래 명령어 실행:

```bash
code .
```

> 💡 `code .` 는 "현재 폴더를 VS Code로 열어라"는 명령입니다. 점(`.`)이 "현재 위치"를 의미합니다.

VS Code 왼쪽 **탐색기 패널**에 `CHURCH-WEBSITE` 폴더가 나타나면 성공입니다.

> ⚠️ Mac에서 `code` 명령어가 작동하지 않으면 Chapter 2 STEP 3-4(shell command 등록)를 다시 실행하세요.

```plain text
✅ 완료 확인: VS Code 탐색기에 church-website 폴더가 표시됨
```

---

## STEP 2. Hugo 프로젝트 초기화

### 🎯 무엇을 위한 작업인가?

Hugo가 홈페이지를 만드는 데 필요한 기본 폴더 구조와 설정 파일을 자동으로 생성합니다. 이 명령어 한 줄이 빈 폴더를 "Hugo가 이해할 수 있는 프로젝트"로 바꿉니다. 건물로 비유하면 설계 도면과 뼈대를 세우는 작업입니다.

---

### 2-1. Hugo 프로젝트 생성 명령어 실행

VS Code 내장 터미널에서 (현재 `church-website` 폴더 안에 있는 상태):

```bash
hugo new site . --force
```

> 💡 명령어 설명:
>
> - `hugo new site` : Hugo 프로젝트를 새로 만들어라
> - `.` : 현재 폴더에
> - `-force` : 폴더가 비어 있지 않아도 강제로 진행해라

**성공 시 출력 메시지:**

```plain text
Congratulations! Your new Hugo site was created in C:\church-website

Just a few more steps...

1. Change the current directory to C:\church-website.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>\<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```

이 메시지가 그대로 나오지 않아도, VS Code 왼쪽 탐색기에 여러 폴더가 새로 생겼다면 성공입니다.

```plain text
✅ 완료 확인: VS Code 탐색기에 archetypes, content, layouts 등 여러 폴더가 생김
```

---

## STEP 3. 폴더 구조 이해하기

### 🎯 무엇을 위한 작업인가?

Hugo가 만든 폴더들이 각각 어떤 역할을 하는지 이해합니다. 당장 모두 외울 필요는 없습니다. 하지만 "내가 설교 파일을 어디에 넣어야 하는가", "이미지는 어디에 두는가"를 알아야 이후 작업에서 헤매지 않습니다.

---

### 3-1. 생성된 폴더 구조 확인

VS Code 왼쪽 **탐색기 패널**을 보면 아래와 같은 구조가 보입니다.

```plain text
church-website/
│
├── 📁 archetypes/       새 글을 만들 때 사용하는 기본 양식
├── 📁 assets/           CSS, JavaScript, 이미지 등 가공이 필요한 파일
├── 📁 content/          ★ 설교, 소식 등 모든 글 파일이 들어가는 곳
├── 📁 data/             사이트에서 사용하는 데이터 파일 (JSON, YAML 등)
├── 📁 i18n/             다국어 지원 번역 파일
├── 📁 layouts/          페이지의 HTML 구조를 정의하는 파일
├── 📁 static/           ★ 이미지, PDF 등 그대로 사용하는 파일
├── 📁 themes/           ★ 디자인 테마 파일
└── 📄 hugo.toml         ★ 사이트 전체 설정 파일
```

---

### 3-2. 자주 사용하는 폴더 4가지

많은 폴더 중에서 실제로 자주 들어가게 되는 곳은 4개입니다.

---

**📁 content/ — 가장 중요한 폴더**

설교, 주보, 교회 소식, 교회 소개 등 **모든 글 파일**이 여기에 들어갑니다. 매주 새 설교를 올릴 때 이 폴더 안에 파일을 만들게 됩니다. Hugo는 이 폴더의 구조를 그대로 웹사이트 메뉴 구조로 만듭니다.

```plain text
content/
├── sermons/          설교 글 파일들
│   ├── 20260525.md
│   └── 20260601.md
├── news/             교회 소식 글 파일들
│   └── 20260525.md
└── about.md          교회 소개 페이지
```

---

**📁 static/ — 파일 그대로 올라가는 폴더**

이미지, PDF, 폰트 파일처럼 Hugo가 건드리지 않고 **있는 그대로** 사이트에 올리는 파일들을 넣는 곳입니다. 교회 로고나 사진을 올릴 때 여기에 넣습니다.

```plain text
static/
├── images/
│   ├── logo.png       교회 로고
│   └── banner.jpg     홈 화면 배경 사진
└── files/
    └── 주일학교안내.pdf
```

---

**📁 themes/ — 디자인 테마 폴더**

사이트의 전체적인 디자인(색상, 글꼴, 레이아웃)을 담당하는 테마가 설치되는 폴더입니다. Chapter 4에서 이 폴더 안에 테마를 설치할 예정입니다. 직접 수정할 일은 거의 없습니다.

---

**📄 hugo.toml — 사이트 설정 파일**

사이트 이름, 언어, 테마 지정 등 사이트 전체에 적용되는 설정을 담고 있는 파일입니다. 처음 한 번 잘 설정해두면 이후에는 거의 건드릴 일이 없습니다. 바로 다음 STEP에서 이 파일을 수정합니다.

> 💡 **나머지 폴더들은?**`archetypes/`, `data/`, `i18n/`, `layouts/`는 당분간 열어볼 필요가 없습니다. 기능이 더 필요해질 때 Antigravity CLI에게 맡기면 됩니다.

```plain text
✅ 완료 확인: content, static, themes 폴더와 hugo.toml 파일의 역할을 파악함
```

---

## STEP 4. 사이트 기본 정보 설정하기

### 🎯 무엇을 위한 작업인가?

`hugo.toml` 파일에 교회 이름, 언어, 시간대 등 사이트의 기본 정보를 입력합니다. 이 파일은 Hugo가 사이트를 만들 때 가장 먼저 읽는 설정 파일입니다. 올바르게 설정해두어야 사이트 제목이 제대로 표시되고, 글 날짜가 한국 시간으로 기록됩니다.

---

### 4-1. hugo.toml 파일 열기

VS Code 왼쪽 탐색기에서 `hugo.toml` 파일 클릭 → 오른쪽 편집 화면에 열림

처음 열었을 때 내용:

```toml
baseURL = 'https://example.org/'
languageCode = 'en-us'
title = 'My New Hugo Site'
```

이 세 줄이 전부입니다. 지금부터 이 내용을 교회에 맞게 수정하겠습니다.

---

### 4-2. 기본 정보 수정

아래 내용으로 `hugo.toml` 전체를 교체합니다. 교회 이름과 GitHub 사용자 이름만 본인 것으로 바꾸면 됩니다.

```toml
# ─────────────────────────────────────────
#  사이트 기본 설정
# ─────────────────────────────────────────

# 배포 후 사이트의 실제 주소 (GitHub 사용자 이름으로 변경)
baseURL = "https://내아이디.github.io/"

# 사이트 언어 설정
languageCode = "ko"
defaultContentLanguage = "ko"

# 브라우저 탭과 검색 결과에 표시될 사이트 이름
title = "○○교회"

# 한국 시간대 (글 날짜가 한국 시간으로 기록됨)
timeZone = "Asia/Seoul"

# 페이지 주소 형식 설정 (날짜/제목 형식)
[permalinks]
  [permalinks.page]
    posts = '/posts/:year/:month/:slug/'
```

> ⚠️ 반드시 바꿔야 할 부분:
>
> - `내아이디` → Chapter 2에서 기록해둔 GitHub 사용자 이름 (예: `gracechurch`)
> - `○○교회` → 실제 교회 이름 (예: `은혜교회`, `기쁨교회`)

---

### 4-3. 파일 저장

수정이 끝나면 파일을 저장합니다.

- **Windows / Mac 공통:** `Ctrl+S` (Windows) 또는 `Cmd+S` (Mac)
- VS Code 탭의 파일 이름 옆에 있던 흰 점(●)이 사라지면 저장 완료

---

### 4-4. 설정 내용 확인

VS Code 내장 터미널에서 아래 명령어로 설정이 제대로 적용되었는지 확인합니다.

```bash
hugo config | grep title
```

**성공 시 출력:**

```plain text
title = ○○교회
```

> 💡 `hugo config` 명령어는 Hugo가 현재 읽고 있는 모든 설정을 출력합니다. `| grep title` 은 그 중에서 "title"이 포함된 줄만 걸러서 보여달라는 뜻입니다.

```plain text
✅ 완료 확인: hugo config 실행 시 교회 이름이 출력됨
```

---

## STEP 5. Git 저장소 초기화하기

### 🎯 무엇을 위한 작업인가?

지금까지 만든 파일들을 Git의 관리 아래 두는 작업입니다. 이 시점부터 모든 변경 이력이 기록되기 시작합니다. 실수로 파일을 지우거나 잘못 수정해도 언제든지 이 시점으로 되돌아올 수 있습니다. 또한 이후 GitHub에 업로드할 때도 이 초기화가 선행되어야 합니다.

---

### 5-1. Git 저장소 초기화

VS Code 내장 터미널에서:

```bash
git init
```

**성공 시 출력:**

```plain text
Initialized empty Git repository in C:/church-website/.git/
```

> 💡 `.git` 폴더가 숨김 파일로 생성됩니다. VS Code 탐색기에서 보이지 않아도 정상입니다. 이 폴더가 Git의 "기록 창고"입니다.

---

### 5-2. 기본 브랜치 이름 설정

Git의 기본 브랜치 이름을 `main`으로 통일합니다. GitHub의 기본값과 맞추기 위해 필요합니다.

```bash
git branch -M main
```

출력이 없으면 성공입니다.

---

### 5-3. .gitignore 파일 만들기

Git에 올리지 않아야 할 파일 목록을 지정하는 `.gitignore` 파일을 만듭니다. Hugo가 빌드할 때 생성하는 임시 파일들은 GitHub에 올릴 필요가 없습니다.

VS Code 내장 터미널에서:

**🪟 Windows:**

```powershell
New-Item .gitignore -ItemType File
```

**🍎 Mac:**

```bash
touch .gitignore
```

생성된 `.gitignore` 파일을 VS Code 탐색기에서 클릭해 열고, 아래 내용을 붙여넣은 뒤 저장합니다.

```plain text
# Hugo 빌드 결과물 (배포 시 자동 생성되므로 Git에 포함 불필요)
/public/
/resources/
/.hugo_build.lock

# 운영체제 자동 생성 파일
.DS_Store          # Mac
Thumbs.db          # Windows

# 에디터 설정 파일
.vscode/settings.json
```

---

### 5-4. 첫 번째 커밋

지금까지의 작업 내용을 Git에 저장(커밋)합니다.

```bash
git add .
```

```bash
git commit -m "Hugo 프로젝트 초기 설정"
```

**성공 시 출력 예시:**

```plain text
[main (root-commit) a1b2c3d] Hugo 프로젝트 초기 설정
 8 files changed, 18 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 hugo.toml
 ...
```

> 💡 `git add .` 는 "변경된 모든 파일을 커밋 준비 상태로 올려라"는 명령입니다.
> `git commit -m "메모"` 는 "이 메모와 함께 지금 상태를 저장해라"는 명령입니다.

```plain text
✅ 완료 확인: git commit 실행 시 "root-commit" 메시지와 함께 파일 목록 출력됨
```

---

## STEP 6. 로컬 미리보기 실행하기

### 🎯 무엇을 위한 작업인가?

GitHub에 올리기 전에 내 컴퓨터에서 먼저 사이트를 확인하는 단계입니다. Hugo의 로컬 서버를 실행하면 파일을 수정할 때마다 브라우저에서 실시간으로 결과를 확인할 수 있습니다. 인터넷 없이도 작동하며, GitHub에 올려야만 결과를 볼 수 있는 불편함을 없애줍니다.

---

### 6-1. Hugo 로컬 서버 실행

VS Code 내장 터미널에서:

```bash
hugo server -D
```

> 💡 명령어 설명:
>
> - `hugo server` : Hugo의 내장 웹 서버를 시작해라
> - `D` : 아직 발행 전(`draft: true`) 상태의 글도 포함해서 보여줘라

**성공 시 출력:**

```plain text
Watching for changes in C:\church-website\{archetypes,assets,content,data,i18n,layouts,static,themes}
Watching for config changes in C:\church-website\hugo.toml
Start building sites …

                   | KO
-------------------+-----
  Pages            |  3
  Paginator pages  |  0
  Non-page files   |  0
  Static files     |  0
  Processed images |  0
  Aliases          |  0
  Cleaned          |  0

Built in 12 ms
Environment: "development"
Serving pages from disk
Running in Fast Render Mode. For full rebuilds on change: hugo server --disableFastRender
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

마지막 줄에 **`http://localhost:1313/`** 이 표시되면 성공입니다.

---

### 6-2. 브라우저에서 사이트 열기

브라우저(크롬, 엣지, 사파리 등)를 열고 주소창에 입력:

```plain text
http://localhost:1313
```

아직 테마를 설치하지 않았기 때문에 화면이 거의 비어 있거나 텍스트만 보이는 것이 **정상**입니다. Chapter 4에서 테마를 설치하면 멋진 디자인이 적용됩니다.

> 💡 빈 화면이나 "Page Not Found" 메시지가 보여도 서버가 실행 중이라면 성공입니다. 콘텐츠와 테마가 없기 때문에 나타나는 자연스러운 현상입니다.

---

### 6-3. 실시간 반영 확인 (선택)

Hugo 로컬 서버의 강력한 기능을 체험해 봅니다.

1. VS Code에서 `hugo.toml` 파일 열기
2. `title` 값을 임시로 다른 이름으로 변경 후 저장
3. 브라우저 탭 확인 → **자동으로 새로고침**되며 변경된 제목이 반영됨

이처럼 파일을 저장할 때마다 브라우저가 자동으로 업데이트됩니다. 확인 후 원래 교회 이름으로 되돌려 저장하세요.

---

### 6-4. 서버 종료 방법

작업을 마치거나 다른 명령어를 실행하려면 서버를 종료합니다.

터미널에서 `Ctrl+C` 누르기

```plain text
^C
```

프롬프트(`PS C:\church-website>`)가 다시 나타나면 서버가 종료된 것입니다.

> ⚠️ 서버가 실행 중인 동안에는 같은 터미널에서 다른 명령어를 입력할 수 없습니다. 새 명령어가 필요하면 서버를 종료하거나, VS Code 터미널 패널 오른쪽 상단의 **`+`** 아이콘을 눌러 새 터미널 탭을 열어서 사용하세요.

```plain text
✅ 완료 확인: http://localhost:1313 에서 페이지가 열림 (내용 없어도 오류 없으면 성공)
```

---

## 최종 확인 및 체크리스트

### 최종 폴더 구조 확인

이 챕터를 마쳤을 때 `church-website` 폴더는 아래와 같은 구조여야 합니다.

```plain text
church-website/
│
├── .git/              ← Git 저장소 (숨김 폴더, 자동 생성)
├── .gitignore         ← Git 제외 파일 목록 (직접 생성)
├── archetypes/
│   └── default.md
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
├── themes/
└── hugo.toml          ← 교회 정보로 수정 완료
```

---

### ✅ 최종 체크리스트

```plain text
□ VS Code에서 church-website 폴더가 열림
□ hugo new site . --force 실행 후 폴더들이 생성됨
□ hugo.toml 에 교회 이름과 baseURL(GitHub 사용자 이름) 수정 완료
□ hugo.toml 에 timeZone = "Asia/Seoul" 설정됨
□ .gitignore 파일 생성 및 내용 입력 완료
□ git init 및 첫 커밋 완료
□ hugo server -D 실행 후 http://localhost:1313 접속됨
```

모든 항목이 체크되었다면 **Chapter 4(테마 선택과 적용)** 로 이동할 준비 완료입니다! 🎉

---

## 📖 용어 해설

---

**`hugo new site`**

> Hugo 프로젝트를 처음 시작할 때 사용하는 명령어입니다. 사이트를 만드는 데 필요한 기본 폴더 구조와 설정 파일을 자동으로 생성합니다. 집 짓기로 비유하면 건물의 기초 공사와 뼈대를 세우는 작업입니다.

**hugo.toml**

> Hugo 사이트 전체에 적용되는 설정 파일입니다. 사이트 이름, 언어, 시간대, 테마 등을 여기서 지정합니다. TOML(Tom's Obvious, Minimal Language) 형식으로 작성되며, `키 = "값"` 형태의 간단한 문법을 사용합니다.

**TOML**

> 설정 파일을 작성하는 형식 중 하나입니다. `이름 = "값"` 처럼 읽기 쉽게 설계되어 있습니다. `hugo.toml`의 확장자가 바로 이 형식을 의미합니다. JSON, YAML과 비슷한 역할을 하지만 초보자도 읽기 쉬운 것이 장점입니다.

**baseURL**

> Hugo가 생성하는 모든 페이지 링크의 기준이 되는 주소입니다. 나중에 GitHub Pages에 배포하면 `https://사용자이름.github.io/` 형태가 됩니다. 이 값이 잘못되면 이미지나 링크가 깨질 수 있으므로 정확하게 입력해야 합니다.

**`hugo server`**

> Hugo에 내장된 개발용 웹 서버를 실행하는 명령어입니다. 파일을 수정할 때마다 자동으로 재빌드하고 브라우저를 새로고침합니다. 이 서버는 내 컴퓨터에서만 작동하며 외부에서는 접속할 수 없습니다.

**localhost:1313**

> Hugo 로컬 서버가 실행되는 주소입니다. `localhost`는 "내 컴퓨터"를 의미하고, `1313`은 Hugo가 기본으로 사용하는 포트 번호입니다. 인터넷 주소가 아니므로 내 컴퓨터에서만 열립니다.

- **`D`**** 옵션 (hugo server -D)**

> Draft(초안) 상태의 글도 미리보기에 포함하라는 옵션입니다. 글 파일 맨 위에 `draft: true`가 있으면 발행되지 않은 상태이지만, `-D` 옵션으로 서버를 실행하면 볼 수 있습니다.

**Git 저장소 초기화 (****`git init`****)**

> 현재 폴더를 Git으로 관리하도록 설정하는 명령어입니다. 실행하면 `.git`이라는 숨김 폴더가 생성되고, 이 시점부터 모든 파일 변경 이력이 기록되기 시작합니다.

**`.gitignore`**

> Git이 무시해야 할 파일이나 폴더 목록을 적어두는 파일입니다. Hugo의 `/public/` 폴더처럼 매번 새로 생성되는 파일은 GitHub에 올릴 필요가 없으므로 이 파일에 등록합니다.

**커밋 메시지 (****`git commit -m "..."`**** )**

> 커밋할 때 변경 내용을 설명하는 짧은 메모입니다. 나중에 이력을 볼 때 "이 시점에 무엇을 했는가"를 알 수 있게 해줍니다. 한국어로 써도 됩니다.

**브랜치 (Branch)**

> Git에서 작업의 흐름을 나눈 줄기입니다. 기본 브랜치를 `main`이라고 부릅니다. 지금 단계에서는 `main` 하나만 사용합니다.

**`~`**** (틸드 기호)**

> Mac 터미널에서 홈 폴더(`/Users/사용자이름/`)를 가리키는 단축 표기입니다. `~/church-website`는 `/Users/홍길동/church-website`와 같은 의미입니다.

---

## 💡 초보자 Tips

---

**Tip 1. ****`cd`**** 명령어로 이동 확인하기**

터미널에서 현재 내가 어느 폴더에 있는지 항상 확인하세요. 엉뚱한 폴더에서 명령어를 실행하면 예상치 못한 결과가 나옵니다.

```bash
# 현재 위치 확인 (Windows)
pwd
# 또는
cd

# 현재 위치 확인 (Mac)
pwd
```

올바른 상태:

```plain text
C:\church-website     ← Windows
/Users/홍길동/church-website   ← Mac
```

---

**Tip 2. VS Code 탐색기로 파일을 편하게 클릭**

터미널 명령어를 쓰지 않아도 VS Code 왼쪽 탐색기에서 파일을 클릭하면 바로 열립니다. `hugo.toml`이나 `.gitignore` 파일을 수정할 때 탐색기에서 클릭해서 여는 것이 훨씬 편합니다.

탐색기가 보이지 않으면:

- VS Code 왼쪽 사이드바 맨 위 **종이 두 장 겹친 아이콘** 클릭
- 또는 단축키: `Ctrl+Shift+E` (Windows) / `Cmd+Shift+E` (Mac)

---

**Tip 3. 서버 실행 중 새 터미널 탭 열기**

`hugo server`가 실행 중인 터미널에서는 다른 명령어를 입력할 수 없습니다. 새 명령어가 필요하면:

1. VS Code 터미널 패널 오른쪽 상단 **`+`** 아이콘 클릭 → 새 터미널 탭 추가
2. 서버는 첫 번째 탭에서 계속 돌아가고, 새 탭에서 다른 명령어 실행 가능

---

**Tip 4. hugo.toml 수정 시 들여쓰기(띄어쓰기)에 주의**

TOML 형식은 들여쓰기와 따옴표에 민감합니다. 아래 규칙만 지키면 됩니다.

```toml
# 올바른 예
title = "은혜교회"           ← 큰따옴표 사용
timeZone = "Asia/Seoul"

# 잘못된 예
title = 은혜교회             ← 따옴표 없음 → 오류
title = '은혜교회'           ← 작은따옴표도 가능하지만 통일 권장
```

---

**Tip 5. 브라우저 주소창에 주소 입력할 때**

`http://localhost:1313` 에서 `http://`를 포함해서 입력해야 합니다. `localhost:1313`만 입력해도 대부분의 브라우저에서 자동으로 이동하지만, 안 되는 경우 전체 주소를 입력하세요.

---

**Tip 6. 커밋 메시지는 한국어로 써도 됩니다**

```bash
git commit -m "교회 이름과 기본 설정 완료"
git commit -m "hugo.toml 시간대 설정 수정"
```

나중에 이력을 볼 때 내가 알아볼 수 있는 말로 쓰는 것이 가장 중요합니다. 영어로 쓸 필요 없습니다.

---

**Tip 7. 파일 저장을 잊지 마세요**

VS Code에서 파일을 수정한 뒤 저장하지 않으면 Hugo가 변경을 감지하지 못합니다. 파일 탭 이름 옆에 **●(흰 점)**이 보이면 저장되지 않은 상태입니다.

- Windows: `Ctrl+S`
- Mac: `Cmd+S`
- 전체 저장: `Ctrl+K S` (Windows) / `Cmd+Option+S` (Mac)

---

## 🎓 전문가의 제언

---

**제언 1. ****`hugo.toml`**** vs ****`hugo.yaml`**** — 어떤 형식을 써야 할까?**

Hugo는 `toml`, `yaml`, `json` 세 가지 설정 파일 형식을 지원합니다. 이 매뉴얼에서는 `hugo.toml`을 사용하는데, 인터넷 검색을 하면 `config.yaml`로 설명된 글도 많아 혼란스러울 수 있습니다.

결론: **어느 것을 써도 기능 차이는 없습니다.** 단, 사용하는 테마가 예시 설정을 특정 형식으로 제공하는 경우, 그 형식을 따르는 것이 헷갈리지 않습니다. 이 매뉴얼 전체에서는 `hugo.toml`로 통일합니다.

---

**제언 2. ****`.gitignore`****에 ****`/public/`**** 을 반드시 포함하는 이유**

`/public/` 폴더는 `hugo build` 명령어 실행 시 자동으로 생성되는 최종 결과물입니다. 이 폴더를 GitHub에 올리면 두 가지 문제가 생깁니다.

첫째, GitHub Actions를 통한 자동 배포와 충돌이 발생합니다. 자동 배포는 서버에서 직접 빌드하기 때문에 로컬에서 미리 빌드한 파일이 있으면 충돌합니다.

둘째, 불필요하게 저장소 용량을 차지합니다. 소스 파일(content, layouts 등)만 있으면 언제든 다시 빌드할 수 있으므로 결과물을 보관할 필요가 없습니다.

---

**제언 3. ****`git commit`**** 주기를 어떻게 잡을까?**

처음에는 "작업이 잘 됐다" 싶을 때 커밋하는 것으로 충분합니다. 하지만 점차 아래 기준을 익혀두면 좋습니다.

- **기능 하나를 완성했을 때**: "설교 아카이브 페이지 추가"
- **설정을 변경했을 때**: "메뉴 구조 수정"
- **GitHub에 올리기 전**: push하기 전 반드시 커밋

반대로 피해야 할 것은 "모든 작업이 끝날 때까지 커밋 안 하기"입니다. 문제가 생겼을 때 되돌아갈 지점이 너무 멀어집니다.

---

**제언 4. ****`hugo server`**** 실행 시 포트가 이미 사용 중이라는 오류가 날 수 있습니다**

Hugo는 기본으로 `1313` 포트를 사용합니다. 같은 포트를 다른 프로그램이 이미 쓰고 있다면 오류가 납니다. 이 경우 다른 포트로 실행합니다.

```bash
hugo server -D -p 1314
```

브라우저에서 `http://localhost:1314` 로 접속하면 됩니다.

---

**제언 5. ****`timeZone`**** 설정의 중요성**

`timeZone = "Asia/Seoul"` 설정을 빠뜨리면 글의 발행 날짜가 UTC(협정 세계시) 기준으로 처리됩니다. 한국은 UTC+9 이므로, 예를 들어 새벽 1시 이전에 작성한 글은 전날 날짜로 기록될 수 있습니다. 처음 설정할 때 반드시 포함하세요.

---

## ❓ FAQ

---

**Q1. ****`hugo new site . --force`**** 실행 시 오류가 났어요**

가장 흔한 원인은 터미널의 현재 위치가 `church-website` 폴더가 아닌 경우입니다.

```bash
# 현재 위치 확인
pwd

# 올바른 경로가 아니면 이동
cd C:\church-website      # Windows
cd ~/church-website       # Mac
```

위치가 맞는데도 오류가 난다면, `hugo version`을 실행해서 Hugo가 설치되어 있는지 먼저 확인하세요.

---

**Q2. ****`http://localhost:1313`**** 에서 "사이트에 연결할 수 없음" 오류가 나요**

Hugo 서버가 실행 중이지 않은 상태입니다. 터미널에서 `hugo server -D`를 먼저 실행했는지 확인하세요. 서버가 실행 중이면 터미널에 `Press Ctrl+C to stop`이라는 메시지가 보여야 합니다.

---

**Q3. 로컬 미리보기가 비어 있거나 제목만 보여요**

정상입니다. 아직 테마를 설치하지 않았고 콘텐츠도 없기 때문입니다. Chapter 4에서 테마를 설치하면 디자인이 나타납니다.

---

**Q4. ****`hugo.toml`**** 에서 ****`baseURL`****을 지금 꼭 설정해야 하나요?**

로컬 미리보기에는 영향이 없습니다. 하지만 나중에 GitHub Pages에 배포할 때 이 값이 틀리면 이미지나 링크가 깨집니다. 지금 Chapter 2에서 기록해둔 GitHub 사용자 이름으로 정확히 입력해두는 것이 좋습니다.

---

**Q5. VS Code에서 ****`.gitignore`**** 파일이 탐색기에 보이지 않아요**

`.`으로 시작하는 파일은 숨김 파일입니다. VS Code는 기본적으로 `.gitignore`는 보여주지만 `.git` 폴더는 숨깁니다. `.gitignore`가 보이지 않는다면:

VS Code 메뉴 **"파일" → "기본 설정" → "설정"** → 검색창에 `files.exclude` 검색 → `.gitignore` 항목이 제외 목록에 있으면 삭제

또는 터미널에서 파일이 존재하는지 확인:

```bash
# Windows
dir /a .gitignore

# Mac
ls -la .gitignore
```

---

**Q6. ****`git init`****을 했는데 VS Code 왼쪽 사이드바에 변화가 생겼어요. 정상인가요?**

정상입니다. `git init` 실행 후 VS Code는 Git 저장소를 자동으로 감지하여 왼쪽 사이드바에 **소스 제어 아이콘(나뭇가지 모양)** 이 활성화됩니다. 파일 탐색기에서도 파일 이름 옆에 `U`(Untracked, 아직 커밋 안 됨), `M`(Modified, 수정됨) 같은 표시가 붙습니다. 이것은 VS Code가 Git 상태를 시각적으로 보여주는 기능입니다.

---

**Q7. 커밋할 때 "Please tell me who you are" 오류가 나요**

Git 초기 설정(이름과 이메일)이 완료되지 않은 상태입니다. Chapter 2 STEP 3-4를 다시 실행하세요.

```bash
git config --global user.name "홍길동"
git config --global user.email "my-email@gmail.com"
```

---

**Q8. Mac에서 ****`code .`**** 명령어가 없다고 나와요**

Chapter 2 STEP 3-4의 shell command 등록을 다시 실행해야 합니다.

1. VS Code 실행
2. `Cmd+Shift+P` 누르기
3. `shell command` 입력
4. **"Shell Command: Install 'code' command in PATH"** 클릭
5. 터미널 새 탭에서 `code .` 재시도

---

## 다음 챕터 예고

**Chapter 4. 테마 선택과 적용 — 사이트에 디자인 입히기**

- Hugo 테마가 무엇인지, 어떻게 고르는지
- 교회 홈페이지에 어울리는 테마 비교 및 추천
- 테마 다운로드 및 프로젝트에 적용하기
- `hugo.toml` 에 테마 등록하고 기본 설정하기
- 로컬 미리보기에서 디자인이 적용된 사이트 확인

---

*이 매뉴얼은 2026년 5월 기준으로 작성되었습니다.Hugo 버전 업데이트에 따라 일부 명령어나 출력 메시지가 달라질 수 있습니다.*
