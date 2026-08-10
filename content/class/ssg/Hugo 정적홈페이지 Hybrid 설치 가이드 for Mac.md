---
title: "Hugo 정적홈페이지 Hybrid 설치 가이드 for Mac"
date: "2026-08-09T20:50:00.000Z"
author: "Gihyun Park"
lastmod: "2026-08-10"
summary: "이 가이드는 Mac에서 Homebrew로 Hugo와 필수 도구를 설치하고, Hugo Modules를 이용해 Blowfish 테마를 적용한 뒤, GitHub에 초기 사이트를 커밋하고 푸시하는 전체 과정을 단계별로 설명합니다."
description: "이 가이드는 Mac에서 Homebrew로 Hugo와 필수 도구를 설치하고, Hugo Modules를 이용해 Blowfish 테마를 적용한 뒤, GitHub에 초기 사이트를 커밋하고 푸시하는 전체 과정을 단계별로 설명합니다."
tags: ["잎새 43호"]
image: "images/Hugo-정적홈페이지-Hybrid-설치-가이드-for-Mac.webp"
comments: false
notion_url: "https://app.notion.com/p/Hugo-Hybrid-for-Mac-3b7091c284f680558a12e4ca664b2b5b"
notion_id: "3b7091c2-84f6-8055-8a12-e4ca664b2b5b"
categories: ["blog", "홈페이지"]
---

# Hugo 정적홈페이지 Hybrid 설치 가이드 for Mac

![Hugo 정적홈페이지 Hybrid 설치 가이드 for Mac](images/Hugo-정적홈페이지-Hybrid-설치-가이드-for-Mac.webp)

이 문서는 Antigravity IDE에서 빈 GitHub 리포지토리를 클론한 뒤, 터미널 명령어로 Hugo와 Blowfish 테마를 Hugo Modules 방식으로 설정하고 다시 GitHub에 Push하는 전체 과정을 정리한 가이드입니다. AI Agent와 함께 정적 홈페이지를 제작할 때 토큰 사용량을 줄이기 위해, AI에게 맡길 작업과 사용자가 직접 터미널에서 처리할 작업을 나누어 진행하는 방법을 설명합니다.

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

이 주소를 이후 `git clone` 명령어에 사용합니다.

## 2. Antigravity IDE 터미널에서 GitHub 리포지토리 클론하기

1. Antigravity IDE를 실행한 뒤, 작업할 프로젝트 폴더를 엽니다.
2. IDE 안에서 터미널 창을 엽니다.
3. 터미널 위치가 프로젝트 폴더인지 확인합니다.
```bash
pwd
```
4. GitHub에서 복사한 빈 리포지토리 주소를 사용해 현재 폴더에 다운로드합니다.
```bash
git clone <https://github.com/[내_아이디]/[내_리포지토리].git> .
```

> 💡 **Tip:** 명령어 끝에 마침표(`.`)를 붙이면 새 폴더를 만들지 않고 현재 폴더에 알맹이만 쏙 다운로드합니다. 단, 현재 폴더가 숨김 파일 하나 없이 완전히 텅 비어있어야 에러가 나지 않습니다.

## 3. Homebrew 설치 및 Hugo 필수 도구 설치

Mac 환경에서는 `Homebrew`를 사용해 Hugo와 관련 도구를 설치하는 것이 가장 편리합니다. 아래 명령어는 모두 Antigravity IDE 안의 터미널 창에서 실행합니다.

### 3-1. Homebrew 설치 여부 확인

먼저 Homebrew가 이미 설치되어 있는지 확인합니다.

```bash
brew --version
```

버전 정보가 표시되면 이미 설치된 상태입니다. 이 경우 바로 Hugo와 필수 도구 설치 단계로 넘어갑니다.

### 3-2. Homebrew 설치

