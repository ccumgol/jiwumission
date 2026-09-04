# 협력 보고서 (Collaboration Report)

> **언제 읽는가**: 작업을 시작할 때 **매번**. 지금 누가 무엇을 하는 중인지, 어디에
> 착수 기록을 쓸지가 여기 있습니다.
>
> **필수 규칙은 [CLAUDE.md](../CLAUDE.md) 입니다** (Claude Code 가 자동으로 읽습니다 ·
> 다른 도구는 저장소 뿌리의 `AGENTS.md` — 같은 파일을 가리키는 심볼릭 링크입니다).
>
> **관련 문서**: 사용법은 [manual.md](manual.md) · 적용된 기능은 [features.md](features.md) ·
> 문제 해결 이력은 [issue_report.md](issue_report.md) · 배포는 [github-actions-deploy.md](github-actions-deploy.md) ·
> 호스팅은 [cloudflare_build.md](cloudflare_build.md) · SEO 진단은 [감사보고서_20260904.md](감사보고서_20260904.md) ·
> 테마 커스터마이징은 [../JIWU_Hugo_Customization_Guide.md](../JIWU_Hugo_Customization_Guide.md).

**최근 갱신**: 2026-09-04 · 갱신자: Claude (Agent-C, Opus 5) · 기준 커밋: `f458773`

> 이 문서의 협업 규칙 틀은 다른 프로젝트(sermon-presentation)의 `collaboration-report.md`
> 에서 가져왔습니다. 0~1장의 협업 방식은 유지하고, **2장 이하는 이 프로젝트(Hugo 정적
> 사이트 · 라이브 서비스) 내용으로 다시 썼습니다.**

---

## 0. 이 문서 사용 규칙

**필수 규칙은 [CLAUDE.md](../CLAUDE.md) 에 있습니다** — 착수 기록, 23:30 자동 커밋 함정,
절대 하지 않는 것, 어디를 고치는가, 검증, 커밋. Claude Code 는 그 파일을 **자동으로
읽습니다.** 이 문서를 열기 전에 이미 읽었을 것입니다.

**이 문서는 "지금 누가 무엇을 하는 중인가" 를 담습니다.** 규칙이 아니라 상태입니다.

| 장 | 무엇 | 언제 |
|---|---|---|
| 4장 작업 보드 | 항목별 상태(🔴🟡🟢⚪)·담당·날짜 | **착수 전** 확인하고 `🟡` 로 바꾼다 |
| 5장 파일 점유 | 다른 Agent 가 만지는 파일 | 겹치면 6장에 메모를 남기고 조율 |
| 6장 인계 메모 | 다음 Agent 에게 넘길 것 · 이 프로젝트의 관례 | 중단·인계할 때 |
| **8장 진행 중 로그** | 착수 3줄 · 중단 지점 | **파일을 만지기 전에 쓴다** (필수) |

작업이 끝나면 4장을 `🟢 완료` 로 바꾸고 **7장에 한 줄로 남깁니다** — 무엇을·왜·
**어떻게 검증했는지**. 주장만 쓰지 않습니다.

### 0.1 규칙은 CLAUDE.md 로 옮겼습니다

이 문서가 **매번 읽는 문서**인데 규칙까지 담으면 정작 착수할 때 봐야 할 4장(보드)과
8장(진행 중 로그)이 뒤로 밀립니다. 그래서 **규칙은 [CLAUDE.md](../CLAUDE.md) 로,
상태는 이 문서로** 나눴습니다 (2026-09-04).

CLAUDE.md 에서 특히 확인할 것 — 요약만 옮겨 둡니다:

| 규칙 | 한 줄 |
|---|---|
| **착수 기록** (규칙 A·B·C) | 파일을 만지기 **전에** 8장에 3줄. 단계마다 `다음 단계:` 갱신 — 마지막 갱신 지점이 곧 중단 지점 |
| **★ 23:30 자동 커밋** | `auto_push.sh` 가 `git add -A` 로 **미완성 작업까지 매일 밤 라이브에 배포**한다. 마치기 전 `git status --short` |
| **절대 하지 않는 것** | `update-repos` 실행 · `content/` 일괄 덮어쓰기 · 테마 직접 수정 · 옛 URL 끊기 · 비밀값 커밋 |
| **검증** | `pnpm run build` — 정적 사이트라 이게 사실상 유일한 관문 |

