---
title: "Apple WWDC 2026"
date: 2026-06-13T17:59:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-13
summary: "Apple WWDC 2026은 6월 8일~12일에 애플 본사에서 열리는 행사로, iOS, macOS, watchOS 및 개발자 도구 업데이트가 예정되어 있습니다."
description: "Apple WWDC 2026은 6월 8일~12일에 애플 본사에서 열리는 행사로, iOS, macOS, watchOS 및 개발자 도구 업데이트가 예정되어 있습니다."
tags: ["잎새 35호"]
image: "images/Apple-WWDC-2026.png"
comments: false
notion_url: https://app.notion.com/p/Apple-WWDC-2026-491e83e92e03413ca64e7470370f9a81
notion_id: 491e83e9-2e03-413c-a64e-7470370f9a81
기간: "2026-06-08"
주최: ["Apple"]
categories: ["컨퍼런스 리뷰"]
---

# Apple WWDC 2026 컨퍼런스 리뷰

## 팀 쿡의 고별 무대, 시리 AI와 구글 제미나이의 결합

---

## 1. 행사 개요 (Executive Summary)

Apple은 2026년 6월 8일 WWDC 2026을 개막하며 **"All Systems Glow"** 라는 슬로건 아래 전 플랫폼을 AI로 물들이는 대규모 소프트웨어 업데이트를 발표했다. 이번 키노트의 핵심은 2024년 WWDC에서 예고했다가 2년을 끌어온 **차세대 시리(Siri AI)의 정식 공개**로, 구글 Gemini 기반 맞춤형 1.2조 파라미터 모델을 연간 약 10억 달러에 라이선스해 탑재한 파격적 전략이 업계를 놀라게 했다. iOS 27·macOS Golden Gate·watchOS 27·visionOS 27 등 전 OS에 걸쳐 최대 30% 앱 실행 속도 향상과 자녀 보호 기능 대폭 강화가 이뤄졌으며, App Intents 2.0 의무화(SiriKit 공식 deprecated)로 개발 생태계의 전환 시계가 본격적으로 돌아가기 시작했다. 또한 이번 행사는 Tim Cook CEO의 마지막 WWDC 키노트이자 John Ternus 차기 CEO 체제로의 전환을 상징하는 역사적 자리이기도 했다.

**주목받은 발표 Top 3:**

1. **Siri AI** — Google Gemini 1.2조 파라미터 모델 기반 시리 전면 재설계, 독립 앱 출시
2. **iOS 27 성능 및 안전성 개선** — 앱 실행 30%, 사진 앱 로딩 70%, AirDrop 80% 속도 향상
3. **macOS Golden Gate (macOS 27)** — Intel 맥 완전 지원 종료, 스포트라이트에 시리 AI 통합

**전년 대비 최대 변화:** 2025년 OpenAI 협력 중심에서 **Google Gemini 협력 중심**으로 AI 파트너십이 전면 전환됐으며, 지연의 상징이던 시리 AI가 실제 제품으로 구현된 것이 핵심 전환점이다.

---

## 2. 행사 기본 정보

| 항목 | 내용 |
| --- | --- |
| 행사명 (정식/약칭) | Apple Worldwide Developers Conference 2026 / WWDC 2026 / WWDC26 |
| 회차 | 37회 (1987년 첫 개최 기준) |
| 일정 | 2026-06-08 (월) ~ 2026-06-12 (금), 총 5일 |
| 장소 | Apple Park, Cupertino, California, USA |
| 형식 | 하이브리드 (Apple Park 현장 미디어 초청 + 온라인 스트리밍) |
| 참가 규모 | 온라인 개발자 수천 명 참여; 현장 미디어/초대 개발자 별도 초청 (정확한 수치 미공개) |
| 키노트 발표자 | Tim Cook (CEO, 작별 인사), Craig Federighi (SVP Software Engineering, 주 진행) |
| 공식 사이트 | https://developer.apple.com/wwdc26/ |
| 키노트 시간 | 태평양시 오전 10시 (한국시간 6월 9일 오전 2시), 약 90분 진행 |
| 슬로건 | "All Systems Glow" |

---

## 3. 핵심 발표 사항 (Key Announcements)

### 3-1. AI / 머신러닝

---

**[Siri AI]**

