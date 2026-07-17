# JIWU Mission 홈페이지 이슈 해결 기록

> **목적**: 제작 과정에서 만난 문제들과 해결 방법, 의사결정의 맥락을 기록한다.
> **독자**: 이 사이트를 관리하거나 교육받는 사람
> **최종 수정**: 2026-07-17

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
| 19 | Cloudflare 빌드 에러 — ERESOLVE / matches | npm 및 pnpm 패키지 매니저 충돌 |
| 20 | CNAME 레코드 추가 실패 — reference itself | 루트 도메인의 CNAME 설정 금지 규칙 |
| 21 | Cloudflare Pages 배포 주소에서 CSS 깨짐 | baseURL 운영 도메인 고정 버그 |
| 22 | launchd 백그라운드 스케줄러 작동 실패 | macOS TCC 보안 정책 (바탕화면 접근 차단) |
| 23 | GitHub Secret Scanning 경고 노출 | 노션 임시 S3 만료 자격 증명 및 과거 구글 API 키 잔존 이력 |
| 24 | 모바일 기기에서 SNS 공유 시 내용 무시됨 | 모바일 OS의 Universal Link 가로채기 및 앱별 쿼리스트링 파싱 버그 |
| 25 | 프론트매터 파서 경고 및 필드 누락 | Archetype 따옴표 중첩 및 서브폴더 index.md 필수 날짜 부재 |
| 26 | SNS 공유 버튼 툴팁 부재 | <a> 및 <button> 태그의 title 속성 누락 |
| 27 | 홈페이지 하단 푸터 로고 비표시 및 크기 불일치 | 테마 레이아웃 클래스 누락 및 다크모드/라이트모드 시인성 저하 |
| 28 | 푸터 영역 소셜 아이콘 개선 | 소셜 아이콘 호버 캡션 부재 및 카카오톡 비표준 아이콘 렌더링 한계 |
| 29 | 오늘의 성경 말씀(QT) 공유 기능 부재 | 팝업 모달 내부에 포스트 개별 URL 공유 기능 누락 |
| 30 | 타임존 불일치 — QT 팝업 오작동 & IT뉴스 404 | 클라이언트에서 KST 강제 날짜 계산 |
| 31 | Cloudflare↔GitHub 연결 끊김으로 자동 배포 중단 | Pages의 Git 웹훅/GitHub App 연결 해제 |
| 32 | GitHub Actions 배포 스텝 실패 (wrangler 설치) | pnpm 워크스페이스 루트 추가 차단 |
| 33 | 성경개론↔QT 자동 링크 시 문서 구조 불일치 | 섹션 제목·경계·시편 항목 형식 상이 |
| 34 | Canva 반응형 email 하이퍼링크 URL 자동 변경 불가 | 반응형 페이지 편집 API 제약 |

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

## Issue 19. Cloudflare 빌드 에러 — ERESOLVE / matches

**발생 시점**: Cloudflare Pages 첫 빌드 실행 시  
**현상**: `npm install` 도중 빌드가 실패하며 아래 에러 출력
```
npm error Cannot read properties of null (reading 'matches')
Failed: Build command exited with code: 1
```

**원인**: 저장소 내의 `pnpm-lock.yaml`을 인식한 Cloudflare Pages가 패키지를 `pnpm install`로 자동 다운로드한 상태에서, 빌드 명령어에 수동 기입된 `npm install`이 충돌을 일으키며 락파일 분석 오작동을 유발했습니다.

**해결**: Cloudflare Pages의 Build command 설정을 아래와 같이 변경하여 불필요한 패키지 설치 명령을 소거했습니다:
```bash
pnpm run project-setup && pnpm run build
```

**결론/교훈**: `pnpm` 환경이 셋업된 프로젝트에서는 빌드 머신이 자동 셋업하도록 위임하고, 명시적인 `install` 스크립트를 빌드 쉘 커맨드 체인에서 삭제해야 패키지 매니저 충돌을 피할 수 있습니다.

---

## Issue 20. CNAME 레코드 추가 실패 — CNAME content cannot reference itself

**발생 시점**: Cloudflare Pages 커스텀 도메인 추가 시  
**현상**: DNS 레코드 추가창에서 `NAME: jesusiswith.us` / `VALUE: jiwumission.pages.dev` 설정 시 알 수 없는 오류 발생
```
CNAME content cannot reference itself
```

**원인**: DNS 프로토콜 표준상 루트 도메인(`jesusiswith.us`)이 자기 자신을 대상으로 지정하는 CNAME 레코드는 직접 생성할 수 없게 설계되어 있기 때문입니다.

