---
title: "교회 홈페이지 무료 제작 매뉴얼 Chapter 2. 사전 준비 — 컴퓨터에 도구 설치하기 for Mac"
date: 2026-06-01T03:13:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-18
summary: "이 문서는 Mac에서 교회 홈페이지 제작을 위해 VS Code, Homebrew, Git, Hugo, Antigravity CLI 등 필요한 도구들을 설치하고 설정하는 단계별 가이드를 제공한다."
description: "이 문서는 Mac에서 교회 홈페이지 제작을 위해 VS Code, Homebrew, Git, Hugo, Antigravity CLI 등 필요한 도구들을 설치하고 설정하는 단계별 가이드를 제공한다."
tags: ["잎새 33호"]
image: "images/교회-홈페이지-무료-제작-매뉴얼-Chapter-2.-사전-준비-—-컴퓨터에-도구-설치하기-for-Mac.png"
comments: false
notion_url: https://app.notion.com/p/Chapter-2-for-Mac-372091c284f680999766cddac1548774
notion_id: 372091c2-84f6-8099-9766-cddac1548774
Categories: ["홈페이지"]
---

# 교회 홈페이지 무료 제작 매뉴얼

## Chapter 2. 사전 준비 — 컴퓨터에 도구 설치하기 for Mac

### 🍎 Mac 전용 가이드 (개정판)

> **이 챕터는 약 60분이 소요됩니다.**
> 한 번만 하면 다시 할 필요가 없는 과정입니다. 천천히, 순서대로 따라오세요.

---

## 이 챕터에서 할 일 한눈에 보기

| 단계 | 무엇을 하는가 | 왜 필요한가 | 소요 시간 |
| --- | --- | --- | --- |
| STEP 1 | macOS 버전 확인 | 지원 여부 확인 | 2분 |
| STEP 2 | GitHub 계정 만들기 | 사이트 파일 저장소 + 무료 호스팅 | 5분 |
| STEP 3 | VS Code 설치 | **이후 모든 작업의 기반 환경** | 5분 |
| STEP 4 | Homebrew 설치 | Mac 전용 패키지 관리자 (도구 자동 설치) | 10분 |
| STEP 5 | Git 설치 | 파일 변경 이력 관리 + GitHub 업로드 | 3분 |
| STEP 6 | Hugo 설치 | Markdown → 웹사이트 변환 엔진 | 3분 |
| STEP 7 | Antigravity CLI 설치 | AI 코딩 보조 도구 | 10분 |
| STEP 8 | 최종 확인 | 모든 도구 정상 작동 점검 | 5분 |

---

### 📌 이 매뉴얼의 핵심 원칙

> **STEP 3에서 VS Code를 설치한 뒤, STEP 4부터는 모든 명령어를 VS Code 안에서 실행합니다.**
>
> VS Code는 단순한 편집기가 아닙니다. 파일 탐색, 코드 편집, 명령어 실행, GitHub 업로드를 한 화면에서 할 수 있는 **작업 전체의 허브**입니다. Homebrew, Git, Hugo, Antigravity CLI 설치를 포함한 모든 명령어 작업을 VS Code 내장 터미널 하나로 처리합니다.
> 
> Mac에서는 Windows와 달리 **관리자 권한을 별도로 설정할 필요 없이** VS Code 내장 터미널에서 모든 작업을 완료할 수 있습니다.

---

## ⚠️ 시작 전 확인 — macOS 버전

이 매뉴얼은 **macOS 12 Monterey 이상**을 기준으로 합니다.

**버전 확인 방법:**

1. 화면 왼쪽 상단 **애플 로고(🍎)** 클릭
2. **"이 Mac에 관하여"** 클릭
3. 팝업 창에서 버전 확인

```plain text
확인 예시:
  macOS Sequoia 15.4.1
  또는
  macOS Sonoma 14.6
```

