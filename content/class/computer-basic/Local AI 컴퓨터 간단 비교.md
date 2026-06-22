---
title: "Local AI 컴퓨터 간단 비교"
date: 2026-06-22T15:19:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-22
summary: "컴퓨터 제품들을 표로 정리하고, 각 모델의 메모리 옵션, 가격, 일반 및 로컬 LLM 활용성을 비교한 내용입니다."
description: "컴퓨터 제품들을 표로 정리하고, 각 모델의 메모리 옵션, 가격, 일반 및 로컬 LLM 활용성을 비교한 내용입니다."
tags: ["잎새 36호"]
image: "images/Local-AI-컴퓨터-간단-비교.png"
comments: false
notion_url: https://app.notion.com/p/Local-AI-387091c284f680b787c4e4cb581facd1
notion_id: 387091c2-84f6-80b7-87c4-e4cb581facd1
Categories: ["blog", "컴퓨터 기초"]
---

## Local AI 컴퓨터 간단 비교

최근에 Local로 LLM을 돌리려는 여러 시도들이 있습니다. 흔히 AI PC라고 일컬어지는 컴퓨터들의 유형을 간단히 살펴보며 이해를 돕고자 내용을 정리하였습니다. 

| 제품 | 기본 옵션 | 128GB 또는 최대 메모리 기준 | 일반 용도 | 로컬 LLM 용도 |
| --- | --- | --- | --- | --- |
| Mac mini M4 Pro | 24GB Unified / 512GB, $1,399. | **최대 64GB** Unified / 1TB, 약 $2,199~$2,399. | macOS 일반 작업, 문서, 웹, 개발, 영상/음악 작업에 적합. | 7B~30B급에 적합, 70B는 실험용. |
| Mac Studio M4 Max | 36GB Unified / 512GB, $1,999. | **128GB** Unified / 1TB, 약 $3,729.99~$3,949. | macOS 워크스테이션, 크리에이티브 작업, 개발, 다중 앱 작업에 매우 강함. | 14B~70B급을 가장 균형 있게 처리. |
| Dell Pro Max with GB10 | 실질적으로 128GB Unified / 2TB 구성이 핵심, 약 $3,699~$4,756.84. | **128GB** Unified / 2TB, 약 $4,600~$4,756.84. | Linux 기반 AI 워크스테이션, 브라우징·코딩·Docker 가능, 일반 소비자용 PC 성격은 약함. | 70B 이상 추론, 대형 로컬 에이전트, AI 개발 특화. |
| NVIDIA DGX Spark | **128GB** Unified, $2,999부터 또는 Founders Edition $4,699. | **128GB** Unified, $2,999~$4,699. | Ubuntu 기반 개발 머신, 서버/개발용에 적합, 일반 소비자용 활용성은 낮음. | Dell GB10과 유사한 AI 전용 소형 장비. |
| RTX 5090 워크스테이션 | RTX 5090 **32GB VRAM**, 카드 시작가 $1,999; 완제품은 더 높음. | **32GB VRAM + 128GB RAM** 완제품 약 $7,500+. | Windows 일반 작업, 최신 게임, 3D, 영상, CUDA 개발까지 가장 범용적. | 32GB VRAM 안에 들어가는 모델은 매우 빠름, 큰 모델은 한계가 있음. |

표 설명:

- Apple의 Unified Memory와 Dell GB10/DGX Spark의 통합 메모리는 로컬 LLM에서 **실질 모델 메모리**로 볼 수 있습니다.
- RTX 5090의 128GB는 **시스템 RAM**이고, 로컬 LLM의 핵심 한계는 여전히 **32GB VRAM**입니다.
- 그래서 RTX 5090은 작은~중간 모델을 매우 빠르게 돌리는 데 강하고, Mac Studio 128GB나 GB10/DGX Spark는 더 큰 모델을 메모리 안에 올리기 쉬운 쪽입니다.
- 일반 컴퓨터로서의 활용성은 Mac mini / Mac Studio / RTX 5090 PC가 높고, Dell GB10 / DGX Spark는 AI 전용 장비 성격이 더 강합니다.
