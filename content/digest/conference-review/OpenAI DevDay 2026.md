---
title: "OpenAI DevDay 2026"
date: "2026-09-30T02:04:00.000Z"
author: "Gihyun Park"
lastmod: "2026-09-30"
summary: "OpenAI DevDay 2026의 핵심 발표인 상시 가동 에이전트 dots, GPT-6.1 Sol, Ultrafast, Agents·Decisions API, Codex 개편, ChatGPT 협업 기능과 마켓플레이스를 정리하고 경쟁 구도·한국 시장 시사점·실행 과제를 분석한 컨퍼런스 리뷰."
description: "OpenAI DevDay 2026의 핵심 발표인 상시 가동 에이전트 dots, GPT-6.1 Sol, Ultrafast, Agents·Decisions API, Codex 개편, ChatGPT 협업 기능과 마켓플레이스를 정리하고 경쟁 구도·한국 시장 시사점·실행 과제를 분석한 컨퍼런스 리뷰."
tags: ["AI", "Open AI", "잎새 51호"]
image: "images/OpenAI-DevDay-2026.webp"
comments: false
notion_url: "https://app.notion.com/p/OpenAI-DevDay-2026-3eb091c284f680f9aa2bf5961d6d96b2"
notion_id: "3eb091c2-84f6-80f9-aa2b-f5961d6d96b2"
기간: "2026-09-29"
주최: ["Open AI"]
categories: ["컨퍼런스 리뷰", "AI & Tech", "blog"]
참고내용: "2026년 9월 29일 행사 및 당일·익일 공개 자료 기준. 일부 수치와 출시 범위는 출처 간 상충하거나 공식 확인이 필요하므로 본문 경고 표시와 ‘미확인·상충 항목 정리’를 함께 참고."
Category: "3_Resource"
---

# OpenAI DevDay 2026 컨퍼런스 리뷰

> 작성일: 2026년 9월 29일 (행사 당일 기준) · 언어: 한국어 (제품·기술 고유명사는 원문 영어 유지)
> ⚠️ 표기는 행사 당일·익일 보도 기준입니다. 일부 수치는 매체별로 엇갈려 해당 항목에 ⚠️를 붙였습니다.

---

## 1. 총평

OpenAI DevDay 2026은 **"모델 회사에서 플랫폼 회사로"** 넘어가는 전환점을 공식화한 행사였습니다. 2023~2025년 DevDay가 "더 좋은 모델과 더 싼 토큰"을 팔았다면, 2026년은 **상시 가동 에이전트(dots)**, **협업 워크스페이스(ChatGPT Space·Pages)**, **엔터프라이즈 마켓플레이스**를 한 번에 꺼내며 ChatGPT를 업무 운영체제 자리에 올려놓으려 했습니다. 하루에 20개 이상의 제품이 공개됐고, Sam Altman은 사전에 배 이모지 6개를 올려 6개 핵심 발표를 예고했습니다.

관통하는 주제는 세 가지입니다.

1. **에이전트의 상시화** — 사람이 매번 지시하는 "요청형 AI"에서, 목표를 주면 알아서 일하는 "상시 가동형 AI"로. dots가 이 전환의 상징입니다.
2. **가격·속도의 이원화** — GPT-6.1 Sol로 상위 모델 성능을 1/5 가격에 내리는 동시에, Ultrafast와 Pro 500이라는 초고가 티어를 새로 만들어 **저가 대량 / 초고속 프리미엄**으로 시장을 양분했습니다.
3. **생태계 잠금(lock-in)** — Sign in with ChatGPT(16개 파트너), OpenAI Marketplace(32개 파트너), 4,000개 이상 앱 플러그인, AWS Bedrock Managed Agents. 모델이 아니라 **배포 채널**로 경쟁하겠다는 선언입니다.

한국 관점의 핵심은 셋입니다. **① dots가 EEA·영국·스위스에서 Pro 사용자에게 제공되지 않는 반면 한국은 명시적 제외 대상이 아니어서, 국내가 사실상 조기 실사용 시장이 됩니다.** ② GPT-6.1 Sol의 입력 100만 토큰당 $2 가격은 국내 AI 서비스 기업의 단가 구조를 다시 계산하게 만듭니다. ③ ChatGPT Space·Pages는 네이버웍스·카카오워크 등 국내 협업 도구와 직접 경쟁 구도에 들어섭니다.

