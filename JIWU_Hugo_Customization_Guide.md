# JIWU Mission - Hugo 테마 설정 및 커스터마이징 가이드

이 문서는 **Hugoplate** 테마를 기반으로 한 JIWU Mission 홈페이지 개발 과정에서 적용된 주요 설정과 레이아웃 커스터마이징 내역을 정리한 가이드라인입니다. 다른 Hugo 프로젝트를 구축하거나 동일한 레이아웃 구조를 타 프로젝트에 이식할 때 참고하여 활용할 수 있습니다.

---

## 1. 콘텐츠 카테고리화 및 서브메뉴(메뉴 계층) 구성

콘텐츠(`blog`, `class`, `databank`)를 분류 체계별로 묶어 구조적으로 관리하고, 메인 상단 헤더의 드롭다운 메뉴로 연결되도록 구성했습니다.

### 1) Front Matter 타입 지정
`class`와 `databank` 콘텐츠 폴더 내의 `_index.md` 파일에서 `type: "blog"`로 지정하여, 블로그와 동일한 그리드 레이아웃 파일(`layouts/blog/list.html`)을 상속받아 통일된 디자인으로 렌더링하도록 설정했습니다.
- **적용 예시** (`content/class/_index.md`):
  ```yaml
  ---
  title: "Class"
  type: "blog"
  ---
  ```

### 2) 메뉴 설정 (`config/_default/menus.toml`)
각 섹션에 종속될 카테고리들을 계층화하여 `menus.toml`에 매핑해 드롭다운 서브메뉴를 구현했습니다.
```toml
[[main]]
name = "Blog"
url = "/blog/"
weight = 3
hasChildren = true

  [[main]]
  parent = "Blog"
  name = "주간 AI 트렌드"
  url = "/blog/weekly-ai-trends/"
  weight = 5

  [[main]]
  parent = "Blog"
  name = "홈페이지 만들기"
  url = "/blog/ssg/"
  weight = 8
```

---

## 2. 목록 페이지 (List Page) 레이아웃 커스터마이징

목록 페이지(`layouts/blog/list.html`)를 수정하여 **좌측 3열 카드형 콘텐츠 리스트 + 우측 1열 사이드바** 조합의 4열 그리드 레이아웃을 도입했습니다.

### 1) 3열 카드 리스트 + 1열 사이드바 구성 (`layouts/blog/list.html`)
- 본문 카드 리스트 영역을 `lg:col-9`로 설정하고 내부 그리드를 `md:col-6 lg:col-4`로 배치하여 화면 비율에 맞춰 3열로 정렬합니다.
- 우측 사이드바 영역을 `lg:col-3`로 정의하고 카테고리/태그 위젯을 로드했습니다.
- **주요 코드**:
  ```html
  <div class="row gx-5">
    <!-- blog posts (9 cols) -->
    <div class="lg:col-9">
      <div class="row post-list-row">
        {{ $paginator:= .Paginate $pages 9 }}
        {{ range $paginator.Pages }}
          <div class="md:col-6 lg:col-4 mb-14">
            {{ partial "components/blog-card" . }}
          </div>
        {{ end }}
      </div>
      {{ partial "components/pagination.html" . }}
    </div>
    <!-- sidebar (3 cols) -->
    <div class="lg:col-3">
      {{ $widget:= site.Params.widgets.sidebar }}
      {{ partialCached "widgets/widget-wrapper" ( dict "Widgets" $widget "Scope" . ) }}
    </div>
  </div>
  ```

### 2) 카드 메타 정보 제거 및 글 요약문(Summary) 200자 제한
포스트 목록 카드의 디자인 일관성과 깔끔한 그리드 뷰를 위해, 기존 카드의 **작성자(author)** 및 **카테고리(categories)** 메타 정보 목록을 숨기고, 텍스트 요약문(Summary)을 노출하도록 수정했습니다. 또한 요약문이 과도하게 길게 노출되는 현상을 방지하기 위해 HTML 태그를 제거(`plainify`)한 뒤 200자까지만 자르고 말줄임표(`...`)를 붙이도록 처리했습니다.
- **수정 대상 파일**: [blog-card.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/partials/components/blog-card.html)
- **주요 코드**:
  ```html
  <p class="mb-6">{{ .Summary | plainify | truncate 200 "..." }}</p>
  ```