> ❌ macOS 11 Big Sur 이하라면 일부 도구가 지원되지 않을 수 있습니다.
> 🍎 → **시스템 설정** → **소프트웨어 업데이트**로 먼저 업그레이드하세요.

---

## STEP 2. GitHub 계정 만들기

### 🎯 무엇을 위한 작업인가?

완성된 홈페이지 파일을 인터넷에 올려두는 저장소이자, 전 세계 누구나 접속할 수 있는 **무료 웹 호스팅** 공간을 만드는 단계입니다. 은행 계좌처럼 한 번 만들면 앞으로 계속 사용합니다.

**이미 GitHub 계정이 있다면 STEP 3으로 건너뜁니다.**

---

**① Safari, Chrome 등 브라우저를 열고 아래 주소 접속:**

```plain text
https://github.com
```

**② 오른쪽 상단 초록색 "Sign up" 버튼 클릭**

**③ 이메일 주소 입력 → "Continue" 클릭**

**④ 비밀번호 설정 → "Continue" 클릭**

> 8자 이상, 숫자·소문자 포함

**⑤ 사용자 이름(Username) 입력 → "Continue" 클릭**

> ⚠️ **이 이름이 사이트 주소가 됩니다. 신중하게 결정하세요.**
>
> | 입력한 사용자 이름 | 만들어지는 사이트 주소 |
> | --- | --- |
> | `gracechurch` | `gracechurch.github.io` |
> | `sungrakchurch` | `sungrakchurch.github.io` |
> 
> - 영문 소문자, 숫자, 하이픈()만 사용 가능 (한글 불가)
> - 이미 다른 사람이 쓰는 이름은 빨간 표시로 알려줌
> - 짧고 기억하기 쉬운 이름 권장

**⑥ 이메일 받은편지함에서 GitHub 인증 코드 확인 → 8자리 코드 입력**

**⑦ "Are you a student or teacher?" 설문 → "Skip personalization" 클릭** (건너뜀)

**⑧ 가입 완료 확인:** 오른쪽 상단에 프로필 아이콘이 보이면 성공

---

**✏️ 내 정보 기록해두기 (앞으로 계속 사용합니다)**

```plain text
내 GitHub 사용자 이름 : ________________________________
내 사이트 주소 (URL)  : https://________________________.github.io
가입에 사용한 이메일  : ________________________________
```

```plain text
✅ 완료 확인: https://github.com 접속 시 로그인된 대시보드가 보임
```

---

## STEP 3. VS Code 설치하기

### 🎯 무엇을 위한 작업인가?

VS Code(Visual Studio Code)는 이후 모든 작업의 **허브**입니다. 설교 파일 편집, 폴더 구조 탐색, 명령어 실행, GitHub 업로드까지 VS Code 하나로 처리합니다. Mac에서는 이 단계를 마치면 시스템 터미널을 별도로 열 필요가 전혀 없습니다.

---

### 3-1. VS Code 다운로드

**브라우저에서 아래 주소 접속:**

```plain text
https://code.visualstudio.com
```

화면 가운데 **"Download Mac Universal"** 버튼 클릭

> 💡 "Mac Universal"은 Apple Silicon(M1/M2/M3/M4)과 Intel Mac을 모두 지원합니다. 내 칩 종류를 몰라도 이 버튼을 누르면 됩니다.

---

### 3-2. VS Code 설치

1. 다운로드된 `.zip` 파일 클릭 → 자동으로 압축 해제
2. `Visual Studio Code.app` 파일 생성됨
3. 이 파일을 **응용 프로그램 폴더로 드래그:**
  - Finder(하단 Dock의 웃는 파란 얼굴 아이콘) 클릭
  - 왼쪽 메뉴 **"응용 프로그램"** 클릭
  - `Visual Studio Code.app`을 이 창 안으로 드래그
4. Launchpad 또는 Finder → 응용 프로그램에서 VS Code 실행