### 0.4 협업 전제

| 항목 | 결정 |
|---|---|
| 실행 환경 | **모든 Agent 가 사용자의 같은 맥·같은 저장소**에서 작업 |
| 브랜치 | **`main` 직통 + 작게 자주 커밋** (0.3 때문에 더욱) |
| 커밋 메시지 | 일일 콘텐츠는 `20260904` 형식 · 그 외는 `feat:`·`fix:`·`docs:`·`style:` |
| Agent 명명 | **계정 이니셜** (`Agent-C` 등) |
| 저장소 | `github.com/ccumgol/jiwumission` · 공개 · `main` |

---

## 1. 참여자 및 역할 기록

### 협업의 취지 — 사용량 한도 이어달리기

이 프로젝트의 협업은 **다른 회사의 AI 가 아니라, 같은 Claude Code 의 다른 계정**입니다.
시간 한도·주간 한도에 걸리면 며칠 동안 작업이 멈추므로, **계정을 바꿔 이어서** 작업합니다.

그래서 이 문서의 목적은 "여러 AI 의 조율" 이 아니라 **이어달리기 배턴**입니다.
0.1 의 선행 기록(규칙 A)이 특히 중요합니다 — 한도는 예고 없이 걸립니다.

| 참여자 | 담당·기여 | 최근 작업일 |
|---|---|---|
| **사용자 (박기현 / 소유자)** | 사역 방향·우선순위 결정, 원고 집필(QT·강좌·잎새 소식지), 정책 판단(AI 크롤러·저작권), 실제 화면 검증 | 계속 |
| **Agent-C / Claude** (Opus 5) | SEO 종합 감사([감사보고서_20260904.md](감사보고서_20260904.md)) · 협업 문서 이식(이 문서) | 2026-09-04 |

> 이 프로젝트는 **라이브 사이트가 깨지는 것이 최악의 결과**입니다. 편의 기능이라도
> 빌드를 막거나 기존 URL 을 끊지 않는지 먼저 확인하고 넣습니다.

---

## 2. 프로젝트 현재 상태 요약

| 항목 | 상태 |
|---|---|
| 무엇인가 | JIWU Mission(Jesus Is With Us) 네트워크의 사역 홈페이지 **jesusiswith.us** — 오늘의 QT, 성경개론, 강좌, 일간 IT뉴스, 잎새 소식지 |
| 기술 | **Hugo Extended**(로컬 v0.164.0) · 테마 **Hugoplate**(Hugo Modules) · Tailwind CSS v4 · pnpm |
| 호스팅 | **Cloudflare Pages** + Cloudflare DNS. 커스텀 도메인 `jesusiswith.us` |
| 배포 | `main` push → **GitHub Actions**(`deploy-cloudflare.yml`)가 빌드 후 wrangler 로 업로드. 예전 방식인 Cloudflare 웹훅(`scheduled-publish.yml`)은 **수동 실행만** 남김(2026-07-31) |
| 콘텐츠 규모 | 마크다운 **876개** (bible 535 · digest 188 · class 142 · 기타 11) → 빌드 결과 HTML 1,420개 · sitemap **1,054 URL** |
| 자동화 | ① 예약 작업(AI)이 매일 밤 IT뉴스·QT 원고 작성 ② **매일 23:30 `auto_push.sh` 가 커밋·푸시**(0.3) ③ push 감지 배포 |
| 테스트 | **없음.** 정적 사이트라 `hugo` 빌드 성공 여부가 사실상의 유일한 관문 |
| 문서 | manual(사용법) · features(적용 기능) · issue_report(34건 해결 이력) · github-actions-deploy · cloudflare_build · plan-ai-workflow-series(기획 보류) · 감사보고서_20260904(SEO) + 저장소 뿌리의 커스터마이징 가이드·트러블슈팅 리포트 |
| 최근 진단 | **SEO Health Score 56/100** (2026-09-04). 콘텐츠 품질은 높은데 canonical·schema·meta 가 통째로 빠져 있음 → 4.1 |

### 이 프로젝트를 처음 만지는 Agent 가 먼저 알아야 할 것

