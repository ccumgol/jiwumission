# JIWU Mission 홈페이지 이슈 해결 기록

> **목적**: 제작 과정에서 만난 문제들과 해결 방법, 의사결정의 맥락을 기록한다.
> **독자**: 이 사이트를 관리하거나 교육받는 사람
> **최종 수정**: 2026-07-07

---

## 목차

| 번호 | 이슈 | 핵심 원인 |
|---|---|---|
| 1 | Git push 실패 — upstream 브랜치 미설정 | 로컬-원격 브랜치 미연결 |
| 2 | 로컬 개발 서버 포트 충돌 | 좀비 Hugo 프로세스 |
| 3 | 개발 서버 hot-reload 시 CSS 깨짐 | baseURL 리셋 버그 |
| 4 | SNS 아이콘 미표시 | 구형 Font Awesome 클래스 |
| 5 | 썸네일 클릭 시 이미지 무한 로딩 | 이미지 경로 미처리 |
| 6 | Hugo 빌드 실패 — unknown format | 파일 포맷과 확장자 불일치 |
| 7 | 한글 카테고리 정렬 무시 | macOS NFD 유니코드 문제 |
| 8 | 다크모드 카드 텍스트 안 보임 | 배경색과 글자색 동일 |
| 9 | 첫 페이지 사역안내 카드 다크모드 가독성 | 동일 원인 (다른 컴포넌트) |
| 10 | 푸터 메뉴 색상 시인성 저하 | 흰 배경 위 흰 글자 효과 |
| 11 | Admin 대시보드 레이아웃 찌그러짐 | Tailwind 클래스 오타 |
| 12 | Admin 한글 설정값 깨짐 | Base64 ASCII 디코딩 |
| 13 | 프론트매터 `Categories` 대소문자 경고 | Hugo 스키마 규칙 위반 |
| 14 | Admin `hidden flex/grid` cssConflict 경고 | CSS display 속성 충돌 |
| 15 | Hugo 빌드 실패 — `path` 필드 오류 | Hugo v0.144 폐기 필드 |
| 16 | git push rejected — 원격/로컬 커밋 불일치 | Admin 페이지의 직접 커밋 |
| 17 | 이미지 위치 오류 — `content/images/`에 방치 | 파일 정리 누락 |
| 18 | VS Code 프론트매터 필드 경고 | 에디터 스키마 불인식 |

---

## Issue 1. Git push 실패 — upstream 브랜치 미설정

**발생 시점**: 프로젝트 최초 push 시  
**현상**:
```bash
fatal: The current branch main has no upstream branch.
```

**원인**: 로컬 `main` 브랜치가 원격 저장소의 `origin/main`과 연결(tracking)되어 있지 않았습니다.  
Git은 "이 로컬 브랜치를 어느 원격 브랜치에 올릴지"를 처음에 명시적으로 알려줘야 합니다.

**해결**:
```bash
git push --set-upstream origin main
```
한 번만 실행하면 이후부터는 `git push`만으로 충분합니다.

**결론**: 새 로컬 저장소를 원격과 처음 연결할 때 반드시 한 번 실행해야 하는 초기화 명령입니다.

---

## Issue 2. 로컬 개발 서버 포트 충돌

**발생 시점**: 개발 서버를 껐다가 다시 켤 때 간헐적으로 발생  
**현상**: Hugo 서버가 포트 1313 대신 임의의 포트(예: 53626)로 열림
```bash
[1] port 1313 already in use, attempting to use an available port
```

**원인**: 이전에 실행했던 Hugo 프로세스가 정상 종료되지 않고 백그라운드에서 포트를 계속 점유.

**해결**:
```bash
# 1313 포트를 쓰는 프로세스 찾기
lsof -i :1313

# 해당 PID 강제 종료 (예: PID가 15115일 경우)
kill 15115
```

**결론**: Hugo 서버는 터미널 탭을 그냥 닫으면 완전히 종료되지 않을 수 있습니다. `Ctrl+C`로 명시적으로 종료하는 습관이 중요합니다.

---

## Issue 3. 개발 서버 실시간 새로고침(hot-reload) 시 CSS 깨짐

**발생 시점**: 파일 수정 후 브라우저 자동 새로고침 시  
**현상**: CSS가 전혀 적용되지 않은 날 것의 HTML 화면이 표시되거나 404 오류 발생

