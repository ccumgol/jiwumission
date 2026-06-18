---
title: "교회 홈페이지 무료 제작 매뉴얼 Chapter 2. 사전 준비 — 컴퓨터에 도구 설치하기 for Windows"
date: 2026-06-01T03:16:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-18
summary: "이 문서는 Windows 환경에서 교회 홈페이지 제작을 위해 VS Code, Git, Hugo, Antigravity CLI 등 필수 도구를 설치하고 설정하는 단계별 가이드를 제공한다."
description: "이 문서는 Windows 환경에서 교회 홈페이지 제작을 위해 VS Code, Git, Hugo, Antigravity CLI 등 필수 도구를 설치하고 설정하는 단계별 가이드를 제공한다."
tags: ["잎새 33호"]
image: "images/교회-홈페이지-무료-제작-매뉴얼-Chapter-2.-사전-준비-—-컴퓨터에-도구-설치하기-for-Windows.png"
comments: false
notion_url: https://app.notion.com/p/Chapter-2-for-Windows-372091c284f680f4abe9f393e6c28ecf
notion_id: 372091c2-84f6-80f4-abe9-f393e6c28ecf
Categories: ["홈페이지"]
---

# 교회 홈페이지 무료 제작 매뉴얼

## Chapter 2. 사전 준비 — 컴퓨터에 도구 설치하기

### 🪟 Windows 전용 가이드 (개정판)

> **이 챕터는 약 60분이 소요됩니다.**
> 한 번만 하면 다시 할 필요가 없는 과정입니다. 천천히, 순서대로 따라오세요.

---

## 이 챕터에서 할 일 한눈에 보기

| 단계 | 무엇을 하는가 | 왜 필요한가 | 소요 시간 |
| --- | --- | --- | --- |
| STEP 1 | Windows 버전 확인 | 지원 여부 확인 | 2분 |
| STEP 2 | GitHub 계정 만들기 | 사이트 파일 저장소 + 무료 호스팅 | 5분 |
| STEP 3 | VS Code 설치 | **이후 모든 작업의 기반 환경** | 5분 |
| STEP 4 | Git 설치 | 파일 변경 이력 관리 + GitHub 업로드 | 5분 |
| STEP 5 | Hugo 설치 | Markdown → 웹사이트 변환 엔진 | 3분 |
| STEP 6 | Antigravity CLI 설치 | AI 코딩 보조 도구 | 10분 |
| STEP 7 | 최종 확인 | 모든 도구 정상 작동 점검 | 5분 |

---

### 📌 이 매뉴얼의 핵심 원칙

> **STEP 3에서 VS Code를 설치한 뒤, STEP 4부터는 모든 명령어를 VS Code 안에서 실행합니다.**
>
> VS Code는 단순한 편집기가 아닙니다. 파일 탐색, 코드 편집, 명령어 실행, GitHub 업로드를 한 화면에서 할 수 있는 **작업 전체의 허브**입니다. 별도의 PowerShell 창을 열고 닫을 필요가 없습니다.
> 
> 단 한 가지 예외 — **STEP 6(Antigravity CLI 설치)만** Windows 보안 정책 때문에 시스템 PowerShell을 관리자 권한으로 한 번 열어야 합니다. 그 한 번 이후로는 다시 VS Code 안에서만 작업합니다.

---

## ⚠️ 시작 전 확인 — Windows 버전

이 매뉴얼은 **Windows 10 이상**을 기준으로 합니다.

**버전 확인 방법:**

1. 키보드 `⊞ Windows 로고 키` + `I` 동시에 누르기
> `⊞` 키는 키보드 왼쪽 아래, `Ctrl`과 `Alt` 사이에 있는 창문 모양 키입니다
2. **설정** 창 열림 → 왼쪽 메뉴 **"시스템"** 클릭
3. 왼쪽 메뉴 맨 아래 **"정보"** 클릭
4. **"Windows 사양"** 항목에서 버전 확인

