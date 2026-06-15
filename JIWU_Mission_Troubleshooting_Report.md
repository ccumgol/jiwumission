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

---

## 6. Hugo 이미지 리사이징 시 "image: unknown format" 오류

### 🔍 문제 현상
* Hugo 빌드 또는 사이트 재구축 시 특정 포스트 페이지(예: `/blog/conference-review/`)에서 다음과 유사한 에러 메시지와 함께 컴파일이 중단되는 현상:
  ```bash
  error calling Resize: failed to resize image ".../images/X-Takeover-2025.png": resize /blog/conference-review/images/X-Takeover-2025.png: image: unknown format
  ```

### 🛠️ 원인 분석
* **원인**:
  1. 마크다운의 Front Matter `image` 설정에는 `.png` 확장자로 지정되어 있었지만, 실제 파일 형식 검사(예: `file` 명령 실행) 결과 해당 이미지는 **WebP** 또는 **JPEG** 등의 다른 포맷으로 인코딩된 상태였습니다.
  2. Hugo의 이미지 파이프라인(`.Resize`) 및 Go의 표준 이미지 라이브러리는 파일의 실제 바이너리 포맷(Magic Bytes)과 파일의 확장자명을 대조하거나 디코딩하는 과정에서, 형식이 불일치하거나 기본적으로 등록되지 않은 비표준 포맷을 잘못 지정했을 때 `image: unknown format` 예외를 발생시키고 빌드를 실패처리합니다.

### 🛠️ 해결 방법
1. **실제 포맷 진단**: 터미널의 `file` 명령어를 통해 오류 대상 이미지 파일들의 실제 원본 인코딩 형식을 검사했습니다.
   * `X-Takeover-2025.png` -> `RIFF (little-endian) data, Web/P image` (실제 WebP 포맷)
   * `WWDC-2025.png` -> `RIFF (little-endian) data, Web/P image` (실제 WebP 포맷)
   * `Meta-Connect-2025.png` -> `JPEG image data` (실제 JPEG 포맷)
2. **확장자명 변경**: 실제 포맷에 맞도록 각각 파일명을 올바르게 수정했습니다.
   * `X-Takeover-2025.png` -> `X-Takeover-2025.webp`
   * `WWDC-2025.png` -> `WWDC-2025.webp`
   * `Meta-Connect-2025.png` -> `Meta-Connect-2025.jpg`
3. **콘텐츠(Front Matter) 참조 경로 수정**: 해당 글들의 마크다운 파일 상단 `image` 키의 경로 역시 수정된 확장자에 맞춰 업데이트했습니다.
4. **결과**: 확장자와 실제 인코딩 형식이 동기화되어 Hugo의 이미지 리사이징 및 webp 변환 파이프라인(`.Resize`)이 정상 작동하며 빌드가 성공적으로 통과되었습니다.

---

## 7. macOS 유니코드 정규화(NFD) 한글 카테고리/태그 정렬 인식 오류

### 🔍 문제 현상
* 로컬에서는 분류 목록이 정상적으로 정렬되었으나, 카테고리/태그 상세 페이지(예: `/categories/세컨드브레인/`)에서 글 목록이 제목순으로 정렬되지 않고 강제로 날짜 최신순으로 렌더링됨.
* **원인**: 
  1. macOS 파일 시스템은 한글 자모를 분리하여 저장하는 **NFD(Decomposed) 유니코드 정규화** 방식을 사용하지만, 소스 코드 및 Hugo TOML 템플릿의 문자열 리터럴은 **NFC(Composed)** 형식을 사용합니다.
  2. 이로 인해 `in (slice "세컨드브레인" ...) .Title` 코드 비교 연산이 유니코드 바이트 차이로 인해 실패(`false` 반환)하여 정렬 분기가 오작동하였습니다.

### 🛠️ 해결 방법
* 한글 텍스트 문자열 비교 방식 대신, 해당 카테고리 페이지에 속한 **내부 개별 글들의 상대 경로(ASCII)에 시리즈 폴더명이 들어있는지 체크**하는 방식으로 변경하여 운영체제 종속성을 완전히 우회했습니다:
  ```html
  {{ $isSeries := false }}
  {{ range $pages }}
    {{ if or (in .RelPermalink "/blog/second-brain/") (in .RelPermalink "/blog/singularity/") (in .RelPermalink "/blog/affinity/") (in .RelPermalink "/blog/ssg/") }}
      {{ $isSeries = true }}
    {{ end }}
  {{ end }}
  ```
* **결과**: 빌드 서버와 운영체제 환경의 자소 분리 여부에 무관하게 안정적으로 시리즈 카테고리 페이지가 제목순으로 자동 정렬됩니다.

---

## 8. 다크모드 내 카테고리/태그 배지 및 카드 가독성(Color Contrast) 불량