> ⚠️ 처음 실행 시 **"인터넷에서 다운로드한 앱입니다. 열겠습니까?"** 팝업 → **"열기"** 클릭

---

### 3-3. 한국어 언어팩 설치

**① VS Code 실행**

**② 왼쪽 사이드바 맨 아래 네모 4개 아이콘 클릭** (Extensions, 확장 프로그램)

- 단축키: `Cmd+Shift+X`

**③ 상단 검색창에 ****`Korean`**** 입력**

**④ "Korean Language Pack for Visual Studio Code" → "Install" 클릭**

**⑤ 오른쪽 아래 팝업 → "Change Language and Restart" 클릭**

**⑥ VS Code 재시작 → 한국어 메뉴 확인**

---

### 3-4. `code` 명령어 등록 (Mac 전용 필수 설정)

터미널에서 `code .` 명령어로 현재 폴더를 VS Code에서 바로 열 수 있도록 한 번 설정합니다.

1. VS Code 실행
2. 단축키 `Cmd+Shift+P` 입력 → 화면 상단에 검색창 열림
3. 검색창에 `shell command` 입력
4. **"Shell Command: Install 'code' command in PATH"** 클릭
5. 완료 메시지 확인

---

### 3-5. VS Code 내장 터미널 열기

**지금부터 이 터미널이 모든 명령어 실행의 기본 창이 됩니다.**

VS Code 메뉴에서 **"보기" → "터미널"** 클릭