```bash
pnpm install          # 또는 npm install
pnpm run dev          # themeGenerator + hugo server (초안 포함 미리보기)
pnpm run build        # 프로덕션 빌드 → public/  (배포와 같은 명령)
```

- **`pnpm run build` 가 통과하는지가 유일한 자동 검증입니다.** 레이아웃·설정·프론트매터를
  건드렸으면 반드시 돌립니다. 빌드가 깨지면 배포가 실패하고 사이트는 옛 판에 머뭅니다.
- **테마는 Hugo Module 입니다** — `themes/` 가 아니라 `config/_default/module.toml` 과
  `_vendor/` 를 통해 들어옵니다. 테마 파일을 직접 고치지 말고 `layouts/` 에서 덮어씁니다
  (Hugo 의 lookup order 가 프로젝트 `layouts/` 를 우선합니다).
- **디자인 토큰은 `data/theme.json`** 에서 나옵니다. `scripts/themeGenerator.js` 가
  `assets/css/generated-theme.css` 로 바꿔 줍니다. CSS 변수를 손으로 고치지 마세요
  (`.agent/hugoplate-best-practices/SKILL.md` — **`.gitignore` 대상이라 클론에는 없습니다**).
- **⚠️ 운영 설정은 저장소 뿌리의 `hugo.toml` 입니다.** README·manual 은
  `config/_default/hugo.toml` 이라고 적어 두었지만 **그런 파일은 없습니다**(실측).
  `config/_default/` 에 있는 것은 `params.toml`(테마 토글·정렬) · `menus.toml`(메뉴) ·
  `module.toml`(테마 모듈) · `languages.toml` · `security.toml` 뿐이고,
  `config/development/hugo.toml` 은 개발 서버 전용입니다.
- **`static/` 에 둔 것만 배포본에 그대로 실립니다** — `_redirects`(옛 주소 301) ·
  `_headers`(보안 헤더) · `CNAME` · `admin/`(브라우저 관리자 패널). `content/` 에 두면 안 됩니다.
- **`buildFuture = true`** 입니다. 미래 날짜 글도 지금 빌드·배포됩니다(12월 QT 스텁이
  이미 라이브인 이유 — 4.1 M-3).
- **타임존이 `America/New_York`** 입니다. 날짜 계산이 얽힌 화면을 고칠 때 KST 와
  어긋나 생긴 사고가 이미 있었습니다 ([issue_report.md](issue_report.md) Issue 30).

---

## 3. 완료된 작업

이 저장소는 **git 이력이 곧 작업 이력**입니다 (`git log --oneline`). 제작 과정에서
겪은 문제와 판단 근거는 별도 문서에 이미 쌓여 있습니다:

- [issue_report.md](issue_report.md) — 문제 34건의 원인·해결·맥락
- [../JIWU_Hugo_Customization_Guide.md](../JIWU_Hugo_Customization_Guide.md) — 커스터마이징 19건
- [features.md](features.md) §10 — 2026-07-31 점검 6건 조치 완료

**이 문서는 이력을 복제하지 않습니다.** 새 작업의 결과는 7장에 한 줄로 남기고,
자세한 내용은 위 문서 중 맞는 곳에 씁니다 (겹치는 문서를 새로 만들지 않습니다).

---

## 4. 작업 보드 (Work Board)

상태: 🔴 미착수 · 🟡 진행중 · 🟢 완료 · ⚪ 보류(의도적)

### 4.1 SEO 감사 조치 (SEO-AUDIT-2026-09-04, Agent-C)

근거: [감사보고서_20260904.md](감사보고서_20260904.md). sitemap 1,054 URL 구조 분석 +
152개 페이지 실측 크롤링. **아직 아무것도 고치지 않았습니다 — 전부 미착수입니다.**

> 순서에 의존 관계가 있습니다. **C-1(canonical) 이 C-2·C-3·H-1 의 선행 조건**입니다.
> canonical 이 없으면 스키마의 `@id` 에 쓸 정본 URL 자체가 없습니다.