- 카테고리: AI/ML
- 발표 내용: 구글 Gemini 기반 맞춤형 1.2조 파라미터 클라우드 모델로 시리를 전면 재설계. 대화 히스토리 저장, 스크린 컨텍스트 인식, 독립형 챗봇 앱 형태로 대화 가능. Dynamic Island 내 시리 애니메이션 표시. 음성 속도·표현력 커스터마이징 지원.
- 출시 상태: 🟡 Public Preview (개발자 베타 6월 8일 배포)
- 출시 일정: 2026년 가을 (iOS 27 정식 출시와 동시, iPhone 18 출시 맞춤)
- 지원 기기: iPhone 16 시리즈, iPhone 15 Pro/Pro Max, iPad mini (A17 Pro), M1 이상 iPad/Mac, Apple Vision Pro, Apple Watch Series 10 이상, Ultra 2 이상, SE 3 (Apple Intelligence 지원 iPhone 페어링 필요)
- 언어 지원: 초기 **영어 한정**, 추가 언어 일정 미확정. **한국어 포함 추가 언어 확장 예정 (시점 미공개)**
- 지역 제한: **EU(iOS/iPadOS)·중국은 출시 당시 미지원** — EU는 Digital Markets Act, 중국은 별도 규제 이유. macOS·visionOS·watchOS는 EU에서도 지원.
- 3단계 라우팅: 단순 요청 → 온디바이스 Apple 모델; 중간 난이도 → Apple Private Cloud Compute; 복잡 요청 → Google Cloud (Nvidia Blackwell B200 GPU)
- 프라이버시: Nvidia 하드웨어 기반 기밀 컴퓨팅 적용; Google은 시리 쿼리로 Gemini 학습 불가(계약 조항)
- 가격: 라이선스 비용 연간 약 10억 달러(보도 기준, Apple 공식 미확인); 사용자 요금 별도 없음
- 경쟁 제품: Google Gemini (Android native), Microsoft Copilot, Samsung Gauss
- 출처: Engadget(2026-06-08), CNBC(2026-06-08), MacRumors(2026-06-08), TechJournal(2026-06-08)

---

**[Apple Foundation Models (AFM) on Cloud]**

- 카테고리: AI/ML · 클라우드
- 발표 내용: Apple이 구글 인프라 위에서 운용하는 클라우드 AI 모델 군. AFM Cloud Pro는 Gemini Frontier급 성능으로 Nvidia GPU 운용. 개발자용 LanguageModel 프로토콜로 온디바이스 모델·Gemini·Claude 등을 동일 API로 교체 가능하게 공개. Google Firebase Apple SDK를 통해 Gemini 모델 직접 연동 지원.
- 출시 상태: ✅ GA (개발자 베타, 정식은 가을)
- 출시 일정: iOS 27/macOS 27 정식 출시 시점
- 소규모 개발자 무료 티어: 다운로드 200만 미만 앱 → 온디바이스·클라우드 모델 무료 제공
- 온디바이스 성능: iPhone 15 Pro 기준 약 30 tokens/초 (TechTimes 보도)
- 경쟁 제품: Google Vertex AI, Azure AI Foundry, AWS Bedrock
- 출처: Google Blog(2026-06-09), TechTimes(2026-06-08), AI2Work(2026-06-08)

---

**[Visual Intelligence 확장]**

- 카테고리: AI/ML
- 발표 내용: iOS 27에서 카메라 컨트롤 버튼 → 카메라 앱 내 별도 Siri 모드로 이전. 실물 주변 사물 인식, 스크린샷 기반 정보 추출, Mac에 최초 도입. visionOS 27에서도 공간 컴퓨팅 환경에 Visual Intelligence 지원.
- 출시 상태: ✅ GA (가을 정식)
- 출시 일정: 2026년 가을
- 출처: Digital Trends(2026-06-08), MacRumors(2026-06-08)

---

### 3-2. 컴퓨팅 및 인프라 (iOS 27 성능)

---

**[iOS 27 성능 대폭 향상]**

- 카테고리: 컴퓨팅
- 발표 내용: 메모리 관리·CPU 스케줄링·네트워크·디스플레이 렌더링 전면 재설계. 앱 실행 속도 최대 30% 향상, 사진 앱 로딩 최대 70% 향상, AirDrop 최대 80% 빠름, iPad↔외장 드라이브 파일 전송 최대 5배 향상.
- 출시 상태: ✅ GA (가을)
- 지원 기기: iPhone 11 이상 (기존 iOS 26 지원 기기 전체 유지, 지원 기기 축소 없음)
- 정량 지표: 앱 실행 +30%, 사진 앱 로딩 +70%, AirDrop 전송 +80%, 외장 드라이브 +5배 (Apple 발표)
- 출처: IBTimes India(2026-06-09), MacRumors(2026-06-08)