**원인**:  
1. `hugo.toml`에 운영 도메인(`https://jesusiswith.us/`)이 `baseURL`로 설정되어 있음
2. Hugo 서버가 코드 변경을 감지해 내부적으로 재빌드할 때 `hugo.toml`을 다시 읽으며 `baseURL`을 운영 도메인으로 리셋
3. 브라우저가 `localhost`가 아닌 실제 서버 주소에서 CSS/JS를 찾으려다 404 발생

**해결**: Hugo의 환경별 설정 파일 기능 활용
- `config/development/hugo.toml` 파일 생성:
```toml
baseURL = "http://localhost:1313/"
```
- Hugo 서버 실행 시 기본값이 `development` 환경이므로, 이 파일이 자동 우선 적용됨
- 빌드(`hugo` 명령)는 기본값이 `production` 환경이므로 운영 도메인 적용

**왜 이 방식을 선택했나**: 기존 `hugo.toml`을 수정하지 않고 환경별로 분리하면, 개발/운영 설정을 혼동 없이 관리할 수 있습니다.

---

## Issue 4. SNS 링크 아이콘 미표시

**발생 시점**: 초기 구축 완료 후 확인  
**현상**: 소셜 미디어 아이콘(Facebook, Twitter 등)이 빈 박스 또는 깨진 모양으로 표시됨. Threads 링크가 `threads.com`으로 잘못 설정되어 작동 안 함.

**원인**: 기존 테마 예시 데이터의 Font Awesome 아이콘 클래스명이 구버전(v5) 형식이었고, Threads의 도메인이 `threads.net`인데 `threads.com`으로 기재됨.

**해결**: `data/social.json` 파일을 Font Awesome v6 규격으로 전면 수정
```json
{
  "name": "x-twitter",
  "icon": "fab fa-x-twitter",
  "link": "https://x.com/ccumgol"
}
```

**결론**: 테마 업데이트 또는 아이콘 라이브러리 버전 변경 시 아이콘 클래스명도 함께 확인해야 합니다.

---

## Issue 5. 썸네일 클릭 시 이미지 무한 로딩(GLightbox 스피너)

**발생 시점**: 포스트 목록 페이지에서 썸네일 클릭 시  
**현상**: 이미지 확대 모달이 열리지만 로딩 스피너만 무한 회전

**원인**:  
1. GLightbox의 `<a>` 태그 `href`에 Hugo가 처리한 실제 이미지 경로 대신, 마크다운 프론트매터의 raw 문자열(`images/파일명.png`)이 그대로 들어감
2. 이 상대경로는 현재 페이지 기준으로 해석되어 존재하지 않는 URL이 됨
3. 브라우저가 404 에러를 받고 이미지 로드에 실패

**해결**: `layouts/partials/components/blog-card.html`에서 Hugo 에셋 파이프라인을 통해 실제 빌드된 경로(`RelPermalink`)를 추출하도록 수정
```html
{{ if .Resources.GetMatch $image }}
  {{ $imgResource = .Resources.GetMatch $image }}
{{ else if and .Parent .Parent.Resources (.Parent.Resources.GetMatch $image) }}
  {{ $imgResource = .Parent.Resources.GetMatch $image }}
{{ end }}
{{ if $imgResource }}
  {{ $linkURL = $imgResource.RelPermalink }}
{{ end }}
```

**왜 이 방식을 선택했나**: Hugo의 에셋 파이프라인을 거치면 파일 번들 위치에 상관없이 올바른 URL이 자동으로 생성됩니다. 하드코딩된 경로보다 훨씬 안전합니다.

---

## Issue 6. Hugo 빌드 실패 — `image: unknown format`

**발생 시점**: 특정 포스트가 있는 섹션 빌드 시  
**에러 메시지**:
```bash
error calling Resize: failed to resize image "...X-Takeover-2025.png": image: unknown format
```

**원인**: 파일 확장자는 `.png`이지만 실제 파일 내부 데이터는 WebP 또는 JPEG 형식. Hugo의 이미지 처리 라이브러리가 확장자와 실제 포맷 불일치를 감지하고 빌드를 중단.

**진단 방법**:
```bash
file 파일명.png
# 출력 예: RIFF (little-endian) data, Web/P image ← 실제로는 WebP
```

