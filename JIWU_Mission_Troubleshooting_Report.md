# JIWU Mission 웹사이트 구축 과정의 주요 문제 및 해결 방안 보고서

본 문서는 JIWU Mission 웹사이트 개발 및 배포 과정에서 발생한 기술적 문제들과 이를 해결하기 위해 적용한 구체적인 방안들을 체계적으로 정리하여 기록합니다. 향후 유사한 문제 발생 시 가이드라인으로 활용할 수 있습니다.

---

## 1. Git 푸시(Push) 오류 및 Upstream 브랜치 설정 미비

### 🔍 문제 현상
* 로컬 작업 내용을 원격 저장소에 푸시(`git push`)하려 할 때 다음과 같은 오류 메시지와 함께 명령이 실패함:
  ```bash
  fatal: The current branch main has no upstream branch.
  To push the current branch and set the remote as upstream, use
      git push --set-upstream origin main
  ```
* **원인**: 로컬 `main` 브랜치가 원격 저장소(`origin/main`)의 추적 브랜치(Tracking Branch)로 연동되어 있지 않아 발생한 현상입니다.

### 🛠️ 해결 방법
* 로컬 브랜치와 원격 브랜치를 동기화하기 위해 처음 한 번 세트업 옵션을 추가하여 푸시를 실행했습니다:
  ```bash
  git push --set-upstream origin main
  ```
* **결과**: 로컬 `main` 브랜치가 `origin/main`을 추적하도록 설정되어, 이후에는 단순 `git push` 명령만으로도 안전하게 원격 전송이 가능해졌습니다.

---

## 2. 로컬 개발 서버 포트 1313 충돌 문제 (Port Conflict)

### 🔍 문제 현상
* 로컬 환경에서 개발 서버(`npm run dev`)를 실행했으나 기본 포트인 `1313`이 아닌 임의의 포트(예: `53626`)로 서버가 열리거나 접속이 되지 않는 문제가 발생함.
* 개발 서버 로그에 다음과 같은 경고 출력 확인:
  ```bash
  [1] port 1313 already in use, attempting to use an available port
  ```
* **원인**: 이전에 실행했던 Hugo 서버 프로세스가 백그라운드에서 정상적으로 종료되지 않고 포트 `1313`을 계속 점유하고 있어 발생한 충돌입니다.

### 🛠️ 해결 방법
1. 포트 `1313`을 사용 중인 프로세스의 식별자(PID)를 검색:
   ```bash
   lsof -i :1313
   ```
2. 탐색된 좀비 Hugo 프로세스(예: PID `15115`)를 강제 종료:
   ```bash
   kill 15115
   ```
3. 프로세스 종료 확인 후 `npm run dev` 재실행.
* **결과**: 개발 서버가 포트 충돌 없이 정상적으로 `http://localhost:1313/`로 실행되었습니다.

---

## 3. Hugo 실시간 빌드(Hot-Reload) 시 화면 깨짐 및 404 오류

### 🔍 문제 현상
* 로컬 서버 구동 후 마크다운 콘텐츠나 설정을 수정하면 브라우저 화면이 완전히 unstyled 상태(CSS가 깨지는 현상)가 되거나 페이지를 찾을 수 없는(404) 상태가 됨.
* **원인**:
  1. `hugo.toml`에 운영 도메인(`https://jesusiswith.us/` 또는 `https://ccumgol.github.io/jiwumission/`)이 지정되어 있는 상태입니다.
  2. 로컬 서버 실행 시 CLI 옵션(`--baseURL http://localhost:1313/`)을 주어 초기 구동은 정상화되더라도, 코드 수정이 감지(Watcher 작동)되어 Hugo가 내부적으로 사이트를 재구축(Rebuild)할 때 `hugo.toml`을 다시 읽어 가면서 `baseURL`을 실제 운영 도메인으로 리셋하는 버그가 있습니다.
  3. 이로 인해 브라우저가 로컬 CSS/JS 리소스 파일이 아닌 배포 서버 주소의 정적 파일을 읽으려 시도하다가 로딩 실패(404)를 일으키는 현상이었습니다.

### 🛠️ 해결 방법
Hugo의 **환경별 설정 파일(Configuration Environment)** 병합 메커니즘을 적용하여 설정을 격리했습니다.
1. 개발 환경 전용 재정의 설정 파일 생성:
   * 경로: `[config/development/hugo.toml](file:///Users/gihyunpark/Desktop/jiwumission/config/development/hugo.toml)`
   * 내용:
     ```toml
     baseURL = "http://localhost:1313/"
     ```