---

**[macOS Golden Gate (macOS 27) — Intel 지원 종료]**

- 카테고리: 컴퓨팅
- 발표 내용: Intel 기반 Mac 지원 완전 종료 — Apple Silicon 전환 완성. 사이드바 컬러 아이콘 복원, 엣지-투-엣지 사이드바, 앱 전체 통합 툴바 디자인. Liquid Glass 불투명도 슬라이더 추가. Spotlight에 Siri AI 통합(멀티턴 대화). Visual Intelligence Mac 최초 도입.
- 출시 상태: ✅ GA (가을)
- 출시 일정: 2026년 가을
- 출처: Digital Trends(2026-06-08), Shacknews(2026-06-08)

---

### 3-3. 애플리케이션 개발 / 개발 도구

---

**[App Intents 2.0 / SiriKit 공식 deprecated]**

- 카테고리: 개발 도구
- 발표 내용: WWDC 2026에서 SiriKit 공식 deprecated 발표 (컴파일 경고 발생). App Intents가 Siri AI와 연동되는 유일한 경로. App Intents 2.0 = 스트리밍 응답·멀티턴 대화·스크린 컨텍스트 인식(onscreen awareness annotations) 지원. 규제 데이터 처리 앱은 per-intent 프라이버시 선언으로 온디바이스 처리 강제 가능.
- 마이그레이션 기간: 약 2~3년 지원 유지 후 제거 예정 (iOS 29 사이클, 2028년경)
- SiriKit 의존 앱: iOS 27에서 컴파일 가능하나 재설계된 Siri AI 경험에 노출되지 않음
- 출시 상태: ✅ GA
- 출처: TechTimes(2026-06-08), Lushbinary(2026-06-08), TechFundingNews(2026-06-09)

---

**[Xcode 27 — 온디바이스 AI 코드 완성]**

- 카테고리: 개발 도구
- 발표 내용: Neural Engine 기반 멀티라인 코드 완성 기능 (클라우드 미전송, 완전 로컬). MCP(Model Context Protocol) 지원 `mcpbridge` 바이너리 — Xcode를 범용 MCP 호스트 노드로 전환, 모든 MCP 호환 에이전트가 Apple 플랫폼 개발 오케스트레이션 가능.
- 출시 상태: 🟡 Public Preview (개발자 베타)
- 출시 일정: 2026년 가을
- 출처: TechTimes(2026-06-10), Lushbinary(2026-06-08)

---

**[Core AI 프레임워크]**

- 카테고리: 개발 도구 · AI/ML
- 발표 내용: Apple Silicon에서 서드파티 커스텀 LLM을 로컬 실행할 수 있는 신규 프레임워크. Foundation Models 프레임워크는 이미지 입력·서버 모델·커스텀 스킬 지원으로 확장.
- 출시 상태: ✅ GA (가을)
- 출처: AI2Work(2026-06-08)

---

**[폴더블 iPhone 레이아웃 API (비공식)]**

- 카테고리: 개발 도구
- 발표 내용: iOS 27 개발자 베타 파일 내 `foldState`·`angleDegrees` 등 폴더블 기기 상태 참조 코드 발견. Apple이 공식 발표하지 않았으나 SwiftUI/UIKit의 hinge-state 처리 API가 추가된 것으로 확인. iPhone Fold가 John Ternus 체제 하 첫 하드웨어가 될 가능성 시사.
- 출시 상태: 🔵 로드맵 (비공식 발견)
- 출처: TechCrunch(2026-06-09), Lushbinary(2026-06-08)

---

### 3-4. 보안 / 자녀 보호 / 컴플라이언스

---

**[Child Accounts 및 자녀 보호 전면 강화]**

- 카테고리: 보안 · 컴플라이언스
- 발표 내용: 13세 미만 필수 자녀 계정(Child Account) 도입. 앱 다운로드·웹사이트·연락처·사용 시간·콘텐츠 연령 제한 부모 통합 관리. 소아과학 연구 기반 "시간 허용량(Time Allowances)" 기능. Apple Watch 독립 설정 가능 (아이폰 없는 아이 포함). Communication Safety: 공유 이미지/영상 내 폭력·성인 콘텐츠 자동 차단. 개발자는 생년월일 없이도 폭넓은 연령대만 요청 가능.
- 출시 상태: ✅ GA (가을)
- 배경: 전 세계 정부의 빅테크 자녀 보호 요구 강화 기류에 대응
- 출처: Engadget(2026-06-08), Digital Trends(2026-06-08), TechRadar(2026-06-08)