---

## 2. 행사 기본 정보

| 항목 | 내용 |
| --- | --- |
| 행사명 | OpenAI DevDay 2026 |
| 일자 | 2026년 9월 29일 (화) |
| 장소 | 미국 샌프란시스코 |
| 키노트 | Sam Altman, 태평양시 오전 10시 (한국시간 9월 30일 새벽 2시) |
| 성격 | OpenAI 연례 개발자 컨퍼런스 (4회차) |
| 공개 규모 | 제품·기능 20개 이상 |
| 부대 행사 | DevDay Exchange 2026 (별도 트랙) |
| 주요 연사 | Sam Altman, Tejal Patwardhan(리서치), Romain Huet·Holly Li(데모) |
| 중계 | 키노트 온라인 중계 |

⚠️ 2026년 행사의 **현장 참가자 수·참가비는 공식 확인되지 않았습니다.** 참고로 2025년은 Fort Mason에서 1,500명 이상, 참가비 $650이었습니다.

**신설 요소**: 키노트가 제품 나열이 아니라 "에이전트가 일하는 장면" 중심의 라이브 데모로 구성됐고, 데모 중 dots의 응답 지연 등 기술적 문제가 수차례 노출됐습니다.

---

## 3. 주요 발표

### 3-1. dots — 상시 가동형 AI 에이전트 (최대 발표)

| 항목 | 내용 |
| --- | --- |
| 릴리스 상태 | Pro·Business Premium **정식 제공 시작** / Enterprise·Edu·Healthcare는 **베타**(관리자가 기본 비활성 상태에서 활성화) |
| 기반 모델 | GPT-6 Astra |
| 정량 지표 | 플러그인을 통해 **4,000개 이상 앱** 연결 · 전용 클라우드 컴퓨터 + 브라우저 각 1대 · 구독당 dot 1개 기본 제공 |
| 지역 가용성 | Pro는 **EEA·스위스·영국 제외**, 만 18세 이상 · Business Premium은 지원 지역 글로벌 |
| 경쟁 제품 | Meta **Muse** / Meta Instinct, xAI 계열 상시 에이전트 |
| 출처 | OpenAI DevDay 2026 Recap, the-decoder, Fortune |

**작동 방식**: 사용자가 목표를 주면 dot이 전용 클라우드 환경에서 계속 일합니다. 리서치, 데이터 분석, 문서 작성을 직접 수행하고, 소프트웨어 작업은 Codex에 넘깁니다. ChatGPT·Slack·Microsoft Teams·음성 통화에서 호출할 수 있고 플랫폼을 옮겨도 맥락이 유지됩니다. 사용자별로 `@이름-dot` 형태의 핸들이 부여됩니다.

**안전·권한 모델** (기존 Computer Use와 결정적으로 다른 지점):

- 유휴 상태에서는 **읽기 전용 도구만 사용해 선제 리서치**를 수행
- **Custom Rules** — 행동 단위로 허용 / 승인 요구 / 금지 지정
- 계정 접근·정보 공유가 걸린 행동은 **자동 검토 시스템**이 심사
- **비밀번호 변경 등은 항상 사람 승인 필수**
- 악성 지시 차단 장치 및 안전 우려 시 작업 일시정지 모니터링

**한계**: 키노트 라이브 데모에서 dots의 응답이 눈에 띄게 느렸습니다. 텍스트 대화는 "곧 제공"으로 남았습니다. 추가 dot·속도 향상·작업량 확대는 별도 과금입니다.

### 3-2. GPT-6.1 Sol — 성능 유지, 가격 1/5

| 항목 | 내용 |
| --- | --- |
| 릴리스 상태 | **GA** — API 및 Plus·Pro·Business·Enterprise·Edu |
| 정량 지표 | 입력 **$2 / 100만 토큰**, 출력 **$10 / 100만 토큰**, 캐시된 입력 **$0.10 / 100만 토큰** — GPT-6 Astra 대비 약 **1/5 가격** |
| 벤치마크 | **DeepSWE v1.1** 코딩 벤치마크에서 GPT-6 Astra와 동급 ⚠️ 단일 출처 |
| 강점 | 에이전트형 코딩, 컴퓨터 조작, 전문 업무 |
| 경쟁 제품 | Anthropic Claude 계열, Google Gemini 계열 |
| 출처 | OpenAI DevDay 2026 Recap, sqmagazine |