2. **결과**:
   * 개발 모드(`hugo server` 실행 시 기본값이 `development` 환경)에서는 `config/development/hugo.toml` 파일이 우선 적용되어 리셋 버그가 발생하더라도 항상 `baseURL`이 `http://localhost:1313/`로 유지됩니다.
   * 배포 빌드(`hugo` 실행 시 기본값이 `production` 환경)에서는 위 개발 설정이 무시되고 루트의 `hugo.toml` 설정이 최종 적용되어 실제 운영용 도메인으로 완벽히 빌드됩니다.

---

## 4. SNS 링크 및 아이콘 오류 수정

### 🔍 문제 현상
* 기존 SNS 공유 및 이동 링크가 비어있거나 구형 Font Awesome 아이콘으로 작성되어 로고가 정상적으로 출력되지 않는 문제.
* Threads 링크가 다른 회사의 도메인인 `threads.com`으로 잘못 기재되어 동작하지 않음.

### 🛠️ 해결 방법
* 소셜 미디어 메타 데이터 파일인 `[social.json](file:///Users/gihyunpark/Desktop/jiwumission/data/social.json)`의 구조를 최신 Font Awesome v6 규격 및 정확한 계정 정보로 전면 수정했습니다.
  ```json
  {
    "main": [
      {
        "name": "facebook",
        "icon": "fab fa-facebook",
        "link": "https://facebook.com/ccumgol"
      },
      {
        "name": "x-twitter",
        "icon": "fab fa-x-twitter",
        "link": "https://x.com/ccumgol"
      },
      {
        "name": "threads",
        "icon": "fab fa-threads",
        "link": "https://www.threads.net/@ccumgol"
      },
      {
        "name": "instagram",
        "icon": "fab fa-instagram",
        "link": "https://www.instagram.com/ccumgol"
      }
    ]
  }
  ```
* **결과**: Facebook, X(Twitter), Threads, Instagram의 최신 브랜딩 로고가 깨짐 없이 렌더링되며, 클릭 시 사용자 프로필 채널로 정확하게 링크되도록 바로잡았습니다.

---

## 5. GLightbox 이미지 모달 무한 로딩(스피너 회전) 현상

### 🔍 문제 현상
* 포스트 목록 페이지에서 썸네일을 클릭하면 GLightbox 모달 팝업은 뜨지만, 이미지가 렌더링되지 못하고 로딩 스피너(빙글빙글 도는 아이콘)만 무한히 회전하는 현상.
* **원인**:
  1. GLightbox 앵커 `<a>` 태그의 `href` 경로에 실제 생성된 이미지의 배포 절대/상대 경로(`RelPermalink`)가 아닌, 마크다운 Front Matter의 이미지 경로 문자열(`images/요한복음의-일곱가지-예수님의-자기-계시.png`)이 가공되지 않고 그대로 들어갔습니다.
  2. 이에 따라 브라우저가 로컬 또는 운영 환경에서 존재하지 않는 주소로 이미지 요청을 보내어 404 에러를 유발하고 로딩 프로세스가 멈추게 되었습니다.

### 🛠️ 해결 방법
* [blog-card.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/partials/components/blog-card.html) 내의 썸네일 이미지 탐색 및 바인딩 로직을 개선하여 리소스 경로를 Hugo 에셋 파이프라인에서 추출하도록 수정했습니다.
  ```html
  <!-- 1. 페이지 번들 혹은 부모 섹션 리소스로부터 이미지 로드 시도 -->
  {{ if .Resources.GetMatch $image }}
    {{ $imgResource = .Resources.GetMatch $image }}
  {{ else if and .Parent .Parent.Resources (.Parent.Resources.GetMatch $image) }}
    {{ $imgResource = .Parent.Resources.GetMatch $image }}
  {{ end }}

  <!-- 2. assets 디렉토리에 파일이 존재하는 경우 파일 주소 매핑 -->
  {{ if $imgResource }}
    {{ $linkURL = $imgResource.RelPermalink }}
  {{ else if fileExists (add "assets/" (string $image)) }}
    {{ $res := resources.Get $image }}
    {{ if $res }}
      {{ $linkURL = $res.RelPermalink }}
    {{ end }}
  {{ else }}
    {{ $linkURL = $image | relURL }}
  {{ end }}
  ```
* **결과**: 리소스 위치(Bundle 내부 혹은 assets)에 구애받지 않고 빌드된 이미지의 유효한 `RelPermalink`가 GLightbox `href` 속성에 안전하게 주입되어, 썸네일 클릭 시 고해상도 이미지가 무한 대기 현상 없이 즉각적으로 표시됩니다.