```plain text
확인 예시:
  에디션 : Windows 11 Home
  버전   : 23H2
```

> ❌ Windows 7 또는 8이라면 이 매뉴얼의 도구들이 작동하지 않습니다.
> Windows 10/11로 업그레이드를 먼저 진행하세요.

---

## STEP 2. GitHub 계정 만들기

### 🎯 무엇을 위한 작업인가?

완성된 홈페이지 파일을 인터넷에 올려두는 저장소이자, 전 세계 누구나 접속할 수 있는 **무료 웹 호스팅** 공간을 만드는 단계입니다. 은행 계좌처럼 한 번 만들면 앞으로 계속 사용합니다.

**이미 GitHub 계정이 있다면 STEP 3으로 건너뜁니다.**

---

**① 브라우저(엣지, 크롬 등)를 열고 아래 주소 접속:**

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

VS Code(Visual Studio Code)는 이후 모든 작업의 **허브**입니다. 설교 파일 편집, 폴더 구조 탐색, 명령어 실행, GitHub 업로드까지 VS Code 하나로 처리합니다. 이 단계를 마치면 더 이상 PowerShell 창을 따로 열 필요가 거의 없습니다.

---

### 3-1. VS Code 다운로드 및 설치

**① 브라우저에서 아래 주소 접속:**

```plain text
https://code.visualstudio.com
```

**② 화면 가운데 파란색 "Download for Windows" 버튼 클릭 → 설치 파일 다운로드**

**③ 다운로드된 파일 더블클릭 → 설치 마법사 시작**

설치 화면별 안내:

| 화면 | 해야 할 일 |
| --- | --- |
| 사용권 계약 | **"동의합니다"** 선택 → **"다음"** |
| 설치 위치 | 기본값 그대로 → **"다음"** |
| 시작 메뉴 폴더 | 기본값 그대로 → **"다음"** |
| **추가 작업 선택** | 아래 항목 체크 후 → **"다음"** |
| 설치 준비 완료 | **"설치"** 클릭 |
| 완료 | **"마침"** 클릭 |

**추가 작업 선택 화면에서 체크할 항목:**

```plain text
☑️ 파일 탐색기 파일 컨텍스트 메뉴에 'Code(으)로 열기' 작업 추가
☑️ 파일 탐색기 디렉터리 컨텍스트 메뉴에 'Code(으)로 열기' 작업 추가
☑️ PATH에 추가 (재시작 후 사용 가능)  ← 반드시 체크
```

---

### 3-2. 한국어 언어팩 설치

**① VS Code 실행**

**② 왼쪽 사이드바 맨 아래 네모 4개 아이콘 클릭** (Extensions, 확장 프로그램)

- 단축키: `Ctrl+Shift+X`

**③ 상단 검색창에 ****`Korean`**** 입력**

**④ "Korean Language Pack for Visual Studio Code" → "Install" 클릭**

**⑤ 오른쪽 아래 팝업 → "Change Language and Restart" 클릭**

**⑥ VS Code 재시작 → 한국어 메뉴 확인**

---

### 3-3. VS Code 내장 터미널 열기

**지금부터 이 터미널이 모든 명령어 실행의 기본 창이 됩니다.**

VS Code 메뉴에서 **"보기" → "터미널"** 클릭

- 단축키: `Ctrl+`` (숫자 `1` 왼쪽의 백틱 키)

VS Code 화면 아래쪽에 터미널 패널이 열립니다:

```plain text
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