⚠️ **초기 적용 범위 불일치**: 공식 recap은 "전 사용자 GA"로 표기했으나, 일부 매체는 "ChatGPT Work와 Codex에 먼저 적용, 일반 채팅은 미적용"으로 보도했습니다. 배포가 단계적으로 진행 중인 것으로 보입니다.

⚠️ 참고: DevDay 직전 **GPT-6.1 Astra가 안전 문제로 보류됐다**는 보도(WSJ 인용)가 있었고, Sol이 그 자리를 대신한 것으로 해석됐습니다. OpenAI 공식 확인은 없습니다.

### 3-3. Ultrafast 속도 티어

| 항목 | 내용 |
| --- | --- |
| 릴리스 상태 | **GA** — API 및 ChatGPT Work/Codex (Pro 500, Enterprise) |
| 정량 지표 | Codex에서 토큰 생성 **최대 8배 (초당 300토큰)**, API에서 **최대 6배** |
| 향후 | GPT-6.1 Sol Ultrafast 버전 "곧 제공" |
| 경쟁 제품 | Groq·Cerebras 기반 초고속 추론 서비스 |
| 출처 | OpenAI DevDay 2026 Recap |

⚠️ 일부 매체가 "API 표준 대비 6배 **가격**"으로 보도했으나, 공식 표기는 "6배 **속도**"입니다. Ultrafast의 정확한 추가 과금률은 확인되지 않았습니다.

### 3-4. Agents API (컴퓨터 조작) · Decisions API

| 항목 | Agents API | Decisions API |
| --- | --- | --- |
| 릴리스 상태 | **GA** (API / Codex / ChatGPT Work) | **제한적 프리뷰**, 광범위 공개 "수일 내" |
| 기능 | 에이전트가 컴퓨터를 직접 조작 | 사전 정의된 유한한 선택지 중 **1초 이내** 실시간 판단 |
| 용도 | 브라우저·앱 자동화 | 문의 라우팅, 다중 에이전트 조율, 실시간 분기 |
| 출처 | OpenAI DevDay 2026 Recap, ZDNet Korea | 동일 |

Decisions API는 "긴 답변을 생성하지 않고 선택지를 고른다"는 점에서 기존 LLM 호출과 성격이 다릅니다. 에이전트 오케스트레이션의 **저지연 제어 평면**으로 설계된 것으로 보입니다.

### 3-5. Private Intelligence — 기업 데이터 보호

| 항목 | 내용 |
| --- | --- |
| 릴리스 상태 | Zero Data Retention + **Private Safety Processing** 제공 / **Private Inference는 올가을 예정** |
| 기능 | 민감 데이터를 다루면서도 안전 처리 파이프라인이 원문을 보존하지 않음 |
| 경쟁 제품 | Apple Private Cloud Compute, AWS Nitro Enclaves 기반 기밀 추론 |
| 출처 | OpenAI DevDay 2026 Recap |

### 3-6. Codex 제품군 전면 개편

| 제품 | 릴리스 상태 | 핵심 |
| --- | --- | --- |
| Codex in the Cloud | GA (Plus·Pro·Business·Healthcare·Edu·Enterprise) | 로컬 PC를 켜둘 필요 없이 백그라운드 작업이 클라우드에서 계속 실행 |
| Codex CLI Refresh | GA (전 요금제) | 음성으로 시작, `/agents` 뷰 신설, 프롬프트 편집 개선 |
| Code Review | GA (전 요금제, 데스크톱 앱) | 코드 리뷰 전용 기능 |
| Codex Security Cloud | GA (Pro·Business·Enterprise·Edu) | 보안 검사 전용 클라우드 |

### 3-7. ChatGPT 협업 계층 — Space · Pages · Slides