- 단축키: `Ctrl+`` (키보드 `~` 아래쪽 백틱 키)

VS Code 화면 아래쪽에 터미널 패널이 열립니다:

```plain text
사용자이름@MacBook-Pro ~ %
```

> 💡 이 터미널은 Mac 시스템 터미널(zsh)과 동일하게 작동합니다. 앞으로 "터미널에서 입력하세요"라는 지시는 모두 이 VS Code 내장 터미널을 사용합니다.

```plain text
✅ 완료 확인: VS Code 실행 시 한국어 메뉴가 보이고, 내장 터미널이 열림
```

---

## STEP 4. Homebrew 설치하기

### 🎯 무엇을 위한 작업인가?

Homebrew는 Mac 전용 패키지 관리자입니다. 이 도구 하나만 있으면 이후 Git·Hugo 등을 명령어 한 줄로 자동 설치할 수 있습니다. "앱 스토어"의 개발자 도구 전문 버전이라고 생각하세요. Git과 Hugo를 설치하기 전에 반드시 먼저 설치해야 합니다.

**이제부터 모든 명령어는 VS Code 내장 터미널에서 실행합니다.**

---

### 4-1. Homebrew 설치 명령어 실행

**VS Code 내장 터미널에서 아래 명령어를 복사·붙여넣기 후 엔터:**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> ⚠️ 이 명령어는 매우 깁니다. 직접 타이핑하지 말고 반드시 **복사(****`Cmd+C`****) → 붙여넣기(****`Cmd+V`****)** 로 입력하세요.

---

### 4-2. 설치 중 나타나는 화면 대응

**① 비밀번호 입력 요청:**

```plain text
Password:
```

→ Mac 로그인 비밀번호를 입력 후 엔터

> ⚠️ 입력해도 화면에 아무것도 표시되지 않습니다. 보안상 정상입니다. 그냥 입력하고 엔터를 누르세요.

**② Command Line Tools 팝업 (처음 설치 시):**

- 별도 팝업 창이 열리면 **"설치"** 클릭
- 완료까지 5–15분 소요
- 팝업이 닫히면 VS Code 터미널로 돌아와 엔터

**③ 계속 진행 확인:**

```plain text
Press RETURN/ENTER to continue or any other key to abort:
```

→ 엔터 키

**④ 설치 완료 메시지:**

```plain text
==> Installation successful!
```

---

### 4-3. Apple Silicon Mac 전용 — PATH 추가 설정

> **내 Mac 칩 확인:** 🍎 → "이 Mac에 관하여" → "칩" 항목이 `Apple M1/M2/M3/M4`이면 Apple Silicon, "프로세서" 항목이 `Intel Core`이면 Intel Mac

**Apple Silicon(M1/M2/M3/M4) Mac만** 아래 두 줄을 실행합니다. Intel Mac은 건너뜁니다.

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

---

### 4-4. Homebrew 설치 확인

```bash
brew --version
```

**성공 시 출력:**

```plain text
Homebrew 4.4.x
```

```plain text
✅ 완료 확인: brew --version 실행 시 버전 번호 출력됨
```

---

## STEP 5. Git 설치하기

### 🎯 무엇을 위한 작업인가?

Git은 파일의 변경 이력을 기록하고, 완성된 파일을 GitHub에 업로드하는 도구입니다. "저장" 버튼을 누를 때마다 스냅샷이 찍혀, 잘못 수정해도 언제든 이전 상태로 되돌릴 수 있습니다. Homebrew가 설치되어 있으므로 명령어 한 줄이면 됩니다.

---

### 5-1. Git 설치

**VS Code 내장 터미널에서 복사·붙여넣기 후 엔터:**

```bash
brew install git
```

완료까지 1–3분 소요.

---

### 5-2. Git 설치 확인

```bash
git --version
```

**성공 시 출력:**

```plain text
git version 2.47.0
```

---

### 5-3. Git 초기 설정

Git이 커밋(저장)할 때 기록할 이름과 이메일을 설정합니다.
따옴표 `""` 안의 내용만 본인 정보로 바꿔서 **한 줄씩 실행**하세요.

```bash
git config --global user.name "홍길동"
```

```bash
git config --global user.email "my-email@gmail.com"
```

> 💡 GitHub 계정 가입 시 사용한 이메일과 동일하게 입력하세요.

설정 확인:

```bash
git config --list
```

출력 중 아래 두 줄이 보이면 성공:

```plain text
user.name=홍길동
user.email=my-email@gmail.com
```

```plain text
✅ 완료 확인: git --version 실행 시 버전 번호 출력됨
```

---

## STEP 6. Hugo 설치하기

### 🎯 무엇을 위한 작업인가?

Hugo는 이 프로젝트의 핵심 엔진입니다. 매주 작성하는 설교문·교회 소식(Markdown 파일)을 아름다운 웹페이지(HTML)로 자동 변환합니다. Mac에서 Homebrew로 설치하면 **Extended 버전이 자동으로 설치**됩니다.

---

### 6-1. Hugo Extended 설치

**VS Code 내장 터미널에서 복사·붙여넣기 후 엔터:**

```bash
brew install hugo
```

완료까지 1–3분 소요.

---

### 6-2. Hugo 설치 확인

```bash
hugo version
```

**성공 시 출력:**

```plain text
hugo v0.161.1+extended darwin/arm64 BuildDate=...
```

> ⚠️ 반드시 **`+extended`** 가 포함되어 있어야 합니다.
>
> - `darwin/arm64` → Apple Silicon Mac (정상)
> - `darwin/amd64` → Intel Mac (정상)

```plain text
✅ 완료 확인: hugo version 출력에 +extended 포함됨
```

---

## STEP 7. Antigravity CLI 설치하기

### 🎯 무엇을 위한 작업인가?

Antigravity CLI는 AI 코딩 에이전트입니다. `agy`라는 명령어로 실행하면, "설교 목록에 날짜와 설교자 이름을 표시해줘"처럼 한국어로 지시할 수 있습니다. AI가 직접 코드 파일을 수정해 주므로, HTML·CSS 지식 없이도 사이트를 원하는 대로 바꿀 수 있습니다.

Mac에서는 Windows와 달리 관리자 권한을 별도로 설정할 필요 없이 **VS Code 내장 터미널에서 바로 설치**할 수 있습니다.

---

### 7-1. Antigravity CLI 설치

**VS Code 내장 터미널에서 복사·붙여넣기 후 엔터:**

```bash
curl -fsSL https://antigravity.google/cli/install.sh | bash
```

설치 진행 메시지:

```plain text
⠋ Detecting system environment...
✓ Platform detected: darwin_arm64
✓ Latest available version: 1.0.0
✓ Download complete and checksum verified.
✓ Installation complete. Run 'agy' to get started.
```

---

### 7-2. 설치 확인

VS Code 내장 터미널을 **새 터미널로 열기** (터미널 패널 오른쪽 상단 `+` 아이콘 클릭) → 아래 명령어 실행:

```bash
agy --version
```

**성공 시 출력:**

```plain text
agy version 1.0.0
```

> 💡 "명령을 찾을 수 없습니다" 오류가 나오면 → VS Code를 완전히 닫고 다시 열기

---

### 7-3. Google 계정으로 로그인

**VS Code 내장 터미널에서:**

```bash
agy
```

처음 실행 시 인증이 시작됩니다:

```plain text
Welcome to Antigravity CLI!
Opening browser for authentication...
```

**인증 절차:**

1. **브라우저가 자동으로 열립니다**
  - 열리지 않으면 터미널에 표시된 URL을 복사해 브라우저에 붙여넣기
2. Google 계정 선택 → 교회 관리용 계정 선택 (또는 로그인)
3. **"Antigravity CLI이(가) Google 계정 액세스를 요청합니다"** → **"허용"** 클릭
4. 브라우저에 **"Authentication successful."** 표시 → 탭 닫기
5. 터미널에서 확인:
```plain text
✓ Authenticated successfully.
Welcome! You're now logged in as your-email@gmail.com
```
6. Antigravity CLI 인터페이스 시작됨
  - 나가려면 `/quit` 입력 또는 `Ctrl+C`

```plain text
✅ 완료 확인: agy 실행 시 로그인된 이메일로 인터페이스가 시작됨
```

---

## STEP 8. 전체 설치 최종 확인

### 🎯 무엇을 위한 작업인가?

모든 도구가 정상 작동하는지 한 번에 점검합니다. 하나라도 문제가 있으면 다음 챕터로 넘어가기 전에 해결해야 합니다.

---

**VS Code 내장 터미널에서 아래 명령어를 하나씩 실행하세요:**

```bash
brew --version
```

```bash
git --version
```

```bash
hugo version
```

```bash
agy --version
```

**정상 출력 예시:**

```plain text
Homebrew 4.4.x
git version 2.47.0
hugo v0.161.1+extended darwin/arm64
agy version 1.0.0
```

> 버전 숫자는 달라도 됩니다. 형식이 맞으면 성공입니다.

---

### ✅ 최종 체크리스트

```plain text
□ GitHub 계정    : github.com 접속 시 로그인 상태로 대시보드가 보임
□ VS Code        : 실행 시 한국어 메뉴 표시, 내장 터미널 정상 작동
□ code 명령어    : 터미널에서 code . 입력 시 VS Code가 열림
□ Homebrew       : brew --version 실행 시 버전 번호 출력
□ Git            : git --version 실행 시 버전 번호 출력
□ Git 설정       : git config --list 에서 user.name, user.email 확인
□ Hugo           : hugo version 출력에 +extended 포함
□ Antigravity CLI: agy --version 실행 시 버전 번호 출력
```

모든 항목이 체크되었다면 **Chapter 3**으로 넘어갈 준비 완료입니다! 🎉

---

## 📖 용어 해설

**VS Code 내장 터미널**

> VS Code 화면 아래쪽에 열리는 명령어 입력 창입니다. Mac 시스템 터미널(zsh)과 동일하게 작동합니다. `Ctrl+`` 단축키로 열고 닫을 수 있습니다. 파일을 편집하면서 동시에 명령어를 실행할 수 있어 매우 편리합니다.

