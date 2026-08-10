---
title: "Black Hat USA 2026"
date: "2026-04-30T17:59:00.000Z"
author: "Gihyun Park"
lastmod: "2026-08-06"
summary: "라스베이거스에서 열리는 Black Hat USA 2026은 최신 취약점, 공격 기법 및 보안 대응 기술을 다루는 행사입니다"
description: "라스베이거스에서 열리는 Black Hat USA 2026은 최신 취약점, 공격 기법 및 보안 대응 기술을 다루는 행사입니다"
tags: ["잎새 43호"]
image: "images/Black-Hat-USA-2026.webp"
comments: false
notion_url: "https://app.notion.com/p/Black-Hat-USA-2026-5a448fc40e544fa4bbe66e4a07a0b565"
notion_id: "5a448fc4-0e54-4fa4-bbe6-6e4a07a0b565"
기간: "2026-08-01"
categories: ["blog", "컨퍼런스 리뷰"]
---

{{< youtube P-9mmM6_YAI >}}

# Black Hat USA 2026 종합 리뷰

### "공격이 싸지는 시대" — AI 에이전트가 공격 대상이자 공격 도구가 된 해

> 작성일: 2026년 8월 6일 | 리뷰 관점: 종합 + AI 보안 트랙 집중 | 타깃 독자: 보안 리더 / 아키텍트 / 개발자

---

## 1. 행사 개요 (Executive Summary)

