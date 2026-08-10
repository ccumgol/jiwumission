---
title: "Hugo 정적홈페이지 Hybrid 설치 가이드 for Windows"
date: "2026-08-09T21:31:00.000Z"
author: "Gihyun Park"
lastmod: "2026-08-10"
summary: "이 문서는 Windows 환경에서 Antigravity IDE를 사용해 Hugo 정적 홈페이지를 설치하고, GitHub에 초기 사이트와 테마 모듈을 설정·푸시하는 과정을 단계별로 안내합니다."
description: "이 문서는 Windows 환경에서 Antigravity IDE를 사용해 Hugo 정적 홈페이지를 설치하고, GitHub에 초기 사이트와 테마 모듈을 설정·푸시하는 과정을 단계별로 안내합니다."
tags: ["잎새 43호"]
image: "images/Hugo-정적홈페이지-Hybrid-설치-가이드-for-Windows.webp"
comments: false
notion_url: "https://app.notion.com/p/Hugo-Hybrid-for-Windows-9ccd2a16b671432f8fa18120b4b8ba92"
notion_id: "9ccd2a16-b671-432f-8fa1-8120b4b8ba92"
categories: ["blog", "홈페이지"]
---

{{< youtube SxoPE5T0yiI >}}

# Hugo 정적홈페이지 Hybrid 설치 가이드 for Windows

이 문서는 Antigravity IDE에서 빈 GitHub 리포지토리를 클론한 뒤, Windows 환경에서 Hugo와 필수 도구를 설치하고 Hugo Modules 방식으로 테마를 적용한 다음, 다시 GitHub에 Push하는 과정을 정리한 가이드입니다. AI Agent와 함께 정적 홈페이지를 제작할 때 토큰 사용량을 줄이기 위해, AI에게 맡길 작업과 사용자가 직접 Antigravity IDE 터미널에서 처리할 작업을 나누어 진행합니다.

> **이 워크플로우의 원칙**
>
> - **터미널이 할 수 있는 일은 터미널로**: 결과가 정해져 있는 작업(설치, git, 서버 실행)은 명령어 복사-붙여넣기가 가장 빠르고, 토큰이 0원입니다.
> - **Agent는 "판단"이 필요한 일에만**: plan.md 해석, 콘텐츠 작성, 문서 정리처럼 내용을 이해하고 써야 하는 일만 맡깁니다.
> - **Agent 요청은 몰아서 한 번에**: 잘게 여러 번 시키면 매번 프로젝트 전체를 다시 읽으므로 토큰이 크게 낭비됩니다.

---

## 1. GitHub 리포지토리 생성 및 주소 복사