**해결**:
1. 실제 포맷에 맞게 확장자 변경 (`.png` → `.webp` 또는 `.jpg`)
2. 마크다운 프론트매터의 `image:` 경로도 함께 수정

**재발 방지**: 이미지를 업로드하기 전에 항상 실제 포맷을 확인하거나, 처음부터 `.webp`로 저장합니다.

---

## Issue 7. 한글 카테고리 정렬 무시 — macOS 유니코드 문제

**발생 시점**: 카테고리/태그 목록 페이지 접속 시  
**현상**: "세컨드브레인" 카테고리 글들이 설정한 제목순 정렬이 아닌 날짜순으로 표시됨

**원인**: macOS 파일시스템은 한글 자모를 분리(NFD)하여 저장하지만, Hugo 템플릿 코드의 문자열은 조합형(NFC)을 사용. 두 형식은 눈으로 보기엔 같은 글자지만 바이트 값이 달라서 비교 연산이 실패.

**해결**: 한글 문자열 직접 비교 대신, URL 경로(ASCII) 포함 여부로 판단하는 방식으로 변경
```html
{{ if or (in .RelPermalink "/blog/second-brain/") (in .RelPermalink "/blog/singularity/") }}
  {{ $isSeries = true }}
{{ end }}
```

**왜 이 방식을 선택했나**: URL은 항상 ASCII(영문, 숫자, 하이픈)로 구성되므로 운영체제의 유니코드 정규화 방식과 무관하게 안정적으로 비교됩니다.

---

## Issue 8. 다크모드에서 카드 텍스트가 안 보이는 현상

**발생 시점**: 다크모드 전환 시  
**현상**: 사이드바 카테고리/태그 카드에서 텍스트가 배경에 완전히 묻혀 보이지 않음

**원인**: 테마의 CSS 변수 체계에서 `darkmode-light`(`#B4AFB6`, 연한 회색)가 텍스트 색상용으로 설계되었는데, 동일 값이 카드 배경색(`dark:bg-darkmode-light`)으로도 사용됨. 결과적으로 배경색 = 글자색이 되어 텍스트가 보이지 않음.

**해결**:
1. 카드 배경을 더 어두운 색(`dark:bg-[#444444]`)으로 교체하여 텍스트와 명도 차이 확보
2. 링크 텍스트에 명시적으로 흰색 클래스(`dark:text-darkmode-text-dark`) 적용

**결론**: 테마를 커스터마이징할 때 `darkmode-light` 같은 이름이 직관적이지 않을 수 있습니다. 항상 실제 색상값(`#B4AFB6`)을 확인 후 용도에 맞게 사용해야 합니다.

---

## Issue 9. 첫 페이지 사역안내 카드 다크모드 가독성

**발생 시점**: 다크모드 전환 시  
**현상**: 홈 화면 '사역안내' 카드 전체가 배경과 구분이 안 되고, 내부 텍스트도 보이지 않음

**원인**: Issue 8과 동일한 원인(`dark:bg-darkmode-light` 잘못 사용). `layouts/shortcodes/card.html`, `cards.html`에 적용되어 있었음.

**해결**: 카드 배경을 `dark:bg-darkmode-body`(사이트 기본 배경)로 교체, 제목과 본문 텍스트에 명시적 색상 클래스 부여.

**교훈**: 한 곳에서 발견된 문제가 유사한 컴포넌트에도 같은 이유로 존재할 수 있습니다. 수정 후에는 비슷한 컴포넌트를 함께 검토하는 것이 좋습니다.

---

## Issue 10. 푸터 메뉴 색상 시인성 저하

**발생 시점**: 사이트 운영 중 디자인 검토 시  
**현상**: 항상 어두운 배경인 푸터 영역에서 메뉴 텍스트가 흰색으로만 표시되어 클릭 유도가 약함

**해결**: 푸터 메뉴 링크의 색상 클래스를 `text-white`에서 테마의 주색상인 `text-primary`(빨간색 계열)로 변경

**결론**: 어두운 배경에서는 흰색보다 브랜드 주색상이 더 눈에 잘 띄고, 사이트 아이덴티티를 강화하는 효과가 있습니다.

---

## Issue 11. Admin 대시보드 레이아웃 찌그러짐

**발생 시점**: Admin 패널(`/admin/`) 첫 도입 시  
**현상**: 관리자 페이지의 좌측 메뉴와 우측 설정 영역이 정상적인 1:2 비율로 분리되지 않고 한쪽으로 몰리거나 찌그러짐