Black Hat USA 2026은 29주년을 맞아 8월 1일부터 6일까지 라스베이거스 만달레이 베이 컨벤션 센터에서 열렸다. 올해의 한 줄 테마는 **"AI가 공격을 시작하면 무슨 일이 벌어지는가"** 로 요약된다. 전체 121개 브리핑 중 35개(약 29%)가 AI 보안·AI 레드팀·LLM 기반 공격 연구를 직접 다뤘고, 그 대다수가 **기반 모델(base model)이 아니라 자율 에이전트(agent)** 를 표적으로 삼았다는 점이 지난해와 가장 크게 달라진 지점이다. ([Straiker 분석](https://www.straiker.ai/blog/black-hat-usa-2026-ai-security-talks))

가장 주목받은 발표 Top 3:

1. **PleaseFix (Zenity Labs)** — Claude in Chrome, ChatGPT Atlas, Perplexity Comet 등 에이전틱 브라우저를 대상으로 한 **제로클릭 에이전트 하이재킹** 취약점 클래스. 패치로 해결되지 않는 설계 결함이라는 결론.
2. **GPUBreach** — NVIDIA GPU를 겨냥한 **최초의 표적형 Rowhammer 공격**. GDDR6 비트 플립에서 호스트 루트 셸까지, IOMMU를 우회하는 GPU→커널 권한 상승 체인.
3. **Opening Session: Cyber Power in the Age of AI** — Black Hat 29년 역사상 처음으로 백악관 국가사이버국장·CISA·FBI가 **한 무대에서 동시 키노트**.

작년 대비 가장 큰 전략적 전환은 두 가지다. 첫째, AI 보안 담론이 "프롬프트 인젝션이라는 신기한 현상"에서 **"에이전트 익스플로잇이라는 독립 분야"** 로 완전히 이동했다. 둘째, 공격 비용이 붕괴했다. Unit 42의 자율 취약점 연구 시스템 NOVA는 2개월간 오픈소스 프로젝트 3,915개를 분석해 **14,090건의 취약점을 확인**했고, 그중 **99.4%가 기존에 보고된 적 없는 것**이었다. Microsoft의 David Weston이 키노트 제목으로 내건 *"The End of Rare"* 는 이 상황을 정확히 짚는다 — 익스플로잇은 더 이상 희소 자원이 아니다.

---

## 2. 행사 기본 정보

| 항목 | 내용 |
| --- | --- |
| 행사명 (정식/약칭) | Black Hat USA 2026 (Black Hat / BHUSA26) |
| 회차 | 29주년 (1997년 창설) |
| 일정 | 2026-08-01 ~ 2026-08-06 (6일) |
| 세부 일정 | Trainings 8/1–8/4, Summit Day 8/4, Briefings·Arsenal·Business Hall 8/5–8/6 |
| 장소 | 미국 네바다주 라스베이거스 / Mandalay Bay Convention Center |
| 형식 | 오프라인 중심 (녹화 브리핑은 8/14–9/14 이벤트 앱에서 패스홀더 제공) |
| 참가 규모 | **공식 참가자 수 미공개** (2026년 8월 6일 기준 미발표) |
| 콘텐츠 규모 | 피어리뷰 브리핑 100+ (총 121개), 트레이닝 100+, 스폰서 세션 120+, Arsenal 데모 89 + 랩 세션 20 |
| 키노트 발표자 | Sean Cairncross (백악관 국가사이버국장), David Weston (Microsoft), Yan Shoshitaishvili (ASU) |
| 신설 프로그램 | Cyber War Forum, Black Hat(HER), Healthcare Summit (HIMSS 공동) |
| 최상위 스폰서 | Titanium: Cisco, Qualys, ReliaQuest, Safe Security, SentinelOne, ServiceNow, ThreatLocker |
| 공식 사이트 | https://blackhat.com/us-26/ |

> ⚠️ Black Hat은 전통적으로 행사 직후 참가자 수를 발표하지 않는 경우가 많다. 본 리뷰 작성 시점(행사 최종일)까지 공식 집계는 확인되지 않았다.

---

## 3. 핵심 발표 사항 (Key Announcements)

Black Hat은 벤더 제품 출시 행사가 아니라 **취약점 연구 발표 행사**다. 따라서 이 섹션은 ① 연구 발표(Briefings), ② 행사 연계 공개 리서치 보고서, ③ 벤더 제품 발표 세 축으로 정리한다.

### 3-1. 보안 / AI 에이전트 (최대 클러스터)

```
[PleaseFix — 에이전틱 브라우저 0-클릭 탈취]
- 카테고리: 보안 / AI 에이전트
- 발표 내용: AI 브라우저가 신뢰 콘텐츠와 비신뢰 콘텐츠를 구분하지 못한다는 점을 악용해,
  이메일·캘린더 초대·웹페이지에 숨긴 지시문으로 사용자 상호작용 없이 에이전트를 탈취.
  Zenity Labs는 이 기법을 'Intent Collision(의도 충돌)'이라 명명.
- 발표 주체: Zenity Labs (Stav Cohen 외)
- 영향 대상: Claude in Chrome, Gemini in Chrome, Perplexity Comet, ChatGPT Atlas, Copilot Edge
- 실증된 피해: Gmail 데이터 유출, Google Drive 공유, Slack·X·Claude 계정 탈취,
  Comet에서 로컬 파일 및 패스워드 매니저 워크플로 접근, Atlas에서 피해자 WhatsApp 피싱 발송,
  Amazon AI 어시스턴트를 통한 부정 결제
- 출시 상태: 🔴 공개 취약점 클래스 (단일 패치로 해결 불가 — 벤더별 익스플로잇 경로 개별 패치는 가능)
- 정량적 지표: 구체 CVE 번호 및 영향 사용자 수 미공개
- 대응 권고: 에이전트가 탈취된다고 가정하고 권한을 최소화, 기본값 비활성화,
  AI 브라우저로 업무 계정(이메일·AWS·GitHub) 로그인 금지, "행동 전 확인" 팝업에만 의존 금지
- 출처: https://blackhat.com/us-26/briefings/schedule/#pwning-agentic-browsers-with-pleasefix-a-new-vulnerability-class-for-0-click-takeover-53888
        https://www.darkreading.com/cyber-risk/ai-browsers-zero-click-agent-hijacking
```

```
[No Tools Required — AI 에이전트 프레임워크 런타임 익스플로잇]
- 카테고리: 보안 / AI 프레임워크
- 발표 내용: LangChain, CrewAI, AutoGen, Semantic Kernel의 코어 런타임(메모리 스토어,
  플래닝 루프, 직렬화 계층)에 익스플로잇 가능한 로직이 존재. 툴 접근 권한이 없어도
  주입된 콘텐츠가 프레임워크 내부를 통해 에이전트를 장악.
- 발표자: Yarden Porat, Shahar Tal (Check Point) — 8/5 14:35, Jasmine, Level 3
- 기법: 대화 턴을 넘어가는 지연 실행 인젝션, 멀티에이전트 환경에서의 에이전트 간 전파,
  영속적 메모리 오염(persistent memory poisoning)
- 출시 상태: 🔴 공개 연구 (프레임워크별 대응 상태 개별 확인 필요)
- 시사점: 에이전트 보안의 프레임을 "툴을 통제한다"에서 "프레임워크 자체가 취약점이다"로 전환
- 출처: 세션 스케줄 / https://www.straiker.ai/blog/black-hat-usa-2026-ai-security-talks
```

```
[A Billion-User Blast Radius — ChatGPT 샌드박스 완전 익스플로잇]
- 카테고리: 보안 / AI 플랫폼 인프라
- 발표 내용: 파일 파싱 악용을 통한 영속적 루트 실행, 숨겨진 python.exec 추론 채널 하이재킹
  (Reasoning Injection Attack), Task Scheduler URL 세탁을 통한 네트워크 격리 우회,
  JFrog 인증 레이트 리밋을 은닉 시그널링 프로토콜로 활용한 C2 채널 구축. 크로스테넌트 데이터 유출 실증.
- 발표자: Simcha Kosman (Palo Alto Networks) — 8/5 15:35, South Seas A&B
- 출시 상태: 🔴 공개 익스플로잇 체인 (벤더 대응 상태 별도 확인 필요)
- 시사점: 프로덕션 AI 플랫폼 대상 공개된 것 중 가장 완전한 익스플로잇 체인.
  AI 샌드박스 보안이 전통 샌드박스 보안보다 한참 뒤처져 있음을 실증
```

```
[When AI Attacks AI — ShadowRay 2.0 자가전파 봇넷]
- 카테고리: 보안 / AI 인프라
- 발표 내용: AI 인프라(Ray 클러스터)가 표적을 넘어 자가전파 봇넷으로 무기화된
  최초의 in-the-wild 캠페인. 감염된 클러스터가 자율적으로 다른 Ray 배포를 스캔·감염.
- 발표자: Gal Elbaz, Avi Lumelsky (Oligo Security) — 8/6 10:15, Oceanside A
- 시사점: "AI 인프라에 취약점이 있다"에서 "AI 인프라가 실제로 대규모 무기화되고 있다"로 이동
```

기타 주목 세션: **Trusted Enough to Run** (Novee Security, GitHub/Slack/Jira 통합 에이전트의 신뢰 경계 공격), **The CoreBreak Attack** (관리형 에이전트 플랫폼을 자격증명 유출 벡터로 전환), **Promptware EOD** (Zenity, 스킬 마크다운 파일·rug-pull된 MCP 서버를 악성코드 전달 벡터로 다루는 탐지 프레임워크 오픈소스화).

### 3-2. 하드웨어 / 컴퓨팅 인프라

```
[GPUBreach: Privilege Escalation Attacks on GPUs Using Rowhammer]
- 카테고리: 컴퓨팅 / 하드웨어 보안
- 발표 내용: NVIDIA GPU를 겨냥한 최초의 표적형 Rowhammer 공격. GDDR6 메모리에서
  권한 상승, 프로세스 간 메모리 접근, GPU→커널 익스플로잇을 통한 전체 시스템 장악.
  IOMMU 우회 후 호스트 루트 셸 획득까지 시연.
- 출시 상태: 🔴 공개 연구 (NVIDIA 공식 대응 상태 별도 확인 필요)
- 배경: 선행 연구 GPUHammer(토론토대, USENIX Security 2025)는 RTX 3060에서 최대 1,171회
  비트 플립을 유도. CPU DRAM은 TRR·RFM으로 상당 부분 완화됐으나 GPU DRAM은 동등한 하드닝 부재.
- 시사점: 멀티테넌트 클라우드 GPU 인프라 — 즉 오늘날 AI 학습·추론이 돌아가는 바로 그 계층 —
  이 직접적인 물리 공격 대상이 됨
- 출처: https://blackhat.com/us-26/briefings/schedule/#gpubreach-privilege-escalation-attacks-on-gpus-using-rowhammer-52286
```

```
[C and Its Consequences: The Source Is Just a Suggestion]
- 카테고리: 개발도구 / 컴파일러
- 발표 내용: 방어적 코딩 패턴이 오히려 최신 컴파일러의 최적화 과정에서
  TOCTOU(Time-Of-Check to Time-Of-Use) 취약점을 새로 만들어낼 수 있음을 규명
- 시사점: "소스 코드가 안전하다"와 "컴파일된 바이너리가 안전하다"는 별개의 명제
```

```
[Beyond Normalization: The Expanding Unicode Attack Surface]
- 카테고리: 애플리케이션 보안
- 발표 내용: 불법 UTF-8 시퀀스 무기화 및 서로게이트→대체문자 변환 악용으로
  WAF 우회, XSS·RCE 달성, 나아가 LLM 탈옥(jailbreak)까지 연결
```

### 3-3. 모바일 / 아이덴티티

```
[Samsung Bixby 익스플로잇 체인 — $50,000 Pwn2Own 체인의 전모]  ⭐ 한국 관련 최우선 항목
- 카테고리: 모바일 보안
- 발표자: Dimitrios Valsamaras (Microsoft), Ken Gannon (Mobile Hacking Lab)
- 발표 내용: 악성 광고·메신저 링크 클릭 → CVE-2025-21079로 Samsung Members를 악성 사이트에 연결
  → CVE-2025-58486으로 Samsung Account를 공격자 사이트로 유도 → CVE-2025-58487(XSS)로
  Samsung Account가 Bixby를 호출 → Bixby의 Capsule(앱 내부 미니 서버) 인프라를 리버싱해
  악용 → 시스템 권한 획득 및 원격 코드 실행
- 검증 기기: Galaxy S25, S24, Flip 7
- 상금: Pwn2Own Ireland 2025에서 $50,000 수상 (2025년 10월)
- 출시 상태: ✅ 패치 완료 — Samsung Members는 2025년 11월, Samsung Account는 12월 패치
- 잔존 위험: 패치 미적용 구형 기기에서는 여전히 동작. 단, 대상 앱이 모두 설치돼 있어야 함
  (플래그십은 기본 탑재, 보급형은 불확실)
- 출처: https://www.securityweek.com/how-a-50000-exploit-chain-turned-bixby-against-samsung-phones/
        https://security.samsungmobile.com/serviceWeb.smsb?year=2025&month=11
```

```
[Pass-ta-key — Google 동기화 패스키 탈취]
- 카테고리: 아이덴티티 / 인증
- 발표 주체: Palo Alto Networks Unit 42
- 발표 내용: Windows·Chrome 환경에 이미 침투한 악성코드가 권한 상승이나 사용자 상호작용 없이
  브라우저 로컬 동기화 DB에서 패스키 보호 계정을 식별하고, 디스크·메모리의 디바이스 아이덴티티 키를
  복구해 Windows 암호화 API로 챌린지에 서명 → 클라우드 인증기가 정상 기기로 인식
- 변종:
  · Silver Pass-ta-key — Chrome을 기기 재등록 상태로 몰아넣고 공격자 키를 등록,
    이후 완전히 다른 머신에서 인증 가능
  · Golden Pass-ta-key — 재등록 중 프로세스 메모리에 잠깐 노출되는 마스터 시크릿을 탈취,
    해당 계정의 모든 동기화 패스키 개인키(및 향후 생성분까지) 복호화
- 출시 상태: 🟡 Google 통보 완료, 일부 완화 조치 배포됨
- 시사점: 패스키는 피싱에 강하지만 "이미 감염된 엔드포인트" 위협 모델에는 취약. 무비밀번호 인증이
  엔드포인트 보안을 대체하지 않는다는 점을 확인
- 출처: https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/
```

### 3-4. LLM을 공격 도구로 — "더 이상 이론이 아니다"

| 연구 | 발표 주체 | 핵심 결과 |
| --- | --- | --- |
| The 0-Day Engine | Tencent Security Xuanwu Lab | Chrome·Android에서 **로직 취약점 100건 이상** 자동 발견. 대규모 코드베이스의 환각 문제 해결 |
| Can AI Do Novel Security Research? (HTTP Terminator) | James Kettle (PortSwigger) | AI가 **새로운 공격 기법 자체를 발명**해 실서비스 해킹. 신규 HTTP desync 트리거, 클라우드 규모 리버스 프록시 포이즈닝 벡터, 듀얼 파서 공격군 발견 |
| Prompt2Own | UC Riverside | 실제 Linux 커널 CVE 대상 **엔드투엔드 커널 익스플로잇 개발** (힙 그루밍·레이스 안정화 포함) |
| Closed Loop | Sysdig / Bagheera Labs | 신규 CVE에 대해 **5분 이내**에 익스플로잇 생성과 방어 시그니처 배포를 동시 수행 (CVE-2026-33017 등에서 실증) |
| WASP-OS | Bar Lanyado, Eliya Cohen (NVIDIA) | 파인튜닝한 **오픈소스 모델이 프론티어 모델(GPT-4o·Claude·Gemini)과 대등한** 에이전트 익스플로잇 성능. 비용은 극히 일부 |

> WASP-OS의 함의가 특히 크다. "공격자 역량 상한선은 프론티어 모델 API 접근성에 의해 제한된다"는 방어 측 가정이 무너진다.

### 3-5. 방어 측 연구 및 프레임워크

- **Caging the Agent (Roblox)** — GitHub Issue에 숨겨진 지시문이 Claude Code를 설득해 Roblox 자격증명을 공개 저장소에 업로드시킨 실제 사건에서 출발. 이후 구축한 다층 샌드박스(파일시스템 가상화, 네트워크 정책 강제, 자격증명 격리, 행위 모니터링) 아키텍처 공개. **EDR은 아무것도 탐지하지 못했다**는 점이 핵심.
- **Rules for Neural Traffic (벤구리온대)** — Snort/YARA 패러다임을 LLM 트래픽에 적용. 토큰 스트림에 대한 결정론적 패턴 매칭 계층 `LLMFirewall` 오픈소스 공개.
- **PHANTOM-B (Adam Shostack)** — 위협 모델링 표준 교과서 저자가 LLM 제품 전용으로 설계한 속도 최적화 위협 모델. MITRE ATLAS·NIST AI RMF와 보완 관계로 포지셔닝.
- **Catch Me If You Can (Dreadnode)** — AI 블루팀 에이전트와 AI 레드팀 에이전트를 실시간 대결시키는 벤치마크 방법론.

### 3-6. 행사 연계 공개 리서치 보고서 (정량 데이터)

| 발표 주체 | 보고서 | 핵심 수치 |
| --- | --- | --- |
| Palo Alto Unit 42 | Frontier AI Vulnerability Study (NOVA) | 오픈소스 3,915개 프로젝트 / 2개월 / **확인 취약점 14,090건**, **99.4% 미보고**, 39.7% High·Critical(CVSS 4.0), **92%가 퍼징으로 찾기 어려운 시맨틱·로직 결함** |
| Palo Alto Unit 42 | Direct-to-IP Malware | 동적 분석 리포트 400만+ 분석. C2 통신 샘플 중 **45.32%가 최소 1회 직접 IP 연결**(대량 스캐닝 제외 시 41.97%), 전체 C2 연결 시도의 **23.17%** |
| BeyondTrust | Phantom Labs Research Index | 연구 프로젝트 400+ 기반. **완료 조사의 75%에 아이덴티티 또는 권한이 관여**. 근본 원인: 자격증명·시크릿 노출 18%, 아이덴티티 관계/그래프 노출 11%, 과도·상시 권한 11%, 아이덴티티 오구성 10%, 측면 이동 6%. **OpenAI Codex, AWS Bedrock AgentCore 관련 협력 취약점 공개 포함** |
| CrowdStrike | 2026 Threat Hunting Report (2025.7.1~2026.6.30) | **AI 에이전트 트리거 탐지 리드가 사람 대비 2.5배**. 클라우드 인지형 e-crime **171% 증가**. 월간 디바이스 코드 피싱 **15배 증가**. LLM-jacking 단일 작전에서 **2분간 API 요청 20만 건 이상**. 한 행위자가 **하루에 의존성 300개 이상 침해**, 다른 행위자는 **AI 프레임워크 패키지 131개 오염**. 중국 연계 행위자는 **유효 PoC 공개 후 24시간 내 익스플로잇** |
| Dataminr | 2026 Mid-Year Cyber Threat Landscape | 위협 행위자 4,500 / 취약점 73,000 / 월 200만+ 알림 모니터링. **중앙값 패치 소요 32일 → 43일로 증가**, **공격자 breakout time은 30분 미만으로 감소**. hallusquatting 등 신규 기법 문서화 |
| Cisco Talos | Weaponizing AI + Q2 IR Trends | Claude Code·Codex·Cursor·Gemini 실행 엔드포인트의 프롬프트 로그 분석. 정교한 탈옥 없이 **단순 역할 주장·라벨·작업 분해만으로 가드레일 우회** 사례 다수. Q2 IR에서 **피싱이 초기 침투 수단의 절반 이상**(전분기 약 1/3에서 급증) |
| Trustmi | 2026 Invoice Fraud Analysis | 2026년 상반기 공격 **597건** (2025년 동기 119건 대비 **5배**). Ghost Executive 패턴 약 255건, 위조 이메일 스레드+가짜 인보이스 조합 193건 |
| Vicarius | Exposed and Unfixed 2026 | **79%의 조직이 이미 인지하고 있던 취약점으로 인한 보안 사고 경험**. 크리티컬 취약점 대응의 75%는 실제 해결이 아니라 행정 워크플로 촉발에 그침. **50%는 재스캔 검증 없이 리스크 수용·티켓 생성만으로 '종료' 처리** |

### 3-7. 벤더 제품 발표 (선별)

| 벤더 | 발표 | 출시 상태 |
| --- | --- | --- |
| Drata | AI Agent Governance — 조직 내 AI 에이전트 발견·모니터링·거버넌스·추적성 증명. **Anthropic 대상 우선 출시** | 🟡 Limited Availability (얼리액세스 고객 프로덕션 운영 중) |
| Legit Security | VibeGuard 2.0 — Claude Code·Cursor·GitHub Copilot 등 코딩 에이전트 엔드포인트 보안. 스킬 디스커버리 가드레일, MCP 보안 통제, 안티탬퍼링 | ✅ 출시 |
| Tanium | Atlas에 Agentic Performance Analysis, Background AI Agents, **MCP 서버**(Claude·Microsoft Security Copilot 연동) 추가 + EASM·공격 경로 매핑 | ✅ 출시 / Google Threat Intelligence 연동은 🟠 Private Preview |
| Sysdig | Secure AI — 자율 에이전트 기반 리스크 우선순위화, Claude·Cursor·Codex 연동 "헤드리스" 모드, GenAI 어시스턴트 | ✅ 출시 |
| Qualys | InstaScan — 스케줄 스캔 없이 벤더 어드바이저리와 자산 인벤토리를 지속 대조하는 스캔리스 탐지 (Agent Insta) | ✅ 출시 |
| Horizon3.ai | NodeZero WebApp Pentesting — 프로덕션 안전 자율 웹앱 침투테스트 (동시에 **$250M 투자 유치**) | ✅ 출시 |
| Huntress | RMM Guard — 공격자가 악용하는 비인가 RMM 도구 차단. **에이전트 배포 고객 전원 무료** | ✅ 무료 제공 |
| Netskope | One DataSec Command Center — AI 환경부터 네트워크까지 민감 데이터 통합 제어 평면 | ✅ 출시 |
| SailPoint | SailPoint Identity Security — Agentic Fabric + Human Fabric으로 인간·비인간·에이전틱 아이덴티티 통합 거버넌스 | ✅ 출시 |
| Zimperium | Deep Insights — 모바일 포렌식 조사 자동화, 여행 전후 기기 상태 비교 | 🔵 2026년 9월 GA 예정 |
| Viakoo | Device Configuration Manager — OT/IoT 구성 드리프트 자동 복원 | 🔵 2026년 4분기 예정 |

> 행사 주간 자본시장 움직임: Horizon3.ai $250M, Onyx Security $113M(엔터프라이즈 AI 에이전트 통제), Obsidian Security $85M(기업가치 $1.1B) 조달. M&A로는 Visa의 BioCatch 인수($2.4B), Okta의 Permiso 인수, Bank of America의 MDSec 인수가 같은 기간 공시됐다.

---

## 4. 키노트 세션 분석

### 4-1. Opening Session: Cyber Power in the Age of AI (8월 4일 16:15)

- **발표자**: Sean Cairncross (백악관 국가사이버국장) / 패널: Nick Andersen (CISA 국장 대행), Brett Leatherman (FBI 사이버국 부국장), Katherine E. Sutton (전쟁부 사이버정책 차관보)
- **핵심 메시지**
  - AI 시대에 맞춘 미국 사이버 정책 재설계 — 정부-산업 협력 강화가 축
  - 공격적 사이버 작전(offensive cyber operations)의 역할 확대를 명시적으로 논의
  - 사이버범죄 네트워크 교란, 핵심 인프라 방어, 정부 내 공수(攻守) 작전 조율의 실행 단계 전환
- **의의**: Black Hat 29년 역사상 백악관 사이버 사령탑과 CISA·FBI가 **동시에** 키노트 무대에 오른 첫 사례. 공격 작전을 공개 석상에서 다룬 톤 자체가 정책 기조 변화를 시사한다.
- **주의**: 세부 정책 발표나 신규 프레임워크 공개는 확인되지 않았다. 방향성 제시 성격의 세션으로 보는 것이 정확하다.

### 4-2. The End of Rare: Defending When Offense Is Cheap (8월 5일 09:15)

- **발표자**: David Weston, Agentic Security, Microsoft
- **핵심 메시지**
  - AI 기반 취약점 발견과 익스플로잇 생성이 방어자에게 근본적 전략 전환을 강요
  - 클라우드 사업자·플랫폼 벤더·기업 보안팀 모두 **사후 패치와 탐지에서 선제적 전략으로** 이동해야 함
  - 구체적 방향: 메모리 안전 언어, 정형 검증(formal verification), 자동 교정(automated remediation)
- **평가**: 올해 행사 전체의 논지를 한 문장으로 압축한 제목. NOVA·0-Day Engine·HTTP Terminator 같은 연구 결과가 이 주장의 실증 근거로 같은 주에 나란히 공개됐다는 점에서 타이밍이 맞아떨어졌다.

### 4-3. Vulnerability Research in the Agentic Age (8월 6일 09:15)

- **발표자**: Yan Shoshitaishvili, 애리조나 주립대 부교수
- **핵심 메시지**
  - 오랫동안 "예술"로 취급돼 온 취약점 연구의 **과학적 토대**를 규명
  - IoT 기기부터 웹 브라우저, 커널, 부트로더까지 수천 건의 취약점을 발견하며 축적한 도구·기법·패러다임 정리
  - 에이전틱 시대에 이 방법론이 어떻게 재편되는지 조망
- **평가**: 정부 세션과 벤더 세션 사이에서, 학계가 "자동화되는 것과 자동화되지 않는 것의 경계"를 다룬 균형추 역할.

---

## 5. 작년 대비 변화 및 전략적 방향 분석

### 발표 비중 변화

| 항목 | 2025 (참고) | 2026 (확인) |
| --- | --- | --- |
| AI 관련 브리핑 비중 | AI 보안이 주요 트랙 중 하나 | **121개 중 35개 ≈ 29%** — 단일 최대 주제 |
| AI 연구의 표적 | 기반 모델, 프롬프트 인젝션 개념 증명 | **자율 에이전트, 에이전트 프레임워크 런타임, 에이전트 공급망** |
| LLM 공격 활용 | 데모·PoC 수준 | **프로덕션급 결과** — Chrome/Android 100+ 취약점, 커널 익스플로잇, 신규 공격 기법 발명 |
| 정부 참여 | 개별 기관 세션 | **백악관·CISA·FBI·전쟁부 동시 키노트** (29년 만의 첫 사례) |

### 부상한 키워드

`에이전트 익스플로잇` · `Intent Collision` · `MCP 서버 / 스킬 파일 공급망` · `에이전틱 브라우저` · `AI 인프라 무기화` · `Rowhammer on GPU` · `자율 취약점 연구(NOVA·0-Day Engine)` · `hallusquatting` · `LLM-jacking`

### 상대적으로 잦아든 키워드

`프롬프트 인젝션 자체` (기법이 아니라 전제 조건으로 격하) · `AI 거버넌스 원론` (규제 공백 지적으로 대체) · `모델 탈옥(jailbreak)` (단일 주제로서의 비중 축소)

### 전략적 방향성 해석

세 흐름이 동시에 진행 중이다.

1. **공격 경제학의 붕괴.** Weston의 "The End of Rare"가 명제라면, NOVA(14,090건 확인, 99.4% 신규)와 Tencent(Chrome/Android 100+)와 Kettle(신규 기법 발명)이 증거다. 여기에 WASP-OS가 "프론티어 모델 없이도 가능"을 더했다. 취약점 발견 속도가 10~100배 빨라진 세계를 가정해야 한다.
2. **방어 속도의 정체.** 같은 주에 나온 Dataminr 데이터는 정반대 방향을 가리킨다 — 중앙값 패치 기간이 32일에서 43일로 **늘었고**, breakout time은 30분 아래로 **줄었다**. Vicarius의 "79%가 이미 알고 있던 취약점으로 사고를 겪었다"는 이 격차가 기술 문제가 아니라 프로세스 문제임을 보여준다.
3. **신뢰 경계의 재정의.** PleaseFix, CoreBreak, Trusted Enough to Run, Caging the Agent는 서로 다른 각도에서 같은 결론에 도달한다 — **AI 에이전트는 사용자의 권한을 그대로 물려받는 "새로운 내부자"이며, 기존 방어 체계는 이 존재를 전제로 설계되지 않았다.** Roblox 사례에서 EDR이 아무것도 잡아내지 못한 것이 상징적이다.

---

## 6. 경쟁사 대비 포지셔닝

Black Hat은 중립 연구 행사이므로, 벤더 경쟁 구도보다 **주요 플레이어가 이 행사에서 어떤 위치에 섰는가**로 정리한다.

| 영역 | Black Hat 2026에서의 포지션 | 주요 상대 진영 | 격차 / 함의 |
| --- | --- | --- | --- |
| AI 에이전트 방어 담론 | **Microsoft** — Agentic Security 조직 명의로 키노트, 방어 전략 어젠다 선점 | Google(Strategic Partner), AWS(ThreatForest 발표) | 벤더 중 유일하게 키노트 무대. 방어 담론 주도권 확보 |
| AI 에이전트 공격 연구 | **Zenity** — PleaseFix + Promptware EOD 2건, Global Partner | Check Point(프레임워크 런타임), Palo Alto(ChatGPT 샌드박스) | 에이전틱 브라우저 취약점 클래스 명명권 확보 |
| 자율 취약점 연구 | **Palo Alto Unit 42 (NOVA)** vs **Tencent Xuanwu (0-Day Engine)** vs **PortSwigger (HTTP Terminator)** | — | 서방 벤더·중국 연구소·독립 연구자가 동일 문제를 각기 다른 경로로 해결. 기술 우위 판정 불가 |
| 코딩 에이전트 보안 | Legit Security(VibeGuard 2.0), Straiker, Roblox(자체 구축) | Sysdig(헤드리스 모드), Drata(거버넌스) | 신생 카테고리. Claude Code·Cursor·Copilot을 모두 지원 대상으로 명시하는 것이 사실상 표준 |
| 아이덴티티 보안 | SailPoint(3종 아이덴티티 통합), BeyondTrust(리서치 인덱스) | Okta(Permiso 인수로 ITDR 보강) | "에이전틱 아이덴티티"를 인간·비인간과 동급 1급 객체로 다루는 것이 공통 방향 |
| 하드웨어 보안 | GPUBreach 연구진 | NVIDIA(공격자 아닌 방어 측면에서 WASP-OS 발표) | NVIDIA가 자사 GPU 대상 공격 연구와 자사 발표 세션을 같은 행사에서 마주한 구도 |

---

## 7. 한국 시장 / 한국어 사용자 관점

### 직접적으로 한국 기업이 관련된 발표

**Samsung Bixby 익스플로잇 체인이 올해 한국 관련 최대 이슈다.** Microsoft와 Mobile Hacking Lab 연구자가 Samsung Members → Samsung Account → Bixby로 이어지는 3단 취약점 체인(CVE-2025-21079, CVE-2025-58486, CVE-2025-58487)을 상세 공개했다. Galaxy S25·S24·Flip 7에서 시스템 권한 획득 및 원격 코드 실행이 재현됐다.

- **패치 상태**: Samsung은 이미 2025년 11월(Members)과 12월(Account) 보안 업데이트로 대응 완료했다. 즉 **현재 최신 패치 적용 기기는 안전하다**.
- **잔존 위험**: 패치를 받지 못한 구형·보급형 단말. 다만 익스플로잇이 성립하려면 대상 앱이 모두 설치돼 있어야 한다는 조건이 붙는다.
- **국내 시사점**: Bixby의 Capsule 아키텍처처럼 **"음성 어시스턴트가 앱 기능을 직접 제어하는 구조"** 는 국내 제조사·통신사·플랫폼 기업이 광범위하게 채택 중인 설계다. 이번 연구는 그 구조가 앱 간 권한 위임 사슬에서 어떻게 무너지는지를 보여준 사례로, AI 어시스턴트를 자사 서비스에 통합 중인 국내 기업이 자체 점검해볼 만한 레퍼런스다.
- Samsung은 SecurityWeek의 논평 요청에 응답하지 않았다.

### 한국어 지원 / 국내 리전

Black Hat은 제품 출시 행사가 아니므로 리전·한국어 지원 항목은 대부분 해당 사항 없음. 다만 발표된 벤더 제품 중 국내 도입을 검토할 만한 항목의 한국 지원 여부는 각 벤더에 개별 확인이 필요하다.

### 국내 규제 관점에서 특히 주목할 지점

1. **에이전틱 AI의 개인정보 처리 책임 소재.** PleaseFix가 실증한 것은 "사용자 권한으로 동작하는 AI가 공격자 지시에 따라 데이터를 유출한다"는 시나리오다. 개인정보보호법상 처리 위탁·유출 통지 의무를 이 구조에 어떻게 적용할지는 국내에서 정리된 해석이 없는 영역이다.
2. **AI 브라우저의 업무망 사용.** Zenity의 권고는 "AI 브라우저로 업무 계정에 로그인하지 말 것"이다. 망분리 규제를 적용받는 금융·공공 부문에서는 AI 브라우저·에이전트 도구의 도입 정책을 사전에 명문화할 필요가 있다.
3. **AI 프레임워크 공급망.** CrowdStrike가 확인한 "AI 프레임워크 패키지 131개 오염"은 국내 기업이 널리 쓰는 오픈소스 AI 스택에 직접 해당한다. SBOM에 AI 프레임워크와 MCP 서버·스킬 파일을 포함시키는 것이 실무 과제가 된다.

> ⚠️ **한국어 매체 리뷰**: 본 리뷰 작성 시점(행사 최종일)까지 국내 매체의 심층 리뷰 기사는 검색으로 확인되지 않았다. 통상 행사 종료 후 1~2주 내 국내 보안 전문지 보도가 나오므로, 추가 확인을 권한다. 또한 **국내 기업·연구자의 브리핑 발표나 Arsenal 툴 데모 참여 여부는 공개 자료로 확인되지 않았다.**

---

## 8. 타깃 독자별 핵심 요약

### 경영진 / 의사결정자가 알아야 할 3가지

1. **취약점 대응 SLA를 다시 계산해야 한다.** 공격자 breakout time은 30분 미만인데 조직의 중앙값 패치 기간은 43일로 늘었다(Dataminr). 중국 연계 행위자는 유효 PoC 공개 후 24시간 내에 익스플로잇한다(CrowdStrike). 현재의 월간 패치 주기는 이 속도를 전제로 설계된 것이 아니다.
2. **AI 에이전트 도입은 "새 직원 채용"과 같은 리스크 심사가 필요하다.** 에이전트는 사용자 권한을 그대로 상속하고, 일상적인 이메일·문서·캘린더 콘텐츠만으로 탈취될 수 있으며, EDR은 이를 탐지하지 못한다(Roblox 사례). 도입 승인 프로세스에 권한 최소화와 행위 감사가 없다면 지금 만들어야 한다.
3. **이미 알고 있는 취약점이 사고의 주범이다.** 79%의 조직이 인벤토리에 이미 있던 취약점으로 사고를 겪었고, 크리티컬 대응의 75%는 실제 해결이 아니라 티켓 생성에 그쳤다(Vicarius). 신규 위협 대응 예산보다 **기존 프로세스의 종결 검증**에 투자하는 편이 ROI가 높을 가능성이 있다.

### 아키텍트가 알아야 할 3가지

1. **에이전트 프레임워크 자체가 신뢰 경계다.** LangChain·CrewAI·AutoGen·Semantic Kernel의 메모리 스토어·플래닝 루프·직렬화 계층에 익스플로잇 가능한 로직이 있다. 툴 권한만 통제하는 설계로는 부족하며, 대화 턴을 넘는 지연 실행과 에이전트 간 전파, 메모리 오염을 아키텍처 수준에서 차단해야 한다.
2. **AI 샌드박스를 전통 샌드박스와 동급으로 신뢰하지 말 것.** ChatGPT, Cloudflare Workers, Claude Code 모두 샌드박스 이스케이프가 시연됐다. 다층 방어(파일시스템 가상화 + 네트워크 정책 강제 + 자격증명 격리 + 행위 모니터링)가 Roblox가 도달한 실전 해법이다.
3. **멀티테넌트 GPU 인프라의 격리 가정을 재검토할 것.** GPUBreach는 GDDR6 비트 플립에서 IOMMU를 우회해 호스트 루트까지 도달했다. CPU DRAM과 달리 GPU DRAM에는 동등한 하드닝이 없다. 공유 GPU 환경에서 학습·추론을 돌린다면 테넌트 격리 모델을 재평가할 시점이다.

### 개발자가 알아야 할 3가지

1. **MCP 서버와 스킬 파일은 npm·PyPI와 같은 공급망이다.** Promptware EOD는 스킬 마크다운, rug-pull된 MCP 서버, 무기화된 게시물이 악성 페이로드 전달 벡터임을 보였다. 의존성 검증 프로세스를 여기까지 확장해야 한다.
2. **코딩 에이전트를 자격증명이 있는 셸로 취급할 것.** GitHub Issue에 숨긴 지시문 하나로 Claude Code가 자격증명을 공개 저장소에 올린 사례가 있다. 에이전트에게 주는 자격증명은 격리하고, 네트워크 정책을 강제하고, 행위 로그를 남겨야 한다.
3. **방어적 코딩이 오히려 취약점을 만들 수 있다.** "C and Its Consequences"는 방어적 패턴이 컴파일러 최적화 과정에서 TOCTOU를 유입시킬 수 있음을 보였다. 소스 수준 리뷰와 별개로 컴파일 결과물 검증이 필요하다.

---

## 9. 액션 아이템 / 체크리스트

### 이번 주에 바로 할 수 있는 것

- [ ] 조직 내 **AI 브라우저 사용 현황 파악** — Claude in Chrome, ChatGPT Atlas, Perplexity Comet, Copilot Edge 사용자가 업무 계정으로 로그인해 있는지 확인
- [ ] AI 브라우저의 **에이전트 기능 기본값 점검 및 비활성화** — 특히 자동 실행·자동 승인 옵션
- [ ] **Samsung Galaxy 단말 보안 패치 적용 상태 점검** (2025년 12월 이후 패치 필수)
- [ ] Huntress **RMM Guard**(에이전트 배포 고객 무료) 적용 검토 — 비인가 RMM 도구가 실제 공격 경로로 활발히 쓰이고 있음
- [ ] **Ray 클러스터 노출 여부 확인** — ShadowRay 2.0 자가전파 봇넷 대상

### 신청·대기 등록이 필요한 프리뷰

- [ ] Drata **AI Agent Governance** (Limited Availability) — 조직 내 에이전트 인벤토리가 필요한 경우
- [ ] Tanium **Google Threat Intelligence 연동** (Private Preview)
- [ ] Zimperium **Deep Insights** (2026년 9월 GA 예정), Viakoo **DXM** (4분기 예정)

### 기존 아키텍처 재검토가 필요한 영역

- [ ] **에이전트 권한 모델** — "에이전트는 반드시 탈취된다"를 전제로, 최악의 시나리오를 도출하고 불필요한 권한을 전부 제거
- [ ] **SBOM 확장** — AI 프레임워크, MCP 서버, 스킬 파일을 소프트웨어 자재명세서에 포함
- [ ] **아웃바운드 통제** — DNS 기반 통제만으로는 부족. 직접 IP 연결(C2 시도의 23.17%)을 커버하는 제로트러스트 IP 검증 도입 검토
- [ ] **패치 종결 정의 재정의** — 티켓 종료가 아니라 재스캔 검증을 종결 조건으로
- [ ] **멀티테넌트 GPU 격리 재평가** — 공유 GPU 인프라 운영 시

### 추가 학습 / 리서치가 필요한 주제

- [ ] **PHANTOM-B 위협 모델** — LLM 제품 전용, 속도 최적화 설계
- [ ] **LLMFirewall** (벤구리온대 오픈소스) — Snort/YARA 방식 LLM 트래픽 검사
- [ ] **Promptware EOD 프레임워크** (Zenity 오픈소스) — 에이전트 공급망 아티팩트 분석
- [ ] 녹화 브리핑 시청 — **2026년 8월 14일 ~ 9월 14일**, Black Hat 이벤트 앱 (패스홀더 한정)

---

## 10. 종합 평가 및 시사점

### 성공 지표: ★★★★☆ (4.5 / 5)

**근거**

- **연구 품질(5/5)** — GPUBreach, PleaseFix, 0-Day Engine, HTTP Terminator는 각각 독립적으로 해당 분야의 방향을 바꿀 만한 결과다. 특히 Kettle의 "AI가 새로운 공격 기법 자체를 발명한다"는 결과는 "AI가 알려진 버그 클래스를 찾는다"와 질적으로 다른 선을 넘었다.
- **시의성(5/5)** — 키노트 주제(공격 비용의 붕괴)와 연구 발표(자율 취약점 발견의 실증)와 산업 보고서(방어 속도의 정체)가 서로 맞물리며 하나의 논지를 완성했다. 우연이라기엔 정교했다.
- **정책 연계(4/5)** — 백악관·CISA·FBI·전쟁부 동시 등장은 상징적 성과다. 다만 구체적 정책 발표가 없어 "방향 제시"에 머물렀다.
- **방어 측 성과(3/5)** — 아래 참조.

### 기대에 못 미친 부분

1. **방어 연구가 공격 연구를 따라가지 못했다.** Straiker의 분석이 지적한 그대로다 — 새로운 위협 모델링·샌드박싱·모니터링 프레임워크가 제안됐지만, 공격 연구의 양과 성숙도에 비하면 명백히 열세다. Roblox의 다층 샌드박스와 LLMFirewall이 가장 실전적인 답변이었으나, 둘 다 "사고가 난 뒤 만든 것"이다.
2. **PleaseFix에 대한 벤더 대응이 불명확하다.** Zenity 자신도 "패치만으로는 해결되지 않는 설계 결함"이라고 규정했고, 영향받는 벤더들의 구체적 로드맵은 행사 기간 중 제시되지 않았다. 사용자에게 남은 것은 "권한을 줄이고 업무 계정으로 로그인하지 말라"는 운영 권고뿐이다.
3. **AI 규제 논의의 공백이 확인됐다.** Forrester의 "The Intent Gap" 세션은 현행 어떤 AI 규제도 자율적 의사결정을 다루지 못한다고 지적했다. 문제 제기는 있었으나 대안은 나오지 않았다.
4. **한국을 포함한 아시아 관점의 부재.** 중국(Tencent Xuanwu), 대만(TXOne), 이스라엘(Zenity·Check Point·벤구리온대) 연구는 두드러졌으나, 한국 기업·연구자의 발표는 공개 자료에서 확인되지 않았다. Samsung은 연구 대상으로만 등장했다.

### 향후 6~12개월 업계 영향 예측

| 예측 | 근거 | 신뢰도 |
| --- | --- | --- |
| **에이전트 보안(Agent Security)이 독립 제품 카테고리로 확립** | 이미 Straiker·Zenity·Legit·Drata·Onyx($113M 조달) 등이 포지셔닝 완료. 브리핑 7개 이상이 이 주제에 집중 | 높음 |
| **AI 브라우저의 기업 도입에 제동** | PleaseFix가 "설계 결함"으로 규정됐고 실증 피해가 구체적. 다수 기업이 정책적으로 차단할 개연성 | 중간~높음 |
| **취약점 공개량 급증에 따른 CVE 생태계 부하** | NOVA 한 시스템만으로 2개월 14,090건. 유사 시스템이 확산되면 NVD·MITRE 처리 역량 초과 | 중간 |
| **GPU 하드웨어 보안이 클라우드 조달 요건에 반영** | GPUBreach가 IOMMU 우회를 실증. 다만 하드웨어 대응은 세대 교체가 필요해 단기 변화는 제한적 | 중간 |
| **MCP·스킬 파일 대상 공급망 스캐닝 도구 등장** | Promptware EOD가 오픈소스로 공개돼 상용화 기반 마련 | 중간~높음 |

### 다음 회차(30주년, 2027)에서 기대되는 방향

- **방어 측 반격의 실증** — 올해가 "공격이 싸졌다"의 해였다면, 내년은 "그래서 어떻게 막았는가"의 데이터가 나와야 한다. Closed Loop(5분 내 익스플로잇↔방어 시그니처)가 그 씨앗이다.
- **에이전트 보안 표준화** — PHANTOM-B, MITRE ATLAS, NIST AI RMF, OWASP 계열의 정리·수렴 여부
- **정책의 구체화** — 올해 키노트가 방향을 제시했다면, 내년에는 실제 규제·조달 요건·정보공유 체계로 구현됐는지가 평가 기준
- **GPUBreach 후속** — NVIDIA를 비롯한 GPU 벤더의 대응 및 차세대 메모리의 하드닝 여부

---

## 11. 참고자료

> 아래는 모두 실제 접근하여 내용을 확인한 URL이다.

### 공식 자료

- Black Hat USA 2026 공식 사이트 — https://blackhat.com/us-26/
- 키노트 라인업 보도자료 (2026-07-16) — https://blackhat.com/html/press/2026-07-16.html
- 브리핑 라인업 보도자료 (2026-06-02, Business Wire) — https://www.businesswire.com/news/home/20260602765947/en/Black-Hat-USA-Announces-Over-100-Briefings-for-its-29th-Anniversary-Event-in-Las-Vegas
- Briefings 일정 — https://blackhat.com/us-26/briefings.html
- AI Summit — https://blackhat.com/us-26/ai-summit.html

### 연구 원문 / 벤더 리서치

- Palo Alto Unit 42 — Frontier AI Vulnerability Study (NOVA): https://unit42.paloaltonetworks.com/frontier-ai-vulnerability-burst/
- Palo Alto Unit 42 — Direct-to-IP Malware: https://unit42.paloaltonetworks.com/malware-bypass-dns-direct-to-ip/
- Palo Alto Unit 42 — Passwordless Authentication Security Risks (Pass-ta-key): https://unit42.paloaltonetworks.com/passwordless-authentication-security-risks/
- Palo Alto Unit 42 — Autonomous AI Cyber Attack Campaign: https://unit42.paloaltonetworks.com/autonomous-ai-cyber-attack-campaign/
- Palo Alto Unit 42 — XCSSET v4.0 분석: https://unit42.paloaltonetworks.com/xcsset-v40-malware-analysis/
- CrowdStrike 2026 Threat Hunting Report: https://www.crowdstrike.com/en-us/resources/reports/threat-hunting-report/
- Cisco Talos — 적대 세력의 AI 무기화 분석: https://blog.talosintelligence.com/keep-going-bro-youve-got-this-a-data-driven-look-at-how-adversaries-are-weaponizing-ai/
- Cisco Talos — 2026 Q2 IR Trends: https://blog.talosintelligence.com/ir-trends-q2-2026/
- BeyondTrust Phantom Labs Research Index: https://www.beyondtrust.com/press/phantom-labs-research-index
- Dataminr 2026 Mid-Year Cyber Threat Landscape Report: https://resources.dataminr.com/resources/dataminr-2026-mid-year-cyber-threat-landscape-report
- Trustmi 2026 인보이스 사기 분석: https://trustmi.ai/invoice-fraud-attacks-2026/

### 매체 보도

- Dark Reading — AI Browsers Vulnerable to 'PleaseFix' Zero-Click Agent Hijacking: https://www.darkreading.com/cyber-risk/ai-browsers-zero-click-agent-hijacking
- Dark Reading — No Perfect Fix for AI Browser Prompt Injection Flaws: https://www.darkreading.com/application-security/no-perfect-fix-ai-browser-prompt-injection-flaws
- SecurityWeek — How a $50,000 Exploit Chain Turned Bixby Against Samsung Phones: https://www.securityweek.com/how-a-50000-exploit-chain-turned-bixby-against-samsung-phones/
- SecurityWeek — New Attack Methods Enable Malware to Hijack Passkey-Protected Accounts: https://www.securityweek.com/new-attack-methods-enable-malware-to-hijack-passkey-protected-accounts/
- SecurityWeek — 벤더 발표 요약 Part 1 / Part 2 / Part 3: https://www.securityweek.com/black-hat-usa-2026-summary-of-vendor-announcements-part-2/
- Virtualization Review — Black Hat USA 2026 Research Roundup: https://virtualizationreview.com/articles/2026/08/05/black-hat-usa-2026-research-roundup-ai-speeds-up-the-old-attacks.aspx
- Straiker — AI Agents Take Center Stage at Black Hat USA 2026 (세션별 상세 분석): https://www.straiker.ai/blog/black-hat-usa-2026-ai-security-talks
- TechTimes — Rowhammer Hits NVIDIA GPUs as Government Takes the Keynote Stage: https://www.techtimes.com/articles/322389/20260731/black-hat-usa-2026-rowhammer-hits-nvidia-gpus-government-takes-keynote-stage.htm

### 선행 연구

- GPUHammer: Rowhammer Attacks on GPU Memories are Practical (USENIX Security 2025): https://www.usenix.org/conference/usenixsecurity25/presentation/lin-shaopeng
- Samsung 보안 업데이트 (2025년 11월): https://security.samsungmobile.com/serviceWeb.smsb?year=2025&month=11

### 다시보기

- 녹화 브리핑: **2026년 8월 14일 ~ 9월 14일**, Black Hat Events App (패스홀더 한정)
- Black Hat 공식 YouTube: https://www.youtube.com/user/BlackHatOfficialYT

---

> **작성 원칙 고지**
>
> - 본 리뷰는 2026년 8월 6일(행사 최종일) 기준으로 공개된 자료에 근거한다. 행사 종료 후 추가 공개될 세션 슬라이드·백서·국내 보도는 반영되지 않았다.
> - 참가자 수, 국내 기업 참여 현황, 일부 벤더의 취약점 대응 상태는 공식 확인이 되지 않아 "미공개" 또는 "확인 필요"로 표기했다.
> - 브리핑 발표 내용은 공식 세션 초록 및 매체 보도를 근거로 정리했으며, 발표 현장에서 추가·수정된 내용은 반영되지 않았을 수 있다.