**해결**:
1. 표 하단의 기존 GitHub Pages를 바라보던 IP주소인 **A 레코드 4개**만 삭제합니다.
2. 수동으로 루트 CNAME을 추가하려 하지 않고, 도메인 연결 과정을 마저 완료하면 Cloudflare 시스템이 내부적으로 **CNAME Flattening** 기술을 활성화하여 루트 도메인 바인딩을 자동으로 처리해 줍니다.

**결론/교훈**: Cloudflare DNS를 이용할 때는 루트 도메인과 www 서브도메인의 Pages 연동 과정에서 복잡한 수동 매핑 없이 중복되는 예전 레코드만 정리해 주면 시스템이 자동 셋업합니다.

---

## Issue 21. Cloudflare Pages 배포 주소에서 CSS/JS 레이아웃 깨짐

**발생 시점**: Cloudflare Pages 첫 임시 배포 링크 확인 시  
**현상**: 사이트 구조 HTML만 로드되고 CSS 스타일이 적용되지 않아 화면 디자인이 모두 깨져서 나옴

**원인**: `hugo.toml`에 사이트 기준 주소인 `baseURL = "https://jesusiswith.us/"`가 하드코딩되어 빌드되었기 때문에, 임시 개발 도메인으로 들어간 브라우저가 타 도메인에 호스팅 중인 스타일시트 파일을 요청하려다 보안 정책 및 경로 비매칭으로 차단(404)이 유발되었습니다.

**해결**: Cloudflare Pages의 환경 변수 `$CF_PAGES_URL`을 Hugo 빌드 플래그로 동적으로 넘기도록 빌드 명령어를 강화했습니다:
```bash
pnpm run project-setup && pnpm run build -- --baseURL $CF_PAGES_URL
```

**결론/교훈**: 정적 사이트 빌더는 리소스 절대 경로 결정을 위해 `baseURL` 파라미터가 핵심적인 역할을 담당합니다. 멀티 환경(임시 미리보기 / 운영 배포)을 커버하려면 빌드 커맨드 단에서 가변 환경변수를 주입해야 합니다.

---

## Issue 22. launchd 백그라운드 스케줄러 작동 실패 (macOS 보안 접근 차단)

**발생 시점**: launchd 스케줄러 등록 및 구동 예약 시점  
**현상**: 지정된 시간이 지나도 자동 푸시가 작동하지 않고, `launchd_stderr.log`에 아래와 같은 에러가 발생함
```
shell-init: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted
/bin/bash: /Users/gihyunpark/Desktop/jiwumission/scripts/auto_push.sh: Operation not permitted
```
또는 `WorkingDirectory`가 설정되어 있을 때 아래 chdir 에러 유발:
```
chdir: error retrieving current directory: getcwd: cannot access parent directories: Operation not permitted
```

**원인**: macOS의 개인정보 보호 및 보안 정책(TCC)에 의해 시스템 데몬인 `launchd`가 사용자의 데스크톱(`Desktop/`) 폴더 내 리소스를 직접 건드리거나 작업 디렉토리(`WorkingDirectory`)를 변경하려 시도할 때 차단이 발생합니다.

**해결**:
1. 실행 쉘 스크립트(`auto_push.sh`) 본체와 작동 로그들을 보안 권한 차단 검열에서 제외되는 안전한 사용자 홈 디렉토리 내부 폴더인 **`~/.scripts/`** 폴더를 만들어 복사 이전했습니다.
2. `com.jiwumission.autopush.plist` 파일에서 데스크톱 폴더 접근을 원천 봉쇄하게 만드는 **`WorkingDirectory` 설정을 제거**하여 launchd가 해당 영역을 건드리지 않도록 수정했습니다. 대신 프로젝트 이동은 `auto_push.sh` 쉘 코드 최상단에서 직접 `cd`로 이동하게끔 위임 처리했습니다.

**결론/교훈**: macOS 환경에서 무인 백그라운드 스케줄러(`launchd`)를 운용할 때는, 스크립트 실행본이나 파일 출력을 `Desktop/`, `Documents/`, `Downloads/` 등의 보안 감시 구역 바깥인 `~/.scripts/`나 `/tmp/` 등의 일반 홈 디렉토리로 격리 분리해야만 TCC 차단 없는 안정적인 무인 가동을 달성할 수 있습니다.

---

## Issue 23. GitHub Secret Scanning 경고 노출 (Notion S3 임시 만료 자격 증명 및 과거 구글 API 키 히스토리)