---

### 3-5. 창작 / 미디어

---

**[Photos AI 편집 도구 3종]**

- 카테고리: AI/ML · 미디어
- 발표 내용: ① Spatial Reframing — 촬영 후 AI로 원근·구도 재조정 (카메라 위치를 재배치한 것처럼). ② Extend — 이미지 종횡비 변경 또는 장면 확장. ③ Clean Up 업그레이드 — 생성형 AI로 불필요한 요소 더 사실적 제거. 사진 앱 내 슬라이드쇼 메이커도 신설.
- 출시 상태: ✅ GA (가을)
- 출처: Digital Trends(2026-06-08), TechCrunch(2026-06-09)

---

**[iCloud Shared Albums 전면 개방]**

- 카테고리: 미디어 · 스토리지
- 발표 내용: iCloud 공유 앨범이 Android·Windows 사용자와도 **원본 해상도 공유** 지원. 기존 저해상도 제한 해소.
- 출시 상태: ✅ GA (가을)
- 출처: Engadget(2026-06-08)

---

**[CarPlay 비디오 앱 지원]**

- 카테고리: 미디어
- 발표 내용: iOS 27 CarPlay에서 비디오 앱 실행 지원.
- 출시 상태: ✅ GA (가을)
- 출처: MacRumors(2026-06-08)

---

### 3-6. 건강 / 접근성

---

**[Health 앱 — 여성 건강 확장]**

- 카테고리: 건강
- 발표 내용: 월경 주기 추적에 갱년기 전기(perimenopause) 및 갱년기(menopause) 지원 추가. 주기 편차 알림 기능. watchOS 27과 연동.
- 출시 상태: ✅ GA (가을)
- 출처: MacRumors(2026-06-08), Digital Trends(2026-06-08)

---

**[접근성 강화]**

- 카테고리: 접근성
- 발표 내용: VoiceOver 이미지 설명 품질 향상. Action Button으로 카메라 시야에 대한 질문·답변. Voice Control에서 화면 내 버튼을 설명 문장으로 호출 가능. Accessibility Reader에 요약·번역 기능 추가. 자동 비디오 자막(미국·캐나다, 영어 한정).
- 출시 상태: ✅ GA (가을)
- 출처: Engadget(2026-06-08)

---

## 4. 키노트 세션 분석

### 4-1. Tim Cook (CEO)

- **핵심 메시지:**
  - 개발자 커뮤니티와 함께 "사람들의 삶을 풍요롭게 하는 최고의 제품"을 만들어왔음을 회고
  - Apple Intelligence와 Siri AI가 iPhone 경험의 새 장을 열었다는 선언
  - 이번이 CEO로서의 마지막 WWDC — 감사와 작별의 메시지로 키노트 마무리
- **주목할 시연:** 키노트 말미 팀 쿡의 눈물 섞인 작별 메시지 (CNBC 포착)
- **인용:** 키노트 마지막 발언 — "the honour of a lifetime" (출처: TechCrunch, 2026-06-09)

### 4-2. Craig Federighi (SVP Software Engineering)

- **핵심 메시지:**
  - Siri AI를 "더 지능적이고, 더 지식이 풍부하고, 더 유능한 시리"로 소개
  - iOS 27의 안정성·성능 개선이 실사용 체감에 직결됨을 강조
  - Q&A 세션에서 Siri AI의 스크린 통합을 "대화형이지만 시스템 경험의 연장선"으로 설명
- **주목할 시연:** Siri AI가 축제 일정 스크린샷을 캘린더로 자동 등록하는 데모; Passwords 앱이 에이전트로 각 웹사이트 패스워드를 자동 수정하는 데모

---

## 5. 작년 대비 변화 및 전략적 방향 분석