**터미널 (Terminal)**

> Mac에서 텍스트 명령어로 컴퓨터를 제어하는 프로그램입니다. 이 매뉴얼에서는 시스템 터미널 앱 대신 VS Code 내장 터미널을 사용합니다. 기능은 완전히 동일합니다.

**Homebrew**

> Mac 전용 패키지 관리자입니다. `brew install 프로그램이름` 한 줄로 대부분의 개발 도구를 자동 설치합니다. 공식 사이트: `brew.sh`

**Command Line Tools (Xcode CLT)**

> Apple이 제공하는 개발용 기본 도구 모음입니다. Homebrew가 내부적으로 필요로 합니다. Homebrew 설치 시 자동으로 팝업을 띄워 설치해 줍니다.

**Apple Silicon / Intel 구분**

> • **Apple Silicon**: 2020년 말 이후 출시 Mac에 사용되는 Apple 자체 칩 (M1, M2, M3, M4). 터미널 출력에서 `arm64`로 표시됩니다.
> • **Intel Mac**: 2020년 이전 Mac. 터미널 출력에서 `amd64`로 표시됩니다.
> Homebrew 설치 경로가 다르므로(Apple Silicon: `/opt/homebrew/`, Intel: `/usr/local/`), Apple Silicon Mac은 PATH 추가 설정(STEP 4-3)이 필요합니다.

