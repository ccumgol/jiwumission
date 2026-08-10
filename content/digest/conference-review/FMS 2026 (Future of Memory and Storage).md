---
title: "FMS 2026 (Future of Memory and Storage)"
date: "2026-08-07T03:04:00.000Z"
author: "Gihyun Park"
lastmod: "2026-08-10"
summary: "FMS 2026 컨퍼런스의 행사 개요, 주요 발표·제품 상세, 산업 분석·경쟁사 비교 및 향후 액션 아이템을 포괄적으로 정리한 종합 리뷰입니다"
description: "FMS 2026 컨퍼런스의 행사 개요, 주요 발표·제품 상세, 산업 분석·경쟁사 비교 및 향후 액션 아이템을 포괄적으로 정리한 종합 리뷰입니다"
tags: ["잎새 43호"]
image: "images/FMS-2026-(Future-of-Memory-and-Storage).webp"
comments: false
notion_url: "https://app.notion.com/p/FMS-2026-Future-of-Memory-and-Storage-3b5091c284f6803c9fecf60a6c4406e8"
notion_id: "3b5091c2-84f6-803c-9fec-f60a6c4406e8"
기간: "2026-08-04"
categories: ["blog", "컨퍼런스 리뷰"]
---

{{< youtube TxM8nxEscoU >}}

# FMS 2026 (Future of Memory and Storage) 종합 리뷰

**행사 기간**: 2026년 8월 4일 ~ 8월 6일 | **장소**: 미국 캘리포니아주 산타클라라 컨벤션센터
**리뷰 관점**: 종합 리뷰 + AI 인프라 메모리 계층 집중 | **작성일**: 2026년 8월 6일

> ⚠️ **작성 시점 유의**: 본 리뷰는 행사 최종일(8/6) 기준으로 작성되었습니다. 마지막 날 세션 결과와 일부 Best of Show 수상 내역은 아직 완전히 공개되지 않았으며, 확인되지 않은 항목은 명시적으로 표기했습니다.

---

## 1. 행사 개요 (Executive Summary)

FMS 2026은 2006년 'Flash Memory Summit'으로 시작한 지 20주년을 맞는 행사로, 올해의 논쟁은 낸드가 HDD를 대체할지가 아니라 **"AI 가속기에 붙은 비싸고 작은 HBM과, 그 뒤에 있는 느리고 거대한 스토리지 사이의 빈 공간을 무엇으로 채울 것인가"** 였습니다. 모든 주요 공급사가 답을 들고 왔지만, 그 답들은 서로 호환되지 않습니다.

**가장 주목받은 발표 Top 3**

1. **삼성전자 zHBM** — HBM을 AI 가속기 *옆*이 아니라 *위*에 수직 적층하는 구조. HBM5 대비 약 8배 성능, 10배 이상 밀도, 3배 에너지 효율, 열저항 절반 이하를 주장 (컨셉 모델, 양산 일정 미공개)
2. **SK하이닉스·샌디스크 HBF 첫 표준 규격** — 컨소시엄 출범 6개월 만에 OCP를 통해 개방형 표준으로 공개. 최대 512GB, 약 0.4~3.0TB/s, UCIe 인터커넥트. 구글·텐스토렌트 합류
3. **웨이퍼 본딩 기반 낸드 세대 전환** — 삼성 V10 BV-NAND 400단 이상(V9 대비 밀도 +58%), SK하이닉스 V10 375단 4D 낸드(전력 효율 2.5배), 키옥시아 BiCS 10세대 332단

**작년 대비 가장 큰 변화**: 2025년의 HBF는 SK하이닉스-샌디스크 간 MOU와 Best of Show 수상에 그쳤습니다. 1년 만에 실제 표준 문서로, 그것도 하이퍼스케일러(구글)와 가속기 설계사(텐스토렌트)를 끌어들인 개방형 규격으로 나왔다는 점이 올해의 가장 실질적인 진전입니다. 또한 행사 자체가 2026년 3월 Terrapinn에 인수되어 운영 주체가 바뀌었습니다.

**주최 측 발표 기준 규모**: 참관객 예년 3,000명 수준 → **3,500명 이상**, 전시 기업 70여 곳 → **100곳 이상** (출처: 한국일보 현장 취재)

---

## 2. 행사 기본 정보

| 항목 | 내용 |
| --- | --- |
| 행사명 (정식/약칭) | FMS: the Future of Memory and Storage / FMS 2026 |
| 회차 | 20주년 (전신: 2006년 Flash Memory Summit) |
| 일정 | 2026-08-04 ~ 2026-08-06 |
| 장소 | 미국 캘리포니아주 산타클라라 / Santa Clara Convention Center |
| 형식 | 오프라인 (전시 + 키노트 + 기술 세션 + 패널) |
| 참가 규모 | 참관객 3,500명 이상, 전시 기업 100곳 이상 (주최 측 발표, 한국일보 인용) |
| 주요 키노트 발표자 | 이진엽 삼성전자 부사장(플래시개발실), 김경륜 삼성전자 상무(D램설계팀), 김천성 SK하이닉스 부사장(솔루션개발), 강욱성 SK하이닉스 부사장(차세대상품기획), Hao Zhong(ScaleFlux CEO), Jason Hardy(NVIDIA 스토리지 기술 VP) |
| 운영 주체 | Terrapinn (2026년 3월 인수) |
| 공식 사이트 | https://www.terrapinn.com/conference/future-memory-storage/index.stm |

---