`brew: command not found`처럼 표시되면 Homebrew가 설치되어 있지 않은 상태입니다. 아래 명령어를 Antigravity IDE 터미널에 입력해 설치합니다. 참고로, Homebrew의 공식 사이트 주소는 [https://brew.sh](https://brew.sh/) 입니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

설치 중 Mac 로그인 비밀번호를 요구할 수 있습니다. 비밀번호를 입력해도 화면에는 글자가 보이지 않지만 정상 입력되고 있는 것이므로, 입력 후 `Enter`를 누릅니다.

설치가 끝나면 터미널에 안내되는 `Next steps`를 확인합니다. Apple Silicon Mac(M1/M2/M3 등)에서는 보통 아래 명령어를 한 번 더 실행해야 합니다.

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

Intel Mac에서는 경로가 다를 수 있으므로, 설치 완료 화면에 표시된 안내 명령어를 그대로 복사해 실행합니다.

### 3-3. Hugo 및 필수 도구 설치

Homebrew 설치가 끝났다면 아래 명령어로 Hugo, Git, Go, Node.js를 설치합니다.

```bash
brew install hugo git go node
```

설치가 완료되면 Hugo 버전을 확인합니다.

```bash
hugo version
```

출력 결과에 `extended`가 포함되어 있는지 확인합니다. Blowfish 같은 고급 Hugo 테마는 extended 버전이 필요합니다.

*(출력 예시: **`hugo v0.164.0+extended...`**)*

## 3. 웹사이트 뼈대 생성 및 모듈 초기화

현재 폴더에 웹사이트의 기본 구조(`hugo.toml`, `content`, `layouts` 등)를 생성합니다. 리포지토리 클론으로 인해 `.git` 폴더가 존재하므로 `--force` 옵션이 필요합니다.

```bash
# 1. Hugo 사이트 뼈대 생성
hugo new site . --force

# 2. Hugo 모듈 기능 초기화
hugo mod init [프로젝트명_또는_리포지토리_이름]
```

> github 리포지토리 주소가 ‘https://github.com/jiwu-lab/home-b.git’이라면 ‘[프로젝트명_또는_리포지토리_이름]’ 부분에 ‘github.com/jiwu-lab/home-b’를 넣으면 됩니다.

*(**`go.mod`** 파일이 생성되며 모듈 기능이 활성화됩니다.)*

## 4. Blowfish 테마 적용 (Hugo Modules 방식)

Hugo Modules 방식을 사용하면 테마를 직접 복사/다운로드할 필요 없이 설정 파일에 주소만 적어두고 자동으로 연동할 수 있습니다. 아래 내용은 ‘Blowfish’ 테마를 사용할 경우를 전제합니다. 다른 테마를 사용할 때는 아래의 ‘path’ 값을 수정해야 합니다.

1. 방금 생성된 `hugo.toml` 파일을 열고, 파일 하단에 다음 내용을 추가합니다.
```toml
[module]
  [[module.imports]]
    path = "github.com/nunocoracao/blowfish/v2"
```

> 💡 **HugoBlox 테마를 사용할 경우:** `path` 값은 HugoBlox에서 제공하는 모듈 경로로 바꿔야 합니다. 일반적인 HugoBlox Builder 테마를 기준으로 하면 다음처럼 입력합니다.
>
> ```toml
> [module]
>   [[module.imports]]
>     path = "github.com/HugoBlox/hugo-blox-builder/modules/blox-bootstrap/v5"
> ```
> 
>   사용하는 HugoBlox 템플릿에 따라 모듈 경로가 다를 수 있으므로, 선택한 템플릿의 공식 문서나 예제 `hugo.yaml` / `config/_default/module.yaml` 파일에 적힌 `path` 값을 확인하는 것이 가장 안전합니다.
2. 터미널에서 아래 명령어를 실행하여 테마 파일들을 백그라운드로 가져옵니다.
```bash
hugo mod get -u
```
3. 제대로 세팅되었는지 로컬 테스트 서버를 띄워 확인해 봅니다.
```bash
hugo server
```

  *브라우저를 열고 **`http://localhost:1313`**에 접속하여 빈 웹사이트에 테마가 적용되었는지 확인합니다. 확인 후 터미널에서 **`Ctrl + C`**를 눌러 서버를 끕니다.*

## 5. Git 커밋 (Commit) 및 원격 저장소 푸시 (Push)

이제까지 작업하여 생성된 설정 파일들과 뼈대 폴더들을 묶어서 내 GitHub 리포지토리에 저장(업로드)합니다.

```bash
# 1. 변경된(생성된) 모든 파일을 장바구니(Staging Area)에 담기
git add .

# 2. 장바구니에 담긴 파일들을 확정 지으며 메모(커밋 메시지) 남기기
git commit -m "초기 세팅: Hugo 사이트 생성 및 Blowfish 모듈 연결"

# 3. 내 GitHub 원격 저장소(origin)의 main 브랜치로 업로드하기
git push origin main
```

🎉 **완료!** 이제 GitHub 리포지토리에 성공적으로 뼈대 코드들이 업로드되었으며, 글을 작성(`hugo new posts/my-first-post.md`)하고 다시 커밋/푸시하면서 사이트를 발전시켜 나갈 수 있습니다.