**zsh / zprofile**

> Mac의 기본 셸(명령어 해석 프로그램)입니다. `~/.zprofile`은 터미널 로그인 시 자동 실행되는 설정 파일로, Homebrew PATH 설정을 여기에 추가합니다.

**PATH (환경변수)**

> 터미널이 명령어 실행 시 프로그램 파일을 찾아보는 폴더 목록입니다. PATH에 등록된 폴더의 프로그램은 어느 위치에서든 이름만으로 실행할 수 있습니다.

**Hugo Extended**

> Hugo의 확장 버전입니다. 대부분의 현대적 Hugo 테마에 필요한 SCSS/Sass 처리 기능이 포함되어 있습니다. `hugo version` 결과에 `+extended`가 있어야 합니다. Mac에서 Homebrew로 설치하면 자동으로 Extended가 설치됩니다.

**Git**

> 파일 변경 이력을 추적·관리하는 도구입니다. 변경 내용을 기록(커밋)하고 GitHub에 올리는(푸시) 작업에 사용합니다.

**커밋 (Commit)**

> 변경된 파일들을 Git에 저장하는 행위입니다. 커밋마다 메모를 남기고, 이전 커밋으로 언제든 되돌릴 수 있습니다.

**Push**

> 내 컴퓨터의 커밋 내용을 GitHub에 업로드하는 행위입니다. Push하면 사이트가 자동으로 업데이트됩니다.

**GitHub Pages**

> GitHub 저장소 파일을 웹사이트로 공개하는 무료 호스팅 서비스입니다. `사용자이름.github.io` 주소가 자동 부여됩니다.

**Gatekeeper**

> App Store 외부에서 다운로드한 앱 실행을 검사하는 Mac 보안 기능입니다. 처음 실행 시 "개발자를 확인할 수 없습니다" 경고가 뜨는 이유입니다.

**Antigravity CLI**

> Google의 AI 코딩 에이전트 터미널 버전입니다. `agy` 명령어로 실행하며, 한국어로 지시하면 코드를 자동으로 작성·수정합니다.

**OAuth**

> 외부 앱이 내 Google/GitHub 계정에 안전하게 접근하도록 허가하는 방식입니다. 비밀번호를 직접 알려주지 않고 브라우저를 통해 권한을 부여합니다.

---

## 💡 초보자 Tips

**Tip 1. VS Code 내장 터미널 하나로 통일 (Mac의 강점)**

