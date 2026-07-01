---
title: "교회 홈페이지 무료 제작 매뉴얼 Chapter 4. 테마 선택과 적용"
date: 2026-06-06T16:00:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-18
summary: "이 챕터는 교회 홈페이지에 적합한 Hugo 테마(PaperMod)를 선택·다운로드·설치하고, hugo.toml 설정, 테스트 콘텐츠 작성, 로컬 미리보기, Git 커밋까지 단계별로 자세히 안내한다."
description: "이 챕터는 교회 홈페이지에 적합한 Hugo 테마(PaperMod)를 선택·다운로드·설치하고, hugo.toml 설정, 테스트 콘텐츠 작성, 로컬 미리보기, Git 커밋까지 단계별로 자세히 안내한다."
tags: ["잎새 35호"]
image: "images/교회-홈페이지-무료-제작-매뉴얼-Chapter-4.-테마-선택과-적용.webp"
comments: false
notion_url: https://app.notion.com/p/Chapter-4-377091c284f680e39ec0df4bb65ff5b6
notion_id: 377091c2-84f6-80e3-9ec0-df4bb65ff5b6
Categories: ["홈페이지"]
---

# 교회 홈페이지 무료 제작 매뉴얼

## Chapter 4. 테마 선택과 적용 — 사이트에 디자인 입히기

> **이 챕터는 약 40–50분이 소요됩니다.**
> 이 챕터를 마치면 디자인이 입혀진 실제 사이트 모습을 처음으로 볼 수 있습니다.

---

## 목차