### 🔍 문제 현상
* 다크모드 활성화 시 블로그 사이드바 위젯의 카테고리명과 포스트 하단의 태그 배지 텍스트가 완전히 투명하거나 검게 묻혀 눈에 보이지 않는 버그.
* **원인**:
  1. 테마 원본의 CSS 색상 빌더(`themeGenerator.js`) 상의 충돌로 인해 다크모드용 연한 글자색인 `darkmode-light` (`#B4AFB6` / 연한 회색)이 위젯 카드 및 배지의 다크모드 배경색(`dark:bg-darkmode-light`)으로 동일하게 매핑되었습니다.
  2. 텍스트에 명시적인 글자색 클래스가 선언되지 않아 기본 글자색인 `#B4AFB6`이 상속되면서 **배경색과 글자색이 동일해지는 현상**이 유발되었습니다.

### 🛠️ 해결 방법
1. **배경색 분리**: 위젯 및 카드 영역의 다크모드 배경을 주변 배경(#1c1c1c)과 확실히 분리하기 위해, 다크모드 카드 배경색을 한 단계 밝은 회색인 **`dark:bg-[#444444]`**로 교체했습니다.
2. **글자색 명시**: 링크 텍스트에 `text-text-dark dark:text-darkmode-text-dark`를 부여해 라이트모드에서는 짙은 검은색, 다크모드에서는 고대비 흰색(`#ffffff`) 텍스트가 강제 적용되도록 마크업을 보강했습니다.
   * 수정 대상: [categories.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/widgets/categories.html), [tags.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/widgets/tags.html), [single.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/blog/single.html), [taxonomy.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/taxonomy.html)
3. **결과**: 다크모드에서도 사이드바 및 본문 하단 영역의 카테고리/태그 정보가 뛰어난 명도 대비와 시인성을 확보하여 가독성이 크게 개선되었습니다.

---

## 9. 메인 첫 페이지 '사역안내' 카드 다크모드 가독성(Contrast) 불량

### 🔍 문제 현상
* 다크모드가 적용되었을 때, 첫 페이지 하단의 '사역안내' 카드의 배경색이 본문 전체 배경과 거의 구분되지 않고, 내부 텍스트(제목 및 본문)가 어둡게 뭉개져 내용을 읽을 수 없는 가독성 저하 문제가 발생함.
* **원인**:
  1. `layouts/shortcodes/card.html` 및 `cards.html` 파일 내부에서 다크모드 배경색 클래스로 `dark:bg-darkmode-light`를 사용하고 있었습니다.
  2. 테마 변수 정의상 `darkmode-light`는 텍스트용 연한 회색(#B4AFB6)인데 이를 배경색으로 매핑하였고, 글자색 또한 명시되지 않아 부모의 다크모드 기본 글자색(#B4AFB6)이 상속되었습니다. 그 결과 배경색과 글자색이 동일하게 겹쳐 텍스트가 보이지 않았습니다.

### 🛠️ 해결 방법
1. **배경색 수정**: `card.html` 및 `cards.html` 숏코드 파일 내 다크모드 배경을 전체 바디 배경색인 **`dark:bg-darkmode-body`**로 교체하여 타 카드 레이아웃과 톤앤매너를 일치시켰습니다.
2. **글자색 명시**: 제목 `h3`에 `text-text-dark dark:text-white font-bold`를 적용해 시인성을 극대화하고, 카드 본문 `div`에 `text-text-light dark:text-darkmode-text-light`를 부여하여 어두운 배경에서도 명확히 판독되도록 CSS 설정을 보강했습니다.
3. **결과**: 다크모드 환경에서도 '사역안내' 카드 영역이 입체적으로 돋보이고 텍스트 가독성이 향상되었습니다.

---

## 10. 어두운 배경 내 푸터 메뉴 텍스트 시인성 저하

### 🔍 문제 현상
* 사이트 최하단 푸터(Footer) 영역의 메뉴 텍스트가 다크모드 활성화 여부와 무관하게 항상 어두운 네이비/블랙 배경 위에 단순 흰색(`text-white`)으로만 렌더링되어 다소 묻혀 보이고, 클릭 유도가 직관적이지 않음.

### 🛠️ 해결 방법
* 푸터 템플릿 파일([footer.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/essentials/footer.html))을 수정하여 메뉴 앵커 태그의 글씨 색상 클래스를 기본 흰색에서 테마 브랜드 주색상(Primary Red)인 **`text-primary`**로 수정했습니다.
* **결과**: 푸터 메뉴의 텍스트가 붉은색 톤으로 명확하게 강조되어 배경과 확실히 대비되며, 사용자 인터랙션(Hover 시 투명도 변화 등)이 더 한눈에 들어오도록 개선되었습니다.

---

## 11. Admin 페이지 대시보드 그리드 가로폭 찌그러짐 현상

### 🔍 문제 현상
* 로그인 성공 후 표시되는 관리자 작업 대시보드 폼 영역이 기기의 가로 해상도에 상관없이 비정상적으로 좁게 고정되어 UI 요소들이 찌그러지는 현상 발생.
* **원인**: 
  1. Tailwind CSS 그리드 시스템에서 전체를 3열(`lg:grid-cols-3`)로 선언하고 자식 요소들의 너비 가중치(span)를 적용할 때 오타 클래스명을 기입했습니다.
  2. Tailwind CSS의 올바른 룰인 `lg:col-span-1` 및 `lg:col-span-2` 대신 각각 존재하지 않는 `lg:col-1` 및 `lg:col-2`로 기재하여 가로 너비 병합이 오작동했습니다.

### 🛠️ 해결 방법
* [index.html](file:///Users/gihyunpark/Desktop/jiwumission/static/admin/index.html) 내의 오타 클래스명을 표준 클래스로 교체했습니다.
  * `lg:col-1` ➡️ **`lg:col-span-1`** (좌측 메뉴 영역)
  * `lg:col-2` ➡️ **`lg:col-span-2`** (우측 설정 입력 영역)
* **결과**: 대시보드의 가로 분할 비율이 1:2로 자연스럽게 정렬되면서 가로 찌그러짐 현상이 해결되었습니다.

---

## 12. Admin 페이지 내 한글 설정 항목(카테고리/태그 정렬 등) 텍스트 깨짐 오류

### 🔍 문제 현상
* 저장소 내의 설정(`params.toml`) 파일을 불러와 렌더링하는 과정에서 영어 키값들은 정상으로 보이지만, 한글로 입력한 카테고리명(예: "세컨드브레인", "특이점")이 완전히 깨져서 디스플레이됨.
* **원인**:
  1. GitHub REST API는 콘텐츠 내용을 Base64 문자열로 반환하며, 기존 JavaScript 로직은 브라우저 표준 `atob()` API로 디코딩을 시도했습니다.
  2. `atob()`는 1바이트의 ASCII 문자열만 처리하므로 3바이트 인코딩 형식을 지닌 한글 UTF-8 바이트 스트링이 전달될 때 문자가 바이트 유실로 깨지는 현상을 유발했습니다.

### 🛠️ 해결 방법
* 단순 `atob` 함수 디코더를 감싸는 유니코드 및 URI 복원 래퍼 패턴을 적용해 UTF-8 캐릭터 셋이 올바르게 맵핑되도록 수정했습니다:
  ```javascript
  const tomlText = decodeURIComponent(escape(atob(data.content)));
  ```
* **결과**: 파일 인코딩에 무관하게 카테고리와 태그의 모든 한글 설정값들이 Admin 화면상에 깨짐 없이 올바른 한글 텍스트로 복원되어 로딩됩니다.

---

## 13. 마크다운 Front Matter 내 'Categories' 대소문자 매칭 규칙 위반 경고

### 🔍 문제 현상
* 로컬 작업 영역 또는 에디터의 Problems 탭에 특정 포스트 및 가이드 파일과 관련하여 에러가 발생함.
* **원인**:
  1. Hugo 테마의 스키마 유효성 검사기 및 Linter는 Front Matter의 키 명칭을 소문자로 정의할 것을 강제하고 있으나, 카테고리를 대문자로 시작하는 `Categories:`로 선언하여 스키마 매칭에 실패했습니다.
  2. 대상 파일: `Apple WWDC 2026.md`, `Pax8 Beyond 2026.md`, `나의 공부법.md`, `AI 시대 인류.md` 등

### 🛠️ 해결 방법
* 각 대상 마크다운 파일들의 헤더 Front Matter 부분을 열어 `Categories:` 키를 표준 소문자 규격인 **`categories:`**로 일괄 수정했습니다.
* **결과**: Linter 스키마 유효성 검증을 통과하여 에디터의 Problems 경고가 깨끗이 소거되었습니다.

---

## 14. Admin 페이지 내 'hidden flex/grid' 중복 지정에 의한 cssConflict 경고

### 🔍 문제 현상
* `static/admin/index.html` 소스 파일에서 display 속성 충돌 경고(`cssConflict`) 4개가 에디터의 Problems 탭에 지속적으로 표시됨.
* **원인**:
  1. Tailwind CSS Linter/IntelliSense는 한 엘리먼트에 서로 다른 display 속성을 유발하는 유틸리티 클래스가 공존하면 충돌 에러로 분류합니다.
  2. HTML 정적 태그에 초기 상태 제어용인 `hidden`(display: none)과 화면 노출 시 레이아웃 형태인 `flex` 또는 `grid`를 한곳에 혼용하여 경고가 발생했습니다:
     * `<div id="build-status-container" class="hidden flex ...">`
     * `<div id="dashboard-form" class="hidden grid ...">`

### 🛠️ 해결 방법
* HTML 마크업 단계에서는 충돌을 방지하기 위해 `flex`와 `grid` 속성을 완전히 제거하여 linter를 통과시키고, 대신 자바스크립트가 동작하여 화면이 열리는 시점에 동적으로 해당 클래스를 주입하도록 로직을 변경했습니다.
  * **HTML 수정**:
    * `class="hidden flex ..."` ➡️ `class="hidden ..."` (`flex` 소거)
    * `class="hidden grid ..."` ➡️ `class="hidden ..."` (`grid` 소거)
  * **JS 수정**:
    * 화면 렌더링 시점에 `classList.add("flex")` 및 `classList.add("grid")`를 수행하도록 변경.
* **결과**: 마크업 상의 CSS 충돌 가능성이 소거되어 Problems 탭의 cssConflict 에러 4개가 모두 정상적으로 소거되었습니다.