Mac에서는 Windows와 달리 **모든 단계를 VS Code 내장 터미널 하나로** 완료할 수 있습니다. 시스템 터미널 앱을 별도로 열 필요가 없습니다. 작업 중 터미널이 필요하면 언제든 `Ctrl+``를 누르세요.

---

**Tip 2. 명령어는 반드시 복사·붙여넣기로**

이 매뉴얼의 명령어 블록은 직접 타이핑하지 마세요. 오타 하나가 오류를 만듭니다.

| 작업 | VS Code 내장 터미널 |
| --- | --- |
| 붙여넣기 | `Cmd+V` |
| 이전 명령어 불러오기 | 키보드 `↑` 방향키 |
| 실행 중인 명령어 중단 | `Ctrl+C` |

> 💡 복사는 `Cmd+C`지만, 명령어 중단은 `Ctrl+C`입니다. 헷갈리지 마세요.

---

**Tip 3. 비밀번호를 입력해도 화면에 아무것도 안 보입니다**

Homebrew 설치 시 Mac 로그인 비밀번호를 입력할 때 화면에 `*` 조차 표시되지 않습니다. Mac 보안 정책으로, 완전히 정상입니다. **그냥 비밀번호를 입력하고 엔터를 누르면 됩니다.**

---

**Tip 4. Apple Silicon Mac이라면 STEP 4-3을 꼭 실행하세요**

M1/M2/M3/M4 칩 Mac에서 Homebrew PATH 설정(STEP 4-3)을 건너뛰면 이후 `brew`, `git`, `hugo` 명령어가 모두 "찾을 수 없습니다" 오류를 냅니다. 내 Mac이 Apple Silicon인지 확인하고 해당 단계를 반드시 실행하세요.

---

**Tip 5. VS Code에서 새 터미널 탭 열기**

Antigravity CLI 설치 확인(STEP 7-2)처럼 새 터미널이 필요할 때가 있습니다. 터미널 패널 오른쪽 상단의 **`+`**** 아이콘**을 클릭하면 새 터미널 탭이 열립니다. 기존 작업을 방해하지 않고 새 세션을 시작할 수 있습니다.

---

**Tip 6. ****`code .`**** 명령어를 활용하세요**

STEP 3-4에서 등록한 `code .`는 매우 유용합니다. 터미널에서 프로젝트 폴더로 이동한 뒤 `code .`를 입력하면 그 폴더가 VS Code에서 바로 열립니다.

```bash
cd ~/church-website    # 교회 홈페이지 폴더로 이동
code .                 # VS Code로 해당 폴더 열기
```

---

**Tip 7. "개발자를 확인할 수 없음" 팝업 대응**

VS Code 첫 실행 시 이 팝업이 뜰 수 있습니다.

1. **시스템 설정** (🍎 → 시스템 설정) 열기
2. **"개인 정보 보호 및 보안"** 클릭
3. 화면 아래쪽 **"그래도 허용"** 클릭 → 비밀번호 입력

또는 Finder에서 앱 파일 **우클릭 → "열기" → 팝업에서 "열기"** 클릭

---

**Tip 8. GitHub 사용자 이름은 처음에 잘 정하세요**

나중에 바꾸면 사이트 주소도 바뀌어 교인들에게 새 주소를 다시 알려야 합니다.

| 좋은 예 | 피할 것 |
| --- | --- |
| `gracechurch` | `admin`, `test` |
| `sungrakchurch` | `church123456` |
| `bethel-church` | `homepage2025` |

---

**Tip 9. Antigravity CLI 무료 플랜으로 충분합니다**

- Google 계정 로그인 시 무료 플랜 자동 적용
- 처음 셋업·가끔 수정하는 수준에서는 무료 한도로 충분
- 매주 설교·소식 업데이트는 Markdown 파일 수정만으로 가능 → AI 한도 소모 없음
- 무료 한도 초과 시 다음 날 자동 리셋

---

## ❓ FAQ (Mac 전용)

**Q1. VS Code 내장 터미널과 Mac 시스템 터미널의 차이가 있나요?**

기능상 차이가 없습니다. VS Code 내장 터미널은 내부적으로 Mac 기본 셸(zsh)을 실행합니다. Mac에서는 모든 설치 작업을 VS Code 내장 터미널로 처리할 수 있으며, 시스템 터미널 앱을 별도로 열 필요가 없습니다.

---

**Q2. Homebrew 설치 후 ****`brew`**** 명령어가 없다고 나와요 (Apple Silicon)**

STEP 4-3의 PATH 설정이 누락된 경우입니다. VS Code 내장 터미널에서:

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
```

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
```

완료 후 VS Code 내장 터미널 새 탭(`+`) 열어서 `brew --version` 재확인

---

**Q3. Command Line Tools 팝업을 실수로 닫았어요**

VS Code 내장 터미널에서 직접 설치합니다:

```bash
xcode-select --install
```

팝업이 다시 나타납니다. **"설치"** 클릭 후 완료를 기다린 후 Homebrew 설치 명령어 재실행

---

**Q4. ****`hugo version`**** 결과에 ****`+extended`****가 없어요**

Mac에서 Homebrew로 설치하면 자동으로 Extended가 설치됩니다. 일반 에디션이 설치된 경우 재설치합니다:

```bash
brew reinstall hugo
```

완료 후 `hugo version` 재확인

---

**Q5. Antigravity CLI 설치 후 ****`agy`****가 작동하지 않아요**

VS Code 내장 터미널에서 새 탭(`+` 아이콘)을 열어 재시도합니다. 그래도 안 되면 VS Code를 완전히 닫고 다시 열어보세요. 그래도 안 되면:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zprofile
```