PS C:\Users\사용자이름>
```

> 💡 이 터미널은 시스템 PowerShell과 동일하게 작동합니다. 앞으로 "터미널에서 입력하세요"라는 지시는 모두 이 VS Code 내장 터미널을 사용합니다.

```plain text
✅ 완료 확인: VS Code 실행 시 한국어 메뉴가 보이고, 내장 터미널이 열림
```

---

## STEP 4. Git 설치하기

### 🎯 무엇을 위한 작업인가?

Git은 파일의 변경 이력을 기록하고, 완성된 파일을 GitHub에 업로드하는 도구입니다. "저장" 버튼을 누를 때마다 스냅샷이 찍혀, 잘못 수정해도 언제든 이전 상태로 되돌릴 수 있습니다. 설교 파일을 GitHub에 올릴 때도 Git 명령어를 사용합니다.

**이제부터 모든 명령어는 VS Code 내장 터미널에서 실행합니다.**

---

### 4-1. Git 설치 파일 다운로드

VS Code 내장 터미널 또는 브라우저에서 아래 주소 접속:

```plain text
https://git-scm.com/download/win
```

- 페이지가 열리면 자동으로 다운로드 시작
- 또는 **"Click here to download"** 링크 클릭
- 다운로드 폴더에 `Git-버전번호-64-bit.exe` 저장됨

---

### 4-2. Git 설치 (단계별 클릭 안내)

다운로드된 `.exe` 파일 더블클릭 → 설치 마법사 시작

| 화면 | 해야 할 일 |
| --- | --- |
| 사용자 계정 컨트롤 | **"예"** 클릭 |
| 라이선스 동의 | **"Next"** |
| 설치 경로 | 기본값 그대로 **"Next"** |
| 컴포넌트 선택 | 기본값 그대로 **"Next"** |
| 시작 메뉴 폴더 | 기본값 그대로 **"Next"** |
| **기본 편집기 선택** | **"Use Visual Studio Code as Git's default editor"** 선택 → **"Next"** |
| **기본 브랜치 이름** | **"Override..."** 선택 → 입력창에 `main` 입력 → **"Next"** |
| 이후 모든 화면 | 기본값 그대로 **"Next"** 계속 |
| 마지막 화면 | **"Install"** → 완료 후 **"Finish"** |

---

### 4-3. Git 설치 확인

**VS Code를 완전히 닫고 다시 열기** (PATH 인식을 위해 필요)

VS Code 내장 터미널 열기 (`Ctrl+``) → 아래 명령어 복사·붙여넣기 후 엔터:

```powershell
git --version
```

**성공 시 출력:**

```plain text
git version 2.47.0.windows.2
```

---

### 4-4. Git 초기 설정

Git이 커밋(저장)할 때 기록할 이름과 이메일을 설정합니다.
따옴표 `""` 안의 내용만 본인 정보로 바꿔서 **한 줄씩 실행**하세요.

```powershell
git config --global user.name "홍길동"
```

```powershell
git config --global user.email "my-email@gmail.com"
```

> 💡 GitHub 계정 가입 시 사용한 이메일과 동일하게 입력하세요.

설정 확인:

