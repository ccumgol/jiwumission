# JIWU Mission 홈페이지 (jesusiswith.us)

뉴저지 포트리(Fort Lee)에 위치한 해외한인장로회(KPCA) 소속 **아이하나 교회(IHANA CHURCH)**의 사역 정보 및 일일 말씀(QT), AI IT뉴스 서비스를 구축하고 호스팅하는 정적 웹사이트 저장소입니다.

---

## 🛠️ 기술 아키텍처 조망

```
[로컬 글 작성 (Notion / Markdown)]
      ↓ (수동 또는 launchd 스케줄러가 감지)
[GitHub 저장소 (ccumgol/jiwumission)]
      ↓ (커밋 push 또는 Daily Deploy Hook 스케줄)
[Cloudflare Pages 빌드 컨테이너]
      ↓ (pnpm 빌드 파이프라인 수행)
[jesusiswith.us 배포 서비스]
```

- **SSG (정적 사이트 빌더)**: Hugo Extended (v0.158.0) & Tailwind CSS v4.0
- **테마 프레임워크**: Hugoplate (Customized)
- **정적 호스팅 인프라**: Cloudflare Pages (글로벌 CDN 캐싱 및 SSL 기본 제공)
- **데이터 저장 관리**: GitHub 리포지토리

---

## 📂 폴더 구조 가이드

```
jiwumission/
│
├── config/                ← Hugo 설정 폴더
│   └── _default/
│       ├── hugo.toml      ← 호스팅 baseURL, 언어 등 사이트 전역 설정
│       ├── menus.toml     ← 드롭다운 서브메뉴(Blog, Class, Databank) 구조
│       └── params.toml    ← 정렬 순서 및 테마 커스텀 변수
│
├── content/               ← 실제 글 콘텐츠 (마크다운)
│   ├── blog/              ← 블로그 카테고리 (주간 AI, 일간 IT 뉴스 등)
│   ├── class/             ← 정적홈페이지 강좌, Affinity 디자이너 가이드 등
│   └── databank/          ← 오늘의 QT, 말씀카드, 자료실
│
├── layouts/               ← HTML 레이아웃 템플릿 (홈페이지 모달 팝업 JS 수록)
├── static/                ← 로고 및 에셋 복사용 폴더
│   ├── admin/             ← 브라우저용 원격 설정 제어 관리자 패널
│   └── _headers           ← 클릭재킹 및 보안 강화용 HTTP Headers
│
├── scripts/               ← 로컬 빌드 보조 및 자동화 스크립트
├── .github/workflows/     ← 매일 아침 06:00 KST 빌드용 Actions
└── docs/                  ← 교육 매뉴얼 및 트러블슈팅 이력 문서화
```

---

## ⏰ 일일 콘텐츠 자동화 스케줄러 관리

이 프로젝트는 매일 자동으로 생성되는 일간 뉴스 및 말씀(QT) 콘텐츠를 실시간으로 빌드 및 업로드하기 위해 두 가지 자동화 장치를 이용합니다.

### 1) 로컬 Mac ➡️ GitHub 자동 Push 스케줄러
- **실행본**: `~/.scripts/auto_push.sh`
- **스케줄러 설정**: `~/Library/LaunchAgents/com.jiwumission.autopush.plist`
- **작동**: 매일 밤 **11시 30분(23:30)**에 백그라운드 구동되어 로컬에 새로 생성된 IT뉴스/QT 문서를 감지하고 `git push`를 수행합니다.
- **실행 이력 로깅**: `~/.scripts/auto_push.log`

### 2) GitHub ➡️ Cloudflare Pages 무인 재빌드 (Secrets 연동)
- **실행본**: `.github/workflows/scheduled-publish.yml`
- **작동**: 매일 아침 **06:00 KST**에 작동하여, GitHub Secrets에 등록된 `CLOUDFLARE_PAGES_DEPLOY_HOOK` 주소로 POST 호출을 보내어 빈 커밋 없이 웹사이트를 강제 재빌드(Deploy)합니다.

---

## 📖 시스템 관리 문서 링크

웹사이트 제작 과정에서 만난 모든 문제 해결 내역과 SSG 기초 사용 매뉴얼은 `docs/` 폴더 내에 정리되어 있습니다:
- [정적 홈페이지 초보자 매뉴얼](docs/manual.md)
- [18대 주요 에러 및 트러블슈팅 리포트](docs/issue_report.md)
- [Cloudflare Pages 이전 및 DNS 셋업 가이드](docs/cloudflare_build.md)