| 순서 | ID | 항목 | 상태 | 담당 |
|---|---|---|---|---|
| 0 | **S-0** | **Search Console 등록** (`google-site-verification` 메타 없음) | 🔴 미착수 | — |
| 1 | **C-1** | **canonical 태그가 전 사이트에 0건** — Hugoplate canonical 파셜 비활성 | 🔴 미착수 | — |
| 2 | **C-2** | `www.jesusiswith.us` 가 전 사이트를 중복 서빙 (301 없음) → 최대 2,108 중복 URL | 🔴 미착수 | — |
| 3 | **C-3** | 오늘의 QT **366개**가 홈페이지 meta description 을 그대로 상속 | 🔴 미착수 | — |
| 4 | **H-4** | 허브 4곳(`/contact/`·`/bible/`·`/class/`·`/digest/`)에 `this is meta description` 플레이스홀더가 배포됨 | 🔴 미착수 | — |
| 5 | **H-5** | `robots.txt` 에 `Sitemap:` 지시문 없음 (한 줄) | 🔴 미착수 | — |
| 6 | **H-2** | robots.txt 는 AI 크롤러 전부 차단 · llms.txt 는 발행 중 → **모순** | ⚪ **사용자 정책 결정 대기** | 사용자 |
| 7 | **H-1** | JSON-LD 구조화 데이터 **0건** (Organization·Article·BreadcrumbList·Course) | 🔴 미착수 | — |
| 8 | **H-3** | 태그·카테고리 아카이브 **182개**가 홈 title/description 사용 | 🔴 미착수 | — |
| 9 | **M-1** | 모바일 홈 전체화면 인터스티셜 (매 방문 재노출) | 🔴 미착수 | — |
| 10 | **M-2** | LCP 배너 이미지 `width`/`height` 가 값 없이 비어 있음 → CLS | 🔴 미착수 | — |
| 11 | **M-3** | 얇은 콘텐츠 3군집 — 12월 QT 스텁 31개 · 이슬비카드 30/33 · 테마 데모 문구 잔존 | 🔴 미착수 | — |
| 12 | **M-7** | sitemap `lastmod` 에 미래 날짜 95건 | 🔴 미착수 | — |
| 13 | **M-8** | 저자·기관 소개 페이지 부재 (`/authors/gihyun-park/` 404 · `/about/` 404) | 🔴 미착수 | — |
| 14 | **M-4·M-5** | 이중 언어가 클라이언트 JS 토글뿐 → hreflang 0건 · H1 중복 | ⚪ **보류 (조건부)** | 영문 도달이 목표일 때만 |
| 15 | **M-6** | 해시 파일명 정적 자산 캐시가 4시간 (`immutable` 가능) | 🔴 미착수 | — |
| 16 | **L-\*** | og:image / twitter:card 전 페이지 부재 · `twitter:creator` 무효 핸들 · llms-full.txt 9.6MB · RSS 1.4MB · 테스트 페이지 색인 가능 | 🔴 미착수 | — |

**H-2 를 왜 사용자에게 넘겼나** — 세 선택지(A 도달 우선 · B 보호 우선 · C 현행 모순)
중 어느 쪽이든 **일관되기만 하면** 됩니다. 문서선교라는 목적만 보면 A 가 자연스럽지만,
성서유니온 매일성경 본문 재사용 권한이 얽혀 있어 **소유자의 결정 사항**입니다.

**⚠️ robots.txt 는 이 저장소에 없습니다** (실측: `static/`·`layouts/` 어디에도 없음).
지금 서빙되는 robots.txt 는 **Cloudflare 관리형 규칙이 자동 삽입한 것**입니다.
→ H-5·H-2 를 고치려면 저장소가 아니라 **Cloudflare 대시보드**를 봐야 합니다.
저장소에 `static/robots.txt` 를 만들면 어느 쪽이 이기는지 먼저 실측하세요.

### 4.2 콘텐츠 · 자동화