```powershell
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

## STEP 5. Hugo 설치하기

### 🎯 무엇을 위한 작업인가?

Hugo는 이 프로젝트의 핵심 엔진입니다. 매주 작성하는 설교문·교회 소식(Markdown 파일)을 아름다운 웹페이지(HTML)로 자동 변환합니다. **반드시 Extended 버전**을 설치해야 대부분의 테마가 제대로 작동합니다.

---

### 5-1. Hugo Extended 설치

**VS Code 내장 터미널에서 아래 명령어 복사·붙여넣기 후 엔터:**

```powershell
winget install Hugo.Hugo.Extended
```

중간에 아래 문구가 나오면 `Y` 입력 후 엔터:

```plain text
Do you agree to the terms? (Y/N):
```

완료 메시지:

```plain text
Successfully installed Hugo.Hugo.Extended
```

---

### 5-2. Hugo 설치 확인

**VS Code를 완전히 닫고 다시 열기** → 내장 터미널 열기 → 아래 명령어 실행:

```powershell
hugo version
```

**성공 시 출력:**

```plain text
hugo v0.161.1+extended windows/amd64 BuildDate=...
```

> ⚠️ **`+extended`** 가 반드시 포함되어 있어야 합니다.
> 없으면 아래 FAQ Q3을 참고하세요.

> 💡 "명령을 찾을 수 없습니다" 오류가 나오면 → 컴퓨터 **재시작** 후 다시 시도

```plain text
✅ 완료 확인: hugo version 출력에 +extended 포함됨
```

---

## STEP 6. Antigravity CLI 설치하기

### 🎯 무엇을 위한 작업인가?

Antigravity CLI는 AI 코딩 에이전트입니다. `agy`라는 명령어로 실행하면, "설교 목록에 날짜와 설교자 이름을 표시해줘"처럼 한국어로 지시할 수 있습니다. AI가 직접 코드 파일을 수정해 주므로, HTML·CSS 지식 없이도 사이트를 원하는 대로 바꿀 수 있습니다.

---

> ⚠️ **이 단계만 예외적으로 시스템 PowerShell(관리자 권한)을 사용합니다.**
>
> Antigravity CLI 설치 스크립트는 시스템 폴더에 파일을 써야 하기 때문에 관리자 권한이 필요합니다. 설치가 끝난 후에는 다시 VS Code 터미널로 돌아옵니다.

---

### 6-1. 관리자 권한 PowerShell 열기

1. 화면 아래 **시작 메뉴(⊞)** 클릭
2. 검색창에 `PowerShell` 입력
3. 검색 결과에서 **"Windows PowerShell" 우클릭**
4. **"관리자 권한으로 실행"** 클릭
5. 사용자 계정 컨트롤 팝업 → **"예"** 클릭

> ✅ 제목 표시줄에 **"관리자: Windows PowerShell"** 이 표시되면 정상입니다.

---

### 6-2. 스크립트 실행 권한 설정

Windows 보안 정책으로 외부 스크립트 실행이 기본 차단되어 있습니다. 아래 명령어로 허용합니다.

**관리자 PowerShell에 복사·붙여넣기 후 엔터:**

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

확인 메시지가 나오면 `Y` 입력 후 엔터

---

### 6-3. Antigravity CLI 설치

**같은 관리자 PowerShell 창에서 복사·붙여넣기 후 엔터:**

```powershell
irm https://antigravity.google/cli/install.ps1 | iex
```

설치 진행 메시지:

```plain text
⠋ Detecting system environment...
✓ Platform detected: windows_amd64
✓ Latest available version: 1.0.0
✓ Download complete and checksum verified.
✓ Installation complete. Run 'agy' to get started.
```

> ⚠️ 바이러스 백신이 차단 경고를 보이면 **"허용"** 선택. 공식 Google 설치 스크립트입니다.

**설치 완료 후 관리자 PowerShell 창 닫기**

---

### 6-4. 설치 확인

**VS Code로 돌아와** 내장 터미널(`Ctrl+``)에서:

```powershell
agy --version
```

**성공 시 출력:**

```plain text
agy version 1.0.0
```

> 💡 "명령을 찾을 수 없습니다" 오류가 나오면 → VS Code를 완전히 닫고 다시 열거나, 컴퓨터 재시작 후 재시도

---

### 6-5. Google 계정으로 로그인

**VS Code 내장 터미널에서:**