**발생 시점**: 리포지토리 보안 점검 및 깃허브 알림 확인 시  
**현상**: GitHub의 Security 탭 내 `Secret scanning alerts` 메뉴에 아래와 같은 퍼블릭 유출(Public leak) 경고들이 다수 발생함
- `Amazon AWS Temporary Access Key ID (ASIA...)` (content/ 하위 마크다운 다수 파일)
- `Google API Key (AIzaSy...)` (config/_default/params.toml)

**원인**:
1. **임시 AWS Key**: 노션(Notion) 문서를 마크다운으로 추출(Export)할 때, PDF 등 업로드된 리소스를 불러오기 위해 노션 서버가 일시적으로 발급해 준 **1시간짜리 AWS S3 임시 보안 읽기 서명 토큰 주소**가 마크다운 본문에 그대로 포함되어 GitHub에 커밋되었습니다. 
2. **Google API Key**: params.toml 소스 코드 내부에서는 해당 키를 제거했으나, Git의 **과거 커밋 히스토리 기록** 상에 여전히 흔적이 영구적으로 남아있기 때문에 깃허브가 감지하여 경고를 유지하는 것입니다.

**해결**:
1. **임시 AWS Key**: 1시간이 지나면 자동으로 만료되어 영구 무효화되는 무해한 일회성 세션 키입니다. 보안 위협이 0%이므로 실제 조치가 불필요하지만, 깃허브의 알림 목록을 청소하기 위해 **GitHub 저장소 ➡️ Security ➡️ Secret scanning** 페이지로 들어가서 각 얼럿을 클릭한 뒤 우측 상단 **[Close alert]**을 클릭하고 **`False positive`** (오탐) 또는 **`Revoked`** (만료됨)를 선택해 닫아주었습니다.
2. **Google API Key**: 로컬 실물 파일에는 이미 제거되었으므로, **Google Cloud Console**에 접근하여 노출되었던 해당 Maps API Key를 **삭제/폐기(Delete/Revoke)** 조치하여 실질적 리스크를 영구 소멸시켰습니다. 깃허브 알림 또한 수동으로 **`Revoked`** 처리하여 닫아주었습니다.

**결론/교훈**: 
- 노션 문서 내보내기를 할 때 불필요한 첨부 파일 다운로드 경로(`[file](https://prod-files-secure.s3...)`)가 들어갔는지 push 전에 확인하여 제거하는 것이 좋습니다.
- API Key나 비밀번호 등의 민감한 정보는 소스 코드에 하드코딩하지 않고 환경 변수로 운용해야 합니다. 만약 실수로 커밋되었다면 소스에서 키를 지우는 것에 그치지 않고 **해당 키 자체를 해당 서비스 콘솔에서 즉시 폐기/재발급**해야 안전합니다.

---

## Issue 24. 모바일 기기에서 SNS 공유(Share) 시 본문 내용 무시 현상

**발생 시점**: 스마트폰(모바일 셀폰) 브라우저에서 블로그 포스트 하단의 SNS 공유 버튼 클릭 시  
**현상**: 노트북(데스크톱)에서는 해당 글의 제목과 링크 주소가 SNS 글쓰기 창에 자동 기입되지만, 스마트폰에서는 단순히 페이스북, 트위터(X) 등의 **해당 SNS 앱 홈 피드 화면만 덩그러니 열리고 글 공유 동작이 수행되지 않음.**

**원인**:
1. **유니버설 링크(Universal Link) 가로채기**: 모바일 OS(iOS, Android)는 사용자가 웹 브라우저에서 `facebook.com`이나 `x.com`이 포함된 링크를 클릭하면 브라우저에 화면을 띄우는 대신, **디바이스에 설치된 페이스북/X 네이티브 앱을 강제로 실행**시킵니다.
2. **앱 내부 딥링크 파라미터 미지원**: 웹용 공유 주소(예: `facebook.com/sharer/sharer.php?u=...` 또는 `x.com/intent/tweet?text=...`)가 모바일 OS에 의해 강제로 앱으로 연계되어 실행될 때, 모바일 앱들이 **파라미터(`?u=...`, `?text=...`)를 정상적으로 디코딩하여 앱 내부 포스팅 화면으로 매핑해 주지 못하고** 앱의 홈 피드만 보여준 채 무응답으로 끝나는 SNS 모바일 앱 자체의 설계 한계(버그)입니다.