| 제품 | 릴리스 상태 | 내용 |
| --- | --- | --- |
| ChatGPT Space | Pro·Business·Enterprise (데스크톱/웹, 모바일은 읽기·공유) | 동료와 dots가 함께 들어오는 협업 프로젝트 허브 |
| Pages | Pro·Business·Enterprise | **사람과 에이전트가 함께 편집**하도록 설계된 새 문서 유형 |
| Collaborative Slides | **수주 내 제공 예정** | 여러 동료와 에이전트가 동시에 덱 편집 |
| Team Tasks / Create Teams | Business·Enterprise | 팀 단위 작업 관리 |
| @ChatGPT in Slack / Microsoft Teams | Business·Enterprise | 협업 툴 내 직접 호출 |
| Meetings Plugin | **베타** (macOS 데스크톱, Pro·Business) / Enterprise 예정 | 회의 지원 |
| Shareable Profiles | Business·Enterprise | 프로필 공유 |

**경쟁 제품**: Google Workspace(Docs·Sheets·Slides), Microsoft 365 Copilot, Notion.

### 3-8. 플러그인 생태계

| 항목 | 릴리스 상태 | 내용 |
| --- | --- | --- |
| Plugin Extensions | 전 요금제 | 사이드바에 플러그인 전용 공간, 인터랙티브 패널 구축 |
| 플러그인 발견 개선 | 전 요금제 | Plugin Creator 도구, 제출 절차 재설계, 랭킹 강화 |
| Sites with Plugins | Business·Enterprise·Healthcare·Edu | — |
| MCP Events for Plugin Automations | 전 요금제 | MCP 이벤트 기반 자동화 |

### 3-9. 요금제 및 파트너십

| 항목 | 내용 |
| --- | --- |
| **Pro 500** (신규) | 월 $500 · Plus 대비 **25배** 사용량 · Ultrafast 독점 접근 |
| **Pro 200** (변경) ⚠️ | Codex·Work 사용량 Plus 대비 20배 → **10배**, 주간 GPT-6 채팅 200 → **100**건 · 기존 가입자는 **2026년 10월 29일까지** 종전 한도 유지 |
| Pro 100 | Plus 대비 5배 유지 ⚠️ |
| Sign in with ChatGPT | **16개 파트너** — Cognition Devin, Notion, Vercel, T3, OpenClaw, Dactyl 등 (Plus·Pro 대상) |
| OpenAI Marketplace | **32개 파트너** — Adobe, Figma, Sierra, Decagon, HubSpot, Salesforce, ServiceNow, Harvey, Legora, Palo Alto Networks, CrowdStrike, Baseten 등 (Enterprise 관심 접수) |
| Bedrock Managed Agents | AWS Bedrock에서 OpenAI 에이전트 운영 |

⚠️ Pro 200 관련 보도가 엇갈립니다. 한쪽은 "사용량 축소", 다른 쪽은 "5시간 사용 제한 폐지"로 보도했습니다. 혜택 조정과 제약 완화가 동시에 이뤄졌을 가능성이 높으나 공식 요금제 페이지 확인이 필요합니다.

---

## 4. 키노트 분석

**발언 요지.** Sam Altman은 태평양시 오전 10시에 키노트를 열었고(현지 진행 기준 오후 1시대에 주요 순서 진행), dots를 "모든 것을 처리하도록 만들어진, 놀랍도록 유능한 상시 가동 에이전트"로 소개했습니다. ChatGPT **주간 이용자 12억 명**, **기업 고객 250만 곳**이라는 규모 지표를 제시하며 플랫폼 정당성을 확보하는 순서를 앞에 뒀습니다. 리서치 세션은 Tejal Patwardhan이, 제품 데모는 Romain Huet과 Holly Li가 맡았습니다.

**메시지 전략.** 2025년 키노트가 "개발자에게 도구를 준다"(Apps SDK·AgentKit)였다면, 2026년은 **"AI가 동료가 된다"**입니다. 답하는 AI에서 일하는 AI로의 전환을 서사 축으로 삼았고, 제품 순서도 모델 → 에이전트 → 협업 공간 → 마켓플레이스로 배열해 스택 전체를 소유하겠다는 의도를 드러냈습니다.

**전년 대비 톤 변화.** 2025년의 낙관 일변도와 달리 2026년은 **방어적 요소가 뚜렷**했습니다. Private Intelligence, dots의 다층 권한 모델, 자동 행동 심사, 비밀번호 변경 시 사람 승인 의무화가 키노트 안에서 비중 있게 다뤄졌습니다. 직전에 최신 모델을 안전 문제로 보류했다는 보도가 나온 상황에서, 안전을 제품 기능으로 전시하는 전략을 택한 셈입니다.