```powershell
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

## STEP 7. 전체 설치 최종 확인

### 🎯 무엇을 위한 작업인가?

모든 도구가 정상 작동하는지 한 번에 점검합니다. 하나라도 문제가 있으면 다음 챕터로 넘어가기 전에 해결해야 합니다.

---

**VS Code 내장 터미널에서 아래 명령어를 하나씩 실행하세요:**

```powershell
git --version
```

```powershell
hugo version
```

```powershell
agy --version
```

**정상 출력 예시:**

```plain text
git version 2.47.0.windows.2
hugo v0.161.1+extended windows/amd64
agy version 1.0.0
```

> 버전 숫자는 달라도 됩니다. 형식이 맞으면 성공입니다.

---

### ✅ 최종 체크리스트

```plain text
□ GitHub 계정    : github.com 접속 시 로그인 상태로 대시보드가 보임
□ VS Code        : 실행 시 한국어 메뉴 표시, 내장 터미널 정상 작동
□ Git            : git --version 실행 시 버전 번호 출력
□ Git 설정       : git config --list 에서 user.name, user.email 확인
□ Hugo           : hugo version 출력에 +extended 포함
□ Antigravity CLI: agy --version 실행 시 버전 번호 출력
```

모든 항목이 체크되었다면 **Chapter 3**으로 넘어갈 준비 완료입니다! 🎉

---

## 📖 용어 해설

**VS Code 내장 터미널**

> VS Code 화면 아래쪽에 열리는 명령어 입력 창입니다. 시스템 PowerShell과 동일하게 작동합니다. `Ctrl+`` 단축키로 열고 닫을 수 있습니다. 이 터미널을 사용하면 파일을 편집하면서 동시에 명령어를 실행할 수 있어 매우 편리합니다.

**PowerShell**

> Windows에서 텍스트 명령어로 컴퓨터를 제어하는 프로그램입니다. VS Code 내장 터미널도 내부적으로 PowerShell을 사용합니다. 이 매뉴얼에서는 Antigravity CLI 설치 시 딱 한 번, 관리자 권한이 필요한 경우에만 시스템 PowerShell을 별도로 열도록 안내합니다.

**관리자 권한 실행**

> 일반 사용자 권한보다 높은 수준으로 프로그램을 실행하는 것입니다. 시스템 폴더에 파일을 쓰거나 설정을 변경할 때 필요합니다. PowerShell을 우클릭 → "관리자 권한으로 실행"으로 열 수 있으며, 제목 표시줄에 **"관리자:"** 가 표시됩니다.

**UAC (사용자 계정 컨트롤)**

> 프로그램이 시스템을 변경하려 할 때 "허용하시겠습니까?" 라고 묻는 Windows 보안 팝업입니다. 설치 과정에서 "예"를 클릭해야 진행됩니다.

**ExecutionPolicy (실행 정책)**

> PowerShell에서 외부 스크립트 실행 허용 여부를 제어하는 Windows 보안 설정입니다. 기본값은 차단(Restricted)이므로, Antigravity CLI 설치 전 `RemoteSigned`로 변경합니다. `RemoteSigned`는 서명된 외부 스크립트와 직접 만든 스크립트는 허용합니다.

**Winget**

> Windows 10/11에 기본 탑재된 공식 패키지 관리자입니다. `winget install 프로그램이름` 한 줄로 프로그램을 자동 설치합니다.

**PATH (환경변수)**

> 운영체제가 명령어 실행 시 프로그램 파일을 찾아보는 폴더 목록입니다. 설치 후 VS Code를 새로 열거나 컴퓨터를 재시작해야 변경된 PATH가 반영됩니다.

**Hugo Extended**

> Hugo의 확장 버전입니다. 대부분의 현대적 Hugo 테마에 필요한 SCSS/Sass 처리 기능이 포함되어 있습니다. `hugo version` 결과에 `+extended`가 있어야 합니다.

**Git**

> 파일 변경 이력을 추적·관리하는 도구입니다. 변경 내용을 기록(커밋)하고 GitHub에 올리는(푸시) 작업에 사용합니다.

**커밋 (Commit)**

> 변경된 파일들을 Git에 저장하는 행위입니다. 커밋마다 "무엇을 바꿨는지" 메모를 남깁니다. 이전 커밋으로 언제든 되돌릴 수 있습니다.

**Push**

> 내 컴퓨터의 커밋 내용을 GitHub에 업로드하는 행위입니다. Push하면 사이트가 자동으로 업데이트됩니다.

**GitHub Pages**

> GitHub 저장소 파일을 웹사이트로 공개하는 무료 호스팅 서비스입니다. `사용자이름.github.io` 주소가 자동 부여됩니다.