**원인**: Tailwind CSS의 grid span 클래스 오타
- 잘못된 클래스: `lg:col-1`, `lg:col-2` (존재하지 않는 클래스)
- 올바른 클래스: `lg:col-span-1`, `lg:col-span-2`

**해결**: `static/admin/index.html`의 해당 클래스명을 표준 규격으로 수정

**결론**: Tailwind CSS 클래스명은 오타가 나도 에러를 발생시키지 않고 그냥 무시됩니다. 레이아웃이 이상하게 보이면 클래스명 오타부터 확인하는 것이 좋습니다.

---

## Issue 12. Admin 한글 설정값 깨짐

**발생 시점**: Admin 패널에서 정렬 설정 데이터 로드 시  
**현상**: "세컨드브레인", "특이점" 같은 한글 값이 깨진 외계어로 표시됨

**원인**: GitHub REST API는 파일 내용을 Base64로 인코딩해서 전달. 기존 코드가 브라우저 내장 `atob()` 함수로 디코딩했는데, `atob()`는 1바이트 ASCII만 처리 가능. 한글은 UTF-8 기준 3바이트이므로 깨짐.

**해결**: UTF-8을 올바르게 복원하는 래퍼 패턴 적용
```javascript
// 기존
const tomlText = atob(data.content);

// 수정 후
const tomlText = decodeURIComponent(escape(atob(data.content)));
```

**결론**: Base64 + 한글을 동시에 다룰 때 `atob()` 단독 사용은 위험합니다. 항상 UTF-8 복원 처리를 함께 적용해야 합니다.

---

## Issue 13. 프론트매터 `Categories` 대소문자 경고

**발생 시점**: 에디터 Problems 탭 확인 시  
**현상**: 특정 마크다운 파일들에서 `ownable(unknown-field)` 경고 발생

**원인**: Hugo 및 에디터 확장 프로그램(Ownable, Hugo Intellisense)은 프론트매터 키를 소문자로 사용하도록 정의되어 있는데, `Categories:` (대문자 C)로 작성됨.

**해결**: 해당 마크다운 파일들을 열어 `Categories:` → `categories:`로 수정

**참고**: `weekday`, `passage`, `book`, `qt_status` 같은 커스텀 필드는 Hugo 기본 스키마에 없어서 에디터가 경고를 표시하지만, **Hugo 빌드에는 전혀 영향이 없습니다**. 이런 커스텀 파라미터는 템플릿에서 `.Params.weekday`처럼 접근하면 됩니다.

---

## Issue 14. Admin `hidden flex/grid` cssConflict 경고

**발생 시점**: 에디터 Problems 탭 확인 시  
**현상**: `static/admin/index.html`에서 Tailwind CSS display 속성 충돌 경고 4개 발생

**원인**: 초기 숨김 상태를 위해 `hidden`(display: none)과 나중에 보여줄 때 사용하는 `flex` 또는 `grid`를 같은 엘리먼트에 동시에 선언. Tailwind Linter가 `none`과 `flex`가 공존하는 것을 충돌로 감지.

**해결**:
- HTML: `hidden flex` → `hidden` (flex 클래스 제거)
- JavaScript: 화면 표시 시점에 동적으로 `classList.add("flex")` 추가

**결론**: 초기 숨김 + 나중에 레이아웃 표시 패턴은 HTML이 아닌 JavaScript로 클래스를 관리하는 것이 Tailwind 규칙에 맞습니다.

---

## Issue 15. Hugo 빌드 실패 — `path` 필드 오류

**발생 시점**: Obsidian에서 내보낸 파일 업로드 후  
**에러 메시지**:
```bash
ERROR deprecated: path in front matter was deprecated in Hugo v0.144.0 and subsequently removed.
ERROR error building site: logged 1 error(s)
```

**원인**: Obsidian이 내보낸 마크다운 파일의 프론트매터에 `path:` 필드가 포함되어 있는데, Hugo v0.144.0부터 이 필드가 완전히 삭제되어 오류로 처리됨.

**해결**: `content/` 폴더 전체에서 `path:` 필드 일괄 제거
```bash
find content/ -name "*.md" ! -name "_index.md" -exec sed -i '' '/^path:/d' {} \;
```