**실행 리스크의 노출.** dots 데모의 응답 지연과 여러 데모의 기술적 문제는 상시 가동 에이전트의 운영 난도를 그대로 보여줬습니다. "기대와 현실의 괴리"라는 지적이 국내외에서 곧바로 나왔습니다.

---

## 5. 전년 대비 비교

| 지표 | DevDay 2025 | DevDay 2026 | 변화 |
| --- | --- | --- | --- |
| 일자 | 2025-10-06 | 2026-09-29 | 1주 앞당김 |
| 장소 | 샌프란시스코 Fort Mason | 샌프란시스코 | 동일 도시 |
| 현장 규모 | 1,500명 이상, 참가비 $650 | ⚠️ 미확인 | — |
| ChatGPT 주간 이용자 | 8억 명 ⚠️ | **12억 명** | 약 +50% |
| 공개 제품 수 | 4대 축 중심 | **20개 이상** | 대폭 확대 |
| 핵심 서사 | 앱·에이전트 **빌딩 블록** 제공 (Apps SDK, AgentKit) | **상시 가동 에이전트 + 협업 워크스페이스** | 도구 → 인력 |
| 요금제 최고가 | Pro $200 | **Pro 500 ($500)** | 상단 2.5배 확장 |
| 파트너 전략 | 개발자 SDK 중심 | Sign in 16곳 + Marketplace 32곳 | 유통 채널화 |

**해석.** 2025년이 "개발자가 OpenAI 위에 무언가를 짓게 하는" 해였다면, 2026년은 **OpenAI가 직접 최종 사용자 워크플로를 소유하려는** 해입니다. Space·Pages·Slides는 명백히 Google Workspace 영역이고, Marketplace는 Salesforce·ServiceNow 같은 SaaS 대기업을 파트너로 끌어들여 엔터프라이즈 진입 장벽을 낮췄습니다. 동시에 Pro 200의 사용량 조정은 **수익성 압박**이 실제 요금 설계에 반영되기 시작했음을 시사합니다.

---

## 6. 경쟁 포지셔닝

| 경쟁축 | 상대 | OpenAI의 위치 |
| --- | --- | --- |
| 상시 에이전트 | Meta **Muse**, Meta Instinct | dots는 **후발 대응**. 보도는 일관되게 "Muse에 대한 도전"으로 규정. 차별점은 4,000개 앱 연결과 Codex 연계 |
| 협업 오피스 | Google Workspace, Microsoft 365 Copilot, Notion | Space·Pages·Slides로 **신규 진입**. 문서·시트·슬라이드를 사람과 에이전트가 동시 편집 |
| 코딩 에이전트 | Anthropic **Claude Code** | 열세. 전문 개발자 사용률 Claude Code **39%**(1월 18% → 상승) vs Codex **16%**(1월 3% → 상승) ⚠️ 단일 조사 |
| 추론 가격 | Google Gemini, Anthropic Claude | GPT-6.1 Sol의 $2/$10로 **가격 공세** |
| 추론 속도 | Groq, Cerebras | Ultrafast 300 tok/s로 **자체 대응** |
| 클라우드 유통 | AWS Bedrock | 경쟁이 아닌 **제휴** — Bedrock Managed Agents |

**핵심 판단.** OpenAI는 이제 단일 전선이 아니라 **모델·에이전트·오피스·마켓플레이스 네 개 전선**에서 동시에 싸웁니다. 강점은 12억 주간 이용자라는 유통력이고, 약점은 전문 개발자 층에서 Claude Code에 밀리는 코딩 영역과 상시 에이전트의 운영 안정성입니다. dots의 EEA·영국·스위스 제외는 규제 리스크가 제품 설계를 이미 제약하고 있다는 신호입니다.

---

## 7. 한국 시장 시사점

**① dots 조기 실사용 시장.** Pro 사용자 기준 dots는 EEA·스위스·영국에서 제공되지 않습니다. 한국은 명시적 제외 대상이 아니므로, **유럽보다 먼저 상시 에이전트를 실무에 붙여볼 수 있는 시장**이 됩니다. 다만 국내 개인정보보호법상 자동화된 의사결정 관련 고지·거부권, 위탁·국외이전 고지 요건은 별도로 검토해야 합니다. ⚠️ 한국 정식 제공 여부는 OpenAI 공식 지역 목록으로 재확인이 필요합니다.