| 구분 | WWDC 2025 (iOS 26) | WWDC 2026 (iOS 27) |
| --- | --- | --- |
| AI 파트너 | OpenAI (ChatGPT 통합 강조) | Google Gemini (클라우드 모델 전면 전환) |
| 시리 | 로드맵 발표만 (실제 미출시) | Siri AI 정식 공개 (가을 출시) |
| 디자인 | Liquid Glass 첫 도입 | Liquid Glass 개선 (불투명도 슬라이더, 가독성↑) |
| 맥 지원 | Intel/Apple Silicon 혼용 | Intel 지원 완전 종료 |
| SiriKit | 유지 | **공식 deprecated** (App Intents 2.0 전환) |
| 자녀 보호 | 소폭 개선 | **의무 Child Account 등 전면 재설계** |
| 하드웨어 발표 | 없음 | 없음 (단, 폴더블 API 힌트) |

**강조된 키워드 변화:** `ChatGPT` → `Gemini`, `Liquid Glass` → `Liquid Glass 개선`, `시리 로드맵` → `시리 AI 출시`, `Intel 지원` → `Apple Silicon Only`

**전략적 방향성 분석:**

1. **AI 실행력 복원:** 2024~2025년 시리 AI 2년 지연으로 쌓인 불신을 이번 정식 공개로 만회. Apple은 자체 모델 대신 Google Gemini를 빌림으로써 속도를 택했다.
2. **Google-Apple AI 동맹:** 검색 계약 독점으로 미국 DOJ 반독점 소송을 받는 구글과의 AI 협력 심화는 새로운 규제 리스크를 내포하지만, Apple은 프라이버시 아키텍처로 차별화를 추구.
3. **하드웨어 추진력 전환 예고:** Tim Cook → John Ternus 승계는 하드웨어 혁신 강화 시그널. 폴더블 API 발견이 이를 뒷받침.
4. **안전·신뢰 우선 포지셔닝:** 자녀 보호 기능 전면 강화로 규제 환경 대응 및 부모 세대 신뢰 확보.

---

## 6. 경쟁사 대비 포지셔닝

| 영역 | Apple (WWDC 2026) | Google (Android / Gemini) | Samsung (One UI 8) | Microsoft (Copilot) |
| --- | --- | --- | --- | --- |
| 모바일 AI 어시스턴트 | Siri AI (Gemini 1.2조P 기반) | Gemini native (Pixel) | Galaxy AI (Gemini 탑재) | Copilot (GPT-4o 기반) |
| 프라이버시 구조 | 3단계 라우팅 + PCC + 기밀 컴퓨팅 | 클라우드 우선 | 클라우드 + 온디바이스 혼용 | 클라우드 중심 |
| AI 코드 완성 (개발 도구) | Xcode 27 온디바이스 (Neural Engine) | Android Studio AI (클라우드) | 해당 없음 | GitHub Copilot (클라우드) |
| AI 모델 개방성 | LanguageModel 프로토콜 (Gemini·Claude 교환 가능) | Vertex AI / Gemini API | Galaxy AI SDK | Azure AI Foundry |
| 자녀 안전 기능 | 의무 Child Account, 통합 관리 | Family Link | Kids Mode | 제한적 |
| EU 규제 대응 | Siri AI iOS/iPadOS EU 미출시, macOS·visionOS는 허용 | Digital Markets Act 강제 호환 | EU 대응 별도 진행 | EU 지원 유지 |

**격차/우위 분석:**

- **Apple 강점:** 하드웨어-소프트웨어-AI 수직 통합, 프라이버시 아키텍처(Nvidia 기밀 컴퓨팅), 개발자 앱 에코시스템 (App Intents)
- **Apple 약점:** Siri AI 초기 영어 한정, EU·중국 지역 제한, 구글 의존도 증가 (AI 자립도 후퇴)
- **주목할 역설:** Apple이 자체 경쟁사인 Google의 모델로 시리를 구동하면서도, 사용자 데이터 보호 조항을 계약에 명시해 차별화 서사를 유지하고 있다.

---

## 7. 한국 시장 / 한국어 사용자 관점

### 7-1. 한국어 및 한국 리전 지원

- **Apple Intelligence 한국어:** Apple Intelligence는 이미 2025년 4월 업데이트를 통해 **한국어를 포함한 16개 언어** 지원을 시작했다. iOS 27에서도 이 지원은 유지된다.
- **Siri AI 한국어:** Siri AI는 출시 당시 **영어 한정 제공**. 한국어 지원 시점은 별도 공개되지 않았으며, Apple은 "향후 더 많은 언어 추가 예정"이라는 원론적 입장만 발표. iPhone 판매량 비중이 높은 한국 시장에서의 한국어 Siri AI 도입이 실질적 경험 차이를 결정할 전망.
- **지역 제한 없음:** EU·중국과 달리 **한국에서는 iOS 27/Siri AI 사용에 별도 규제 장벽 없음**.

