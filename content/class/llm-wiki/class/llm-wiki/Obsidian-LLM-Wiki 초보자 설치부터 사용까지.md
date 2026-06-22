---
title: "Obsidian-LLM-Wiki 초보자 설치부터 사용까지"
date: 2026-06-07T21:21:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-22
summary: "이 문서는 Obsidian과 Antigravity Family를 활용해 폴더 구성, 설치, 스크립트 작성 및 다양한 위키 관리 스킬을 단계별로 안내하는 상세 가이드입니다."
description: "이 문서는 Obsidian과 Antigravity Family를 활용해 폴더 구성, 설치, 스크립트 작성 및 다양한 위키 관리 스킬을 단계별로 안내하는 상세 가이드입니다."
tags: ["잎새 35호"]
image: "images/Obsidian-LLM-Wiki-초보자-설치부터-사용까지.png"
comments: false
notion_url: https://app.notion.com/p/Obsidian-LLM-Wiki-378091c284f680d9b50adb2b7fa783b5
notion_id: 378091c2-84f6-80d9-b50a-db2b7fa783b5
Categories: ["AI & Tech"]
---

## 1. 폴더 구성하기

1. 단일 컴퓨터에서만 사용할 경우
  - 데스크탑 또는 문서 폴더에 원하는 이름의 폴더를 생성합니다.(예, MyWiki)