**② 토큰 단가 재계산.** GPT-6.1 Sol의 입력 $2 / 출력 $10 / 캐시 입력 $0.10 구조는 국내 AI 서비스·SaaS 기업의 원가 모델을 바꿉니다. 특히 캐시 입력이 입력가의 1/20이라, **긴 시스템 프롬프트와 사내 문서를 반복 투입하는 한국형 업무 봇**에서 절감 폭이 큽니다. 자체 sLLM 구축 대비 TCO를 다시 따져볼 시점입니다.

**③ 국산 협업 도구와의 정면 충돌.** ChatGPT Space·Pages·Collaborative Slides는 네이버웍스, 카카오워크, 두레이 등 국내 협업 SaaS와 직접 겹칩니다. @ChatGPT의 Slack·Microsoft Teams 연동은 이미 외산 협업툴을 쓰는 국내 기업에는 즉시 적용 가능한 반면, 국산 도구는 별도 연동 개발이 필요합니다.

**④ 개발 조직의 도구 선택.** Codex in the Cloud로 로컬 PC 상주가 불필요해지면서, 국내 SI·플랫폼 기업의 **폐쇄망·망분리 환경**과의 정합성이 쟁점이 됩니다. Private Intelligence(Zero Data Retention, 가을 예정 Private Inference)가 금융·공공 영역 도입의 전제 조건이 될 가능성이 높습니다.

**⑤ 마켓플레이스 파트너 부재.** Sign in with ChatGPT 16개사, Marketplace 32개사 중 **한국 기업은 확인되지 않았습니다.** 국내 SaaS가 이 유통 채널에 올라타지 못하면, 12억 이용자 기반 배포에서 구조적으로 배제됩니다. 플러그인 제출 절차가 재설계되고 랭킹이 강화된 지금이 진입 적기입니다.

**⑥ 비용 상단 확대.** Pro 500(월 $500, 연 환산 약 830만 원 ⚠️ 환율 가정)은 국내 기업 기준 1인당 AI 예산 상한을 크게 올립니다. 반면 Pro 200의 사용량 축소는 기존 국내 헤비 유저의 실효 비용을 올립니다. 2026년 10월 29일 유예 종료 전에 요금제 재배치가 필요합니다.

---

## 8. 청중별 시사점

### 경영진

- **AI 예산 구조가 2단으로 갈라집니다.** 대량 저가(GPT-6.1 Sol)와 소수 초고가(Pro 500·Ultrafast). 전사 일괄 요금제보다 **역할별 티어링**이 합리적입니다.
- **에이전트는 도구가 아니라 인력 배치 문제입니다.** dots는 계정·권한·감사 로그가 따라붙습니다. 도입 검토를 IT가 아닌 **조직·인사·보안 합동 의제**로 올리십시오.
- Marketplace·Sign in with ChatGPT는 **유통 채널**입니다. 자사 SaaS가 있다면 진입 여부가 3년 뒤 점유율을 가릅니다.

### 아키텍트

- **Decisions API는 새 아키텍처 컴포넌트입니다.** 1초 이내 유한 선택 판단을 LLM 호출과 분리하면, 라우팅·오케스트레이션 지연과 비용이 동시에 내려갑니다. 기존 룰엔진 대체 검토 대상입니다.
- **Private Intelligence 3단계를 구분하십시오** — Zero Data Retention(현재) / Private Safety Processing(현재) / Private Inference(가을 예정). 금융·의료 설계는 마지막 단계 도착 전까지 확정하지 마십시오.
- dots의 **Custom Rules를 권한 모델의 1급 시민으로** 설계하십시오. 허용·승인요구·금지 3분류를 기존 RBAC에 매핑해야 감사 대응이 됩니다.
- AWS Bedrock Managed Agents는 **멀티클라우드 전략의 탈출구**입니다. OpenAI 직접 호출 대비 네트워크·거버넌스 이점을 평가하십시오.

### 개발자

