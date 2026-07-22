---
title: "사이트 제작기"
description: "jesusiswith.us를 만들어 온 과정과 변경 이력"
summary: "이 사이트가 어떻게 만들어지고 발전해 왔는지 — 제작기 4부작과 커밋 기반 변경 이력."
date: 2026-07-20T13:00:00+09:00
author: "Gihyun Park"
categories: ["Extra", "제작기"]
tags: ["제작기", "changelog"]
draft: false
comments: false
---

이 사이트(**jesusiswith.us**)가 어떻게 만들어졌고, 지금까지 어떻게 발전해 왔는지를 정리한 페이지입니다.

## 만드는 이야기 — 제작기 4부작

정적 홈페이지를 처음부터 만들어 온 과정을 초보자 눈높이로 4부에 나눠 정리했습니다.

1. [1부 — 왜 정적 홈페이지로 시작했나](/class/ssg/site-story-1/)
2. [2부 — 콘텐츠 3구역(Blog·Class·Databank) 대해부](/class/ssg/site-story-2/)
3. [3부 — 매일 밤 도는 자동화 파이프라인](/class/ssg/site-story-3/)
4. [4부 — 디자인 커스터마이징과 관리자 패널](/class/ssg/site-story-4/)

## 변경 이력 (Changelog)

> 저장소의 커밋 기록에서 의미 있는 변경만 추린 목록입니다. (자동 생성되는 일일 콘텐츠·정기 배포 커밋은 제외) 계속 업데이트됩니다.