| ID | 항목 | 상태 | 비고 |
|---|---|---|---|
| A-1 | 예약 작업(AI) 일간 IT뉴스·QT 자동 생성 | 🟢 운영 중 | 원고 주체가 사람이 아님 (0.2) |
| A-2 | `auto_push.sh` 매일 23:30 커밋·푸시 | 🟢 운영 중 | **0.3 함정 확인 필수** |
| A-3 | GitHub Actions → Cloudflare Pages 배포 | 🟢 운영 중 | `deploy-cloudflare.yml` |
| A-4 | 06:00 KST 재빌드 | ⚪ **의도적 중단** | 불필요 확인 후 주석 처리 (2026-07-31, features.md §10-6) |
| A-5 | `updateRepos.js` | ⛔ **실행 금지** | 큐레이션 소실 위험 (0.2-3) |
| A-6 | `link_qt_to_overview.py` — 성경개론에 QT 링크 삽입 | 🟢 수동 실행 | QT 원고를 더 채운 뒤 재실행. 여러 번 돌려도 안전 |
| A-7 | 12월 QT 31개 "(작성 예정)" 스텁 | 🔴 원고 미작성 | `buildFuture=true` 라 이미 라이브·색인 가능 (M-3) |
| A-8 | 잎새 소식지 — Canva 연동 | 🟢 운영 중 | 47호까지 발행 (manual.md §17) |

### 4.3 품질 · 기술부채

| 항목 | 상태 | 비고 |
|---|---|---|
| **Hugo 판 어긋남** | 🔴 **확인 필요** | 로컬 **0.164.0** · CI(`deploy-cloudflare.yml`) **0.158.0** · README 표기 **0.164.0** · cloudflare_build.md 표기 **0.158.0**. 로컬에서 되는 문법이 CI 에서 깨질 수 있다 |
| 자동 테스트 | 🔴 없음 | 정적 사이트. `pnpm run build` 성공이 사실상의 유일한 관문 |
| lint | 🟡 부분 | `prettier` 는 devDependency 에 있고 `pnpm run format` 가능. `.markdownlint.json`·`.jshintrc` 존재하나 CI 에 물려 있지 않음 |
| CI 검사 | 🔴 없음 | Actions 는 **배포만** 한다. PR 빌드 검사·링크 검사 없음 |
| `image-optim` 브랜치 | ⚪ 정리 대상 | `main` 대비 앞선 커밋 없음 (실측 `git log main..image-optim` 0건) — 이미 병합된 잔여 브랜치 |
| **문서의 설정 파일 경로가 틀림** | 🔴 미수정 | README·manual 이 `config/_default/hugo.toml` 을 가리키지만 **그 파일은 없다.** 실제 운영 설정은 **저장소 뿌리의 `hugo.toml`** 이고, `config/_default/` 에는 `params`·`menus`·`module`·`languages`·`security` 만 있다 (`config/development/hugo.toml` 은 개발용) |
| `.agent/`·`.claude/` 가 `.gitignore` | ⚪ 확인함 | 그래서 `.agent/hugoplate-best-practices/SKILL.md` 는 **새로 클론한 Agent 에게는 없습니다.** 필요하면 사용자에게 받으세요 |

### 4.4 사용자 결정 대기

> 답이 정해지면 이 목록에서 지우고 해당 장에 반영해 주세요.

1. **AI 크롤러 정책** (H-2) — A 도달 우선 / B 보호 우선 / C 현행. 4.1 참조.
2. **영문 콘텐츠 도달** (M-4) — `/en/` 다국어 분리에 투자할지, 현 JS 토글 유지할지.
   유지하면 이미 쓴 영문 자산은 검색에서 회수되지 않습니다.
3. **이슬비카드 30장** (M-3) — 카드별 전도 활용 가이드 2~3문단을 붙일지, 색인에서 뺄지.
4. **CI 도입** — push 마다 `pnpm run build` 만 돌리는 검사를 넣을지 (배포 실패를 미리 잡음).
5. **`plan-ai-workflow-series.md`** — 집필 보류 중(2026-07-31). 재개할지.

---

## 5. 파일별 점유 현황 (충돌 방지)

같은 파일을 만질 때는 6장에 메모를 남기세요.