- **Codex CLI가 실질적으로 바뀌었습니다** — 음성 시작, `/agents` 뷰, 프롬프트 편집. 전 요금제 제공이므로 오늘 바로 써볼 수 있습니다.
- **Codex in the Cloud로 장기 실행 작업의 전제가 바뀝니다.** 로컬 상주가 필요 없어지면서 야간 빌드·대규모 리팩터링 패턴이 달라집니다.
- **GPT-6.1 Sol로 먼저 벤치마크하십시오.** DeepSWE v1.1에서 Astra 동급이면서 1/5 가격입니다. 캐시 입력 $0.10 활용을 전제로 프롬프트를 재설계하십시오.
- **MCP Events for Plugin Automations**가 전 요금제에 열렸습니다. 사내 도구를 MCP로 노출해두면 dots·Codex·ChatGPT가 동시에 붙습니다.
- Ultrafast(300 tok/s)는 **Pro 500·Enterprise 한정**입니다. 개인 개발자는 당장 대상이 아닙니다.

---

## 9. 액션 아이템

| 우선순위 | 액션 | 담당 | 시한 |
| --- | --- | --- | --- |
| 1 | **Pro 200 유예 종료 대응** — 기존 한도가 2026-10-29에 끝납니다. 사용량 실측 후 Pro 100/200/500 재배치 | IT 구매 | 10월 중 |
| 2 | **GPT-6.1 Sol 비용·품질 A/B** — 현행 모델 대비 동일 태스크 벤치마크, 캐시 입력 활용 전후 단가 비교 | 플랫폼팀 | 2주 |
| 3 | **dots 한국 제공 여부 공식 확인** 및 파일럿 1개 업무 선정(읽기 전용 리서치부터) | AI TF | 2주 |
| 4 | **Custom Rules ↔ 사내 RBAC 매핑안** 작성, 비밀번호·결제·외부 공유 행동을 금지 목록에 고정 | 보안 | 3주 |
| 5 | **Decisions API PoC** — 고객 문의 라우팅 또는 에이전트 분기 1개 경로를 이관해 지연·비용 측정 | 아키텍처 | 4주 |
| 6 | **Private Inference 출시 모니터링**(올가을) — 금융·의료 워크로드 설계 확정 보류 | 컴플라이언스 | 상시 |
| 7 | **Marketplace·Sign in with ChatGPT 진입 검토** — 자사 SaaS가 있다면 Plugin Creator로 시범 제출 | 제품 | 6주 |
| 8 | **협업툴 전략 재점검** — ChatGPT Space·Pages 도입 시 국산 협업 도구와의 중복·이관 비용 산정 | 정보화 | 6주 |

---

## 10. 종합 평가

**강점.** 서사가 선명했습니다. "답하는 AI에서 일하는 AI로"라는 축 하나로 20개 넘는 제품을 꿰었고, 모델·에이전트·협업·유통 네 계층을 한 번에 채워 넣었습니다. GPT-6.1 Sol의 1/5 가격은 즉시 검증 가능한 실리이고, dots의 권한 모델은 경쟁사 대비 구체적입니다. AWS Bedrock 제휴와 32개 엔터프라이즈 파트너는 "OpenAI를 사내에 들이는 경로"를 실제로 넓혔습니다.

**한계.** 첫째, **실행이 서사를 따라가지 못했습니다.** dots 데모의 지연과 반복된 기술 문제는 상시 에이전트가 아직 데모 품질이라는 인상을 남겼습니다. 둘째, **발표의 상당수가 "곧", "수주 내", "올가을"입니다** — Collaborative Slides, Private Inference, dots 텍스트 대화, GPT-6.1 Sol Ultrafast. 셋째, **가격 정책이 소비자 친화적이지 않습니다.** 신규 최고가 티어를 만들면서 기존 Pro 200의 한도를 줄인 조합은 기존 고객에게는 사실상 인상입니다. 넷째, **안전 이슈가 배경에 깔려 있습니다** — 최신 모델 보류 보도와 EEA·영국 제외는 규제·안전 제약이 제품 로드맵을 이미 흔들고 있음을 보여줍니다.

**한국 시장 관점 총평.** 기회와 공백이 동시에 열렸습니다. 기회는 dots를 유럽보다 먼저 쓸 수 있다는 점과 Sol의 단가 하락입니다. 공백은 파트너 명단에 국내 기업이 보이지 않는다는 점입니다. 유통 채널이 굳어지기 전에 올라타는 것이 이번 DevDay가 한국 기업에 남긴 가장 실질적인 과제입니다.

**다음 회차 관전 포인트.**