**해결 대안**:
- **방법 1 (모바일 도메인 활용)**: 페이스북 공유 주소의 경우 일반 웹 주소 대신 모바일 웹 브라우저 렌더링을 직접 유도하기 위해 `https://m.facebook.com/sharer/sharer.php?u=...` 주소로 연동하면, 앱이 켜지지 않고 모바일 브라우저를 통해 파라미터가 포함된 글 공유가 성공할 확률이 높아집니다.
- **방법 2 (표준 Web Share API 도입)**: 스마트폰 자체의 시스템 공유 판넬(카카오톡, 문자, 에어드롭, 복사 등)을 직접 트리거하는 JavaScript `navigator.share()` API를 탑재하여 디바이스 자체의 기본 공유 기능을 실행하게끔 설계하여 앱 인터셉트 문제를 우회합니다.
- **방법 3 (Copy Link 활용)**: 이미 적용되어 있는 **[링크 복사(Copy Link)]** 기능(체크 마크 토글 버튼)을 모바일 이용자에게 안내하여 주소를 복사해 직접 붙여넣도록 유도하는 것이 실질적으로 가장 확실하고 가볍습니다.

**결론/교훈**: 모바일 플랫폼의 유니버설 링크와 네이티브 앱 연동은 웹 브라우저와 파라미터 규격이 달라 오작동을 자주 일으킵니다. 모바일 대응을 정밀하게 하려면 `navigator.share` 등 표준 브라우저 스토리지 공유 기능을 추가 기입하는 편이 안전합니다.

---

## Issue 25. 프론트매터 파서 경고 및 필드 누락

**발생 시점**: IDE 뷰어 및 Hugo 빌드 검증 단계  
**현상**:
- `archetypes/daily-it-news.md` 생성 시 YAML 구문 파싱 에러 발생.
- `content/blog/` 하위 subcategory `_index.md` 파싱 시 `Publish Date` 필드 경고 발생.

**원인**:
1. Archetype 내 Go-template 구문 `title: "{{ .Date.Format "2006년 1월 2일" }} IT뉴스"` 중 중첩된 쌍따옴표(`"`)가 YAML 파서에서 정상 해석되지 못해 에러가 발생했습니다.
2. `.sitepins/schema/blog.json` 스키마 밸리데이션 규칙상 `type: "blog"`를 갖는 모든 폴더 및 파일에 `Publish Date` 필드가 필수로 선언되어야 하지만, `_index.md`에 `date` 정보가 누락되어 있었습니다.