### 7-2. 한국 시장 영향

- **iPhone 점유율 우위 유지:** iOS 27이 iPhone 11 이상 전 모델을 지원함에 따라 업그레이드 진입 장벽이 낮고, 갤럭시 대비 S/W 지원 기간 경쟁력으로 작용.
- **삼성과의 직접 대결:** Samsung Galaxy AI + Google Gemini 탑재(One UI 8) 진영과 Apple의 Siri AI + Google Gemini 구조가 동일 모델 기반 경쟁으로 귀결, **한국 소비자에게는 하드웨어 차별화 및 생태계 경험이 구매 결정 변수**로 부각될 것.
- **개인정보보호법(PIPA) 관련:** Apple의 Private Cloud Compute + Nvidia 기밀 컴퓨팅 아키텍처는 PIPA의 개인정보 국외이전 요건과 관련해 법적 검토가 필요할 수 있음. Apple은 사용자 데이터를 Google이 학습에 활용하지 않는다는 계약 조항을 명시하고 있어, 기업 도입 논의 시 참고가 될 것.
- **망분리 규제:** 금융·공공 등 망분리 의무 환경에서의 Siri AI 도입은 온디바이스 처리 한정 시나리오 검토 필요.
- **한국어 Siri AI 대기 리스크:** 삼성 갤럭시는 한국어 Galaxy AI를 현재 지원 중인 반면, Apple의 한국어 Siri AI 도착 시점이 불명확해 **엔터프라이즈 도입 결정을 미루는 요인**이 될 수 있다.
- **iCloud Shared Albums 안드로이드 호환:** 한국 사용자 중 iOS-Android 혼재 가족/그룹의 사진 공유 경험이 원본 해상도로 개선.

### 7-3. 국내 파트너사 / 도입 사례

- WWDC 2026 키노트 내 한국 기업 파트너십 발표 없음.

---

## 8. 타깃 독자별 핵심 요약

### 8-1. 경영진 / 의사결정자가 알아야 할 3가지

1. **Apple이 구글에 AI 두뇌를 맡겼다** — 연간 약 10억 달러에 달하는 Gemini 라이선스 계약은 Apple의 AI 자립 전략 포기가 아닌 시장 속도 우선 전략의 결과다. 향후 AI 공급망 의존도와 협상력 변화를 장기적으로 모니터링할 필요가 있다.
2. **John Ternus 시대가 열린다** — 하드웨어 전문가가 CEO에 오르는 9월부터 Apple의 제품 로드맵은 폴더블 iPhone, AI 안경 등 하드웨어 혁신 중심으로 재편될 가능성이 높다. 하드웨어 교체 주기 투자 계획 재검토 타이밍.
3. **자녀 보호 기능 대폭 강화 → 학교·엔터프라이즈 아이패드 정책 검토 필요** — 13세 미만 Child Account 의무화 및 부모 통제 강화가 교육 기관·기업의 기기 관리 정책에 영향을 줄 수 있다.

### 8-2. 아키텍트가 알아야 할 3가지

1. **LanguageModel 프로토콜 — AI 백엔드 추상화 계층이 Apple에 표준화된다** — Apple이 온디바이스·Gemini·Claude 등을 동일 API로 교환 가능하게 만들면서, iOS 앱의 AI 백엔드를 교체해도 코드 변경 없이 동작하는 구조가 실현됐다. AI 공급사 락인 리스크 완화 관점에서 주목.
2. **Private Cloud Compute + Nvidia 기밀 컴퓨팅 — 기업 프라이버시 요건 만족 여부 검토** — 규제 산업(금융·의료·공공)에서 사용자 데이터가 Google Cloud를 경유할 때의 법적 요건을 프라이버시 계약 조항 및 Per-Intent 온디바이스 강제 선언과 함께 검토해야 한다.
3. **폴더블 iPhone API 선행 대응** — hinge-state 처리 API가 iOS 27에 포함됐다. 9월 iPhone 18 이벤트에서 폴더블 기기 발표 가능성을 가정하고, SwiftUI/UIKit 레이아웃 대응 작업을 미리 시작하는 것이 유리하다.

### 8-3. 개발자가 알아야 할 3가지