**Antigravity CLI**

> Google의 AI 코딩 에이전트 터미널 버전입니다. `agy` 명령어로 실행하며, 한국어로 지시하면 코드를 자동으로 작성·수정합니다.

**OAuth**

> 외부 앱이 내 Google/GitHub 계정에 안전하게 접근하도록 허가하는 방식입니다. 비밀번호를 직접 알려주지 않고 브라우저를 통해 권한을 부여합니다.

---

## 💡 초보자 Tips

**Tip 1. VS Code 내장 터미널 하나로 통일**

이 매뉴얼의 모든 명령어는 VS Code 내장 터미널에서 실행합니다. Antigravity CLI 설치(STEP 6)를 제외하면 별도 PowerShell 창을 열 필요가 없습니다. 작업 중 터미널이 필요하면 언제든 `Ctrl+``를 누르세요.

---

**Tip 2. 명령어는 반드시 복사·붙여넣기로**

이 매뉴얼의 명령어 블록은 직접 타이핑하지 마세요. 오타 하나가 오류를 만듭니다.

| 작업 | VS Code 내장 터미널 |
| --- | --- |
| 붙여넣기 | `Ctrl+V` 또는 **우클릭** |
| 이전 명령어 불러오기 | 키보드 `↑` 방향키 |
| 실행 중인 명령어 중단 | `Ctrl+C` |

---

**Tip 3. 설치 후 VS Code를 새로 열어야 할 때**

프로그램을 설치하면 PATH가 업데이트되는데, 이미 열려 있는 VS Code는 이를 바로 인식하지 못할 수 있습니다. 설치 직후 명령어가 "찾을 수 없다"고 나오면:

1. VS Code **완전히 닫기** (작업 표시줄 아이콘 우클릭 → 닫기)
2. VS Code **다시 열기**
3. 내장 터미널 열고 명령어 재시도

그래도 안 되면 **컴퓨터 재시작** → 대부분 해결됩니다.

---

**Tip 4. STEP 6 이후에는 관리자 PowerShell 불필요**

Antigravity CLI 설치가 끝나면 관리자 PowerShell은 더 이상 필요하지 않습니다. 이후 모든 작업은 VS Code 내장 터미널에서만 진행합니다.

---

**Tip 5. 바이러스 백신이 경고를 보낼 때**

Hugo, Git, Antigravity CLI는 공식적이고 안전한 도구입니다. 이 매뉴얼에 명시된 공식 URL에서 내려받은 파일이라면 바이러스 백신 경고에서 **"허용"** 을 선택해도 안전합니다.

---

**Tip 6. GitHub 사용자 이름은 처음에 잘 정하세요**

나중에 바꾸면 사이트 주소도 바뀌어 교인들에게 새 주소를 다시 알려야 합니다.

| 좋은 예 | 피할 것 |
| --- | --- |
| `gracechurch` | `admin`, `test` |
| `sungrakchurch` | `church123456` |
| `bethel-church` | `homepage2025` |

---

**Tip 7. Antigravity CLI 무료 플랜으로 충분합니다**

- Google 계정 로그인 시 무료 플랜 자동 적용
- 처음 셋업·가끔 수정하는 수준에서는 무료 한도로 충분
- 매주 설교·소식 업데이트는 Markdown 파일 수정만으로 가능 → AI 한도 소모 없음
- 무료 한도 초과 시 다음 날 자동 리셋

---

## ❓ FAQ

**Q1. VS Code 내장 터미널과 시스템 PowerShell의 차이가 있나요?**

기능상 차이가 없습니다. VS Code 내장 터미널은 내부적으로 시스템 PowerShell을 실행합니다. 다만 관리자 권한이 필요한 작업(STEP 6)은 시스템 PowerShell을 관리자 권한으로 별도로 열어야 합니다. 그 한 번 외에는 VS Code 내장 터미널로 모든 것이 가능합니다.

---

**Q2. ****`winget`**** 명령어가 없다고 나와요**

Winget은 Windows 10 1709 이상에 기본 포함되어 있습니다. 없는 경우 두 가지 방법:

**방법 1 — Microsoft Store에서 업데이트:**
시작 메뉴 → Microsoft Store → 검색창에 `앱 설치 관리자` → **"업데이트"** 또는 **"설치"** 클릭

**방법 2 — Hugo 직접 수동 설치:**
브라우저에서 `https://github.com/gohugoio/hugo/releases/latest` 접속 → Assets 항목에서 `hugo_extended_버전_windows-amd64.zip` 다운로드 → 압축 해제 후 `hugo.exe`를 `C:\hugo\` 폴더에 복사 → 시스템 환경변수 PATH에 `C:\hugo\` 추가