**해결**:
1. [daily-it-news.md](file:///Users/gihyunpark/Desktop/jiwumission/archetypes/daily-it-news.md) (L2)의 전체 타이틀 구문을 홑따옴표(`'`)로 감싸서 문자열 해석 문제를 해결했습니다:
   ```yaml
   title: '{{ .Date.Format "2006년 1월 2일" }} IT뉴스'
   ```
2. `content/blog/` 하위의 6개 카테고리 `_index.md` 프론트매터에 날짜 필드(`date: 2026-07-10T00:00:00Z`)를 추가 선언했습니다.

**결론/교훈**: Go template 내에 쌍따옴표가 포함된 문자열을 프론트매터에 기입할 때는 전체 값을 홑따옴표(`'`)로 안전하게 감싸서 YAML 파서의 충돌을 방지해야 합니다. 또한 커스텀 정합성 스키마가 적용되어 있을 때는 서브폴더의 `_index.md` 파일도 스키마 규칙을 충족해야 합니다.

---

## Issue 26. SNS 공유 버튼 툴팁(호버 캡션) 누락

**발생 시점**: 포스트 하단 공유 영역 웹 퍼블리싱 검증  
**현상**: Facebook, X, Reddit 등의 SNS 공유 버튼에 마우스를 올려도 각 버튼이 가리키는 대상에 대한 텍스트 캡션이 표시되지 않음.

**원인**: 공유 버튼 마크업 코드(`layouts/partials/social-share.html`) 내에 접근성 및 툴팁 제공용 HTML `title` 속성이 누락되어 있었습니다.

**해결**:
- [social-share.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/partials/social-share.html)에 구현된 각 앵커(`<a>`) 및 버튼(`<button>`) 태그에 `title` 속성을 새롭게 바인딩했습니다.
  - Facebook: `title="Share to Facebook"`
  - X: `title="Share to X"`
  - E-Mail: `title="Share to E-Mail"`
  - Reddit: `title="Share to Reddit"`
  - WhatsApp: `title="Share to WhatsApp"`
  - Telegram: `title="Share to Telegram"`
  - LinkedIn: `title="Share to LinkedIn"`
  - Pinterest: `title="Share to Pinterest"`
  - Tumblr: `title="Share to Tumblr"`
  - VK: `title="Share to VK"`
  - Fediverse: `title="Share to Fediverse"`
  - Copy Link: `title="Copy Link"`
  - Native Share: `title="System Share"`

**결론/교훈**: 사용자 경험 및 웹 접근성을 고려하여, 텍스트가 생략되고 아이콘으로만 이루어진 버튼에는 마우스 호버 및 스크린 리더 대응을 위한 `title` 및 `aria-label` 속성을 명확히 적어두는 모범사례를 준수해야 합니다.

---

## Issue 27. 홈페이지 하단 푸터 로고 비표시 및 시인성 저하

**발생 시점**: 푸터 영역 퍼블리싱 확인  
**현상**: 푸터 배경이 항상 어두운 색상(bg-theme-dark)임에도 불구하고, 로고 이미지가 반전되지 않고 검은색으로 나와 눈에 보이지 않거나 테마 레이아웃 설정이 먹히지 않음.

**원인**:
1. 테마 파일인 `themes/hugoplate/layouts/_partials/essentials/footer.html`에는 로고 앵커 태그에 `.footer-logo` 클래스가 부여되어 있지 않아, `assets/css/custom.css`에 선언된 로고 이미지 반전 및 너비 제한 코드(`.footer-logo img`)가 전혀 로드되지 못했습니다.
2. 새로 추가했던 외곽 테두리 효과(`drop-shadow`)가 로고 본래의 색상 표현과 겹쳐 복잡해져 시인성이 도리어 낮아진 부작용이 있었습니다.

**해결**:
1. 테마의 레이아웃 파일을 복사하여 로컬 경로인 [footer.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/essentials/footer.html)로 오버라이드 셋업하고, 로고 링크 태그에 `class="navbar-brand inline-block footer-logo"`를 명시적으로 보강했습니다.
2. [custom.css](file:///Users/gihyunpark/Desktop/jiwumission/assets/css/custom.css) 내의 스타일 규칙을 수정하여 로고 크기를 원래의 2/3 배율인 `100px`로 고정하고, 지저분한 테두리 드롭쉐도우를 삭제한 후 깔끔한 색상 반전 규칙(`filter: invert(1) hue-rotate(180deg);`)만 유지하도록 롤백 및 복원했습니다.

**결론/교훈**: 하위 테마 패키지의 레이아웃에 클래스가 누락되었을 때는 테마 소스를 직접 만지는 대신 로컬 오버라이드 경로(`layouts/`)에 동일하게 생성하여 안전하게 덮어쓰고 제어해야 합니다.

---

## Issue 28. 푸터 영역 소셜 아이콘 개선 (호버 캡션 추가 & 카카오톡 채널 연동)

**발생 시점**: 홈페이지 푸터 소셜 링크 이용성 검증  
**현상**:
- 푸터 우측 소셜 링크 아이콘들에 마우스 호버 툴팁(title)이 표시되지 않음.
- 카카오톡 채널로 바로 1:1 친구추가할 수 있는 아이콘이 푸터에 부재함.
- FontAwesome Free 버전에는 KakaoTalk 공식 브랜드 아이콘이 누락되어 있어 일반적인 아이콘 클래스로 표현이 불가함.

**원인**: 소셜 링크 정의 파일인 `data/social.json`과 푸터 마크업 템플릿의 설계상 접근성 툴팁 및 커스텀 SVG 브랜드 렌더링에 대한 조건부 분기 처리가 빠져 있었습니다.

**해결**:
1. [footer.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/_partials/essentials/footer.html)을 수정하여 각 소셜 아이콘 링크에 사용자 친화적 타이틀 필드(`title="{{ if eq .name "x-twitter" }}X{{ else if eq .name "kakaotalk" }}KakaoTalk{{ else }}{{ .name | humanize }}{{ end }}"`)를 연결했습니다.
2. [social.json](file:///Users/gihyunpark/Desktop/jiwumission/data/social.json)에 카카오톡 1:1 QR 추가용 주소(`http://qr.kakao.com/talk/3qfhqjklc3tn27xz8ahhiktu9m0`)를 `name: "kakaotalk"`, `icon: "kakaotalk"` 규격으로 등록했습니다.
3. 푸터 템플릿 코드 내에 조건부 분기를 생성하여, `.icon` 값이 `"kakaotalk"`일 때는 FontAwesome `<i>` 태그 대신 카카오톡 공식 로고의 **인라인 SVG 경로**(`viewBox="0 0 24 24"`)가 즉시 렌더링되도록 구현했습니다.

**결론/교훈**: 외부 라이브러리(FontAwesome 등)에 특정 국가/서비스용 브랜드 아이콘이 누락되어 있다면 인라인 SVG 렌더링 분기를 템플릿 단에 보강하여 손쉽게 호환성을 유지할 수 있습니다.

---

## Issue 29. 오늘의 성경 말씀(QT) 공유 기능 부재

**발생 시점**: 메인화면 팝업 말씀 모달 이용성 분석  
**현상**: 첫 화면 진입 시 노출되는 '오늘의 성경 말씀' 모달 창 내부에서 해당 QT의 고유 URL 주소를 외부 SNS(페이스북, X, 스레드 등)에 전송하거나 주소를 즉시 복사하는 편의 기능이 제공되지 않음.

**원인**: 모달 창의 레이아웃 디자인과 비동기 데이터 로딩 스크립트(`layouts/home.html`) 내에 현재 표시 중인 말씀의 Permalink URL 정보를 보존하고 내보내는 공유 처리 기능이 설계되지 않았습니다.

**해결**:
1. **마크다운 JSON 데이터 연계**: 각 말씀 페이지의 RESTful JSON 메타데이터 렌더러(`layouts/databank/daily-bible/single.dailybiblejson.txt`)에 `.RelPermalink` 값을 파싱해 주는 `"url"` 필드를 연동시켰습니다.
2. **모달 푸터 마크업 개편**: [home.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/home.html) 모달 푸터 영역에 5가지 공유 수단(페이스북, X, 인스타그램 링크 복사 가이드, 스레드, 모바일 시스템 공유 API) 버튼 세트를 추가했습니다.
3. **공유 브릿지 스크립트 구축**: 비동기로 불러오는 말씀의 고유 경로를 `window.location.origin + todayData.url`로 조합하여 전역 변수 `currentLoadedUrl`과 `currentLoadedTitle`에 가공 보관하도록 스크립트를 개선하고, 버튼 클릭 시 이를 활용하여 공유 윈도우를 호출하거나 복사(Clipboard copy)하는 `shareQT(platform)` 함수를 구현하여 `window` 객체에 연계시켰습니다.

**결론/교훈**: 비동기 통신을 통해 화면 내용을 수시로 갈아끼우는 모달 구조에서는, 각 변경 상태(날짜 이동 등)에 연동되는 고유 원천 주소(Permalink)를 메모리 상의 전역 상태 변수로 트래킹하고 있어야만 사용자가 보고 있는 실제 정보와 링크 사이의 불일치 없이 정확한 공유 기능을 배포할 수 있습니다.

---

## Issue 30. 타임존 불일치로 인한 성경 말씀 팝업 모달 오작동 및 IT 뉴스 404 에러

**발생 시점**: 타임존 및 자동 뉴스 빌드 검증 단계  
**현상**:
- 해외 타임존(예: 미국 New York)에서 메인 페이지 접속 시 오늘의 성경 말씀(QT) 모달 팝업이 로컬 자정이 아닌 한국 KST 자정(뉴욕 기준 오전 11시/낮 12시)에 맞추어 갱신되면서 하루에 두 번 뜨거나 제 날짜에 뜨지 않는 문제 발생.
- 메인 헤드라인 하단의 '오늘의 IT 뉴스' 버튼 클릭 시 아직 생성되지 않은 내일 날짜(한국 기준) 링크로 바인딩되어 404 페이지 에러가 발생함.

**원인**:
1. 메인 화면 JavaScript에서 날짜 계산 시 `getKSTDateString()`을 사용하여 강제로 한국 표준시(KST, UTC+9) 날짜 문자열을 생성했기 때문입니다. 이로 인해 한국 자정 시간대에 해외 사용자 브라우저는 정오를 채 지나지 않았음에도 미래 날짜(`YYYY-MM-DD`)를 반환하게 되었습니다.
2. '오늘의 IT 뉴스' 주소를 JavaScript에서 dynamic date 기반으로 매핑하여, 빌드되지 않은 뉴스 페이지를 요청하게 됨으로써 404 에러를 발생시켰습니다.

**해결**:
1. [home.html](file:///Users/gihyunpark/Desktop/jiwumission/layouts/home.html)의 말씀 모달 호출 날짜 획득 로직을 브라우저의 시스템 로컬 데이트를 기준으로 작동하는 `getLocalDateString()`으로 전면 수정했습니다.
2. 헤더/히어로 영역의 '오늘의 IT 뉴스' 버튼 링크(`hero-btn-news`)는 클라이언트 사이드 자바스크립트 바인딩을 제거하고, Hugo 템플릿 빌드 단계에서 카테고리가 `"매일의 IT뉴스"`인 포스트 중 가장 최신의 빌드 완료된 주소를 추출하도록 정적 앵커 코드로 대체했습니다.
   ```html
   {{ $latest_news := index (where site.RegularPages "Params.categories" "intersect" (slice "매일의 IT뉴스")) 0 }}
   {{ $news_url := "/blog/daily-it-news/" }}
   {{ if $latest_news }}
     {{ $news_url = $latest_news.RelPermalink }}
   {{ end }}
   <a id="hero-btn-news" class="..." href="{{ $news_url }}">
   ```

**결론/교훈**: 클라이언트 사이드에서 동적인 날짜 기준으로 REST API성 정적 파일을 호출할 때는 사용자의 브라우저 로컬 타임존 및 하루 주기(`localStorage` 매칭 등)를 세심히 설계해야 합니다. 또한, 빌드 시점 이후에 수시로 생성되는 정적 데이터 주소는 가급적 서버 사이드 Hugo 템플릿에서 직접 빌드 완료된 객체를 쿼리하여 원천적으로 404 링크 에러가 나지 않도록 방지하는 것이 좋습니다.

---

## Issue 31. Cloudflare ↔ GitHub 연결 끊김으로 자동 배포 중단

**발생 시점**: 2026년 7월 중순, `git push` 후 사이트가 갱신되지 않음
**현상**:
- `main`에 push해도 사이트(`jesusiswith.us`)가 바뀌지 않음
- 새로 올린 글·이미지가 라이브에서 **404**
- 확인 결과 **마지막 실제 배포가 7월 9일에서 멈춰 있었음**

**진단 (gh CLI로 GitHub 쪽 상태 확인)**:
```bash
gh api repos/ccumgol/jiwumission/hooks            # → []  (웹훅이 0개 = 연결 끊김)
gh api repos/ccumgol/jiwumission/commits/main/status  # → state: pending, 체크 0개
```
- 저장소 웹훅이 **하나도 없음**, 최근 커밋에 어떤 빌드 체크도 붙지 않음, GitHub Deployments도 7/9 이후 기록 없음.

**원인**: Cloudflare Pages의 **Git 연동(Cloudflare Pages GitHub App / 웹훅)이 끊겨** 저장소 웹훅이 제거된 상태. 이 경우 push가 도달해도 Cloudflare가 감지·빌드하지 못함. 기존 Pages 프로젝트에서 Git을 재연결하는 것은 Cloudflare 대시보드에서 잘 되지 않는 경우가 많음(GitHub 인증/권한 단계에서 막힘).

**해결**: 웹훅에 의존하지 않는 **GitHub Actions 배포 방식으로 전환**.
1. `.github/workflows/deploy-cloudflare.yml` 추가 — GitHub Actions가 Hugo로 빌드 후 `wrangler`로 Cloudflare Pages에 직접 업로드.
2. GitHub 저장소 Secrets 2개 등록: `CLOUDFLARE_API_TOKEN`(Pages Edit 권한), `CLOUDFLARE_ACCOUNT_ID`.
3. push하면 Actions가 자동으로 빌드·배포. (급할 때 로컬에서 `pnpm run build` 후 `npx wrangler pages deploy public`로 수동 배포도 가능)

**결론/교훈**: 웹훅 기반 자동 연동은 어느 순간 **조용히 끊겨도 알기 어렵습니다**. 배포 설정이 저장소 안 파일(yaml)로 남고 로그가 투명한 **GitHub Actions 방식이 더 견고**합니다. 방식별 상세 비교와 따라하기는 [docs/github-actions-deploy.md](file:///Users/gihyunpark/Desktop/jiwumission/docs/github-actions-deploy.md) 참고.

---

## Issue 32. GitHub Actions 배포 스텝 실패 — wrangler 설치 충돌

**발생 시점**: GitHub Actions 배포 워크플로우 첫 실행
**현상**: 빌드까지는 모두 성공했으나 마지막 **배포 스텝에서만 실패**
```
ERR_PNPM_ADDING_TO_ROOT  Running this command will add the dependency to the workspace root...
##[error]🚨 Action failed
```

**원인**: 처음엔 공식 `cloudflare/wrangler-action`을 사용했는데, 이 액션이 wrangler를 `pnpm add wrangler`로 설치하려 함. 그런데 이 저장소는 **pnpm 워크스페이스**(`pnpm-workspace.yaml`)라, pnpm이 "워크스페이스 루트에 패키지를 함부로 추가하지 말라"는 보호장치(`ERR_PNPM_ADDING_TO_ROOT`)로 설치를 거부함.

**해결**: `wrangler-action` 대신 **`npx`로 wrangler를 직접 실행**하도록 배포 스텝 교체.
```yaml
- name: Deploy to Cloudflare Pages
  run: npx --yes wrangler@3 pages deploy public --project-name=jiwumission --branch=main
  env:
    CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```
`npx`는 패키지를 워크스페이스에 추가하지 않고 임시로 받아 실행하므로 충돌이 없음.

**결론/교훈**: pnpm 워크스페이스로 구성된 저장소에서는 일부 GitHub Action의 "자동 패키지 설치"가 워크스페이스 규칙과 충돌할 수 있습니다. 이럴 땐 `npx <도구> ...`로 직접 실행하는 편이 안전합니다.

---

## Issue 33. 성경개론 ↔ 매일 QT 자동 링크 시 문서 구조 불일치

**발생 시점**: 개론(`bible-overview`)의 '내용구분'에 QT(`daily-bible`) 링크를 자동 삽입하는 스크립트 작성 시
**현상**: 첫 실행에서 **창세기 0건 연결, 시편 누락, 이사야 대량 누락** 등 매칭 실패가 다수 발생.

**원인** (책마다 문서 구조가 달랐음):
1. **섹션 제목 상이**: 대부분 "각 장 및 문단의 내용 정리"인데 시편만 "각 장의 내용 요약".
2. **경계 오인식(창세기)**: 내용구분 안에 `### 원시사`, `### 족장사` 소제목이 섹션 제목(`### 4. ...`)과 **같은 헤딩 레벨**이라, 섹션 범위가 첫 소제목에서 잘려 항목을 못 읽음.
3. **항목 형식 상이(시편)**: `- 시편 N편:` 처럼 장 단위 표기라 `장:절` 파서로 못 잡음.
4. **세분화 수준 차이**: 창세기·요한복음·이사야는 절 단위, 시편은 편(장) 단위.
5. **미발행 QT 제외**: 이사야(40~66장 등)처럼 아직 발행 안 된(draft) QT는 대상에서 제외됨 → 이는 깨진 링크 방지를 위한 **정상 동작**.

**해결**: 매칭 스크립트를 보완.
- 섹션 제목 정규식 유연화(`내용 정리|내용 요약`)
- 섹션 끝을 "번호 매김 제목 또는 참고/특징 등 상위 섹션 키워드"로 판단(원시사·제N권 같은 소제목은 건너뜀)
- 시편 `N편` 형식 파싱 추가
- 각 QT를 **시작 절이 속한 '가장 좁은 항목'에만** 배정(중복 없음)
- `draft:false`(발행분)만 링크 → 깨진 링크 방지
- **idempotent**: 재실행해도 중복되지 않음
- 결과: 개론 8권에 **300개 링크** 적용. 스크립트: [scripts/link_qt_to_overview.py](file:///Users/gihyunpark/Desktop/jiwumission/scripts/link_qt_to_overview.py)

**결론/교훈**: 여러 문서를 자동 처리할 때는 제목·헤딩 레벨·항목 표기의 **변형을 폭넓게 수용**하도록 설계하고, 발행 상태를 필터해 **깨진 링크가 생기지 않게** 해야 합니다. QT가 더 발행되면 스크립트를 다시 돌리면 링크가 자동 확장됩니다.

---

## Issue 34. Canva 반응형 email 디자인의 하이퍼링크 URL 자동 변경 불가

**발생 시점**: Canva 커넥터로 '잎새' 소식지(뉴스레터, 39호)를 편집할 때
**현상**: 제목·본문 텍스트 교체와 이미지 교체는 API로 되는데, **특집 글 제목 등에 걸린 하이퍼링크의 URL은 바꿀 수 없음**(텍스트만 바뀌고 링크는 예전 주소 유지).

**원인**: 잎새 디자인이 **반응형(email) 페이지**라, Canva 편집 API가 반응형 페이지에서 허용하는 작업이 `update_title / replace_text / find_and_replace_text / update_fill / delete_element`로 제한됨. 링크 지정에 필요한 `format_text(link)`는 반응형 페이지에서 **미지원**.

**해결/우회**:
- 텍스트·요약·본문은 API로 자동 교체하고, **하이퍼링크 URL 교체만 Canva 편집기에서 수동**으로 처리.
- 새 호를 만들 때는 지난 호를 복제(copy) 후 텍스트·이미지를 갈아끼우고 링크만 손보는 흐름이 가장 안전.

**결론/교훈**: Canva 반응형 email의 자동 편집은 **텍스트·이미지 위주**로 가능하며, 링크 URL 변경은 수동 보완이 필요합니다. (잎새 소식지 제작 절차는 manual.md 참고)

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