1. **SiriKit 마이그레이션 — 지금 당장 인벤토리 점검** — App Intents 2.0으로의 전환 창은 2~3년(iOS 29 시점)이지만, iOS 27 출시 후 SiriKit 기반 앱은 Siri AI 경험에서 사실상 사라진다. 마이그레이션 범위 파악이 시급하다.
2. **Xcode 27 온디바이스 AI 코드 완성 + MCP 호스트** — 클라우드 왕복 없이 Neural Engine으로 멀티라인 코드 완성. Xcode가 MCP 호스트가 됨에 따라 외부 AI 에이전트와의 개발 자동화 파이프라인 구성 가능. 베타 즉시 적용해 볼 것.
3. **Foundation Models 무료 티어 신청** — 다운로드 200만 미만 앱 개발자는 온디바이스·클라우드 AI 모델을 무료로 활용 가능. `developer.apple.com`에서 신청.

---

## 9. 액션 아이템 / 체크리스트

### ✅ 즉시 시도 가능 (개발자 베타, 2026-06-08 배포)

- [ ] iOS 27 개발자 베타 설치 → 앱 성능 프로파일링 (Xcode 27 Instruments)
- [ ] Xcode 27 설치 → Neural Engine 코드 완성 기능 실사용 평가
- [ ] 앱 내 SiriKit 사용 여부 인벤토리 작성 → App Intents 2.0 마이그레이션 범위 확인
- [ ] Foundation Models LanguageModel 프로토콜 API 문서 검토
- [ ] Foundation Models 무료 티어 신청 (200만 미만 앱 개발자) → developer.apple.com

### 🟡 신청/대기 등록 필요 (2026년 가을 출시)

- [ ] Siri AI 영어 베타 테스트 — 앱의 App Intents 통합이 Siri AI에서 정상 작동하는지 검증
- [ ] iOS 27 공개 베타 등록 → 2026년 7월 예정
- [ ] Child Account 연동이 필요한 B2C 앱: 연령 검증 API 통합 검토

### ⚠️ 기존 아키텍처 재검토 필요

- [ ] SiriKit INExtension 기반 기능 → App Intents 2.0으로 전환 계획 수립
- [ ] Liquid Glass 2세대 디자인 토큰 업데이트 → 가독성 개선 사항 적용
- [ ] AI 기능에서 프라이버시 선언이 필요한 경우 per-intent 온디바이스 처리 강제 선언 구현
- [ ] 폴더블 레이아웃 API (SwiftUI hinge-state) 선행 검토

### 📚 추가 학습 필요

- [ ] [WWDC26 세션] Siri AI와 App Intents 2.0 통합 — developer.apple.com/wwdc26
- [ ] LanguageModel 프로토콜과 Firebase Apple SDK Gemini 연동 방법
- [ ] Core AI 프레임워크로 온디바이스 커스텀 LLM 실행 방법
- [ ] Private Cloud Compute 프라이버시 아키텍처 — 기업 도입 법적 검토 대응
- [ ] MCP 통합 in Xcode 27 — agentic coding 워크플로 구성법

---

## 10. 종합 평가 및 시사점

### 성공 지표 평가: ★★★★☆ (5점 만점 중 4점)

**잘 한 점:**

- 2년을 기다린 Siri AI를 실제로 출시했다는 것 자체가 이번 행사의 가장 큰 성과. "약속을 지킨 WWDC"라는 평가가 지배적.
- iOS 27의 성능 개선 수치(앱 30%, 사진 70%, AirDrop 80%)가 구체적으로 제시됨 → 신뢰도 높음.
- Liquid Glass에 대한 사용자 피드백을 반영(불투명도 슬라이더, 가독성 개선) — 사용자 의견 수용 자세.
- LanguageModel 프로토콜로 AI 백엔드 교환 구조를 표준화한 것은 중장기 생태계 확장성에서 중요한 포석.
- Tim Cook 고별 키노트의 감동적 연출 — 브랜드 스토리텔링 측면에서 높은 점수.

**아쉬운 점:**

- Siri AI 초기 영어 한정 출시 — 전 세계 비영어권 사용자에게는 여전히 반쪽짜리 경험.
- EU·중국 Siri AI 배제 — 전체 iPhone 시장의 상당 부분이 핵심 기능에서 제외됨.
- 구글 의존도 심화에 대한 장기 리스크 대응 전략 미공개.
- Apple Watch 최대 하위 호환성 대폭 축소 (Series 9 미만 탈락) — 기존 사용자 불만.
- iPhone Fold·Apple AI Glasses 공식 발표 없음 — 하드웨어 기대감 충족 실패.