**재발 방지**: Obsidian에서 파일을 가져올 때마다 이 필드가 다시 생길 수 있습니다. push 전에 `hugo build`로 빌드를 먼저 검증하는 것을 권장합니다.

---

## Issue 16. git push rejected — Admin 페이지와 로컬 커밋 충돌

**발생 시점**: Admin 패널 사용 후 로컬에서 push 시  
**에러 메시지**:
```bash
! [rejected] main -> main (fetch first)
error: failed to push some refs to 'https://github.com/ccumgol/jiwumission.git'
```

**원인**: Admin 패널(`/admin/`)이 GitHub REST API를 통해 원격 저장소를 직접 수정하기 때문에, 원격 저장소가 로컬보다 앞선 커밋을 가지게 됨. 이 상태에서 로컬 push를 시도하면 Git이 거절.

**해결**:
```bash
git pull --rebase && git push
```

`--rebase` 옵션은 원격 커밋 위에 로컬 커밋을 얹어주므로, 불필요한 Merge 커밋 없이 깔끔하게 해결됩니다.

**menus.toml 충돌 발생 시**:
```bash
# 충돌 파일을 수동으로 병합한 뒤
git add config/_default/menus.toml
GIT_EDITOR="true" git rebase --continue
git push
```

**원칙**: 로컬 작업 시작 전 항상 `git pull --rebase`를 먼저 실행하면 이 문제를 예방할 수 있습니다.

---

## Issue 17. 이미지 파일 위치 오류 — `content/images/`에 방치

**발생 시점**: 대규모 콘텐츠 업로드 후 이미지 경로 점검 시  
**현상**: 마크다운 파일들이 `content/blog/weekly-ai-trends/images/...`를 참조하는데, 실제 파일은 `content/images/`에 있어 이미지가 표시되지 않음

**원인**: 파일 업로드 시 이미지를 루트 `content/images/`에 일괄 넣고, 마크다운에서는 각 섹션의 `images/` 폴더를 참조하도록 작성함.

**해결**: Python 스크립트로 파일명 패턴을 분석하여 올바른 섹션 폴더로 일괄 이동
- `Affinity-*` 파일 → `content/class/affinity/images/`
- `Markdown과-Markup*` 등 → `content/class/computer-basic/images/`
- `리포지터리*` 등 → `content/class/llm-wiki/images/`

> **이유**: 파일명에 한글, 특수문자(`(`, `)`, `'` 등)가 포함된 경우 셸 명령으로 처리하면 `FileNotFound` 오류가 발생하여 Python `shutil` 라이브러리를 사용해 처리했습니다.

**원칙**: 이미지는 반드시 해당 글이 위치한 섹션의 `images/` 서브폴더에 저장해야 합니다. 루트 `content/images/`는 사용하지 않습니다.

---

## Issue 18. VS Code에서 프론트매터 커스텀 필드 경고

**발생 시점**: `daily-bible` 콘텐츠 작성 시  
**현상**: `weekday`, `passage`, `book`, `qt_status` 필드에 대해 에디터 Problems 탭에 경고 표시
```
Unknown field "weekday" — not defined in content type or...
```

**원인**: VS Code의 두 확장 프로그램(Ownable, Hugo Intellisense)이 Hugo의 기본 프론트매터 필드 목록을 알고 있는데, 위 필드들은 커스텀 파라미터이므로 "정의되지 않은 필드"로 경고를 표시.

**실제 영향**: **Hugo 빌드에는 전혀 영향 없음.** 커스텀 필드는 Hugo에서 완전히 허용되며, 템플릿에서 `.Params.weekday`처럼 정상 접근 가능.

**선택**: 에디터 경고를 그대로 유지 (VS Code 설정에서 비활성화 가능하지만 실제 빌드에 무해하므로 불필요)

**결론**: 에디터의 경고가 모두 실제 오류를 의미하지는 않습니다. Hugo 빌드 결과(`hugo build`)를 기준으로 판단해야 합니다.

---

## 업데이트 가이드

새로운 문제가 발생하면 아래 형식으로 이 파일에 추가해 주세요.

```markdown
## Issue N. 이슈 제목

**발생 시점**: 언제 발생했는지  
**현상**: 어떤 에러/증상이 발생했는지  
**원인**: 왜 발생했는지  
**해결**: 어떻게 해결했는지 (코드 포함)  
**결론/교훈**: 앞으로 어떻게 하면 좋은지
```