---

**Q3. ****`hugo version`**** 결과에 ****`+extended`****가 없어요**

일반 에디션이 설치된 경우입니다. VS Code 내장 터미널에서:

```powershell
winget uninstall Hugo.Hugo
```

```powershell
winget install Hugo.Hugo.Extended
```

완료 후 VS Code 재시작 → `hugo version` 재확인

---

**Q4. Antigravity CLI 설치 시 "스크립트 실행이 차단되었습니다" 오류**

STEP 6-2의 ExecutionPolicy 설정이 적용되지 않은 경우입니다. **관리자 PowerShell**에서:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

`Y` 입력 후 엔터 → 설치 명령어 재실행

---

**Q5. Antigravity CLI 설치 후 VS Code 터미널에서 ****`agy`****가 안 돼요**

설치 후 PATH가 반영되지 않은 경우입니다. VS Code를 완전히 닫고 다시 열어보세요. 그래도 안 되면 컴퓨터를 재시작하세요.

---

**Q6. Antigravity CLI 로그인 시 브라우저가 열리지 않아요**

터미널에 출력된 URL을 직접 복사해 브라우저에 붙여넣기 하세요:

```plain text
If browser did not open, please visit:
https://accounts.google.com/o/oauth2/v2/auth?...
```

---

**Q7. ****`git --version`****은 되는데 ****`hugo version`****이 안 돼요**

Hugo 설치 후 VS Code를 새로 열지 않은 경우가 대부분입니다. VS Code 완전히 닫기 → 다시 열기 → 내장 터미널에서 재시도. 그래도 안 되면 컴퓨터 재시작.

---

**Q8. GitHub 비밀번호를 잊어버렸어요**

```plain text
https://github.com/password_reset
```

접속 후 가입 시 이메일로 재설정 링크 받기

---

**Q9. 회사 컴퓨터에서 설치가 막혀요**

회사 보안 정책으로 프로그램 설치가 제한된 경우입니다. IT 담당자에게 Hugo, Git, VS Code, Antigravity CLI 설치를 요청하거나, 개인 컴퓨터에서 작업하는 것을 권장합니다.

---

**Q10. Windows Defender가 Hugo나 agy를 악성 프로그램으로 탐지해요**

공식 URL에서 받은 파일은 안전합니다. Windows 보안 앱 열기 → **"바이러스 및 위협 방지"** → **"보호 기록"** → 차단된 항목 → **"허용"** 클릭

---

## 다음 챕터 예고

**Chapter 3. Hugo 프로젝트 만들기 — 사이트의 뼈대 세우기**

- `C:\church-website` 폴더 만들기
- `hugo new site` 명령어로 프로젝트 초기화
- 교회에 어울리는 Hugo 테마 다운로드 및 적용
- `hugo server`로 내 컴퓨터에서 미리보기
- Antigravity CLI로 교회 맞춤 메뉴·구조 설정

---

*이 매뉴얼은 2026년 5월 기준으로 작성되었습니다.도구 버전 업데이트에 따라 일부 화면이나 명령어가 달라질 수 있습니다.*