| 파일 | 주의 |
|---|---|
| **`hugo.toml` (저장소 뿌리)** | **운영 설정의 진짜 위치.** `baseURL`·`title`·`buildFuture`·`timeZone`·`outputs` 가 전부 여기 있다. 문서가 `config/_default/hugo.toml` 이라고 잘못 적어 두었으니 속지 말 것 (4.3) |
| `config/_default/params.toml`·`menus.toml`·`module.toml` | 테마 토글·정렬 · 메뉴 계층 · **테마 모듈 선언.** `module.toml` 을 고치면 테마 자체가 바뀐다 |
| `data/theme.json` | 디자인 토큰의 **유일한 원본**. CSS 변수를 손으로 고치면 다음 빌드에 덮인다 |
| `layouts/partials/basic-seo.html` | **canonical·og·schema 가 들어갈 자리** (4.1 C-1·H-1). 전 페이지가 지나간다 |
| `layouts/bible/daily-bible/` | QT 366개의 레이아웃. `single.dailybiblejson.txt` 는 팝업이 읽는 데이터 출력 |
| `static/_redirects` | **옛 주소 301.** 지우면 `/databank/*`·`/blog/*` 옛 링크가 전부 죽는다 |
| `static/_headers` | 보안 헤더. HSTS preload 가 걸려 있어 되돌리기가 어렵다 |
| `static/admin/` | 브라우저 관리자 패널. **여기서 커밋하면 로컬과 충돌한다** — 작업 전 `git pull` (issue_report Issue 16) |
| `scripts/auto_push.sh` | **유일한 원본.** `~/.scripts/auto_push.sh` 는 심볼릭 링크다. 여기만 고치면 된다 |
| `scripts/updateRepos.js` | ⛔ **실행 금지** (0.2-3) |
| `.github/workflows/deploy-cloudflare.yml` | 깨지면 배포가 멈춘다. `HUGO_VERSION` 은 4.3 참조 |
| `content/**` | **사용자 원고 + 예약 작업 산출물.** 일괄 치환·덮어쓰기 금지 |
| `README.md`·`docs/*` | 동작을 바꾸면 **문서도 같이** 갱신 (사실 불일치 주의) |

---

## 6. 인계 메모 / 다음 Agent 에게

### 바로 이어서 하기 좋은 작업 (권장 순서)

1. **S-0 Search Console 등록** — 이게 사실상 0단계입니다. 등록하지 않으면 아래 작업의
   효과를 볼 지표 자체가 없습니다. `layouts/partials/basic-seo.html` 에 메타 한 줄.
2. **C-1 canonical 파셜 활성화** — 나머지 중복 이슈의 선행 조건. 하루짜리 작업이고
   C-2·C-3 를 대부분 자동 완화합니다.
   검증: 배포 후 임의 20개 URL 에서 `curl -s <url> | grep canonical` 이 20/20 매칭.
3. **H-4 플레이스홀더 4건 + H-5 Sitemap 한 줄** — 각 5분. 즉시 효과.
   단, H-5 는 robots.txt 가 Cloudflare 관리형이라 대시보드를 봐야 합니다 (4.1 각주).
4. **C-3 QT description 템플릿** — 사이트의 35%(366 URL)의 스니펫이 한 번에 바뀝니다.
   콘텐츠 추가 작업 없이 front matter 템플릿 한 줄.
5. **H-1 스키마** — C-1 이후에. Organization → Article → BreadcrumbList 순.
   ⚠️ FAQPage 는 넣지 마세요 (Google 이 2026-05-07 폐지).

### 작업 시 지켜야 할 이 프로젝트의 관례

- **밤 11시 30분을 기억합니다.** 미완성 수정을 남겨 두면 자동으로 배포됩니다 (0.3).
  마치기 전 `git status --short` 로 잔여물을 확인합니다.
- **라이브를 먼저 재고 고칩니다.** 이 프로젝트의 판단은 실측에서 나와야 합니다 —
  감사보고서의 모든 숫자는 152개 페이지를 실제로 크롤링해서 나온 것입니다.
  "좋아 보인다" 로 정하지 마세요.
- **기존 URL 을 끊지 않습니다.** 폴더를 옮기면 `static/_redirects` 에 301 을 함께 넣습니다.
  이미 `/databank/*`·`/blog/*` 두 차례 개편의 부채가 거기 쌓여 있습니다.
- **테마를 직접 고치지 않습니다.** Hugo Module 이라 다음 `hugo mod get -u` 에 덮입니다.
  프로젝트 `layouts/` 에서 같은 경로로 덮어쓰세요.
- **검증은 빌드로**:
  ```bash
  pnpm run build            # 배포와 같은 명령. 여기서 깨지면 배포도 깨진다
  ```