---

## 3. 반응형 포스트 노출 개수 제어 (CSS 미디어 쿼리 기법)

정적 사이트 빌더인 Hugo는 화면 크기(클라이언트 뷰포트)를 동적으로 인지하지 못하므로, **최대 9개 페이지네이션**으로 카드를 생성한 다음 **CSS 미디어 쿼리**로 열 개수에 맞는 카드만 표시하고 나머지는 숨김(`display: none`) 처리하는 기법을 사용했습니다.

- **3열(데스크톱)**: 9개 포스트 노출
- **2열(태블릿)**: 8개 포스트 노출 (9번째 카드 숨김)
- **1열(모바일)**: 6개 포스트 노출 (7번째~9번째 카드 숨김)

- **적용 코드** (`assets/css/custom.css`):
  ```css
  /* Responsive Post List Limits */
  /* 1열 레이아웃: 모바일 화면 (< 768px) -> 6개만 노출 */
  @media (max-width: 767.98px) {
    .post-list-row > div:nth-child(n+7) {
      display: none;
    }
  }

  /* 2열 레이아웃: 태블릿 화면 (768px ~ 1023px) -> 8개만 노출 */
  @media (min-width: 768px) and (max-width: 1023.98px) {
    .post-list-row > div:nth-child(n+9) {
      display: none;
    }
  }
  ```

---

## 4. 메인 화면 배너 리디자인 (2열 구성 및 이미지 최적화)

기존 중앙 정렬 형태의 1열 배너 구성을 **좌측 텍스트(제목, 성경말씀, 버튼) + 우측 배너 이미지**의 2열 레이아웃으로 변경했습니다.

- **수정 대상 파일**: `layouts/home.html`
- **주요 코드**:
  ```html
  <div class="row items-center justify-between">
    <!-- 좌측 텍스트 정보 영역 -->
    <div class="lg:col-6 mb-8 lg:mb-0 text-center lg:text-left">
      <h1 class="mb-4 text-h3 lg:text-h1">
        {{ .title | markdownify }}
      </h1>
      {{ with .subtitle }}
      <p class="h4 mb-6 text-primary font-semibold tracking-wider uppercase">
        {{ . | markdownify }}
      </p>
      {{ end }}
      <p class="mb-8 text-lg">
        {{ .content | safeHTML }}
      </p>
    </div>
    <!-- 우측 이미지 영역 (이미지 최적화 처리) -->
    <div class="lg:col-6">
      {{ partial "image" (dict "Src" .image "Alt" "Banner image" "Loading" "eager" "Class" "mx-auto lg:mr-0 lg:ml-auto max-w-[80%] lg:max-w-full" "DisplayXL" "560x" ) }}
    </div>
  </div>
  ```
- **이미지 리사이징 최적화**: 2열 레이아웃으로 바뀌면서 넓어진 여백을 보완하고 로딩 속도를 향상시키기 위해 `DisplayXL` 값을 `"560x"`로 수정하여 이미지 빌드 사이즈를 30% 축소하고 에셋을 경량화했습니다.

---

## 5. 로고 이미지 다크모드 및 어두운 배경 최적화

검은색 계열의 브랜드 로고 텍스트가 어두운 배경(다크 모드 또는 항시 어두운 푸터)에서 묻혀버리는 문제를 CSS Filter를 사용하여 브라우저단에서 흑백 반전하도록 해결했습니다.

