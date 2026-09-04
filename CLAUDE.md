# jiwumission — Agent 필수 지침

JIWU Mission 사역 홈페이지 **jesusiswith.us** 의 원본. Hugo Extended + Hugoplate 테마
(Hugo Modules) + Tailwind v4, Cloudflare Pages 로 서비스한다.
**지금 서비스 중인 사이트다** — `main` 에 push 하면 곧바로 방문자에게 나간다.

**이 파일은 자동으로 읽힌다. 여기 있는 것은 전부 필수다.** 나머지는 필요할 때 찾아본다.
(다른 도구는 같은 내용의 `AGENTS.md` 를 읽는다 — 이 파일을 가리키는 심볼릭 링크다.)

---

## 어느 문서를 언제 읽는가

| 언제 | 무엇을 |
|---|---|
| **작업을 시작할 때 (매번)** | [docs/collaboration-report.md](docs/collaboration-report.md) — 작업 보드·진행 중 로그·인계 메모. **여기에 착수 기록을 쓴다** |
| 무언가 안 될 때 | [docs/issue_report.md](docs/issue_report.md) — 문제 34건의 증상 → 원인 → 조치. **먼저 여기를 본다** |
| 지금 무슨 기능이 도는지 알아야 할 때 | [docs/features.md](docs/features.md) — 자동화 시계·배포·숏코드·스크립트 |
| 사이트를 어떻게 쓰는지 | [docs/manual.md](docs/manual.md) — 콘텐츠 작성·메뉴·이미지·스케줄러 |
| 배포가 안 될 때 | [docs/github-actions-deploy.md](docs/github-actions-deploy.md) · [docs/cloudflare_build.md](docs/cloudflare_build.md) |
| 테마·레이아웃을 고칠 때 | [JIWU_Hugo_Customization_Guide.md](JIWU_Hugo_Customization_Guide.md) — 커스터마이징 19건 |
| SEO 를 건드릴 때 | [docs/감사보고서_20260904.md](docs/감사보고서_20260904.md) — 실측 진단과 남은 항목 |
| 설치·구조를 알아야 할 때 | [README.md](README.md) |

---

## 착수하기 전에 — 매번, 예외 없이

1. **`docs/collaboration-report.md` 8장에 3줄을 먼저 쓴다.** 파일을 만지기 **전에**.
   ```
   - [시작 2026-09-05 / Agent X] 무엇을
     계획: 어떻게
     다음 단계: 지금 다음에 할 일
   ```
   **작업이 끝난 뒤 쓰는 기록은 남지 않는다** — 사용량 만료·크래시는 예고 없이 온다.
   30분 넘는 작업은 단계마다 `다음 단계:` 줄만 갱신한다. 마지막 갱신 지점이 중단 지점이다.