- **화면 확인은 직접**: 사용자에게 "확인해 보세요" 라고 하지 말고, 로컬 서버
  (`pnpm run dev`) 나 라이브 URL 을 Agent 가 직접 열어 재고 결과로 보여 줍니다.
- **배포 반영을 기다립니다.** push 후 GitHub Actions 빌드 + Cloudflare 전파까지
  시간이 걸립니다. **HTML 은 `max-age=0, must-revalidate`** 라 새로고침이면 되지만,
  해시가 붙은 CSS/JS 는 최대 4시간 캐시됩니다 (4.3 M-6). "안 바뀐 것 같다" 의 흔한 원인.
- **문서 동시 갱신**: 동작을 바꾸면 README·features·manual 의 해당 문구도 고칩니다.
  지금도 Hugo 판 표기가 문서마다 어긋나 있습니다 (4.3).
- **비밀값은 GitHub Secrets 에.** `CLOUDFLARE_PAGES_DEPLOY_HOOK`·API 토큰을 저장소에
  넣지 않습니다. 과거에 Secret Scanning 경고가 실제로 났습니다 (issue_report Issue 23).

---

## 7. 변경 이력 (이 문서)

| 날짜 | 갱신자 | 내용 |
|---|---|---|
| 2026-09-04 | Claude (**Agent-C**) | **`CLAUDE.md`·`AGENTS.md` 신설** — 규칙을 이 문서에서 떼어내 자동으로 읽히는 곳으로 옮김. 특히 **23:30 자동 커밋 함정**은 매번 자동으로 읽히는 편이 안전하다(이 문서를 안 열고 작업을 시작하면 놓친다). `AGENTS.md` 는 `CLAUDE.md` 를 가리키는 심볼릭 링크 |
| 2026-09-04 | Claude (**Agent-C**) | **협업 문서 신설.** sermon-presentation 의 `collaboration-report.md` 틀을 이식하고 2장 이하를 이 프로젝트로 다시 씀. 저장소 실측으로 확인한 것: ① `auto_push.sh` 가 `git add -A` 로 **미완성 작업까지 매일 23:30 배포**한다는 함정(0.3) ② robots.txt 가 **저장소에 없고** Cloudflare 관리형이라는 것(4.1) ③ **Hugo 판이 로컬 0.164.0 / CI 0.158.0 으로 어긋난** 것(4.3) ④ `image-optim` 브랜치가 `main` 대비 앞선 커밋 0건인 잔여 브랜치라는 것 ⑤ **README·manual 이 가리키는 `config/_default/hugo.toml` 이 실재하지 않고** 운영 설정은 저장소 뿌리의 `hugo.toml` 이라는 것. 4.1 은 [감사보고서_20260904.md](감사보고서_20260904.md) 를 보드로 옮긴 것이며 **코드는 아무것도 고치지 않았다** |

---

## 8. 진행 중 작업 로그 (Live Work Log) ★중단 대비

> **왜 있는가**: Agent 작업은 사용량 소진·세션 만료·크래시로 언제든 끊깁니다.
> 쓰는 규칙은 0.1 (규칙 A·B·C).

### 현재 진행 중
```
(없음)
```

### 사용자에게 남은 것 (읽고 지우세요)
```
① ★ AI 크롤러 정책 결정 (4.1 H-2) — robots.txt 는 GPTBot·ClaudeBot 등을 전부
   막는데 llms.txt(328KB)·llms-full.txt(9.6MB)는 발행 중입니다. 지금은 양쪽 다
   손해입니다. A(도달 우선) / B(보호 우선) 중 하나를 정해 주세요.
   ※ 성서유니온 매일성경 본문 재사용 권한이 얽혀 있어 소유자 결정 사항입니다.

② Search Console 이 미설정으로 보입니다 (홈에 google-site-verification 메타 없음).
   SEO 작업의 효과를 볼 지표가 여기서 나오므로 사실상 0단계입니다.

③ 12월 QT 31개가 "(작성 예정)" 스텁인 채로 이미 라이브·색인 가능합니다
   (buildFuture=true). 원고를 채우실 계획이면 그대로 두고, 아니면 noindex 로
   가릴지 정해 주세요.

④ 영문 콘텐츠 — 지금은 같은 HTML 에 한/영이 함께 들어가고 JS 로 표시만
   바꿉니다. hreflang 0건 · /en/ 404 라서 **영문은 검색에서 전혀 회수되지
   않습니다.** 영문 도달이 목표인지 알려 주세요 (분기 단위 작업입니다).

⑤ image-optim 브랜치는 main 대비 앞선 커밋이 없습니다. 지워도 되는지 확인 부탁드립니다.
```