2. 컴퓨터 뿐 아니라 스마트폰 등에서 함께 보기를 원하는 경우
  - Obsidian Sync(유료) 기능을 사용하면 여러 디바이스에서 공유하며 볼 수 있습니다. 이 유료 기능을 사용하지 않고 공유하려면 iCloud, Google Drive, Dropbox, One Drive 등을 통해 사용이 가능합니다. 단, 컴퓨터와 클라우드의 동기화 중 에러가 발생할 가능성이 있습니다. 
  - Wiki는 폴더별로 관리가 되기 때문에 여러 폴더를 만들어 별도로 관리도 가능합니다.
  - Mac
    - iPhone, iPad와 함께 사용하고자 할 때는 아래 Obsidian을 먼저 설치한 후 폴더를 구성합니다.
    - Obsidian을 설치하면 iCloud에 ‘Obsidian’이라는 이름의 폴더가 생성됩니다. 그 폴더를 열고 원하는 이름의 폴더를 생성합니다.(예, MyWiki)
    - 추후 iPhone 등에서 Obsidian을 실행시키면 생성된 폴더를 선택할 수 있습니다.
  - Windows
    - Google Drive, Dropbox, One Drive 등을 설치하고 각 드라이브를 열어 원하는 이름의 폴더를 생성합니다.(예, MyWiki)
    - Google Drive: 15GB 제공, 기본 Google 계정이 있으면 활용 가능성이 많아 이것을 기준으로 설명합니다.
      - [https://workspace.google.com/purducts/drive](https://workspace.google.com/purducts/drive)
      - 설치 후 탐색기 → 좌측 사이드바 → Google Drive → 내 드라이브 폴더에 원하는 이름의 폴더를 생성합니다.(예, MyWiki)

## 2. Obsidian 설치 및 설정

1. Obsidian 설치: 
  - Obsidian은 로컬 폴더의 마크다운 파일(.md)을 링크로 연결해 지식 그래프처럼 관리할 수 있는 개인 지식관리 노트 앱입니다.
  - [https://obsidian.md](https://obsidian.md/) 에 접속하여 Obsidian을 다운로드 후 설치합니다.
  - Obsidian을 실행하고, ‘Open Vault’에서 ‘MyWiki’ 폴더를 지정합니다.
  - 현재 구축 중인 Obidian-LLM-Wiki 시스템에서의 Obsidian의 역할
    - Antigravity IDE와 같은 폴더를 함께 보면서 작업을 합니다.
    - .md 형식의 파일의 내용을 확인, 수정, 생성할 수 있습니다.
    - 좌측 사이드바의 ‘그래프 뷰’를 선택하면 현재 업로드된 파일들의 링크 그래프를 볼 수 있습니다.
2. Obsidian Web Clipper 확장프로그램 설치
  - 위 설치 화면에서 아래로 스크롤하면 설치 버튼이 나옵니다. 본인이 사용하는 브라우저 링크를 눌러 설치할 수 있습니다.
  - Obsidian Web Clipper는 온라인 웹사이트의 내용을 내 Obsidian에 클리핑하는 도구입니다.
  - Chrome 브라우저의 경우 아래 링크를 통해 크롬 확장을 설치할 수 있습니다.
[https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf?utm_source=ext_app_menu](https://chromewebstore.google.com/detail/obsidian-web-clipper/cnjifjpddelmedmihgijeibhnjfabmlf?utm_source=ext_app_menu)
  - Obsidian Web Clipper 저장위치 설정: 온라인 자료를 스크랩할 위치를 지정할 수 있습니다.
    - 브라우저의 확장 프로그램에서 Obsidian Web Clipper를 선택한 후 우측의 ‘더보기 → Option’을 선택합니다.
    - 좌측 사이드바 → 기본 템플릿 → 노트(노트의 폴더 또는 파일 경로)의 값을 ‘_sources/Clipping’으로 수정합니다.

## 3. Antigravity Family 설치: 일단 Antigravity IDE 먼저 설치

- [https://antigravity.google/download#antigravity-ide](https://antigravity.google/download#antigravity-ide)
- 위 링크에서 본인의 컴퓨터에 해당하는 버전을 선택해 설치합니다.
- 설치 후 실행을 하면 다음 단계를 거쳐 세팅을 할 수 있습니다.
  - Google 계정으로 로그인
  - 테마 선택: 화면에 보이는 방식(다크모드 또는 라이트모드 등)
  - AI Agent의 권한 설정: Agent와 사용자의 역할 수준을 결정
    - Strict Mode: 가장 보수적인 보안·권한 설정으로, 에이전트가 파일을 수정하거나 터미널/스크립트를 실행하기 전에 반드시 사용자 승인을 받도록 강제합니다.
    - Review-driven development: 에이전트가 작업을 제안하지만, 실행 전 승인 단계(Review→Approve)가 필수인 방식입니다. “AI가 코드를 고치려면 사용자의 OK를 먼저 받는다”는 흐름입니다.
    - Agent-driven development: AI가 더 적극적으로 자율 실행하는 “자동 운전”에 가까운 방식입니다. 사용자의 실시간 승인 없이도 에이전트가 end-to-end 작업을 진행할 수 있습니다.
    - Custom Configuration
      - Terminal execution policy: 에이전트가 터미널 명령을 실행할 때 어떤 권한으로, 얼마나 자율적으로 실행할지를 정합니다.
      - Review policy: 코드 수정, 파일 접근, 컴파일·테스트 실행 등에서 어떤 동작을 사용자에게 리뷰하게 할지를 정합니다.
      - JavaScript execution policy: 코드 수정, 파일 접근, 컴파일·테스트 실행 등에서 어떤 동작을 사용자에게 리뷰하게 할지를 정합니다.
  - Configure Your Editor: 그대로 Next 클릭
  - Build with Google
    - Google이 제작한 번들 플러그인을 Antigravity 에 직접 포함시켜, 에이전트가 Google 기술 스택에서 더 잘 작동하도록 하는 선택사항입니다.
    - Modern Web Guidance만 선택 후 다음 단계로 넘어갑니다.
    - 설치 시 체크박스 형식으로 원하는 플러그인을 선택할 수 있고, 설치 후에도  Settings → Customizations → Build with Google Plugins 에서 추가로 다운로드하거나 활성화할 수 있습니다.
- ‘1. 폴더 구성하기’에서 만든 폴더를 엽니다. 
  - 좌측 Sidebar의 첫번째 아이콘(Explorer) 버튼 클릭 후 ‘Open Folder’를 클릭한 후 이전에 만든 ‘MyWiki’ 폴더를 열고, ‘Select Folder’를 선택합니다.

> **기타 Antigravity Family**
>
> - [https://antigravity.google](https://antigravity.google/)
> 
> **Antigravity 2.0**
> 
> Antigravity 생태계의 **차세대 핵심 제품(플랫폼/런타임)** 성격으로 보면 됩니다. IDE/CLI 같은 도구들이 “무엇을 실행·자동화할지”의 중심이 되는 기반(또는 통합 환경) 역할을 합니다.
> 
> **Antigravity CLI**
> 
> 터미널에서 쓰는 **명령줄 도구**입니다. 설치/실행/자동화 작업을 스크립트처럼 빠르게 돌리거나, 반복 작업을 커맨드로 처리할 때 적합합니다.
> 
> **Antigravity IDE**
> 
> 코드·폴더(프로젝트) 열어서 작업하는 **개발 환경(에디터)** 입니다. 지금 문서의 흐름처럼 “폴더 열기 → AI 채팅에 지시 → 리포지터리 설치/파일 생성/환경설정” 같은 작업을 여기서 진행하는 용도입니다.

## 4. Obsidian-wiki 설치

1. Antigravity IDE를 실행합니다. 복잡한 설정 단계를 Antigravity IDE의 AI Agent 기능을 사용하여 문장으로 명령을 내릴 예정입니다. 
2. ‘폴더 열기’를 사용하여 위에서 만든 폴더(MyWiki)를 지정합니다.
3. Python을 설치하기 위해 우측 AI 채팅 패널에 다음과 같이 입력합니다. 아래 코드박스에 마우스를 올리면 우측 상단에 ‘복사하기’ 버튼이 보입니다. 클릭하신 후 Antigravity IDE의 우측 AI 채팅 패널에 붙여넣기를 하시면 됩니다.
```plain text
Python을 전역설정으로 설치해줘.
```

  **개념 이해**

  ‘Python’은 사람이 읽기 쉬운 문법으로 자동화 스크립트와 프로그램을 빠르게 만들 수 있는 범용 프로그래밍 언어입니다. 이 Wiki 시스템을 설치하고 관리할 때 AI Agent가 작업을 위한 프로그램을 생성하여 반복 작업에 사용합니다. 이를 위한 환경을 구축하는 과정입니다.
4. Obsidian-wiki를 설치하기 위해 AI 채팅 패널에 다음과 같이 입력합니다.
```plain text
안드레이 카파시의 Obsidian + LLM + Wiki 개념으로 현재 폴더에 지식 베이스를 구축하려고 해. 현재 폴더에 https://github.com/Ar9av/obsidian-wiki 리포지터리를 설치해줘.
```

  **개념 이해**

  ‘리포지터리(repository)’는 프로젝트의 소스 코드와 변경 이력을 저장·관리하는 저장소입니다. 우리는 깃허브(github.com)에 Ar9av 라는 아이디를 사용하는 개발자가 만들어 공개한 obsidian-wiki 리포지터리를 내 컴퓨터에 복제하여, 그것을 바탕으로 시스템을 구축합니다.
5. 기본 폴더 위치에 ‘_sources’ 폴더를 생성하기 위해 AI 채팅 패널에 다음과 같이 입력합니다.
```plain text
root 폴더에 '_sources' 폴더를 생성해줘. 그리고, .env 파일에 이 폴더를 OBSIDIAN_SOURCES_DIR로 지정해줘.
```

  **개념 이해**

  현재 설치하고 있는 Obsidian-LLM-Wiki 서비스 리포지터리의 특징은 사람이 작성하는 원본 문서와 LLM이 작성하는 Wiki 문서를 구조적으로 분리시키고, MyWiki(가칭) 폴더 안에 원본 문서를 저장하지 않도록 되어 있습니다. 이것을 ‘_sources’ 폴더를 만들어 원본 문서를 이곳에 보관하여 함께 보며 관리할 수 있도록 하기 위하여 폴더 생성 작업과 다음의 폴더 사용법을 지정하는 과정을 추가했습니다.
6. _sources 폴더의 자료 관리 방법을 LLM에게 알려주기 위해 AI 채팅 패널에 다음과 같이 입력합니다.
```python
내가 관리하고 있는 Obsidian 위키 Vault 내부의 원본 소스 폴더들(`_sources/`)을 체계적으로 연결하고 요약해 주는 파이썬 자동화 스크립트 `scripts/generate_index.py`를 작성해줘.

이 스크립트는 하위 폴더별 인덱스(`_index.md`) 파일 생성과 상위 마스터 인덱스(`_sources/_index.md`) 갱신을 담당해야 해. 구체적인 동작 방식은 다음과 같아:

1. **설정 및 기본 정보 해석**
    - 현재 작업 디렉토리(CWD)부터 상위 폴더로 가며 `.env` 파일 내 `OBSIDIAN_VAULT_PATH`를 읽거나, `~/.obsidian-wiki/config` 파일에서 Vault의 절대경로를 찾아야 해. (없으면 오류 종료)
    - 소스 폴더의 기준은 `$OBSIDIAN_VAULT_PATH/_sources`로 잡고 동작해줘.
2. **개별 하위 폴더 내 `_index.md` 생성 및 보존**
    - 지정된 하위 폴더(혹은 인자가 없을 시 `_sources` 하위의 모든 폴더) 내부의 마크다운 파일(`.md`) 목록을 오름차순 정렬하여 수집해 (파일명이 `_`로 시작하는 인덱스 파일 등은 수집에서 제외).
    - **기존 설명 보존**: 폴더 내에 이미 `_index.md`가 존재한다면, 파일 내의 `[[파일명.md]] — 설명문` 패턴을 파싱해서 기존에 사람이 작성해 둔 설명들을 딕셔너리로 메모리에 보존해야 해.
    - **새로운 설명 추출**: 기존 인덱스에 없는 새로운 파일은 파일 내부의 첫 번째 제목(H1 `#`  또는 H2 `##` )을 읽어와 기본 설명(description)으로 설정하고, 제목이 없는 경우 "원본 문서 자료"를 기본값으로 사용해줘.
    - **인덱스 작성**: 아래 포맷에 맞춰 폴더 하위에 `_index.md` 파일을 작성/덮어쓰기 해줘.
        
        ```markdown
        # {폴더이름} 소스 인덱스
        
        이 폴더는 {폴더이름} 관련 원본 문서들을 모아놓은 디렉토리입니다.
        
        ## 소스 파일 목록
        - [[파일명1.md]] — 기존 보존된 설명 또는 첫 번째 제목
        - [[파일명2.md]] — 기존 보존된 설명 또는 첫 번째 제목
        
        ## 관련 위키 페이지
        *아직 인제스트되지 않았습니다. wiki-ingest를 실행하여 지식을 wiki로 변환하세요.*
        ```
        
3. **마스터 인덱스(`_sources/_index.md`) 자동 업데이트**
    - 하위 폴더 인덱스를 만들고 나면, 상위 디렉토리의 마스터 인덱스 파일(`_sources/_index.md`)을 읽어서 해당 폴더의 등록 여부를 검사해.
    - 만약 마스터 인덱스 내에 `[[폴더명/_index.md` 링크가 없다면, `## 주제별 폴더 목록` 헤더 하위에 다음과 같은 형식으로 링크를 자동으로 삽입해줘.
    `[[폴더명/_index.md|폴더명]] — 폴더명 관련 매뉴얼 및 문서 자료`
4. **실행 방식 및 매개변수 지원**
    - 명령줄 파라미터(sys.argv 또는 argparse)를 지원하여 다음과 같이 구동할 수 있어야 해:
        - `python3 scripts/generate_index.py` (전체 소스 폴더 일괄 처리)
        - `python3 scripts/generate_index.py "특정폴더명"` (지정한 폴더 하나만 타겟으로 처리)
    - 파일 경로에 한글과 공백이 포함될 수 있으므로, 파일 입출력 및 OS 경로 처리 시 유니코드 경로 에러가 나지 않도록 안전하게 처리해줘.
```
7. AI 채팅에 다음을 입력합니다.
```plain text
이것을 skill로 만들어서 '/wiki-ingest'와 같은 형식의 명령으로 작동할 수 있도록 해줘. 명령어는 'generate-index'로 해줘.
```

  **개념 이해**

  **‘Skill’**은 특정 작업(예: 문서 수집, 변환, 정리)을 **정해진 절차와 입력 형식으로 재사용**할 수 있게 만든 자동화 기능으로, 보통 `/wiki-ingest` 같은 **슬래시 명령**으로 호출해 실행합니다. 위의 _sources 폴더 내의 하위 폴더와 파일 관리를 위한 내용을 Skill로 만들어 반복 사용하기 쉽게 하기 위함입니다.

## 5. obsidian-wiki 작업 흐름 요약

---

### 1단계 — 입력 (파일 클리핑)

작업은 원본 파일을 지정된 위치에 넣는 것으로 시작합니다. 영구적으로 보관하고 싶은 PDF, 논문, 매뉴얼 같은 파일은 `_sources/` 폴더에 복사해 둡니다. 반면 클립보드 캡처, 즉흥적인 아이디어, 임시 메모처럼 일회성 내용은 `_raw/` 폴더에 드롭합니다.

파일을 직접 복사하는 방법 외에도 명령어로 소스를 지정할 수 있습니다. `~/.claude/` 경로에 쌓인 Claude 대화 기록은 `/claude-history-ingest`로, ChatGPT 내보내기·Slack 로그·회의록 같은 외부 데이터는 `/data-ingest`로 가져옵니다. 현재 작업 중인 코드 프로젝트의 내용은 `/wiki-update`를 실행하면 해당 폴더의 README, git log, 소스 구조를 자동으로 읽어옵니다.

---

### 2단계 — Ingest 실행

입력이 준비되면 `/wiki-ingest`를 실행합니다. AI는 가장 먼저 `.manifest.json` 파일을 확인해 이미 처리한 파일이 무엇인지 파악합니다. 이전에 처리한 파일은 건너뛰고, 새로 추가되거나 내용이 변경된 파일만 골라내 처리합니다. 이를 델타(delta) 처리 방식이라고 하며, 덕분에 매번 전체를 다시 처리하지 않아도 됩니다.

---

### 3단계 — 내부 처리 파이프라인

Ingest가 시작되면 내부적으로 네 단계가 순서대로 실행됩니다.

첫 번째 단계인 **Ingest**에서는 원본 파일을 전처리 없이 그대로 읽습니다. 두 번째 **Extract** 단계에서는 읽은 내용에서 개념, 인물·도구 같은 엔티티, 절차, 수치, 관계, 미해결 질문을 각각 분리해 뽑아냅니다. 세 번째 **Resolve** 단계에서는 같은 주제의 페이지가 이미 Vault에 존재하면 새 내용을 병합해 업데이트하고, 없으면 새 페이지를 만듭니다. 중복 페이지는 절대 생성되지 않습니다. 마지막 **Schema** 단계에서는 폴더 카테고리의 일관성을 유지하고, 존재하지 않는 페이지를 가리키는 깨진 wikilink를 방지하며, index.md를 최신 상태로 갱신합니다.

---

### 4단계 — 출력 (분류된 결과물)

파이프라인을 거친 내용은 성격에 따라 일곱 개의 폴더로 자동 분류됩니다.

`concepts/`에는 추상적인 개념, 이론, 패턴이 들어갑니다. `entities/`에는 인물, 조직, 도구, 제품처럼 실제로 존재하는 고유 대상이 저장됩니다. `skills/`에는 절차나 방법론처럼 "어떻게 하는가"에 답하는 내용이 담깁니다. `references/`에는 수치, 스펙, API 명세, 소스 원문 요약이 들어갑니다. `synthesis/`는 여러 소스를 교차 분석해 도출한 인사이트나 비교 결과를 보관합니다. `journal/`에는 날짜가 핵심인 세션 기록과 작업 로그가 저장됩니다. 마지막으로 `projects/`는 `/wiki-update`를 실행할 때 현재 프로젝트 이름으로 자동 생성되는 프로젝트별 지식 페이지가 쌓이는 곳입니다.

---

### 5단계 — 부수 기록 (자동 갱신)

폴더에 결과물이 저장되는 것과 동시에 시스템 파일들도 자동으로 갱신됩니다. `.manifest.json`은 처리한 소스의 경로, 처리 시각, 생성된 페이지 목록을 기록하며 다음 델타 처리의 기반이 됩니다. `index.md`는 Vault 전체 페이지의 목록을 최신 상태로 유지합니다. `log.md`에는 모든 작업의 시간순 이력이 누적됩니다. `_insights.md`는 그래프 분석을 통해 허브 페이지와 고아 페이지 현황을 기록합니다.

---

### 6단계 — 처리 후 원본 파일의 운명

`_sources/` 폴더에 있던 원본 파일은 처리 후에도 그대로 보존됩니다. Obsidian에서 계속 열람할 수 있으며, 각 Wiki 페이지의 `source:` 링크를 통해 원본으로 바로 이동할 수 있습니다. 반면 `_raw/`에 넣었던 임시 파일은 Wiki 페이지로 승격되고 나면 원본이 삭제됩니다. 이 차이를 기억해 두는 것이 중요합니다.

---

### 7단계 — 결과 확인

처리가 끝나면 `/wiki-status`로 처리 현황과 델타를 확인하고, `/wiki-query`로 Wiki에서 원하는 내용을 검색하거나 AI 답변을 받을 수 있습니다. Obsidian에서는 그래프 뷰로 페이지 간 연결을 시각적으로 탐색하거나, `_sources/` 폴더의 원본 파일과 Wiki 페이지를 함께 열람할 수 있습니다.