```bash
source ~/.zprofile
```

---

**Q6. Antigravity CLI 로그인 시 브라우저가 열리지 않아요**

터미널에 출력된 URL을 복사해 브라우저에 붙여넣기 하세요:

```plain text
If browser did not open, please visit:
https://accounts.google.com/o/oauth2/v2/auth?...
```

---

**Q7. ****`code .`**** 명령어가 작동하지 않아요**

STEP 3-4의 설정을 다시 시도합니다:

1. VS Code 실행
2. `Cmd+Shift+P` → `shell command` 입력
3. **"Shell Command: Install 'code' command in PATH"** 클릭
4. VS Code 내장 터미널 새 탭에서 `code .` 재시도

---

**Q8. macOS 업데이트 후 Homebrew나 Git이 작동하지 않아요**

macOS 메이저 업데이트 후 Command Line Tools가 초기화될 수 있습니다:

```bash
xcode-select --install
```

팝업에서 **"설치"** 클릭 → 완료 후 `git --version`, `brew --version` 재확인. 그래도 안 되면:

```bash
brew doctor
```

Homebrew가 직접 문제를 진단하고 해결 방법을 알려줍니다.

---

**Q9. GitHub 비밀번호를 잊어버렸어요**

```plain text
https://github.com/password_reset
```

접속 후 가입 시 이메일로 재설정 링크 받기

---

**Q10. VS Code 설치 후 한국어가 안 나와요**

`Cmd+Shift+P` → `Configure Display Language` 입력 → `ko` 선택 → VS Code 재시작.
언어팩이 설치되지 않은 경우: `Cmd+Shift+X` → `Korean` 검색 → **"Korean Language Pack"** 설치

---

## 다음 챕터 예고

**Chapter 3. Hugo 프로젝트 만들기 — 사이트의 뼈대 세우기**

- `~/church-website` 폴더 만들기
- `hugo new site` 명령어로 프로젝트 초기화
- 교회에 어울리는 Hugo 테마 다운로드 및 적용
- `hugo server`로 내 컴퓨터에서 미리보기
- Antigravity CLI로 교회 맞춤 메뉴·구조 설정

---

*이 매뉴얼은 2026년 5월 기준으로 작성되었습니다.도구 버전 업데이트에 따라 일부 화면이나 명령어가 달라질 수 있습니다.*