### 남은 로드맵
```
- SEO 감사 조치 C-1 → C-2 → C-3 → H-4·H-5 → H-1 → H-3  (4.1 순서표)
- 저자·기관 소개 페이지 (M-8) — H-1 스키마와 복리로 작동
- 홈 인터스티셜 완화 (M-1) · LCP 이미지 (M-2)
- CI 에 빌드 검사 추가 (배포 실패를 push 전에 잡기)
- Hugo 판 통일 (로컬 0.164.0 / CI 0.158.0)
- /en/ 다국어 분리 + hreflang (M-4) — 영문 도달이 목표일 때만
```

### 작성 예시 (복사해서 쓰세요)
```
- [시작 2026-09-05 14:30 / Agent-C] C-1 canonical 파셜 활성화
  계획: layouts/partials/basic-seo.html 에 canonical 추가.
        Hugoplate 테마 파셜을 덮어쓰는 방식(테마 직접 수정 금지).
        페이지 종류별(single/list/taxonomy/paginated)로 .Permalink 가
        무엇이 되는지 먼저 로컬에서 잰다.
  다음 단계: 로컬 빌드 후 public/ 에서 20개 URL 표본 확인 → 커밋 → 배포 후 재확인
```

### 중단·인계 기록 (Interrupted / Handed over)
> 중단이 확인되면 여기에 남깁니다(규칙 C). 이어받은 Agent 도 여기에 이어서 적습니다.

```
(없음)
```

---

## 8.1 중단된 작업을 이어받는 절차

### 판정 — 추측하지 말고 실제 상태를 본다

`🟡 진행중` 인데 담당자가 오래 응답이 없다면 **아래 근거로 직접 확인**하세요.

```bash
# 1) 미커밋 변경 = 진행 중이던 흔적
git status --short
git diff

# 2) 파일 수정 시각 = 마지막 활동 시점
ls -lt layouts/**/*.html config/_default/*.toml scripts/* docs/*.md | head

# 3) 남은 잔여물
git stash list
git branch --no-merged main

# 4) 빌드가 되는 상태인지 (반쯤 고친 상태일 수 있음)
pnpm run build

# 5) ★ 자동 커밋이 이미 밀어 넣었는지 확인 (0.3)
git log --oneline -5
tail -30 ~/.scripts/auto_push.log
```

**5번이 이 프로젝트만의 항목입니다.** 다른 Agent 가 중단한 미완성 작업이
**23:30 자동 커밋으로 이미 라이브에 나가 있을 수 있습니다.** `git status` 가
깨끗하다고 해서 "아무 일도 없었다" 로 판단하면 안 됩니다.

**판정 기준**

| 상황 | 판정 | 조치 |
|---|---|---|
| 미커밋 변경 있음 + 파일 수정이 **수 시간 이상 전** | 중단됨 | 8장 로그를 읽고 이어받기. 상태를 `🟡 진행중(인계: 본인)` 으로 |
| 미커밋 변경 없음 + 보드만 `🟡` | 착수 직후 중단 **또는 자동 커밋됨** | `git log` 로 `chore: 일일 자동 생성 컨텐츠` 커밋 안에 코드 변경이 섞였는지 확인 |
| `pnpm run build` 실패 | **반쯤 고친 상태** | 먼저 완성하거나 되돌린 뒤 진행 (사용자에게 보고) |
| 라이브 화면이 이상함 | **미완성이 배포됨** | 되돌림 커밋을 즉시 push. 사용자에게 알림 |
| 판단이 애매함 | — | **사용자에게 확인** (임의로 되돌리지 말 것) |

### 사용자가 할 수 있는 최소 조치

Agent 가 갑자기 멈췄을 때 사용자는 다음 한 줄만 남겨도 충분합니다.

```
- [중단 2026-09-05 15:10] Agent-C 사용량 만료로 중단. 위 항목 이어받을 Agent 필요.
```