<!-- CHANGELOG:START -->
- **2026-07-22** — feat: 홈·푸터 정렬 다듬기 + 대표간사 사진 원형 채움
- **2026-07-22** — screenshot 변경
- **2026-07-21** — IT 뉴스 업데이트
- **2026-07-21** — 푸터 아이콘 정렬
- **2026-07-21** — docs: 사이트 제작기 변경 기록 갱신 (149항목)
- **2026-07-21** — feat: 홈 유튜브·강좌 섹션 2×2 개편 + 강좌 포스터 카드(회색조→호버 컬러) + 사역 소개 구분선
- **2026-07-21** — 기본 설정 변경
- **2026-07-21** — 표지 OG 파일 변경
- **2026-07-21** — 변경 기록
- **2026-07-21** — 매일 QT에 내용 이해 추가
- **2026-07-20** — 믿음의 계보 글목록 레이아웃 수정
- **2026-07-20** — style: 믿음의 계보 리스트 레이아웃 통일 (type: blog 추가)
- **2026-07-20** — 믿음의 계보 1,2 재업
- **2026-07-20** — fix: Admin 방문자 통계 Looker Studio 크로스도메인 리다이렉트 에러 수정
- **2026-07-20** — docs: 문서 업데이트 (폴더 개편 내역, Looker Studio 버그 픽스 등 issue_report 및 manual 구조 갱신)
- **2026-07-20** — fix: Admin 페이지 Looker Studio iframe sandbox 속성 복구 (흰 화면 버그 수정)
- **2026-07-20** — docs: github-repos.md 누락된 리포지터리 설명 추가
- **2026-07-20** — docs: 사이트 제작기 변경 이력(Changelog) 업데이트
- **2026-07-20** — 잎새 40호
- **2026-07-19** — Fix dailybiblejson layout path for new bible structure
- **2026-07-19** — 메뉴와 폴더 구조 개편
- **2026-07-17** — Set Looker Studio Embed URL
- **2026-07-17** — Google Analytics 설정
- **2026-07-17** — 메뉴구조 개편
- **2026-07-17** — QT 자료 구조 변경 + 이슬비카드 + admin 통계 추가
- **2026-07-17** — 주석 링크 폼 결정
- **2026-07-16** — 성경 연결 시작
- **2026-07-16** — 성경개론 정형화
- **2026-07-16** — 성경개론
- **2026-07-16** — QT 2026-06
- **2026-07-16** — QT 2026-06
- **2026-07-15** — QT성경 2026-04
- **2026-07-15** — 잎새 지난호 정리
- **2026-07-15** — fix: Cloudflare 배포 스텝을 npx wrangler로 교체 (pnpm 워크스페이스 충돌 해결)
- **2026-07-15** — yaml 적용
- **2026-07-15** — 발행 테스트
- **2026-07-15** — fix: redirect old Notion page to root
- **2026-07-15** — 잎새 39호
- **2026-07-14** — 매일QT - 2026.03
- **2026-07-12** — 날짜관련 오류 수정
- **2026-07-12** — docs: document Issue 30 timezone alignment and 404 news link fixes
- **2026-07-12** — fix: resolve timezone alignment and 404 errors on home page
- **2026-07-10** — feat: 소개 프레젠테이션 마지막 슬라이드에 연락처 및 잎새 소식지 신청 QR/링크 추가
- **2026-07-10** — feat: premium-presentation 스킬을 사용하여 단독 HTML 프레젠테이션(/presentation/jiwu-mission-intro.html) 구현 및 푸터 링크 변경
- **2026-07-10** — feat: 첫 페이지 내용을 요약한 소개 프리젠테이션 생성 및 푸터 Copyright 영역에 Presentation 반전 버튼 링크 추가
- **2026-07-10** — docs: 소셜 공유 최적화 및 QT 모달 공유 버튼 구현 관련 커스터마이징 내역 및 이슈 리포트 업데이트
- **2026-07-10** — feat: 오늘의 성경 말씀(QT) 모달 푸터에 SNS 공유 버튼 세트(페이스북, X, 인스타그램, 스레드, 시스템 공유) 추가
- **2026-07-10** — feat: 카카오톡 Share 버튼 제거
- **2026-07-10** — feat: 푸터 소셜 링크 아이콘(Share 버튼) 마우스 오버 캡션(title) 추가 및 카카오톡 채널 추가
- **2026-07-10** — style: 푸터 로고 테두리(drop-shadow) 효과 제거 및 기존 색상 반전 스타일 복원
- **2026-07-10** — style: 푸터 로고 크기 축소(2/3) 및 시인성 개선용 흰색 아웃라인 필터 효과 적용
- **2026-07-10** — feat: 카카오톡 공유 버튼 추가 및 JavaScript SDK 연동 준비
- **2026-07-10** — feat: SNS 공유 버튼 마우스 오버 시 툴팁(title) 캡션 기능 추가
- **2026-07-09** — IT뉴스 2026-07-10
- **2026-07-09** — fix: 7월 10일 IT뉴스 빌드 누락 예방 조치 (date 시각 조정 및 categories 대소문자 검증)
- **2026-07-09** — chore: 7월 10일 IT뉴스 파일명 교정 및 내용 반영
- **2026-07-09** — feat: 홈 화면 히어로 CTA 버튼(오늘의 말씀/IT 뉴스) 연동 및 말씀 팝업 내 어제/내일 말씀 네비게이션(이동) 구현
- **2026-07-09** — daily it news 0711
- **2026-07-09** — QT 2026년 1월 완성
- **2026-07-09** — docs: README.md 내 타 프로젝트 오탈자 수정 및 최신화
- **2026-07-09** — fix: 헤더 오버라이드 템플릿 폴더 경로 정상화 (_partials -> partials) 및 캐시 정리
- **2026-07-09** — feat: 모바일(셀폰) 대응 시스템 공유 기능(Web Share API) 탑재
- **2026-07-09** — docs: 모바일 SNS 공유 기능 깨짐 원인(Universal Link) 트러블슈팅 문서화
- **2026-07-09** — feat: 홈 화면(랜딩 페이지) 한/영 [KR | EN] 언어 전환 토글 추가 및 번역 데이터 반영
- **2026-07-09** — chore: Affinity 개요 마크다운 내 만료된 노션 S3 파일 링크 제거
- **2026-07-09** — docs: 깃허브 Secret Scanning 경고 조치 가이드 및 보안 안전 수칙 추가
- **2026-07-09** — refactor: Cloudflare Deploy Hook 연동, 보안 헤더 추가, README.md 개편 및 중복 배포 Actions 소거
- **2026-07-09** — security: params.toml 구글맵 API Key 제거, 중복 배포 workflow 제거, .gitignore 설정 및 캐시 비우기
- **2026-07-08** — docs: launchd macOS 보안 차단(TCC) 이슈 및 해결 가이드 보완
- **2026-07-08** — 잎새 38호
- **2026-07-08** — 매일 IT News
- **2026-07-08** — feat: 사이트 제작기 1~4부에 '잎새 38호' 태그 추가
- **2026-07-07** — 사이트 제작기 블로그 작성
- **2026-07-07** — docs: 자동 push 스케줄러 시간을 밤 11:30으로 변경 반영
- **2026-07-07** — docs: 매뉴얼에 로컬 Mac 자동 push 스케줄러 가이드 보충
- **2026-07-07** — docs: Cloudflare Pages 배포 가이드 추가 및 매뉴얼/이슈리포트 업데이트
- **2026-07-07** — docs: 정적홈페이지 제작 교육 문서 추가 (manual.md, issue_report.md)
- **2026-07-07** — Daily-bible 서비스 개시
- **2026-07-07** — 일간 IT 뉴스 시작
- **2026-07-07** — feat: 매일 06:00 KST 자동 퍼블리시 GitHub Actions 스케줄 추가
- **2026-07-07** — chore: 파일 및 메뉴 구조 정리
- **2026-07-06** — archetypes/default.md 문제 해결
- **2026-07-01** — 잎새 36호 추가
- **2026-07-01** — 잎새 37호 수정
- **2026-07-01** — fix: 메인 배너의 title_banner.webp 복원
- **2026-07-01** — docs: 가이드 문서에 Git Purge(용량 다이어트) 이력 기재
- **2026-07-01** — docs: 가이드 문서에 WebP 이미지 최적화 내용 추가
- **2026-07-01** — style: 이미지 포맷 webp 최적화 및 마크다운 경로 수정
- **2026-06-30** — 잎새 37호
- **2026-06-25** — 자료 업로드
- **2026-06-22** — Use youtube-lite shortcode for YouTube embeds
- **2026-06-22** — 동영상 업로드
- **2026-06-22** — Update tags to 잎새 36호 in Obsidian-LLM-Wiki 초보자 설치부터 사용까지.md
- **2026-06-22** — Move non-date-prefixed MD files to class/ai-study-guide
- **2026-06-22** — Move 2026년 6월 2주차 글로벌 AI 산업 지형도 및 트렌드 분석.md to blog/weekly-ai-trends
- **2026-06-22** — 잎새36호
- **2026-06-21** — llm-wiki 수정
- **2026-06-21** — llm-wiki upload
- **2026-06-18** — feat: add Affinity Ch8_01, LLM Wiki Ch1, SSG church website manual chapters 1-4
- **2026-06-18** — fix: correct presentation section sort path from Korean to /blog/presentation/
- **2026-06-18** — feat: add 가나다역순(title_desc) sort option and fix admin TOML library race condition
- **2026-06-18** — docs: update Hugo guide (sections 15-16) and troubleshooting report (issues 15-16)
- **2026-06-18** — 폴더 구조 확인
- **2026-06-18** — update config
- **2026-06-18** — fix: remove deprecated 'path' field from all content front matter
- **2026-06-18** — refactor: reorganize Affinity files from content root and merged chapters into class/affinity with chapter-based structure
- **2026-06-18** — refactor: move wiki-related posts from second-brain and computer-basic to llm-wiki
- **2026-06-18** — feat: add LLM Wiki to Class menu (weight=3) and create llm-wiki folder
- **2026-06-17** — update menus
- **2026-06-17** — chore: add new Affinity, computer-basic, and wiki content with images
- **2026-06-17** — chore: reorganize directory structure and update submenus
- **2026-06-17** — update menus
- **2026-06-17** — update menus
- **2026-06-15** — fix(linter): resolve Tailwind CSS display conflicts in index.html and descriptive examples in troubleshooting report
- **2026-06-15** — feat(admin): support new directory creation with placeholder _index.md
- **2026-06-15** — feat(admin): enhance menu hierarchical management and yaml front-matter editing in admin panel
- **2026-06-15** — docs: document categories case warning and cssConflict fix in troubleshooting report
- **2026-06-15** — fix(admin): resolve cssConflict warnings by separating hidden display state from flex/grid in static markup
- **2026-06-15** — fix: change Front Matter 'Categories' to lowercase 'categories' for schema validation
- **2026-06-15** — Merge branch 'main' of https://github.com/ccumgol/jiwumission
- **2026-06-15** — docs: document Admin Panel grid layout and unicode base64 decoding fixes
- **2026-06-15** — feat(admin): update blog layout and sorting configuration
- **2026-06-15** — feat(admin): update blog layout and sorting configuration
- **2026-06-15** — fix(admin): prevent Korean character corruption by properly decoding UTF-8 in Base64
- **2026-06-15** — fix(admin): fix layout width issue by replacing incorrect grid col span classes
- **2026-06-14** — docs: update manual and troubleshooting report with dark mode, sorting, and footer customization details
- **2026-06-14** — feat: implement secure Git-based Admin Panel and dynamic blog card elements
- **2026-06-14** — style: set Categories and Tags dark mode background to #444444 for better contrast
- **2026-06-14** — fix: dark mode color contrast issues for widgets, badges and testimonials
- **2026-06-14** — feat: make blog list and category sorting configuration-driven
- **2026-06-14** — feat: sort series blogs alphabetically by title
- **2026-06-14** — fix: adjust home cards dark mode background and font colors
- **2026-06-13** — style: change footer menu links to primary red color
- **2026-06-13** — docs: document image format mismatch troubleshooting section
- **2026-06-13** — fix: resolve image format mismatch (unknown format) for conference reviews
- **2026-06-13** — docs: document GLightbox modal issue and blockquote customizations
- **2026-06-13** — docs: add comments system settings to customization guide
- **2026-06-13** — feat: support both global and per-post comments toggling
- **2026-06-13** — style: decrease sidebar tag font size further to text-xs
- **2026-06-13** — style: reduce tag item font size in sidebar to text-sm
- **2026-06-13** — feat: display card summaries, hide meta, and customize blockquote styles
- **2026-06-12** — fix: resolve correct relative permalink of content image resources for GLightbox
- **2026-06-12** — fix: change title to h5 class and set GLightbox data-type to image to resolve loading spinner
- **2026-06-12** — feat: remove post snippets from list pages and add GLightbox zoom modal on thumbnail click
- **2026-06-12** — docs: add JIWU_Mission_Troubleshooting_Report.md to project root
- **2026-06-12** — config: add config/development/hugo.toml to override local baseURL
- **2026-06-12** — feat: configure new custom domain and update social links/icons
- **2026-06-12** — feat: move youtube channels to independent row and add 청출어람 모임 card
- **2026-06-12** — feat: add related youtube channel cards below newsletter
- **2026-06-12** — refactor: use modern Tailwind shrink-0 class
- **2026-06-12** — chore: disable announcement banner
- **2026-06-12** — feat: add newsletter subscription section and update dev baseURL
- **2026-06-12** — config: update baseURL for GitHub Pages deployment
- **2026-06-12** — JIWU Mission 사이트 초기 구축 (폴더 구조 정리)
<!-- CHANGELOG:END -->