- [이 챕터에서 할 일](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9D%B4-%EC%B1%95%ED%84%B0%EC%97%90%EC%84%9C-%ED%95%A0-%EC%9D%BC)
- [STEP 1. Hugo 테마란 무엇인가](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-1-hugo-%ED%85%8C%EB%A7%88%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80)
- [STEP 2. 테마 선택하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-2-%ED%85%8C%EB%A7%88-%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0)
- [STEP 3. 테마 다운로드하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-3-%ED%85%8C%EB%A7%88-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%ED%95%98%EA%B8%B0)
- [STEP 4. 테마 등록 및 기본 설정](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-4-%ED%85%8C%EB%A7%88-%EB%93%B1%EB%A1%9D-%EB%B0%8F-%EA%B8%B0%EB%B3%B8-%EC%84%A4%EC%A0%95)
- [STEP 5. 첫 번째 콘텐츠 만들기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-5-%EC%B2%AB-%EB%B2%88%EC%A7%B8-%EC%BD%98%ED%85%90%EC%B8%A0-%EB%A7%8C%EB%93%A4%EA%B8%B0)
- [STEP 6. 로컬 미리보기로 결과 확인](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-6-%EB%A1%9C%EC%BB%AC-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0%EB%A1%9C-%EA%B2%B0%EA%B3%BC-%ED%99%95%EC%9D%B8)
- [STEP 7. 변경사항 커밋하기](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#step-7-%EB%B3%80%EA%B2%BD%EC%82%AC%ED%95%AD-%EC%BB%A4%EB%B0%8B%ED%95%98%EA%B8%B0)
- [최종 확인 및 체크리스트](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B5%9C%EC%A2%85-%ED%99%95%EC%9D%B8-%EB%B0%8F-%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8)
- [용어 해설](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%9A%A9%EC%96%B4-%ED%95%B4%EC%84%A4)
- [초보자 Tips](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%B4%88%EB%B3%B4%EC%9E%90-tips)
- [전문가의 제언](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#%EC%A0%84%EB%AC%B8%EA%B0%80%EC%9D%98-%EC%A0%9C%EC%96%B8)
- [FAQ](https://claude.ai/chat/ce16eb58-05c3-418e-9a68-e6a8fe989b44#faq)

---

## 이 챕터에서 할 일

| 단계 | 작업 | 소요 시간 |
| --- | --- | --- |
| STEP 1 | Hugo 테마 개념 이해 | 5분 |
| STEP 2 | 교회에 어울리는 테마 선택 | 5분 |
| STEP 3 | 선택한 테마 다운로드 | 5분 |
| STEP 4 | hugo.toml에 테마 등록 및 기본 설정 | 15분 |
| STEP 5 | 테마 확인용 첫 번째 콘텐츠 작성 | 5분 |
| STEP 6 | 로컬 미리보기로 결과 확인 | 5분 |
| STEP 7 | 변경사항 커밋 | 3분 |

### 🏁 이 챕터의 체크포인트

> 브라우저에서 `http://localhost:1313` 에 접속했을 때 테마 디자인이 적용된 사이트가 보인다.

---

## STEP 1. Hugo 테마란 무엇인가

### 🎯 무엇을 위한 작업인가?

테마를 설치하기 전에 테마가 무엇인지 이해합니다. 개념을 알고 설치하면 나중에 문제가 생겼을 때 어디를 봐야 할지 알 수 있습니다.

---

### 1-1. 테마의 역할

Hugo에서 **테마(Theme)** 는 사이트의 겉모습 전체를 담당하는 디자인 패키지입니다.

여러분이 작성하는 설교 파일이나 교회 소식 파일은 "내용"입니다. 테마는 그 내용을 **어떻게 보여줄 것인가**를 결정합니다.

```plain text
내용 (content/)          +    테마 (themes/)       =    완성된 웹페이지
────────────────────           ──────────────────        ──────────────
설교 제목, 본문               글꼴, 색상, 레이아웃       방문자가 보는 화면
교회 소식 내용                메뉴 위치, 버튼 모양
교회 소개 글                  홈 화면 구성
```

> 💡 **비유로 이해하기:** 테마는 교회 주보의 "양식"과 같습니다. 매주 내용(설교 제목, 광고)은 바뀌지만 주보의 레이아웃, 글꼴, 색상은 그대로 유지됩니다. 테마도 마찬가지입니다. 글은 매주 바뀌지만 디자인은 유지됩니다.

---

### 1-2. Hugo 테마 생태계

Hugo 공식 테마 갤러리에는 현재 400개 이상의 무료 테마가 등록되어 있습니다.

```plain text
https://themes.gohugo.io
```

이 사이트에서 다양한 테마의 미리보기를 볼 수 있습니다. 단, 교회 홈페이지에 바로 쓸 수 있는 것과 그렇지 않은 것을 구분하는 안목이 필요합니다. STEP 2에서 교회 홈페이지에 어울리는 테마를 추려드립니다.

---

### 1-3. 테마 설치 방식

이 매뉴얼에서는 **Git 서브모듈(Submodule)** 방식으로 테마를 설치합니다. 이 방식의 장점은 다음과 같습니다.

- 테마 제작자가 버그를 수정하거나 새 기능을 추가하면 명령어 한 줄로 업데이트 가능
- 내 저장소에 테마 파일이 직접 들어가지 않아 용량 절감
- GitHub에서도 테마 출처가 명확히 표시됨

```plain text
✅ 완료 확인: 테마의 역할과 설치 방식을 이해함
```

---

## STEP 2. 테마 선택하기

### 🎯 무엇을 위한 작업인가?

수백 개의 테마 중에서 교회 홈페이지에 어울리는 테마를 고릅니다. 이 매뉴얼에서는 초보자가 설정하기 쉽고, 한국어 콘텐츠와 잘 맞으며, 유지보수가 활발한 테마를 추려 소개합니다.

---

### 2-1. 추천 테마 비교표

| 테마 | 난이도 | 특징 | 교회 적합성 | GitHub 별 수 |
| --- | --- | --- | --- | --- |
| **PaperMod** ★ 추천 | 쉬움 | 깔끔·빠름·글 중심 | ⭐⭐⭐⭐⭐ | 10,000+ |
| **Congo** | 보통 | 모던·고급스러움·기능 풍부 | ⭐⭐⭐⭐ | 1,500+ |
| **Anatole** | 보통 | 좌우 분할·사진 강조·감성적 | ⭐⭐⭐ | 600+ |
| **Ananke** | 쉬움 | Hugo 공식 기본 테마·단순 | ⭐⭐⭐ | 900+ |

---

### 2-2. 각 테마 상세 소개

---

**🥇 PaperMod — 이 매뉴얼의 기본 추천**

미리보기: [`https://adityatelange.github.io/hugo-PaperMod/`](https://adityatelange.github.io/hugo-PaperMod/)

```plain text
장점
- 설치와 설정이 가장 단순함
- 전 세계에서 가장 많이 쓰이는 Hugo 테마 중 하나 (검색하면 자료가 풍부)
- 글 목록, 검색 기능, 다크모드 기본 포함
- 한국어 폰트와 잘 어울림
- 사이트 로딩 속도가 매우 빠름

단점
- 사진보다 글 위주의 레이아웃
- 기본 색상이 흰/검정 계열 (화려한 색상을 원한다면 커스터마이징 필요)

교회 홈페이지에서 특히 좋은 이유
- 설교 목록, 교회 소식을 날짜순으로 보여주는 데 최적화
- 처음 온 방문자가 길을 잃지 않는 단순한 구조
- 모바일에서도 깔끔하게 보임
```

---

**🥈 Congo — 고급스러운 느낌을 원할 때**

미리보기: [`https://jpanther.github.io/congo/`](https://jpanther.github.io/congo/)

```plain text
장점
- 현대적이고 전문적인 디자인
- 색상 테마를 수십 가지 중에서 선택 가능
- 문서화가 매우 잘 되어 있음

단점
- 설정 항목이 많아서 처음에 다소 복잡
- PaperMod보다 설정 시간이 더 걸림
```

---

**🥉 Anatole — 감성적인 사진 중심 사이트를 원할 때**

미리보기: [`https://themes.gohugo.io/themes/anatole/`](https://themes.gohugo.io/themes/anatole/)

```plain text
장점
- 왼쪽에 사진·소개, 오른쪽에 글 목록이 나오는 세련된 레이아웃
- 교회 대표 사진이 잘 드러남

단점
- 글 목록 구성이 단순해서 설교 아카이브 페이지를 만들 때 추가 작업 필요
- 설정 문서가 다소 부족
```

---

### 2-3. 이 매뉴얼의 선택

> 이 매뉴얼에서는 **PaperMod** 를 기준으로 설명합니다.
>
> 다른 테마를 선택해도 STEP 3 이후의 흐름(설치 → 등록 → 설정)은 동일합니다. 다만 `hugo.toml` 설정 항목 이름이 테마마다 다를 수 있으므로, 다른 테마를 선택했다면 해당 테마의 공식 문서를 함께 참고하세요.

```plain text
✅ 완료 확인: 사용할 테마를 결정함
```

---

## STEP 3. 테마 다운로드하기

### 🎯 무엇을 위한 작업인가?

선택한 테마 파일을 내 프로젝트의 `themes/` 폴더 안으로 가져옵니다. Git 서브모듈 방식을 사용하므로, 테마 파일이 직접 복사되는 것이 아니라 원본 저장소와 연결 고리가 만들어집니다.

---

### 3-1. 작업 폴더로 이동 확인

VS Code 내장 터미널을 열고 (`Ctrl+``), 현재 위치가 `church-website` 폴더인지 확인합니다.

```bash
pwd
```

**올바른 출력:**

```plain text
# Windows
C:\church-website

# Mac
/Users/사용자이름/church-website
```

다른 위치라면 이동합니다.

```bash
# Windows
cd C:\church-website

# Mac
cd ~/church-website
```

---

### 3-2. PaperMod 테마 다운로드

아래 명령어를 VS Code 내장 터미널에 **복사·붙여넣기** 후 엔터:

```bash
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
```

> 💡 명령어 설명:
>
> - `git submodule add` : 외부 Git 저장소를 내 프로젝트에 연결해라
> - `-depth=1` : 최신 버전만 가져와라 (전체 이력을 받지 않아 빠름)
> - `https://github.com/...` : PaperMod 테마의 GitHub 주소
> - `themes/PaperMod` : 내 프로젝트의 이 폴더에 저장해라

**진행 중 화면:**

```plain text
Cloning into 'C:/church-website/themes/PaperMod'...
remote: Enumerating objects: 35, done.
remote: Counting objects: 100% (35/35), done.
...
```

완료 후 VS Code 탐색기에서 `themes/PaperMod` 폴더가 생겼는지 확인합니다.

---

### 3-3. 서브모듈 초기화 확인

```bash
git submodule update --init --recursive
```

**성공 시 출력:**

```plain text
Submodule path 'themes/PaperMod': checked out 'abc1234...'
```

또는 아무 메시지 없이 프롬프트가 돌아오면 정상입니다.

> ⚠️ **인터넷 연결이 필요합니다.** 테마 파일을 GitHub에서 내려받기 때문에 이 단계에서는 인터넷이 연결되어 있어야 합니다.

```plain text
✅ 완료 확인: VS Code 탐색기에서 themes/PaperMod 폴더가 보임
```

---

## STEP 4. 테마 등록 및 기본 설정

### 🎯 무엇을 위한 작업인가?

다운로드한 테마를 Hugo에게 "이 테마를 사용하겠다"고 알리고, 사이트의 메뉴와 기본 정보를 설정합니다. 이 단계가 가장 중요하고 내용이 많지만, 한 번 설정해두면 이후에는 거의 바꿀 일이 없습니다.

---

### 4-1. hugo.toml 전체 교체

VS Code 탐색기에서 `hugo.toml` 파일을 클릭해 열고, **기존 내용 전체를 삭제**한 뒤 아래 내용을 붙여넣습니다.

꺽쇠(`< >`) 안의 내용만 본인 정보로 바꾸세요.

```toml
# ─────────────────────────────────────────
#  기본 사이트 설정
# ─────────────────────────────────────────
baseURL       = "https://<GitHub사용자이름>.github.io/"
languageCode  = "ko"
defaultContentLanguage = "ko"
title         = "<교회이름>"
theme         = "PaperMod"
timeZone      = "Asia/Seoul"

# 글 목록에 요약문 자동 생성 글자 수
summaryLength = 70

# ─────────────────────────────────────────
#  PaperMod 테마 상세 설정
# ─────────────────────────────────────────
[params]

  # 홈 화면 상단에 표시할 인사말
  homeInfoParams.Title   = "환영합니다 🙏"
  homeInfoParams.Content = """
<교회이름> 공식 홈페이지에 오신 것을 환영합니다.
말씀과 기도로 함께 성장하는 공동체입니다.
"""

  # 검색 기능 활성화
  fuseOpts.shouldSort  = true
  fuseOpts.minMatchCharLength = 2

  # 각 글에 읽는 데 걸리는 시간 표시
  ShowReadingTime = true

  # 글 목록에 마지막 수정일 표시
  ShowLastMod = true

  # 목차(Table of Contents) 표시
  ShowToc = true

  # 소셜 미디어 공유 버튼 표시
  ShowShareButtons = false

  # 글 하단에 이전글·다음글 버튼 표시
  ShowPostNavLinks = true

# ─────────────────────────────────────────
#  메인 메뉴 구성
# ─────────────────────────────────────────
[[menu.main]]
  name       = "홈"
  url        = "/"
  weight     = 1

[[menu.main]]
  name       = "교회소개"
  url        = "/about/"
  weight     = 2

[[menu.main]]
  name       = "예배안내"
  url        = "/worship/"
  weight     = 3

[[menu.main]]
  name       = "설교"
  url        = "/sermons/"
  weight     = 4

[[menu.main]]
  name       = "교회소식"
  url        = "/news/"
  weight     = 5

[[menu.main]]
  name       = "오시는길"
  url        = "/location/"
  weight     = 6

# ─────────────────────────────────────────
#  출력 형식 설정 (검색 기능에 필요)
# ─────────────────────────────────────────
[outputs]
  home = ["HTML", "RSS", "JSON"]
```

---

### 4-2. 반드시 수정할 항목

| 항목 | 위치 | 수정 내용 |
| --- | --- | --- |
| `<GitHub사용자이름>` | `baseURL` 줄 | Chapter 2에서 만든 GitHub 아이디 |
| `<교회이름>` | `title` 줄 | 실제 교회 이름 (예: `은혜교회`) |
| `<교회이름>` | `homeInfoParams.Content` 줄 | 홈 화면 인사말에 들어갈 교회 이름 |

**수정 예시:**

```toml
baseURL  = "https://gracechurch.github.io/"
title    = "은혜교회"

  homeInfoParams.Content = """
은혜교회 공식 홈페이지에 오신 것을 환영합니다.
"""
```

---

### 4-3. 파일 저장

수정 완료 후 저장합니다.

- **Windows:** `Ctrl+S`
- **Mac:** `Cmd+S`

```plain text
✅ 완료 확인: hugo.toml 저장 후 VS Code 탭의 흰 점(●)이 사라짐
```

---

## STEP 5. 첫 번째 콘텐츠 만들기

### 🎯 무엇을 위한 작업인가?

테마를 설치하고 설정을 마쳤어도, 보여줄 글이 하나도 없으면 홈 화면이 비어 보입니다. 테마가 제대로 작동하는지 확인하기 위해 간단한 테스트 글을 만들어 봅니다. 이 글은 나중에 실제 내용으로 교체하거나 삭제할 수 있습니다.

---

### 5-1. 첫 번째 글 파일 생성

VS Code 내장 터미널에서:

```bash
hugo new content sermons/첫번째설교.md
```

> 💡 명령어 설명:
>
> - `hugo new content` : Hugo 양식에 맞는 새 글 파일을 만들어라
> - `sermons/첫번째설교.md` : `content/sermons/` 폴더 안에 `첫번째설교.md` 이름으로 만들어라

**성공 시 출력:**

```plain text
Content "C:\church-website\content\sermons\첫번째설교.md" created
```

---

### 5-2. 글 파일 내용 작성

VS Code 탐색기에서 `content` → `sermons` → `첫번째설교.md` 파일 클릭 후 아래 내용으로 수정합니다.

생성된 파일을 열면 위쪽에 `---`로 둘러싸인 기본 정보(Front Matter)가 보입니다. 이것을 아래와 같이 수정하고 본문을 추가하세요.

```markdown
---
title: "첫 번째 설교 테스트"
date: 2026-05-25
draft: false
---

## 테마 확인용 글입니다

이 글은 테마가 제대로 설치되었는지 확인하기 위한 테스트 글입니다.

### 설교 본문 예시

오늘 말씀은 요한복음 3장 16절입니다.

> 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니
> 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라

테마가 잘 보인다면 이 파일을 삭제하거나 실제 설교 내용으로 교체하세요.
```

> ⚠️ **`draft: false`** 로 설정해야 발행된 글로 인식됩니다.
> `draft: true` 상태에서는 `hugo server -D` 실행 시에만 보이고, 실제 배포 시에는 나타나지 않습니다.

파일 저장: `Ctrl+S` (Windows) / `Cmd+S` (Mac)

```plain text
✅ 완료 확인: content/sermons/첫번째설교.md 파일이 저장됨
```

---

## STEP 6. 로컬 미리보기로 결과 확인

### 🎯 무엇을 위한 작업인가?

지금까지의 작업 결과를 브라우저에서 직접 눈으로 확인합니다. 테마 디자인이 적용된 사이트가 처음 보이는 순간입니다.

---

### 6-1. Hugo 서버 실행

VS Code 내장 터미널에서:

```bash
hugo server -D
```

**성공 시 출력:**

```plain text
                   | KO
-------------------+-----
  Pages            |  8
  Paginator pages  |  0
  Non-page files   |  0
  Static files     |  0
  Processed images |  0
  Aliases          |  3
  Cleaned          |  0

Built in 45 ms
...
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

> 💡 `Pages` 숫자가 1 이상이고 오류 메시지 없이 `Built in` 줄이 보이면 성공입니다.

---

### 6-2. 브라우저에서 확인

브라우저 주소창에 입력:

```plain text
http://localhost:1313
```

**확인해야 할 항목:**

```plain text
□ 상단 내비게이션에 "홈", "교회소개", "예배안내", "설교", "교회소식", "오시는길" 메뉴 표시
□ 홈 화면에 설정한 인사말(환영합니다 🙏) 표시
□ 설교 목록 또는 최근 글 목록에 "첫 번째 설교 테스트" 글 표시
□ 모바일 크기로 브라우저 창을 좁혀도 레이아웃이 깨지지 않음
```

---

### 6-3. 각 메뉴 클릭 확인

상단 메뉴의 각 항목을 클릭해보세요. 아직 해당 페이지의 콘텐츠 파일이 없기 때문에 "404 Page Not Found" 또는 빈 목록이 나타납니다. 이것은 **정상**입니다. 콘텐츠는 Chapter 6–8에서 채워갑니다.

---

### 6-4. 실시간 수정 체험 (선택)

테마의 실시간 반영 기능을 체험해봅니다.

1. VS Code에서 `content/sermons/첫번째설교.md` 열기
2. 제목(`title`)을 임시로 다른 이름으로 변경 후 저장
3. 브라우저 확인 → 저장 즉시 자동 반영됨

이처럼 파일을 저장할 때마다 수정 결과를 즉시 확인할 수 있습니다.

확인 후 원래 내용으로 돌려놓고 저장하세요.

---

### 6-5. 서버 종료

다음 단계를 위해 서버를 종료합니다.

터미널에서 `Ctrl+C`

```plain text
✅ 완료 확인: 브라우저에서 PaperMod 디자인이 적용된 사이트와 메뉴가 보임
```

---

## STEP 7. 변경사항 커밋하기

### 🎯 무엇을 위한 작업인가?

테마 설치와 설정 작업을 Git에 저장합니다. 커밋해두면 이 상태로 언제든 돌아올 수 있습니다.

---

### 7-1. 현재 변경 상태 확인

```bash
git status
```

**예상 출력:**

```plain text
Changes to be committed:
  new file:   .gitmodules
  new file:   themes/PaperMod

Changes not staged for commit:
  modified:   hugo.toml

Untracked files:
  content/sermons/첫번째설교.md
```

---

### 7-2. 전체 파일 스테이징 및 커밋

```bash
git add .
```

```bash
git commit -m "PaperMod 테마 설치 및 기본 설정"
```

**성공 시 출력:**

```plain text
[main a2b3c4d] PaperMod 테마 설치 및 기본 설정
 4 files changed, 120 insertions(+), 3 deletions(-)
 create mode 100644 .gitmodules
 create mode 160000 themes/PaperMod
```

> 💡 `themes/PaperMod` 옆에 일반 파일과 다른 **`160000`** 이라는 숫자가 보입니다. 이것은 서브모듈임을 나타내는 Git의 특수 파일 모드입니다. 정상입니다.

```plain text
✅ 완료 확인: git log --oneline 실행 시 커밋 메시지가 목록에 보임
```

---

## 최종 확인 및 체크리스트

### 최종 폴더 구조 확인

이 챕터를 마쳤을 때 `church-website` 폴더의 주요 구조:

```plain text
church-website/
│
├── .git/
├── .gitmodules            ← 서브모듈 정보 파일 (자동 생성)
├── .gitignore
├── archetypes/
├── content/
│   └── sermons/
│       └── 첫번째설교.md  ← 테스트용 글
├── static/
├── themes/
│   └── PaperMod/          ← 테마 파일 (서브모듈로 연결됨)
└── hugo.toml              ← 테마 등록 및 메뉴 설정 완료
```

---

### ✅ 최종 체크리스트

```plain text
□ themes/PaperMod 폴더가 생성됨
□ hugo.toml 에 theme = "PaperMod" 설정됨
□ hugo.toml 에 교회 이름, baseURL, 메뉴 6개 설정됨
□ content/sermons/첫번째설교.md 파일 생성 및 draft: false 설정됨
□ http://localhost:1313 에서 PaperMod 테마 디자인 확인됨
□ 상단 메뉴 6개가 브라우저에 표시됨
□ 변경사항 git commit 완료됨
```

모든 항목이 체크되었다면 **Chapter 5(GitHub 연결과 첫 배포)** 로 이동할 준비 완료입니다! 🎉

---

## 📖 용어 해설

---

**테마 (Theme)**

> Hugo 사이트의 겉모습(디자인)을 담당하는 파일 묶음입니다. 글꼴, 색상, 레이아웃, 메뉴 위치 등 시각적인 요소를 모두 포함합니다. 내용(content/)과 디자인(themes/)을 분리해두는 것이 Hugo의 핵심 개념입니다.

**Git 서브모듈 (Submodule)**

> 내 Git 저장소 안에 다른 Git 저장소를 연결하는 기능입니다. 테마를 서브모듈로 추가하면 테마 파일 전체가 내 저장소에 복사되지 않고, "어느 저장소의 어느 버전을 쓴다"는 링크 정보만 저장됩니다. 나중에 `git submodule update --remote` 명령어로 테마를 최신 버전으로 업데이트할 수 있습니다.

**`.gitmodules`**

> 서브모듈 정보를 기록하는 파일입니다. `git submodule add` 명령어 실행 시 자동으로 생성됩니다. 직접 편집할 일은 없습니다.

**Front Matter**

> Markdown 파일 맨 위에 `---`로 둘러싸인 영역입니다. 글의 제목, 작성일, 발행 여부 등 글의 메타데이터를 담습니다. Hugo는 이 정보를 읽어서 글 목록 정렬, 날짜 표시 등에 활용합니다.

```markdown
---
title: "설교 제목"      ← 글의 제목
date: 2026-05-25       ← 작성일
draft: false           ← false: 발행, true: 임시저장
---
```

**`draft: true / false`**

> 글의 발행 여부를 결정하는 설정입니다. `true`이면 임시저장 상태로 `hugo server -D` 에서만 보이고 실제 배포 시에는 숨겨집니다. `false`이면 발행 상태로 누구나 볼 수 있습니다.

**`[[menu.main]]`**

> hugo.toml에서 상단 메뉴를 추가하는 설정 블록입니다. `[[...]]`(이중 대괄호)은 TOML에서 배열 안의 항목을 뜻합니다. 메뉴를 추가하려면 이 블록을 하나 더 복사해서 붙여넣으면 됩니다.

**`weight`**

> 메뉴나 글의 순서를 지정하는 숫자입니다. 숫자가 작을수록 앞에 나타납니다. `weight = 1`이 가장 앞, `weight = 10`이 뒤쪽입니다.

**`[params]`**

> hugo.toml에서 테마별 추가 설정을 넣는 섹션입니다. 어떤 항목을 쓸 수 있는지는 각 테마의 공식 문서에서 확인할 수 있습니다.

**`[outputs]`**

> Hugo가 생성할 출력 형식을 지정합니다. `HTML`은 일반 웹 페이지, `RSS`는 구독 피드, `JSON`은 검색 기능에 필요한 데이터 파일입니다.

**PaperMod**

> Aditya Telange가 만든 Hugo 테마입니다. 깔끔한 디자인, 빠른 속도, 풍부한 문서화로 Hugo 테마 중 가장 많이 사용됩니다. 공식 GitHub: `github.com/adityatelange/hugo-PaperMod`

---

## 💡 초보자 Tips

---

**Tip 1. 테마 설치 후 화면이 여전히 비어 있다면**

hugo.toml에서 `theme = "PaperMod"` 줄이 정확히 입력되었는지, 따옴표까지 맞는지 확인하세요. 테마 이름은 대소문자를 구분합니다. `papermod`나 `paperMod`가 아닌 정확히 `PaperMod`여야 합니다.

---

**Tip 2. 메뉴 이름을 바꾸고 싶을 때**

`hugo.toml`의 `[[menu.main]]` 블록에서 `name`만 바꾸면 됩니다. `url`은 실제 폴더 경로와 연결되므로 바꾸지 않는 것이 좋습니다.

```toml
# 예: "교회소개" → "우리 교회"로 변경
[[menu.main]]
  name   = "우리 교회"    ← 이 부분만 수정
  url    = "/about/"     ← 이 부분은 그대로 유지
  weight = 2
```

---

**Tip 3. 메뉴를 추가하고 싶을 때**

`[[menu.main]]` 블록을 통째로 복사해서 아래에 붙여넣고 `name`, `url`, `weight`만 바꾸면 됩니다.

```toml
[[menu.main]]
  name   = "기도 제목"
  url    = "/prayer/"
  weight = 7
```

---

**Tip 4. 홈 화면 인사말 줄바꿈 방법**

`homeInfoParams.Content` 에서 줄을 바꾸고 싶으면 `\n`을 사용합니다.

```toml
homeInfoParams.Content = "첫 번째 줄입니다.\n두 번째 줄입니다."
```

또는 큰따옴표 세 개(`"""`)로 감싸면 여러 줄을 자연스럽게 쓸 수 있습니다.

```toml
homeInfoParams.Content = """
첫 번째 줄
두 번째 줄
세 번째 줄
"""
```

---

**Tip 5. 테마 공식 문서는 항상 열어두세요**

PaperMod의 모든 설정 항목 목록은 아래 주소에서 확인할 수 있습니다.

```plain text
https://github.com/adityatelange/hugo-PaperMod/wiki
```

"이런 기능도 있을까?"라는 궁금증이 생기면 이 문서를 먼저 찾아보세요. Antigravity CLI에게 설정을 요청할 때도 이 문서에서 항목 이름을 확인하면 더 정확한 지시를 내릴 수 있습니다.

---

**Tip 6. 다크 모드 기본값 설정**

방문자가 처음 사이트에 접속할 때 다크 모드로 보이게 하고 싶다면 `hugo.toml` `[params]` 섹션에 추가:

```toml
defaultTheme = "dark"       # 항상 다크 모드
# defaultTheme = "light"    # 항상 라이트 모드
# defaultTheme = "auto"     # 방문자 기기 설정에 따름 (기본값)
```

---

## 🎓 전문가의 제언

---

**제언 1. 테마를 중간에 바꾸는 것은 상당한 작업입니다**

Hugo 테마는 각자 고유한 설정 구조를 가지고 있습니다. 처음 선택한 테마로 사이트를 어느 정도 완성한 뒤 다른 테마로 바꾸려면, `hugo.toml`의 `[params]` 설정을 새 테마 방식에 맞게 처음부터 다시 작성해야 합니다. 또한 일부 콘텐츠 파일의 Front Matter도 수정해야 할 수 있습니다. **처음 선택을 신중하게 하는 것**이 나중의 수고를 줄입니다.

---

**제언 2. ****`themes/`**** 폴더 안 파일을 직접 수정하지 마세요**

테마 파일을 직접 수정하면 나중에 `git submodule update --remote`로 테마를 업데이트할 때 충돌이 발생합니다. 테마를 커스터마이징하고 싶다면 루트의 `layouts/` 폴더에 같은 이름의 파일을 만들어 "덮어쓰기(Override)" 방식을 사용해야 합니다. 이 방식은 테마를 업데이트해도 수정 내용이 유지됩니다. 자세한 방법은 Chapter 9(Antigravity CLI로 디자인 커스터마이징)에서 다룹니다.

---

**제언 3. ****`--depth=1`****의 의미와 한계**

`git submodule add --depth=1`은 테마의 전체 커밋 이력 대신 최신 버전만 내려받습니다. 다운로드 속도가 빠르고 용량이 작은 장점이 있습니다. 단, 테마의 특정 과거 버전으로 되돌아가야 할 일이 생기면 제약이 있습니다. 교회 홈페이지 수준에서는 이 제약이 문제가 될 일이 거의 없으므로 `--depth=1`을 사용하는 것이 권장됩니다.

---

**제언 4. 테마 업데이트는 주기적으로**

Hugo와 PaperMod는 계속 업데이트됩니다. 분기에 한 번 정도 아래 명령어로 테마를 최신 버전으로 업데이트하는 것을 권장합니다.

```bash
git submodule update --remote --merge
```

업데이트 후 `hugo server -D`를 실행해서 깨진 부분이 없는지 확인하고, 문제가 없으면 커밋합니다.

---

**제언 5. 한국어 폰트 최적화 (나중에 적용)**

PaperMod의 기본 폰트는 영문 최적화 폰트입니다. 교회 홈페이지에 한국어 콘텐츠가 많다면 Noto Sans KR, Pretendard 같은 한국어 전용 웹 폰트를 적용하면 가독성이 크게 향상됩니다. 방법은 Chapter 9에서 Antigravity CLI를 활용한 커스터마이징 예시로 다룹니다.

---

## ❓ FAQ

---

**Q1. 테마를 다운로드할 때 인터넷 오류가 났어요**

네트워크 일시 오류일 수 있습니다. 잠시 후 다시 시도하세요. 반복 오류가 나면 GitHub에서 직접 ZIP 파일로 내려받는 방법도 있습니다. 단, 이 경우 서브모듈이 아닌 수동 복사 방식이 되어 나중에 업데이트가 불편해집니다.

---

**Q2. ****`hugo server`**** 실행 시 "theme not found" 오류가 나요**

`hugo.toml`의 `theme` 값과 `themes/` 폴더 안의 폴더 이름이 정확히 일치하는지 확인하세요. 대소문자를 구분합니다.

```plain text
themes/PaperMod/    ← 폴더 이름
theme = "PaperMod"  ← hugo.toml 설정
```

두 이름이 다르면 오류가 납니다.

---

**Q3. 메뉴가 너무 많아서 모바일에서 잘려요**

PaperMod는 메뉴가 너무 많으면 모바일에서 햄버거 메뉴(≡)로 자동 전환됩니다. 메뉴가 6개 이하면 대부분 정상 표시됩니다. 그래도 문제가 있다면 메뉴 항목을 줄이거나 Antigravity CLI에게 "모바일 메뉴를 가로 스크롤 방식으로 바꿔줘"라고 요청하세요.

---

**Q4. 홈 화면 인사말이 보이지 않아요**

`hugo.toml`에서 `homeInfoParams.Title`과 `homeInfoParams.Content` 설정이 `[params]` 섹션 안에 있는지 확인하세요. `[params]` 바깥에 있으면 인식되지 않습니다.

```toml
[params]                    ← 이 줄 아래에
  homeInfoParams.Title = "환영합니다"   ← 이 설정이 있어야 함
```

---

**Q5. ****`git commit`**** 실행 시 .gitmodules 파일도 포함되어야 하나요?**

네, 포함되어야 합니다. `.gitmodules` 파일은 서브모듈 정보를 담고 있어서 나중에 다른 컴퓨터에서 저장소를 내려받을 때 테마를 자동으로 복원하는 데 필요합니다. `git add .`으로 전체를 추가하면 자동으로 포함됩니다.

---

**Q6. 다른 테마를 사용하면 hugo.toml 설정이 많이 달라지나요?**

테마마다 `[params]` 안의 항목 이름이 다릅니다. 하지만 `baseURL`, `title`, `theme`, `[[menu.main]]` 같은 Hugo 기본 설정은 모든 테마에서 동일하게 사용합니다. 다른 테마를 선택했다면 해당 테마 공식 문서의 "Configuration(설정)" 항목을 찾아서 `[params]` 부분만 교체하면 됩니다.

---

**Q7. 서브모듈 방식 대신 테마를 직접 복사하면 안 되나요?**

기술적으로는 가능합니다. 하지만 두 가지 단점이 있습니다. 첫째, 나중에 테마를 업데이트하려면 전체 파일을 다시 내려받아 복사해야 합니다. 둘째, GitHub 저장소 용량이 불필요하게 커집니다. 서브모듈 방식을 권장합니다.

---

## 다음 챕터 예고

**Chapter 5. GitHub 연결과 첫 배포 — 인터넷에 사이트 올리기**

- GitHub에 `사용자이름.github.io` 저장소 만들기
- 로컬 프로젝트와 GitHub 저장소 연결하기
- GitHub Actions 자동 배포 워크플로우 설정
- 첫 push 후 배포 진행 상황 확인하기
- 실제 인터넷 주소로 내 사이트 접속하기

---

*이 매뉴얼은 2026년 5월 기준으로 작성되었습니다.Hugo 및 PaperMod 버전 업데이트에 따라 일부 설정 항목이나 출력 메시지가 달라질 수 있습니다.*