### 향후 6~12개월 업계 영향 예측

1. **AI 어시스턴트 경쟁 재편:** Gemini가 Android(Google Pixel, Samsung)과 iOS(Apple)를 동시에 구동하는 구조가 되면서, AI 어시스턴트 경쟁은 "어떤 모델을 쓰느냐"보다 "어떻게 통합하느냐(UX·프라이버시·에코시스템)"의 경쟁으로 변화.
2. **App Intents 대전환:** 2026년 하반기~2027년, SiriKit 기반 앱의 마이그레이션 대란이 예상. 이 시기를 적기에 대응한 앱이 Siri AI 경험에서 우위를 점할 것.
3. **폴더블 iPhone 2026 하반기 가능성:** iOS 27 내 폴더블 API + John Ternus 취임 = 9월 iPhone 18 이벤트에서 폴더블 공개 가능성 고조. 관련 악세서리·앱 생태계 준비 시작.
4. **자녀 보호 기능 국제 규제 기준이 될 가능성:** 각국 정부가 요구하는 빅테크 자녀 보호 강화에 Apple이 선제 대응함으로써, 산업 표준을 선도할 수 있는 포지션 확보.

### 다음 회차 (WWDC 2027) 기대 방향

- John Ternus 첫 WWDC — 하드웨어 혁신 중심 키노트 예상 (iPhone Fold·AI Glasses 등)
- Siri AI 한국어·다국어 확장 발표 및 EU 복귀
- Apple Silicon 생태계 완전 성숙 (Intel 전환 완료 후 성능 최적화 집중)
- Core AI 프레임워크 기반 서드파티 온디바이스 AI 앱 생태계 폭발적 성장 전망

---

## 11. 참고자료

> ⚠️ 아래 URL은 실제 검색을 통해 확인된 자료만 포함합니다.

### 공식 자료

- Apple WWDC 2026 공식 사이트: https://developer.apple.com/wwdc26/
- Apple WWDC 2026 일정: https://developer.apple.com/wwdc26/schedule/
- Google 블로그 — Gemini models for Apple developers: https://blog.google/innovation-and-ai/technology/developers-tools/bringing-gemini-models-to-apple-developers/

### 주요 영문 매체

- Engadget — Everything announced at Apple's WWDC 2026 keynote: https://www.engadget.com/2189698/everything-announced-at-apples-wwdc-2026-keynote/
- TechCrunch — WWDC 2026: Everything announced on Siri AI, iOS 27, Apple Intelligence and more: https://techcrunch.com/2026/06/09/wwdc-2026-everything-announced-on-siri-ai-os-27-apple-intelligence-and-more/
- CNBC — Apple WWDC 2026 live updates: https://www.cnbc.com/2026/06/08/apple-wwdc-2026-live-updates.html
- MacRumors — WWDC 2026 Recap: https://www.macrumors.com/2026/06/08/wwdc-2026-recap/
- Digital Trends — Everything Apple announced at WWDC 2026: https://www.digitaltrends.com/computing/wwdc-2026-ios-27-siri-ai-apple-intelligence-upgrades-and-everything-else-apple-announced/
- TechTimes — WWDC 2026 Developer Tools: https://www.techtimes.com/articles/318039/20260609/wwdc-2026-developer-tools-foundation-models-now-swaps-ai-providers-without-code-changes.htm
- TechRadar — Apple WWDC 2026 as it happened: https://www.techradar.com/news/live/apple-wwdc-2026-live
- Tom's Guide — WWDC 2026 recap: https://www.tomsguide.com/news/live/wwdc-2026-live-news-updates

### 한국어 매체

- 아이즈매거진 — WWDC 2026 핵심 정리: https://www.eyesmag.com/posts/164588/apple-wwdc-2026-recap
- 디자인 나침반 — 애플 iOS 27 공개: https://designcompass.org/2026/06/09/ios-27-wwdc-2026/

### 분석 자료

- Lushbinary — WWDC 2026: iOS 27, New Siri & Dev Tools: https://lushbinary.com/blog/wwdc-2026-announcements-ios-27-siri-developer-guide/
- TechFundingNews — WWDC26: Everything for founders and developers: https://techfundingnews.com/wwdc26-everything-apple-announced-and-what-it-means-for-founders-developers-and-startups/
- AI2Work — Apple Reboots Its AI Developer Strategy at WWDC: https://ai2.work/blog/apple-reboots-its-ai-developer-strategy-at-wwdc