### 1) 적용 코드 (`assets/css/custom.css`)
```css
/* 다크모드 활성화 시 상단 헤더 로고 색상 반전 */
.dark-mode .header .navbar-brand img,
.dark .header .navbar-brand img {
  filter: invert(1) hue-rotate(180deg);
}

/* 상시 어두운 배경인 푸터의 로고 항상 색상 반전 & 70% 크기 축소 */
.footer-logo img {
  width: 105px !important; /* 원래 150px 로고 너비의 70% */
  height: auto !important;
  filter: invert(1) hue-rotate(180deg);
}
```

### 2) 다크 모드 푸터 로고 이중 반전(Double Inversion) 방지
푸터 로고 앵커 태그가 `logo-img` 클래스를 포함하고 있을 경우, 다크 모드 활성화 시 헤더용 반전 규칙과 푸터용 반전 규칙이 동시에 적용되어 **검은색(원래 상태)으로 재반전**되는 이슈가 발생합니다.

이를 방지하기 위해 푸터 레이아웃 파일([footer.html](file:///Users/gihyunpark/Desktop/Playground/Jiwu/jiwumission/layouts/_partials/essentials/footer.html))에서 `logo-img` 클래스를 삭제해 이중 반전을 방지하였습니다:
```html
<!-- navbar brand/logo -->
<a
  class="navbar-brand inline-block footer-logo"
  href="{{ site.Home.RelPermalink }}">
  {{ partial "logo" }}
</a>
```


---

## 6. 스타일 테마 색상 커스터마이징 (bg-[#dddddd])

기존 테마의 화려한 배경이나 원색 대비를 낮추고 은은하고 고급스러운 질감을 부여하기 위해 카테고리/태그 위젯의 배경색 및 헤더 블렌딩 효과에 부드러운 회색조인 `#dddddd` 색상을 직접 정의해 커스텀했습니다.

- **사이드바 위젯 배경색 변경**: `layouts/_partials/widgets/categories.html` 및 `tags.html` 내의 카드 배경 클래스를 `bg-[#dddddd]`로 교체.
- **사이드바 태그 목록 글자 크기 축소**: `layouts/_partials/widgets/tags.html` 내 태그 링크의 크기를 `text-xs`로 설정하고 여백을 `px-2 py-0.5`로 축소해 조밀하고 단정한 디자인을 연출.
- **헤더 타이틀 그라데이션 블렌드**: `layouts/_partials/page-header.html`에서 배경 효과를 `from-white to-[#dddddd]`로 지정하여 아래로 갈수록 부드러운 회색으로 그라데이션이 적용되도록 수정.

---

## 7. GitHub Actions 배포 자동화 (CI/CD)

GitHub Pages로 사이트를 자동 빌드 및 배포하기 위해 워크플로우 파일을 생성했습니다.

- **경로**: `.github/workflows/hogo.yml`
- **설정 내용**:
  ```yaml
  name: Deploy Hugo site to GitHub Pages

  on:
    push:
      branches: ["main"]
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  concurrency:
    group: "pages"
    cancel-in-progress: false

  jobs:
    build:
      runs-on: ubuntu-latest
      env:
        HUGO_VERSION: 0.151.0
      steps:
        - name: Checkout
          uses: actions/checkout@v4
          with:
            submodules: recursive
            fetch-depth: 0

        - name: Setup Go
          uses: actions/setup-go@v5
          with:
            go-version: "1.24"

        - name: Setup Node
          uses: actions/setup-node@v4
          with:
            node-version: "22"

        - name: Install Hugo Extended
          run: |
            wget -O ${{ runner.temp }}/hugo.deb \
              https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
            sudo dpkg -i ${{ runner.temp }}/hugo.deb

        - name: Install dependencies
          run: npm install

        - name: Setup Pages
          uses: actions/configure-pages@v5

        - name: Build site
          run: npm run build
          env:
            HUGO_ENVIRONMENT: production

        - name: Upload artifact
          uses: actions/upload-pages-artifact@v3
          with:
            path: ./public

    deploy:
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      runs-on: ubuntu-latest
      needs: build
      steps:
        - name: Deploy to GitHub Pages
          id: deployment
          uses: actions/deploy-pages@v4
  ```

---

## 8. 댓글 기능 (Comment Area) 개별 및 전체 설정

블로그 개별 포스트 하단에 표시되는 댓글 영역(OpenRemark 기반)을 전체 사이트 설정과 개별 포스트 설정(Front Matter)을 통해 On/Off 할 수 있도록 구성했습니다.

### 1) 사이트 전체 설정 (`config/_default/params.toml`)
사이트 전체에서 댓글 기능을 일괄적으로 활성화하거나 비활성화할 수 있습니다.
* **설정 파일**: [params.toml](file:///Users/gihyunpark/Desktop/jiwumission/config/_default/params.toml)
* **설정 규칙**:
  ```toml
  [open_remark]
  enable = true   # 전체 댓글창 활성화 (기본값)
  # 또는
  enable = false  # 전체 댓글창 비활성화
  ```

### 2) 포스트별 개별 설정 (Front Matter)
특정 포스트에만 댓글창을 노출하지 않거나 노출되도록 제어할 수 있습니다.
* **설정 위치**: 마크다운 파일 상단의 Front Matter 설정 영역
* **설정 규칙**:
  * **댓글 비활성화 (Off)**: `comments: false` 설정
    ```yaml
    ---
    title: "요한복음의 일곱가지 예수님의 자기 계시"
    comments: false
    ---
    ```
  * **댓글 활성화 (On)**: `comments: true`로 설정하거나 `comments` 속성 자체를 생략(기본값)합니다.

### 3) 템플릿 제어 코드 (`layouts/blog/single.html`)
위 두 가지 조건(전체 활성화 설정이 참이고, 개별 포스트의 comments가 false가 아닐 때)을 동시에 충족할 때만 댓글창이 렌더링되도록 템플릿 조건을 추가했습니다.
* **수정 파일**: [single.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/blog/single.html)
* **적용 코드**:
  ```html
  <!-- open-remark comment -->
  {{ if and site.Params.open_remark.enable (ne .Params.comments false) }}
    <div class="mt-20">
      {{ partial "open-remark.html" . }}
    </div>
  {{ end }}
  ```

---

## 9. 인용구 (Blockquote) 글로벌 스타일 커스터마이징

본문 내부의 인용구가 테마 기본값(짙은 회색 배경과 10px의 두꺼운 빨간색 왼쪽 테두리)으로 설정되어 가독성이 저하되는 것을 보완하기 위해 투명한 배경과 세련된 회색 테두리로 재정의했습니다.

* **설정 파일**: [custom.css](file:///Users/gihyunpark/Desktop/jiwumission/assets/css/custom.css)
* **적용 코드**:
  ```css
  /* Custom Blockquote Styling Override */
  .content blockquote,
  .prose blockquote,
  blockquote {
    background-color: transparent !important;
    background: transparent !important;
    border-color: #eaeaea !important;
    border-left-color: #cccccc !important;
    border-left-width: 4px !important;
  }

  /* 다크 모드용 인용구 스타일 */
  .dark .content blockquote,
  .dark .prose blockquote,
  .dark blockquote {
    background-color: transparent !important;
    background: transparent !important;
    border-color: #3e3e3e !important;
    border-left-color: #666666 !important;
    border-left-width: 4px !important;
  }
  ```

---

## 10. 설정 기반의 동적 콘텐츠 정렬 (Sorting Configuration)

각 하위 메뉴나 카테고리별로 각기 다른 정렬 규칙(제목 가나다순, 오래된순, 최신순 등)을 테마 하드코딩 없이 제어할 수 있도록 설정화하였습니다.

### 1) 정렬 구성 설정 (`config/_default/params.toml`)
`[sorting]` 테이블 하위의 `sections` 및 `terms`에 각 경로와 카테고리명의 정렬 기준을 맵으로 구성합니다.
```toml
[sorting]
  [sorting.sections]
  "/blog/second-brain/" = "title"  # 가나다순
  "/blog/singularity/" = "title"
  "/blog/affinity/" = "title"
  "/blog/ssg/" = "title"

  [sorting.terms]
  "세컨드브레인" = "title"
  "특이점" = "title"
  "affinity" = "title"
  "홈페이지 만들기" = "title"
```

### 2) 템플릿 제어 로직 (`layouts/blog/list.html` 및 `layouts/term.html`)
- **섹션 리스트**: 현재 섹션 경로(`.RelPermalink`)의 설정값을 읽어 해당 순서로 정렬합니다.
- **카테고리/태그 리스트**: 카테고리명 매칭뿐만 아니라, **글의 실제 저장 경로(ASCII)**에 시리즈 폴더명이 들어있는지 체크하는 안전한 폴백(Fallback) 방식을 적용하여 유니코드 문제를 우회했습니다.
```html
{{ $sortOrder := "date" }}
{{ if site.Params.sorting }}
  {{ $sortOrder = index site.Params.sorting.sections .RelPermalink | default "date" }}
{{ end }}

{{ if eq $sortOrder "title" }}
  {{ $pages = $pages.ByTitle }}
{{ else if eq $sortOrder "date_asc" }}
  {{ $pages = $pages.ByDate }}
{{ else }}
  {{ $pages = $pages.ByDate.Reverse }}
{{ end }}
```

---

## 11. 보안형 Git 기반 관리자 페이지 (Admin Panel)

사이트 구성(글 카드 표시 요소, 제목/요약 폰트 크기, 메뉴별 정렬 기준)을 개발 환경이 아닌 일반 운영 웹 환경에서도 UI를 통해 편리하게 수정하고 바로 반영할 수 있도록 Admin Panel을 탑재했습니다.

### 1) 동작 방식 및 보안성
- **경로**: `/admin/` (`static/admin/index.html`)
- **서버리스 아키텍처**: 별도의 데이터베이스 없이 GitHub REST API와 직접 통신하여 설정을 업데이트합니다.
- **안전한 토큰 보관**: GitHub Personal Access Token(PAT)을 통한 권한 인증 방식을 도입했으며, 입력된 토큰은 관리자 브라우저의 로컬 스토리지(`localStorage`)에만 안전하게 기입/보관됩니다.
- **배포 상태 감지**: GitHub Actions API를 주기적으로 폴링하여 저장 클릭 후 빌드 및 실시간 사이트 반영 진행 상황을 시각적 인디케이터(배포 중 / 배포 성공 / 배포 실패)로 대시보드에 노출합니다.

### 2) 카드 노출 제어 및 폰트 크기 동적화 (`layouts/partials/components/blog-card.html`)
Admin Panel에서 수정한 설정값(`site.Params.blog_card`)을 기반으로 카드 요소가 렌더링되도록 구현했습니다.
```html
{{ $show_thumbnail := site.Params.blog_card.show_thumbnail | default true }}
{{ $title_size := site.Params.blog_card.title_font_size | default "h5" }}

{{ if $show_thumbnail }}
  <!-- 썸네일 출력 -->
{{ end }}

{{ if site.Params.blog_card.show_title }}
  <h5 class="{{ $title_size }} mb-3">
    <a href="{{ .RelPermalink }}">{{ .Title }}</a>
  </h5>
{{ end }}
```

---

## 12. 푸터 메뉴 링크 색상 커스터마이징 (주색상 빨간색 적용)

푸터 영역에 상시 어두운 배경이 적용됨에 따라, 기본 흰색 텍스트로 표기되던 푸터 메뉴를 테마의 주색상(Primary Red)으로 변경하여 브랜드 아이덴티티를 강화하고 시인성을 개선했습니다.

* **수정 파일**: [footer.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/essentials/footer.html)
* **적용 코드**:
  ```html
  {{ range site.Menus.footer }}
    <li class="m-3 inline-block">
      <a
        class="text-primary hover:text-primary/80 transition font-medium"
        {{ if findRE `^http` .URL }}
          target="_blank" rel="noopener"
        {{ end }}
        href="{{ .URL | relLangURL }}">
        {{ .Name }}
      </a>
    </li>
  {{ end }}
  ```

---

## 13. 사역안내 카드 숏코드 다크모드 스타일 개선

메인 첫 페이지의 '사역안내' 카드 및 기타 마크다운 내 `card` 숏코드 사용처에서, 다크모드 적용 시 테마 기본 배경색과 서체 배색이 충돌하여 텍스트 판독이 어려워지던 문제를 레이아웃 마크업 수정을 통해 해결했습니다.

* **수정 파일**: [card.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/shortcodes/card.html), [cards.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/shortcodes/cards.html)
* **적용 코드** ([card.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/shortcodes/card.html)):
  ```html
  {{ $bgClass := "bg-white dark:bg-darkmode-body border border-border dark:border-darkmode-border p-7" }}
  {{ if .Parent }}
    {{ if eq (.Parent.Get "responsive") "false" }}
      {{ $bgClass = "bg-transparent border-0 p-0 py-5 first:pt-0 last:pb-0 md:bg-white md:dark:bg-darkmode-body md:border md:border-border md:dark:border-darkmode-border md:rounded-lg md:p-7 md:first:pt-7 md:last:pb-7" }}
    {{ end }}
  {{ end }}

  <div class="rounded-lg {{ $bgClass }} transition hover:shadow-lg">
  <h3 class="h5 mb-3 text-text-dark dark:text-white font-bold">{{ with .Get "icon" }}{{ . }} {{ end }}{{ .Get "title" }}</h3>
  <div class="text-sm leading-relaxed text-text-light dark:text-darkmode-text-light">{{ .Page.RenderString (dict "display" "block") .Inner }}</div>
  </div>
  ```
* **개선 요약**:
  * 배경 클래스를 잘못 상속받던 `dark:bg-darkmode-light`(연한 회색, 본래 글자색 용도)에서 사이트 기본 배경인 `dark:bg-darkmode-body`로 수정하여 카드 영역을 명확히 확보했습니다.
  * 제목 폰트에 `text-text-dark dark:text-white font-bold`를 적용해 시인성을 보장하고, 본문 텍스트 역시 고대비 회색조인 `text-text-light dark:text-darkmode-text-light`를 부여하여 눈에 잘 띄도록 설정했습니다.

---

## 14. 관리자 페이지 (Admin Panel) 레이아웃 너비 수정 및 한글 디코딩 복원

웹 브라우저 상에서 설정을 변경하는 Admin Panel(/admin/)의 시각적 안정성과 한국어 설정 데이터 노출 오류를 개선했습니다.

* **수정 파일**: [index.html](file:///Users/gihyunpark/Desktop/jiwumission/static/admin/index.html)

### 1) 대시보드 폼 좌우 가로폭 비율 수정
* **개선 배경**: Tailwind CSS 그리드 시스템 구성 시 잘못 선언되어 너비 조절이 정상 적용되지 않던 오타 클래스명을 표준 규격에 맞추어 수정했습니다.
* **적용 코드**:
  ```html
  <!-- 기존: lg:col-1 (메뉴 탭), lg:col-2 (설정 영역) -->
  <!-- 변경 후: lg:col-span-1, lg:col-span-2 -->
  <div class="lg:col-span-1 space-y-4"> ... </div>
  <div class="lg:col-span-2 space-y-8"> ... </div>
  ```
* **결과**: 화면 비율에 맞추어 좌측 메뉴 1열, 우측 본문 2열의 레이아웃이 찌그러짐 없이 쾌적하게 구현되었습니다.

### 2) GitHub API Base64 한글 깨짐 복원
* **개선 배경**: GitHub REST API에서 받아온 Base64 포맷 설정 파일 데이터를 ASCII 전용 디코더인 `atob()`로 단순 파싱하면서, 한글(3바이트 유니코드)이 깨져서 외계어로 표기되던 현상을 우회했습니다.
* **적용 코드**:
  ```javascript
  // 기존: const tomlText = atob(data.content);
  // 변경 후: 유니코드 디코딩 래핑 적용
  const tomlText = decodeURIComponent(escape(atob(data.content)));
  ```
* **결과**: "세컨드브레인", "특이점", "홈페이지 만들기"와 같이 한국어로 설정된 카테고리/태그 정렬 기준들이 대시보드 화면에 정상적인 한글 텍스트로 보존되어 출력됩니다.

---

## 15. 콘텐츠 디렉토리 구조 재편 (Blog → Class/Databank 분리)

블로그 단일 구조로 운영되던 콘텐츠를 `blog`, `class`, `databank` 세 섹션으로 재편하여 성격별로 명확히 분리했습니다.

### 1) 섹션 구조

| 섹션 | 경로 | 설명 |
|---|---|---|
| Blog | `/blog/` | 주간 AI 트렌드, 컨퍼런스 리뷰, 세컨드 브레인, 프리젠테이션, 특이점 |
| Class | `/class/` | Affinity, 정적홈페이지, LLM Wiki, 컴퓨터 기초, 청출어람, Gemini Canvas/Gems, Notebook LM |
| Databank | `/databank/` | 말씀카드, 성경 자료, 자료실 |

### 2) `_index.md` 타입 설정
`class`와 `databank`의 각 하위 폴더 `_index.md`에 `type: "blog"`를 지정하여 블로그와 동일한 그리드 레이아웃을 상속받습니다.

### 3) Front Matter `path` 필드 제거 (필수)
Obsidian에서 내보낸 마크다운 파일에는 `path:` 필드가 포함될 수 있는데, **Hugo v0.144.0 이후 이 필드는 완전히 제거되어 빌드 오류를 유발**합니다.

```bash
# content 폴더 전체에서 path: 필드 일괄 제거
find content/ -name "*.md" ! -name "_index.md" -exec sed -i '' '/^path:/d' {} \;
```

> **주의**: Obsidian wiki-sync로 파일을 가져올 때마다 `path:` 필드가 다시 추가될 수 있으므로, git push 전에 빌드 테스트(`npm run build`)를 먼저 실행하는 것을 권장합니다.

---

## 16. Admin 페이지와 로컬 작업의 관계 및 충돌 방지

### 1) Admin 페이지 동작 방식
- Admin 페이지(`/admin/`)는 GitHub REST API를 통해 **원격 저장소를 직접 수정**합니다.
- **로컬 파일에는 영향을 주지 않습니다.**

### 2) 충돌이 발생하는 패턴
```
Admin 수정 → GitHub 커밋 생성
로컬 수정 → git push → ❌ rejected (fetch first)
```

### 3) 올바른 워크플로우
```bash
# Admin 페이지에서 작업 후 로컬 작업 시작 전 반드시 실행
git pull --rebase

# 이후 로컬 작업 후 push
git add -A && git commit -m "변경 내용" && git push

# push가 rejected될 경우 한 줄로 해결
git pull --rebase && git push
```

### 4) menus.toml 관리 원칙
- Admin 페이지의 메뉴 수정과 로컬의 menus.toml 수정이 충돌할 경우, rebase 과정에서 menus.toml 충돌이 발생합니다.
- 충돌 시 **로컬 버전을 기준으로 Admin 변경 사항을 수동 병합** 후 `git rebase --continue`로 진행합니다.
- **권장**: 메뉴 수정은 Admin 페이지 또는 로컬 파일 편집 중 **한 곳에서만** 수행하세요.