1. dots의 실사용 유지율 — 상시 에이전트가 "켜두고 잊는" 기능이 될지, 실제 업무 산출을 내는지
2. Private Inference 실제 출시와 금융·공공 레퍼런스
3. Codex vs Claude Code 개발자 점유율 역전 여부
4. Marketplace 파트너 수의 확장 속도와 한국 기업 편입
5. Pro 요금제 구조의 추가 조정 — 수익성 압박이 어디까지 갈지

---

## 11. 참고 자료

- [DevDay 2026 Recap | OpenAI](https://openai.com/index/devday-2026-recap/)
- [Announcing OpenAI DevDay 2026 | OpenAI](https://openai.com/index/devday-2026/)
- [OpenAI Dev Day 2026: Live updates on the latest ChatGPT and Codex announcements — Engadget](https://www.engadget.com/2271985/openai-dev-day-live-blog-chatgpt-news/)
- [Everything OpenAI Announced At DevDay 2026, Including Its Muse Alternative — BGR](https://www.bgr.com/2272332/openai-devday-2026-announcements/)
- [OpenAI unveils Dots to rival Meta's Muse, plus a $500 monthly plan — Fortune](https://fortune.com/2026/09/29/openai-takes-on-metas-muse-with-new-dot-agents-and-unveils-a-potential-google-workspace-competitor/)
- [OpenAI launches always-on Dots agents to rival Meta's Muse — The Decoder](https://the-decoder.com/openai-launches-always-on-dots-agents-to-rival-metas-muse/)
- [OpenAI Launches Dots Agents and GPT-6.1 Sol at DevDay 2026 — SQ Magazine](https://sqmagazine.co.uk/openai-dots-gpt-6-1-sol-devday-2026/)
- [OpenAI DevDay 2026: Sam Altman keynote amid AI safety scrutiny — Quartz](https://qz.com/openai-devday-2026-san-francisco-safety-092926)
- [OpenAI DevDay recap: Dots agents, Altman and Friar comment on IPO — CNBC](https://www.cnbc.com/2026/09/29/openai-devday-2026-live-updates.html) ⚠️ 본문 직접 확인 불가(403), 검색 스니펫 기준
- [챗GPT, 에이전트 플랫폼으로 진화…오픈AI 데브데이 2026 총정리 — 디지털투데이](https://www.digitaltoday.co.kr/news/articleView.html?idxno=703785)
- ['배 6척' 띄운 샘 알트먼…오픈AI가 데브데이서 꺼낸 6가지 카드는? — ZDNet Korea](https://zdnet.co.kr/view/?no=20260930072733)
- [[AI는 지금] 모델 넘어 플랫폼 노리는 오픈AI…'데브데이'서 개발자 잡는다 — ZDNet Korea](https://zdnet.co.kr/view/?no=20260929172653)
- [오픈AI, '답하는 AI' 다음은 '일하는 AI'…데브데이서 에이전트 승부수 — 아이티데일리](https://www.itdaily.kr/news/articleView.html?idxno=241855)
- [Announcing DevDay 2025 | OpenAI](https://openai.com/index/announcing-devday-2025/) (전년 대비 비교용)

---

### ⚠️ 미확인·상충 항목 정리

| 항목 | 상태 |
| --- | --- |
| 2026 현장 참가자 수·참가비 | 공식 미공개 |
| GPT-6.1 Sol 초기 적용 범위 | 공식 "전 사용자 GA" vs 매체 "Work·Codex 우선" 상충 |
| Ultrafast 추가 과금률 | "6배 가격" 보도는 "6배 속도"의 오독으로 보임, 정확한 요율 미확인 |
| Pro 200 변경 내용 | "사용량 축소" vs "5시간 제한 폐지" 상충 |
| dots 기반 모델 | GPT-6 Astra (복수 매체 일치, 공식 recap 미명시) |
| GPT-6.1 Astra 보류 | WSJ 인용 보도, OpenAI 공식 확인 없음 |
| DeepSWE v1.1 동급 주장 | 단일 출처 |
| Claude Code 39% / Codex 16% | 단일 조사 인용 |
| dots 한국 제공 여부 | 제외 목록에 없으나 공식 지역 목록 미확인 |
| ChatGPT 주간 이용자 8억(2025) | 당시 보도 기준, 본 리뷰에서 직접 재확인 안 함 |