1. 브라우저에서 [GitHub](https://github.com/)에 로그인합니다.
2. 오른쪽 위의 **+** 버튼을 누른 뒤 **New repository**를 선택합니다.
3. **Repository name**에 사용할 리포지토리 이름을 입력합니다.
4. 공개 여부를 선택합니다.
  - **Public**: 누구나 볼 수 있는 공개 리포지토리
  - **Private**: 초대한 사람만 볼 수 있는 비공개 리포지토리
5. Hugo 프로젝트를 처음부터 올릴 예정이라면 README, `.gitignore`, License는 추가하지 않고 빈 리포지토리로 만듭니다.
6. **Create repository** 버튼을 눌러 리포지토리를 생성합니다.
7. 생성이 완료되면 화면에 표시되는 HTTPS 주소를 복사합니다.

```bash
https://github.com/[내_아이디]/[내_리포지토리].git
```

예를 들어 리포지토리 주소가 `https://github.com/jiwu-lab/home-b.git`라면, 이후 클론 명령어와 Hugo 모듈 초기화 과정에서 이 주소를 기준으로 사용합니다.

---

## 2. Antigravity IDE 터미널에서 GitHub 리포지토리 클론하기

1. Antigravity IDE를 실행합니다.
2. 작업할 빈 프로젝트 폴더를 엽니다.
3. IDE 안에서 터미널 창을 엽니다.
4. 터미널 위치가 프로젝트 폴더인지 확인합니다.

```powershell
pwd
```

1. GitHub에서 복사한 빈 리포지토리 주소를 사용해 현재 폴더에 다운로드합니다.

```powershell
git clone https://github.com/[내_아이디]/[내_리포지토리].git .
```

> 💡 **Tip:** 명령어 끝에 마침표(`.`)를 붙이면 새 폴더를 만들지 않고 현재 폴더에 리포지토리 내용만 내려받습니다. 단, 현재 폴더가 완전히 비어 있어야 오류가 나지 않습니다.

---

## 3. Windows용 필수 도구 설치

Windows에서는 Homebrew 대신 `winget` 또는 공식 설치 파일을 사용할 수 있습니다. 가장 간단한 방법은 Windows 기본 패키지 관리자 `winget`을 사용하는 것입니다.

### 3-1. winget 사용 가능 여부 확인

Antigravity IDE 터미널에서 아래 명령어를 실행합니다.

```powershell
winget --version
```

버전이 표시되면 `winget`을 사용할 수 있습니다. 만약 명령어를 찾을 수 없다고 나오면 Microsoft Store에서 **앱 설치 관리자(App Installer)**를 업데이트하거나 설치해야 합니다.

### 3-2. Git 설치

```powershell
winget install --id Git.Git -e
```

설치 후 터미널을 다시 열고 Git 버전을 확인합니다.

```powershell
git --version
```

### 3-3. Hugo Extended 설치

Blowfish, HugoBlox 같은 최신 Hugo 테마는 일반적으로 Hugo Extended 버전이 필요합니다.

```powershell
winget install --id Hugo.Hugo.Extended -e
```

설치 후 버전을 확인합니다.

```powershell
hugo version
```

출력 결과에 `extended`가 포함되어 있는지 확인합니다.

### 3-4. Go 설치

Hugo Modules를 사용하려면 Go가 필요합니다.

```powershell
winget install --id GoLang.Go -e
```

설치 후 버전을 확인합니다.

```powershell
go version
```

### 3-5. Node.js 설치

일부 테마나 빌드 도구에서 Node.js가 필요할 수 있습니다.

```powershell
winget install --id OpenJS.NodeJS.LTS -e
```

설치 후 버전을 확인합니다.

```powershell
node --version
npm --version
```

---

## 4. 웹사이트 뼈대 생성 및 Hugo 모듈 초기화

현재 폴더에 Hugo 사이트의 기본 구조를 생성합니다. GitHub 리포지토리를 먼저 클론했기 때문에 `.git` 폴더가 이미 존재하므로 `--force` 옵션을 사용합니다.

```powershell
# 1. Hugo 사이트 뼈대 생성
hugo new site . --force

# 2. Hugo 모듈 기능 초기화
hugo mod init [프로젝트_모듈_경로]
```

GitHub 리포지토리 주소가 `https://github.com/jiwu-lab/home-b.git`라면 아래처럼 입력하는 것을 권장합니다.

```powershell
hugo mod init github.com/jiwu-lab/home-b
```

`home-b`만 입력해도 로컬에서는 동작할 수 있지만, Hugo Modules 방식에서는 GitHub 경로 전체를 모듈 경로로 사용하는 편이 더 안전합니다.

---

## 5. 테마 적용

### 5-1. Blowfish 테마를 사용할 경우

`hugo.toml` 파일을 열고 아래 내용을 추가합니다.

```toml
[module]
  [[module.imports]]
    path = "github.com/nunocoracao/blowfish/v2"
```

### 5-2. HugoBlox 테마를 사용할 경우

HugoBlox를 사용할 경우 `path` 값은 HugoBlox에서 제공하는 모듈 경로로 바꿔야 합니다. 일반적인 HugoBlox Builder 테마 기준으로는 다음처럼 입력합니다.

```toml
[module]
  [[module.imports]]
    path = "github.com/HugoBlox/hugo-blox-builder/modules/blox-bootstrap/v5"
```

사용하는 HugoBlox 템플릿에 따라 모듈 경로가 다를 수 있으므로, 선택한 템플릿의 공식 문서나 예제 `hugo.yaml` / `config/_default/module.yaml` 파일에 적힌 `path` 값을 확인하는 것이 가장 안전합니다.

### 5-3. 테마 모듈 가져오기

설정을 추가한 뒤 Antigravity IDE 터미널에서 아래 명령어를 실행합니다.

```powershell
hugo mod get -u
```

---

## 6. 로컬 서버로 확인하기

테마가 제대로 적용되었는지 확인하기 위해 로컬 서버를 실행합니다.

```powershell
hugo server
```

브라우저에서 아래 주소로 접속합니다.

```
http://localhost:1313
```

확인이 끝나면 터미널에서 `Ctrl + C`를 눌러 서버를 종료합니다.

---

## 7. Git 커밋 및 GitHub로 Push하기

생성된 Hugo 사이트 파일과 설정 파일을 GitHub 리포지토리에 저장합니다.

```powershell
# 1. 변경된 파일 확인
git status

# 2. 변경된 파일을 스테이징
git add .

# 3. 커밋 생성
git commit -m "초기 세팅: Hugo 사이트 생성 및 테마 모듈 연결"

# 4. GitHub 원격 저장소로 Push
git push origin main
```

만약 기본 브랜치 이름이 `master`라면 마지막 명령어를 아래처럼 바꿔 실행합니다.

```powershell
git push origin master
```

🎉 **완료!** 이제 Windows 환경에서도 Antigravity IDE 터미널을 사용해 Hugo 정적 홈페이지의 기본 뼈대를 만들고, GitHub에 업로드할 수 있습니다.