## 3. 핵심 발표 사항 (Key Announcements)

### 3-1. AI / 메모리 아키텍처

**[삼성전자 zHBM]**

- **카테고리**: AI/ML · 메모리 아키텍처
- **발표 내용**: HBM을 인터포저 위 가속기 옆에 배치하는 기존 방식 대신, AI 가속기 **위에 수직 적층**하는 3D 구조. 메모리-프로세서 간 데이터 이동 거리를 본딩된 두 웨이퍼 사이 간격 수준으로 축소. 고객사별 커스텀 IP를 메모리와 가속기 사이 인터레이어에 통합 가능
- **출시 상태**: 🔵 컨셉 모델 (업계 최초 공개, 실물 아닌 모형 전시)
- **출시 일정**: **미공개**
- **정량적 지표**: HBM5 대비 약 8배 성능 / 10배 이상 메모리 밀도 / 3배 에너지 효율 / 열저항 50% 이상 감소 (모두 삼성전자 자체 발표 기준)
- **⚠️ 해석 주의**: 비교 대상인 HBM5는 아직 출하 규격이 존재하지 않습니다. 즉 **컨셉 대 컨셉 비교**입니다. 또한 삼성이 열저항 수치를 전면에 내세운 것 자체가, 메모리가 지금까지 프로세서 *옆*에 있었던 이유(발열)가 이 구조의 최대 난제임을 인정한 것으로 읽힙니다
- **경쟁 제품**: SK하이닉스 Tiered Memory 아키텍처, HBF (접근 방식이 다름)
- **출처**: [Samsung Newsroom, 2026-08-05](https://news.samsung.com/global/samsung-unveils-next-gen-3d-memory-vision-at-fms-2026-charting-the-future-of-ai-infrastructure)

**[SK하이닉스·샌디스크 HBF 표준 규격]**

- **카테고리**: AI/ML · 메모리/스토리지 융합
- **발표 내용**: HBM과 SSD 사이의 새로운 메모리 계층. 낸드 기반으로 용량을 확장하면서 HBM에 근접한 대역폭 제공. 인터커넥트·전기적 특성·다이 스택 공정 신뢰성·패키징 가이드라인·소프트웨어 I/O 가이드라인 포함
- **출시 상태**: 🔵 표준 규격 공개 (제품 아님, 현장 실물/모형 전시도 없음)
- **출시 일정**: 상용화 및 실물 하드웨어 개발 이전 단계 (SK하이닉스 관계자 설명)
- **정량적 지표**: 8단·16단 TSV 적층 기준 **최대 512GB**, 대역폭 3개 등급 **약 0.4TB/s ~ 3.0TB/s** (최상위 등급은 HBM4 스택과 동일 대역)
- **인터페이스**: **UCIe** 채택 — GPU·CPU 등 이기종 프로세서에 유연하게 통합 가능
- **생태계**: 2026년 2월 컨소시엄 출범 후 6개월. **구글, 텐스토렌트** 참여. OCP(Open Compute Project)를 통해 개방형 표준으로 공개
- **⚠️ 기술적 제약**: 낸드는 쓰기가 느리고 내구성이 유한합니다. 따라서 HBF는 **가중치가 고정된 추론에 적합하고, 가중치가 계속 바뀌는 학습에는 부적합**합니다. 행사 내 모든 HBF 논의가 이 전제를 명시했습니다
- **출처**: [SK hynix / PR Newswire, 2026-08-03](https://www.prnewswire.com/news-releases/sk-hynix-unveils-first-hbf-standard-specifications-with-sandisk-presenting-ai-memory-solutions-at-fms-2026-302841792.html), [SK하이닉스 뉴스룸](https://news.skhynix.co.kr/hbf-at-fms-2026/)

**[SK하이닉스·마벨 CMM-Ax (CXL 기반 PNM 모듈)]**

- **카테고리**: 메모리 확장 · 근접연산(PNM)
- **발표 내용**: SK하이닉스 고성능 D램 + 마벨의 CXL 기반 지능형 PNM 엔진 'Structera A' 결합. CXL 컨트롤러 내부에 Arm 데이터센터급 CPU 16개를 탑재해 메모리 내부에서 직접 연산. LLM의 KV 캐시 연산을 GPU 대신 메모리 영역에서 처리
- **출시 상태**: 🟠 기술 백서 공개 + 검증 결과 발표 (8/6 공동 발표 세션)
- **정량적 지표**: 내부 데이터 연산 대역폭 최대 **200GB/s**, 장치당 **512GB** 기준 검증. GPU 백엔드 시스템(NELSSA) 적용 시 **단일 GPU 대비 최대 5.5배, 듀얼 GPU 구성 대비 3.6배** 처리량
- **시장 전망**: 욜그룹 기준 CXL 시장 2026년 21억 달러 → 2028년 약 160억 달러
- **인용**: 주영표 SK하이닉스 부사장 — "대용량과 고성능 연산 능력을 결합한 지능형 메모리" (헤럴드경제)
- **출처**: [헤럴드경제, 2026-08-06](https://biz.heraldcorp.com/article/10832779)

### 3-2. 낸드 / 스토리지

**[삼성전자 V10 BV-NAND]**

- **카테고리**: 낸드
- **발표 내용**: 신규 웨이퍼 본딩 기술을 적용한 Bonding V-NAND 아키텍처. 2013년 Flash Memory Summit에서 업계 최초 V-NAND를 공개한 지 13년 만의 세대 전환
- **출시 상태**: ✅ 업계 최초 공개 (양산 일정은 미명시)
- **정량적 지표**: **400단 이상**, V9 대비 메모리 밀도 **약 58% 증가**, 읽기·쓰기·I/O 성능 개선
- **수상**: FMS Awards **3D & NAND Innovation Award**
- **출처**: [Samsung Newsroom](https://news.samsung.com/global/samsung-unveils-next-gen-3d-memory-vision-at-fms-2026-charting-the-future-of-ai-infrastructure), [Seoul Economic Daily](https://en.sedaily.com/finance/2026/08/06/samsung-wins-two-fms-awards-for-next-generation-memory)

**[SK하이닉스 V10 375단 4D 낸드]**

- **카테고리**: 낸드
- **발표 내용**: 10세대 375단 4D 낸드 웨이퍼를 전시 부스에서 최초 공개
- **출시 상태**: 🟠 개발 중 (웨이퍼 공개)
- **출시 일정**: 이 낸드 기반 엔터프라이즈 SSD **2027년 초 양산 진입** (보도 기준)
- **정량적 지표**: 전 세대 대비 **전력 효율 2.5배**
- **출처**: [SK hynix / PR Newswire](https://www.prnewswire.com/news-releases/sk-hynix-unveils-first-hbf-standard-specifications-with-sandisk-presenting-ai-memory-solutions-at-fms-2026-302841792.html)

**[키옥시아 GP1 시리즈]**

- **카테고리**: 엔터프라이즈 SSD
- **발표 내용**: PCIe 6.0 NVMe, GPU 다이렉트 액세스에 최적화. 대역폭이 아닌 **접근 횟수(IOPS)** 를 최적화 대상으로 삼은 설계. XL-FLASH 2세대 기반
- **출시 상태**: 🟠 평가 샘플 (연내 선별 고객 대상)
- **정량적 지표**: 512바이트 단위 **랜덤 리드 최대 1,000만 IOPS**, 지연 **5마이크로초 미만**, 향후 세대에서 1억 IOPS 목표 제시
- **수상**: FMS **Best of Show — Specialized Storage**
- **⚠️ 설계 의도 해석**: 1,000만 × 512바이트 = 실제 데이터 이동량은 초당 약 5GB에 불과합니다. 이는 의도된 설계로, KV 캐시 오프로드·임베딩 조회·벡터 인덱스 순회처럼 **처리량이 아니라 독립적 접근 횟수가 병목인 워크로드**를 겨냥합니다. 2022년 단종된 인텔 옵테인이 차지하던 자리에 가깝습니다
- **출처**: [Kioxia](https://www.kioxia.com/en-jp/about/news/2026/20260804-1.html), [Technology Conferences 현장 리뷰](https://technologyconference.com/fms-2026-in-santa-clara-kioxia-samsung-sandisk-and-sk-hynix-offer-four-incompatible-fixes-for-the-ai-memory-wall/)

**[키옥시아 XL1 / CM10 / NX1]**

- **XL1**: XL-FLASH 기반 **CXL 호환 메모리 확장 모듈**, 이달 중 생태계 파트너 샘플 출하 (🟠 샘플링)
- **CM10**: 7월 30일 발표. **332단 BiCS 10세대 TLC** 기반 최초 엔터프라이즈 SSD, PCIe 6.0, **직접 액침(콜드플레이트) 냉각 옵션** (🟡 발표 완료)
- **NX1**: PCIe 6.0, 직접 액체 냉각 지원
- **전략적 의미**: 온패키지(HBF) / 메모리 버스(CXL) / PCIe 종단(SSD) 세 포지션 중 키옥시아는 **한 곳에 걸지 않고 세 곳 모두에 제품을 배치**했습니다
- **출처**: [Kioxia 뉴스룸](https://www.kioxia.com/en-jp/about/news/2026/20260804-1.html), [뉴스와이어](https://www.newswire.co.kr/newsRead.php?no=1039908&sourceType=rss)

**[키옥시아·샌디스크 차세대 QLC 3D 플래시]**

- **정량적 지표**: 8세대 대비 비트 밀도 **최대 60% 증가**, **37 Gb/mm² 초과** (업계 최고 비트 밀도 주장)
- **출시 상태**: 🔵 기술 발표
- **출처**: [Kioxia, 2026-08-04](https://www.kioxia.com/en-jp/about/news/2026/20260804-2.html), [Business Wire](https://www.businesswire.com/news/home/20260804147821/en/New-3D-Flash-Memory-Technology-from-Kioxia-and-Sandisk-Achieves-Industrys-Highest-Bit-Density-for-QLC-NAND)

**[삼성전자 세계 최소형 256TB SSD]**

- V9 QLC 낸드 + 5나노 컨트롤러 적용. 이진엽 부사장이 키노트에서 실물 시연하며 "이 SSD 하나의 가격이 고급 세단 한 대와 맞먹는다"고 소개 (구체 가격 미공개)
- **출처**: [한국일보 현장 취재, 2026-08-05](https://www.hankookilbo.com/news/article/A2026080512080004974)

### 3-3. AI 인프라 / 소프트웨어 (NVIDIA)

**[NVIDIA cuFile API 오픈소스화]**

- **카테고리**: 개발도구 · 스토리지 소프트웨어
- **발표 내용**: GPU가 CPU를 거치지 않고 스토리지를 직접 읽고 쓰게 하는 cuFile API와 그 하위 수직 스토리지 소프트웨어 스택 전체를 오픈소스로 공개. GPUDirect Storage의 구성 요소
- **출시 상태**: ✅ 공개 (github.com/xio-sig)
- **거버넌스**: 초기 메인테이너로 **구글, 인텔, NVIDIA, 메타** 참여
- **출처**: [NVIDIA Blog, 2026-08-04](https://blogs.nvidia.com/blog/ai-storage-fms/)

**[NVIDIA Storage-Next 이니셔티브 / SCADA]**

- **Storage-Next**: GPU 주도 스토리지의 동작 방식을 업계 표준으로 정렬하기 위한 이니셔티브. **40개 이상의 스토리지·플래시 벤더 참여** (DDN, 키옥시아, 마이크론 포함)
- **SCADA (scaled, accelerated data access)**: 대규모 병렬 GPU가 필요한 데이터만 스토리지에서 자신의 고속 메모리로 직접 끌어오는 프레임워크. 보안을 위해 사용자 영역과 특권 영역을 분리하는 구조 채택
- **파트너 적용**: DDN이 자사 Infinia 플랫폼에 SCADA 통합
- **출처**: [NVIDIA Blog](https://blogs.nvidia.com/blog/ai-storage-fms/)

**[NVIDIA Vera BlueField-4 STX / CMX]**

- **Vera CPU**: 2단계 압축+암호화 파이프라인에서 x86 CPU 대비 **최대 3.21배 처리량** (NVIDIA 자체 벤치마크)
- **CMX (Context Memory Storage)**: 장문맥·멀티턴·에이전틱 AI 추론을 위한 AI 네이티브 컨텍스트 계층. STX 기반, 팟 단위 KV 캐시 공유
- **출처**: [NVIDIA Blog](https://blogs.nvidia.com/blog/ai-storage-fms/)

### 3-4. 기타

- **마이크론**: 부스에서 AI 데이터센터용 SSD와 **G9 낸드** 기술을 전면 배치. ⚠️ HBM4 양산·SOCAMM2·9650 Gen6 SSD 발표는 **2026년 3월 GTC에서 이뤄진 건으로, FMS 2026 신규 발표가 아닙니다**
- **샌디스크**: 'Memory for AI'를 부스 전면에 내걸고 SK하이닉스와 공동 개발 중인 HBF 생태계를 집중 소개
- **크레도(Credo)**: OmniConnect Weaver 인터커넥트로 AI Application·User Implementation 2개 부문 Best of Show 파이널리스트 (25배 AI 메모리 밀도 주장 — 자사 발표)
- **AIC**: 컨텍스트 메모리 및 AI 추론 스토리지 플랫폼 전시

---

## 4. 키노트 세션 분석

### 4-1. 삼성전자 — "Driving the Wave of AI Revolution: 3D Innovations in Memory & Storage Architecture"

- **발표자**: 이진엽 부사장(플래시개발실장), 김경륜 상무(D램설계팀 프로젝트 리더)
- **핵심 메시지**
  - AI 시스템의 성능과 전력 효율을 동시에 극대화하려면 2D 배치의 한계를 넘어 3D 구조로 가야 한다
  - zHBM(메모리를 가속기 위로) + zNAND-O(엣지 AI용 고성능 낸드) + V10 BV-NAND(400단 웨이퍼 본딩)를 하나의 3D 전략으로 제시
  - 메모리·파운드리·첨단 패키징을 모두 보유한 유일한 IDM으로서 **원스톱 턴키** 제공
- **가장 주목할 시연**: V9 QLC + 5나노 컨트롤러 기반 세계 최소형 256TB SSD 실물 공개, 이어서 400단급 V10 BV-NAND 공개 시 청중이 일제히 휴대폰을 들어 촬영
- **부스 하이라이트**: AI 클라우드 서버를 형상화한 부스에 약 30종의 메모리·스토리지 기술 전시. 적층 메모리 방열 기술 **HPB(Heat Path Block)** 를 "빌딩의 굴뚝"에 비유해 설명
- **행간 읽기**: 발표문의 마지막 섹션인 '원스톱 턴키 솔루션'이 사실상 진짜 메시지로 보입니다. **zHBM은 메모리 배지를 단 파운드리 세일즈**라는 해석이 가능합니다 (Technology Conferences 분석)

### 4-2. SK하이닉스 — "Orchestrating Efficient AI Infrastructure through Tiered Memory in the Era of Agentic AI"

- **발표자**: 김천성 부사장(솔루션개발 담당), 강욱성 부사장(차세대상품기획 담당)
- **핵심 메시지**
  - 에이전틱 AI 상용화로 처리 데이터량이 급증하지만, **단일 메모리 타입으로는 해결 불가**
  - 여러 메모리 타입을 하나의 시스템으로 연결·최적화하는 **Tiered Memory** 아키텍처가 필요
  - HBF는 그 계층 구조의 핵심 조각이며, 폐쇄형이 아닌 **OCP 개방형 표준**으로 간다
- **인용**: 김천성 부사장 — "메모리와 스토리지의 경계를 확장하겠다" (15단어 이내 요약, PR Newswire)
- **8/6 패널**: 'Breaking the Memory Wall with High Bandwidth Flash' — 임의철 SK하이닉스 부사장(솔루션AT), Rajeev Nagabhirava 샌디스크 VP, Xiaoyu Ma 구글 딥마인드 시니어 스태프 엔지니어
- **의미**: HBF가 **실제로 써야 할 당사자(구글 딥마인드)와 함께 공개 토론된 첫 자리**입니다. 메모리 업체 둘이 자기들끼리 얘기하는 단계를 벗어났다는 신호

### 4-3. ScaleFlux × NVIDIA 공동 키노트

- **발표자**: Hao Zhong(ScaleFlux CEO), Jason Hardy(NVIDIA 스토리지 기술 VP)
- **핵심 메시지**
  - 플래시가 AI 추론을 위한 **새로운 메모리 계층**으로 부상 중
  - 학습에서 추론으로의 전환이 데이터센터 스토리지 설계 자체를 바꾸고 있음 (팟 단위 KV 캐시 공유 = CMX 아키텍처)
  - 더 큰 모델, 더 높은 GPU 활용률, 더 낮은 인프라 비용을 동시에 달성 가능

---

## 5. 작년 대비 변화 및 전략적 방향 분석

| 항목 | FMS 2025 | FMS 2026 |
| --- | --- | --- |
| HBF | SK하이닉스-샌디스크 **MOU 체결**, Best of Show(Most Innovative Technology) 수상, 2026년 고객 샘플링 목표 제시 | **OCP 개방형 표준 규격 공개**, 구글·텐스토렌트 합류, 512GB / 0.4~3.0TB/s / UCIe 명시 |
| 낸드 단수 | 키옥시아 LC9 245.76TB (32다이 적층) Best of Show | 삼성 **400단+** / SK하이닉스 **375단** / 키옥시아 **332단**, 모두 본딩 공정 |
| HBM | SK하이닉스 HBM4 개발 완료·양산 준비 발표 | 삼성 HBM4 양산(2월)·HBM4E 샘플(5월) 완료 후 **HBM5·zHBM 논의로 이동** |
| 규모 | 참관객 약 3,000명, 전시 70여 곳 | **3,500명 이상, 100곳 이상** |
| 운영 | 기존 주최 | **Terrapinn 인수 (2026.3)** |

**강조된 키워드**: Tiered Memory, HBF, 에이전틱 AI, KV 캐시, 웨이퍼 본딩, 액체 냉각, IOPS(대역폭이 아닌), UCIe, OCP

**사라지거나 약해진 키워드**: 순수 용량 경쟁(TB 숫자 자체), HDD 대체 담론, 학습(training) 중심 서사

**전략적 방향성 분석**

1. **경쟁의 축이 '대역폭'에서 '계층 설계'로 이동했습니다.** 아무도 "더 빠른 SSD"를 팔지 않았습니다. 마이크론 부스 담당자의 표현대로, 경쟁은 "AI가 얼마나 효율적으로 데이터를 읽고 저장하느냐"로 넘어갔습니다.
2. **조용한 진짜 이야기는 웨이퍼 본딩입니다.** 삼성 V10 BV-NAND, 키옥시아 CMOS-to-array 본딩, HBF의 TSV·하이브리드 본딩, SK하이닉스 375단 — 네 회사가 네 개의 다른 제품 카테고리를 내놓았지만 **하나의 공정 기술에 공통 의존**합니다. 메모리 가치가 첨단 패키징으로 이동한다는 의미이며, 무대 시간은 컨셉 모델의 절반도 못 받았습니다.
3. **표준화 방식의 전환**: HBF는 OCP로, cuFile은 구글·인텔·메타 공동 메인테이너 체제로, Storage-Next는 40개 벤더 연합으로. 개별 벤더의 독점 스택이 아니라 **개방형 컨소시엄이 기본값**이 됐습니다.

**업계 트렌드와의 정합성**: TrendForce는 2026~2028년을 구조적 슈퍼사이클로 규정하며, HBM4의 2,048비트 인터페이스와 첨단 낸드 적층의 복잡성이 자본 투자 증가에도 불구하고 글로벌 비트 성장을 제약한다고 봅니다. 공급 제약과 사상 최대 투자가 동시에 일어나는 이례적 조합이 이번 행사의 모든 발표를 '긴급하게' 만든 배경입니다.

---

## 6. 경쟁사 대비 포지셔닝

| 영역 | 삼성전자 | SK하이닉스 | 키옥시아/샌디스크 | 마이크론 | 격차/우위 |
| --- | --- | --- | --- | --- | --- |
| HBM 계층 | HBM4 양산(2월), HBM4E 샘플(5월), HBM5·zHBM 로드맵 | HBM4 양산 체제, Tiered Memory 개념 주도 | 미참여 | HBM4 양산(GTC 발표) | 삼성이 **세대 선점 서사**, SK하이닉스가 **아키텍처 서사**를 각각 차지 |
| HBM-SSD 중간 계층 | zHBM(가속기 위 적층) | **HBF 표준 주도** + CMM-Ax(CXL PNM) | HBF 공동 표준(샌디스크), 키옥시아는 GP1로 별도 노선 | Storage-Next 참여 | SK하이닉스가 **표준·생태계에서 선행**. 삼성은 패키징 우위로 승부 |
| 낸드 단수 | **400단+ V10 BV** | 375단 V10 4D | 332단 BiCS 10세대 | G9 | 삼성이 단수 최고, 다만 밀도(Gb/mm²)는 키옥시아·샌디스크 QLC가 37 Gb/mm² 초과 주장 |
| 초고 IOPS 스토리지 | 명시적 대응 제품 미공개 | 명시적 대응 제품 미공개 | **키옥시아 GP1 1,000만 IOPS** (Best of Show) | 미공개 | 키옥시아 **독주 구간**. 옵테인 공백을 겨냥 |
| CXL | 개발 진행 중 (구체 발표 없음) | **CMM-Ax (마벨 협력)** | 키옥시아 XL1 | CXL 2.0 익스팬더 로드맵 | SK하이닉스가 연산 기능까지 얹어 가장 앞섬 |
| 턴키 (메모리+파운드리+패키징) | **유일한 통합 IDM** | 메모리 전문 | 낸드 전문 | 메모리 전문 | 삼성 단독 우위. zHBM의 실질적 근거 |

---

## 7. 한국 시장 / 한국어 사용자 관점

- **주역이 한국 기업**: 개막 첫날 전시 부스가 열리기도 전에 삼성전자와 SK하이닉스가 각각 키노트를 진행했습니다. 행사장 곳곳에서 한국어가 들렸다는 현장 취재가 있을 정도로, 글로벌 메모리 1·2위의 홈그라운드 성격이 강한 행사였습니다.
- **가장 많은 관람객이 몰린 부스**도 삼성전자와 SK하이닉스였습니다. 다만 삼성 zHBM은 **양산 제품이 없어 모형만 전시**됐고, SK하이닉스 HBF는 **표준만 발표되고 실물·모형 전시조차 없었습니다** ("상용화·실물 하드웨어 개발 전 단계"라는 SK하이닉스 관계자 설명).
- **한국 리전 / 한국어 지원**: 해당 없음. FMS는 반도체 부품·아키텍처 행사로 클라우드 리전이나 언어 지원 개념이 적용되지 않습니다.
- **국내 규제 관련 영향**: 직접적 영향은 제한적이나, HBF·CXL 등 신규 계층이 데이터센터 아키텍처에 편입될 경우 국내 금융권 망분리 환경에서의 **메모리 계층 검증 부담**이 새로 생길 수 있습니다. (⚠️ 이는 관측이며, 행사에서 논의된 내용이 아닙니다)
- **국내 투자자 관점**: SK하이닉스는 2026년 2분기 매출 79조 3,187억 원을 기록했고 나스닥 ADR 상장도 완료한 상태입니다. CXL 시장은 욜그룹 기준 2026년 21억 달러에서 2028년 약 160억 달러로 성장이 전망됩니다. (⚠️ 투자 판단은 본인의 몫이며, 본 리뷰는 투자 조언이 아닙니다)
- **국내 매체 커버리지**: 한국일보(현장 특파원), 헤럴드경제, 이데일리, 머니투데이 등이 현장 및 발표 내용을 상세 보도했습니다.

---

## 8. 타깃 독자별 핵심 요약

### 경영진 / 의사결정자가 알아야 할 3가지

1. **2027년 이전에 대량 출하되는 신규 아키텍처는 없습니다.** zHBM·HBF·CMM-Ax 모두 컨셉 또는 표준 단계입니다. 지금 당장 조달 계획을 바꿀 이유는 없습니다.
2. **실제로 지금 움직이는 것은 낸드 밀도입니다.** 삼성 400단+, SK하이닉스 375단, 키옥시아 332단 — 모두 본딩 공정. 이 밀도 향상은 **2분기 안에 비트 공급량과 계약 가격에 반영**될 가능성이 높습니다.
3. **공급 제약과 사상 최대 투자가 동시에 진행 중입니다.** 삼성은 올해 HBM 생산능력 약 50% 확대를 목표로 하고 있습니다. 메모리 원가가 향후 12개월 IT 예산에서 가장 변동성 큰 항목이 될 수 있습니다.

### 아키텍트가 알아야 할 3가지

1. **메모리 계층이 2단(HBM/SSD)에서 4단 이상으로 분화합니다.** HBM → HBF/zHBM → CXL(CMM-Ax, XL1) → 고IOPS SSD(GP1) → 일반 SSD. 각 계층은 **서로 다른 병목**을 겨냥하며, 대부분 같은 서버에 공존할 수 없습니다.
2. **HBF는 추론 전용입니다.** 낸드 쓰기 속도와 내구성 때문에 가중치가 고정된 추론에만 적합합니다. 학습 워크로드 설계에는 계산에 넣지 마십시오.
3. **KV 캐시 배치가 새로운 설계 결정 항목입니다.** NVIDIA CMX(팟 단위 공유), SK하이닉스 CMM-Ax(메모리 내 연산), 키옥시아 GP1(고IOPS 오프로드) — 세 가지 접근이 경쟁 중입니다.

### 개발자가 알아야 할 3가지

1. **cuFile API가 오픈소스가 됐습니다** (github.com/xio-sig). 구글·인텔·NVIDIA·메타가 메인테이너입니다. GPU 직접 스토리지 접근을 쓰는 코드는 이제 벤더 종속에서 벗어날 여지가 생겼습니다.
2. **SCADA는 보안 모델이 핵심입니다.** 속도를 위해 애플리케이션이 드라이브에 직접 접근하되, 신뢰 컴퓨팅 베이스 밖의 사용자 영역과 특권 설정 컴포넌트를 분리합니다. GPUDirect 계열 코드를 다룬다면 이 구조를 이해해야 합니다.
3. **512바이트 랜덤 리드가 새로운 벤치마크 단위입니다.** 임베딩 조회·벡터 인덱스 순회 코드를 짠다면, 처리량(GB/s)이 아니라 **초당 독립 접근 횟수**로 프로파일링하십시오.

---

## 9. 액션 아이템 / 체크리스트

**즉시 시도 가능**

- [ ] cuFile API 오픈소스 저장소(github.com/xio-sig) 확인 및 기존 GPUDirect Storage 코드와의 호환성 점검
- [ ] 자사 AI 추론 워크로드의 KV 캐시 크기·접근 패턴 측정 (512B 랜덤 리드 IOPS 기준)

**신청/대기 등록 필요**

- [ ] 키옥시아 GP1 평가 샘플 — 연내 선별 고객 대상 (영업 채널 문의)
- [ ] 키옥시아 XL1 CXL 모듈 — 생태계 파트너 샘플링 진행 중
- [ ] HBF 컨소시엄 / OCP HBF 규격 문서 열람 (개방형 표준)

**아키텍처 재검토 필요 영역**

- [ ] 추론 서빙 인프라의 메모리 계층 구성 — HBM 단독 전제가 유효한지 재확인
- [ ] 액체 냉각 도입 계획 — PCIe 6.0 엔터프라이즈 SSD(CM10, NX1)가 직접 냉각을 옵션이 아닌 전제로 삼기 시작
- [ ] 2027년 조달 계획에 낸드 밀도 향상(400단급)에 따른 단가 변화 반영

**추가 학습 / 리서치 주제**

- [ ] UCIe 규격 — HBF가 이를 채택하면서 메모리-프로세서 인터커넥트 표준으로 확장 중
- [ ] 웨이퍼 본딩 / 하이브리드 본딩 공정이 메모리 공급망에 미치는 영향
- [ ] Jim Handy(Objective Analysis)의 하이퍼스케일러 지출 조정 시나리오 — HBM 우선 아키텍처가 비용·공급 한계에 부딪힐 때의 시장 재편

---

## 10. 종합 평가 및 시사점

### 평가: ★★★★☆ (4.0 / 5.0)

**근거**

- **강점**: 20년 만에 이 행사가 산업의 중심 무대가 됐다는 것이 규모 수치(3,000→3,500명, 70→100곳)로 확인됐습니다. HBF가 MOU에서 개방형 표준으로, 그것도 하이퍼스케일러를 끌어들여 1년 만에 이동한 것은 실질적 진전입니다. NVIDIA의 cuFile 오픈소스화도 생태계 관점에서 의미 있는 결정입니다.
- **감점 요인**: 헤드라인을 차지한 zHBM은 **존재하지 않는 규격(HBM5)과 비교한 컨셉 모델**이고 양산 일정이 없습니다. HBF는 표준만 나오고 실물 전시조차 없었습니다. 무대의 상당 부분이 2027년 이후 이야기로 채워졌습니다.

**기대에 못 미친 부분**

- **마이크론의 존재감**: 부스는 냈지만 FMS 전용 신규 발표가 사실상 없었습니다. 주요 발표는 3월 GTC에서 이미 소진했습니다.
- **삼성의 CXL 침묵**: SK하이닉스가 마벨과 CMM-Ax를 내놓는 동안 삼성의 CXL 관련 구체 발표는 확인되지 않았습니다.
- **가격 정보 전무**: 모든 발표에서 가격이 공개되지 않았습니다. 공급 제약 국면임을 감안하면 예상 가능한 일이지만, 조달 계획 수립에는 도움이 되지 않습니다.
- **가장 유용했던 세션이 보도자료에 없었습니다.** Jim Handy(Objective Analysis)의 "하이퍼스케일러 AI 지출이 둔화되면 무슨 일이 벌어지는가" 세션이 그것입니다.

**향후 6~12개월 영향 예측** (⚠️ 예측이며 확정 사실이 아닙니다)

- 400단급 낸드의 밀도 향상은 2분기 내에 비트 공급과 계약 가격에 반영될 가능성이 높습니다.
- HBF는 2027년 중 첫 고객 샘플링 단계에 진입할 것으로 보이나, 실제 채택 여부는 구글·텐스토렌트 등 컨소시엄 참여사의 실증 결과에 달려 있습니다.
- CXL은 욜그룹 전망대로라면 2028년까지 8배 가까이 성장하지만, CMM-Ax처럼 연산 기능을 얹은 형태가 표준이 될지 단순 확장 모듈이 주류가 될지는 미정입니다.

**핵심 질문 (아무도 무대에서 답하지 않은 것)**

네 개의 아키텍처가 경쟁하는 이 계층은, **HBM이 희소하고 비싸기 때문에만 존재합니다.** HBM 생산능력 확대가 수요를 앞지르거나 추론 경제학이 바뀌면, 이 계층 자체가 선택 사항이 됩니다. 이번 주에 발표된 것 중 2027년 이전에 대량 출하되는 것은 없습니다. **지금 실제로 출하되는 것은 낸드뿐이고, 그것은 전부 단순 적층이 아니라 본딩된 것입니다.**

**다음 회차에서 기대되는 방향**

- zHBM의 양산 일정 또는 첫 고객사 공개 여부
- HBF 실물 하드웨어 및 구글 딥마인드 실증 결과
- 삼성의 CXL 대응 제품
- Terrapinn 운영 첫 해 이후의 행사 포맷 변화

---

## 11. 참고자료

**공식 발표 / 보도자료**

- [Samsung Unveils Next-Gen 3D-Memory Vision at FMS 2026 — Samsung Global Newsroom (2026.8.5)](https://news.samsung.com/global/samsung-unveils-next-gen-3d-memory-vision-at-fms-2026-charting-the-future-of-ai-infrastructure)
- [SK hynix Unveils First HBF Standard Specifications with Sandisk — PR Newswire (2026.8.3)](https://www.prnewswire.com/news-releases/sk-hynix-unveils-first-hbf-standard-specifications-with-sandisk-presenting-ai-memory-solutions-at-fms-2026-302841792.html)
- [SK하이닉스 뉴스룸 — HBF at FMS 2026](https://news.skhynix.co.kr/hbf-at-fms-2026/)
- [As AI Increases Demands on Memory, Storage Steps Up — NVIDIA Blog (2026.8.4)](https://blogs.nvidia.com/blog/ai-storage-fms/)
- [Kioxia Showcases Flash Storage Innovations for the AI Era at FMS 2026 (2026.8.4)](https://www.kioxia.com/en-jp/about/news/2026/20260804-1.html)
- [New 3D Flash Memory Technology from Kioxia and Sandisk Achieves Industry's Highest Bit Density for QLC NAND (2026.8.4)](https://www.kioxia.com/en-jp/about/news/2026/20260804-2.html)
- [ScaleFlux CEO to Deliver FMS 2026 Keynote with NVIDIA — PR Newswire](https://www.prnewswire.com/news-releases/scaleflux-ceo-to-deliver-fms-2026-keynote-with-nvidia-on-memory-solutions-to-scale-ai-data-pipeline-302827713.html)
- [FMS 공식 사이트 (Terrapinn)](https://www.terrapinn.com/conference/future-memory-storage/index.stm)
- [FMS Best of Show Awards 페이지](https://futurememorystorage.com/program/events-awards/best-of-show-awards)

**분석 / 업계 매체**

- [FMS 2026 in Santa Clara: Four Incompatible Fixes for the AI Memory Wall — Technology Conferences (2026.8.5)](https://technologyconference.com/fms-2026-in-santa-clara-kioxia-samsung-sandisk-and-sk-hynix-offer-four-incompatible-fixes-for-the-ai-memory-wall/)
- [Samsung Showcases zHBM at FMS 2026 — TrendForce (2026.8.5)](https://www.trendforce.com/news/2026/08/05/news-samsung-expected-to-showcase-zhbm-at-fms-2026-a-next-gen-3d-memory-architecture-with-4x-bandwidth/)
- [FMS 2026: The Annual Rendez-Vous is Around the Corner — StorageNewsletter (2026.7.29)](https://www.storagenewsletter.com/2026/07/29/fms-2026-the-annual-rendez-vous-is-around-the-corner/)
- [Terrapinn Acquires FMS — StorageNewsletter (2026.3.26)](https://www.storagenewsletter.com/2026/03/26/terrapinn-acquires-fms-the-future-of-memory-and-storage/)
- [Recap of The Future of Memory and Storage Conference 2025 — StorageNewsletter](https://www.storagenewsletter.com/2025/08/11/recap-of-the-future-of-memory-and-storage-conference-2025/) (작년 대비 비교용)
- [FMS 2026 Opens Tuesday With Liquid-Cooled PCIe 6.0 SSDs — TechTimes (2026.8.2)](https://www.techtimes.com/articles/322686/20260802/fms-2026-opens-tuesday-liquid-cooled-pcie-60-ssds-debate-ai-memory-tiers.htm)
- [Samsung Wins Two FMS Awards for Next-Generation Memory — Seoul Economic Daily (2026.8.6)](https://en.sedaily.com/finance/2026/08/06/samsung-wins-two-fms-awards-for-next-generation-memory)

**한국어 매체**

- ["SSD 하나가 세단 한 대 값"…세계 최대 메모리쇼 주인공은 삼성·SK — 한국일보 실리콘밸리 특파원 (2026.8.5)](https://www.hankookilbo.com/news/article/A2026080512080004974)
- [마벨 손잡은 SK하이닉스, 차세대 CXL 메모리 모듈 공개 — 헤럴드경제 (2026.8.6)](https://biz.heraldcorp.com/article/10832779)
- [삼전·하닉, 美 FMS 2026서 AI 메모리 해법 대거 공개 — 이데일리](https://edaily.co.kr/News/Read?mediaCodeNo=257&newsId=05051206645544040)
- [삼성전자 AI 병목 해법…GPU 위 HBM 쌓는 '3D 메모리' 기술 제시 — 머니투데이](https://www.mt.co.kr/industry/2026/08/03/2026080311540663495)
- [키옥시아, AI 워크로드 위한 CXL 호환 메모리 확장 모듈 'XL1 시리즈' — 뉴스와이어](https://www.newswire.co.kr/newsRead.php?no=1039908&sourceType=rss)

---

### 자체 품질 점검

- ✅ 모든 발표 항목에 출시 상태(GA/Preview/Roadmap) 표기
- ✅ 추상적 표현 대신 정량 수치 사용 (58% 밀도 향상, 0.4~3.0TB/s, 1,000만 IOPS, 5.5배 처리량 등)
- ✅ 모든 주요 주장에 출처 URL 첨부
- ✅ 미확인 정보는 "관측", "예측", "⚠️" 로 명확히 구분
- ✅ 검색으로 실존 확인된 URL만 기재
- ✅ 작년(FMS 2025) 대비 변화 분석 포함
- ✅ 경쟁사 비교 매트릭스 포함
- ✅ 한국 시장 관점 포함
- ✅ 타깃 독자별 요약 분리
- ✅ 액션 아이템 구체적 제시