2. **`git status --short` 를 본다.** 내 것이 아닌 미커밋 변경이 있으면 다른 Agent 의
   미완성 작업이거나, 예약 작업(AI)이 방금 만든 원고다. **임의로 되돌리거나 지우지 않는다.**
   8장 로그를 읽고
   [8.1 중단된 작업을 이어받는 절차](docs/collaboration-report.md#81-중단된-작업을-이어받는-절차)
   로 판정한다 — 추측하지 말고 실제 상태를 본다.

3. **보드(4장)에서 그 항목을 `🟡 진행중` 으로 바꾸고 이름·날짜를 적는다.**

---

## ★ 밤 11시 30분 — 이 저장소에서 가장 중요한 사실

`scripts/auto_push.sh` 가 launchd 로 **매일 23:30 에 자동 실행**된다.

```bash
git pull --rebase --autostash origin main
git add -A                     # ← 작업 트리 전체를 무조건 담는다
git commit -m "chore: 일일 자동 생성 컨텐츠 추가 [날짜]"
git push origin main           # ← push 되면 GitHub Actions 가 빌드·배포한다
```

**그래서 밤 11시 반에 저장소에 남아 있는 미완성 수정은 전부 자동으로 라이브에 나간다.**
반쯤 고친 레이아웃, 시험 삼아 만든 파일, 실수로 넣은 자격 증명까지.

- 작업 단위를 **작게 끊어 스스로 커밋**하거나, 마치기 전 `git status --short` 로 잔여물을 정리한다.
- 오래 걸릴 실험은 **작업 브랜치에서** 한다 (이 스크립트는 `origin main` 만 본다).
- 임시 파일은 저장소 안에 만들지 않는다 — 스크래치 디렉터리를 쓴다.
- 로그는 `~/.scripts/auto_push.log` 에 있다.

---

## 절대 하지 않는 것

- **`pnpm run update-repos`(`scripts/updateRepos.js`) 를 실행하는 것.** 결과 문서를
  `writeFileSync` 로 통째로 덮어쓰고 설명문은 파일 안 하드코딩 목록에서만 가져온다
  → 예약 작업이 쌓아 온 **큐레이션 100여 항목이 사라진다.** 역할은 이미 대체됐다
  ([docs/features.md §10-1](docs/features.md)).
- **`content/` 의 원고를 일괄 치환·덮어쓰는 것.** 마크다운 876개는 사용자가 쓴 원고와
  예약 작업이 만든 산출물이다. 저절로 생긴 파일도 **지우지 않는다.**
- **테마 파일을 직접 고치는 것.** Hugo Module 이라 다음 `hugo mod get -u` 에 덮인다.
  프로젝트 `layouts/` 에 같은 경로로 두어 덮어쓴다.
- **`assets/css/generated-theme.css` 나 CSS 변수를 손으로 고치는 것.** 디자인 토큰의
  원본은 `data/theme.json` 이고 `scripts/themeGenerator.js` 가 만들어 낸다.
- **기존 URL 을 끊는 것.** 폴더를 옮기면 `static/_redirects` 에 301 을 함께 넣는다.
  이미 `/databank/*`·`/blog/*` 두 차례 개편의 부채가 거기 쌓여 있다.
- **`static/_redirects`·`_headers`·`CNAME` 을 가볍게 건드리는 것.** `_headers` 에는
  HSTS preload 가 걸려 있어 되돌리기 어렵다.
- **비밀값을 저장소에 넣는 것.** `CLOUDFLARE_PAGES_DEPLOY_HOOK`·API 토큰은 GitHub
  Secrets 에만 둔다. 과거에 Secret Scanning 경고가 실제로 났다 (issue_report Issue 23).
- **미커밋 변경을 버리는 것** (`git checkout --`, `git stash drop`) — 사용자 승인 후에만.
- **이력 재작성** (force push, filter-repo) — 사용자 승인 필요.
- **되돌림 없이 배포를 방치하는 것.** 잘못 나간 것을 발견하면 되돌림 커밋을 즉시
  push 하고 사용자에게 알린다.

---

## 어디를 고치는가 — 헷갈리기 쉬운 곳

- **운영 설정은 저장소 뿌리의 `hugo.toml`.** README·manual 은 `config/_default/hugo.toml`
  이라고 적어 두었지만 **그런 파일은 없다.** `config/_default/` 에 있는 것은
  `params.toml`(테마 토글·정렬) · `menus.toml`(메뉴) · `module.toml`(테마 모듈) ·
  `languages.toml` · `security.toml` 뿐이고, `config/development/hugo.toml` 은 개발 전용이다.
- **`buildFuture = true`** 다. 미래 날짜 글도 지금 빌드·배포된다.
- **타임존이 `America/New_York`** 이다. 날짜가 얽힌 화면을 고칠 때 KST 와 어긋나 생긴
  사고가 이미 있다 (issue_report Issue 30).
- **`static/` 에 둔 것만 배포본에 그대로 실린다.** `content/` 에 두면 안 된다.
- **`scripts/auto_push.sh` 가 유일한 원본**이다. `~/.scripts/auto_push.sh` 는 심볼릭 링크다.
- **`.claude/`·`.agent/` 는 `.gitignore` 대상**이다 — 새로 클론한 Agent 에게는 없다.

---

## 검증 — 주장하지 말고 확인한다

```bash
pnpm run build      # 배포와 같은 명령. 여기서 깨지면 배포도 깨진다
```

정적 사이트라 자동 테스트가 없다. **빌드 성공이 사실상 유일한 관문**이므로
레이아웃·설정·프론트매터를 건드렸으면 반드시 돌린다.

화면 확인은 **Agent 가 직접** 한다. 사용자에게 "확인해 보세요" 라고 하지 말고
로컬 서버(`pnpm run dev`)나 라이브 URL 을 열어 재고 결과로 보여 준다.

배포 후 확인할 때: **HTML 은 `max-age=0, must-revalidate`** 라 새로고침이면 되지만,
해시가 붙은 CSS/JS 는 최대 4시간 캐시된다. "안 바뀐 것 같다" 의 흔한 원인이다.

---

## 커밋

`main` 직통이다. 대신 **작게 자주** 커밋한다 (23:30 자동 커밋에 미완성이 딸려가지
않게 하는 방법이기도 하다). 형식은 `feat:` `fix:` `docs:` `refactor:` `style:` `chore:`.
일일 콘텐츠는 기존 관례대로 `20260904` 형식을 쓴다.
메시지에 **원인·조치·검증**을 담는다.

```bash
git status --short                        # 남은 잔여물 확인 (필수)
git diff --name-only origin/main..HEAD    # 의도하지 않은 파일이 섞였는지
```

푸시가 실패하면 `git pull --rebase` 후 재시도한다. 관리자 패널(`static/admin/`)에서
사용자가 직접 커밋했을 수 있다 — 작업 전 `git pull` (issue_report Issue 16).

---

## 코드·문서에서 지키는 것

- **추측 말고 실측.** 이 프로젝트의 판단은 재고 나와야 한다 — SEO 감사의 모든 숫자는
  152개 페이지를 실제로 크롤링해서 나온 것이다. "좋아 보인다" 로 정하지 않는다.
- **문서 동시 갱신.** 동작을 바꾸면 README·features·manual 의 해당 문구도 고친다.
  지금도 Hugo 판 표기가 문서마다 어긋나 있다 (로컬 0.164.0 / CI 0.158.0).
- **겹치는 문서를 새로 만들지 않는다.** 새 작업의 결과는 collaboration-report 7장에
  한 줄로 남기고, 자세한 내용은 위 표의 맞는 문서에 쓴다.
- 파일은 200~400줄이 적당, **최대 800줄**. 함수는 50줄 이하.
- 기존 데이터를 직접 고치지 않고 새 복사본을 만든다.

---

## 자기 이름

Agent 이름은 **계정 이니셜**을 쓴다 (`Agent-C` 등). 협업의 취지는
**사용량 한도 이어달리기** — 여러 계정이 같은 맥·같은 저장소를 공유하며 이어서 작업한다.
