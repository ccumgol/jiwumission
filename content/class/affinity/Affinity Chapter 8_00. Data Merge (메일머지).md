---
title: "Affinity Chapter 8_00. Data Merge (메일머지)"
date: 2026-05-18T19:20:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-17
summary: "Affinity Studio를 활용해 Mac과 Windows에서 교회학교 졸업장을 데이터 병합으로 자동 제작하는 전체 워크플로우와 주요 설정·주의사항을 단계별로 안내합니다."
description: "Affinity Studio를 활용해 Mac과 Windows에서 교회학교 졸업장을 데이터 병합으로 자동 제작하는 전체 워크플로우와 주요 설정·주의사항을 단계별로 안내합니다."
comments: false
notion_url: https://app.notion.com/p/Affinity-Chapter-8_00-Data-Merge-364091c284f680eb8841ed16048ebbac
notion_id: 364091c2-84f6-80eb-8841-ed16048ebbac
---

# Affinity Studio — Data Merge (메일머지) 완전 가이드

### 교회학교 졸업장 제작 예시

> 🍎 **Mac** / 🪟 **Windows** 구분 표기를 사용합니다.
> 메뉴·단축키·파일 경로가 다른 부분은 별도로 표기했습니다.
> 그 외 Affinity Studio의 메뉴 구조와 기능은 양쪽 플랫폼이 동일합니다.

---

## 목차

1. [개요 & 핵심 용어 정의](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#1-%EA%B0%9C%EC%9A%94--%ED%95%B5%EC%8B%AC-%EC%9A%A9%EC%96%B4-%EC%A0%95%EC%9D%98)
2. [엑셀 파일 구조](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#2-%EC%97%91%EC%85%80-%ED%8C%8C%EC%9D%BC-%EA%B5%AC%EC%A1%B0)
3. [Affinity Studio 설정 단계](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#3-affinity-studio-%EC%84%A4%EC%A0%95-%EB%8B%A8%EA%B3%84)
4. [졸업장에 병합 필드 삽입하기](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#4-%EC%A1%B8%EC%97%85%EC%9E%A5%EC%97%90-%EB%B3%91%ED%95%A9-%ED%95%84%EB%93%9C-%EC%82%BD%EC%9E%85%ED%95%98%EA%B8%B0)
5. [성별에 따라 다른 내용 넣기](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#5-%EC%84%B1%EB%B3%84%EC%97%90-%EB%94%B0%EB%9D%BC-%EB%8B%A4%EB%A5%B8-%EB%82%B4%EC%9A%A9-%EB%84%A3%EA%B8%B0)
6. [날짜 포맷 처리](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#6-%EB%82%A0%EC%A7%9C-%ED%8F%AC%EB%A7%B7-%EC%B2%98%EB%A6%AC)
7. [병합 실행 (Generate)](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#7-%EB%B3%91%ED%95%A9-%EC%8B%A4%ED%96%89-generate)
8. [Tips & 주의사항](https://claude.ai/chat/e27a2877-f566-4ae9-879e-a7b45d848bf2#8-tips--%EC%A3%BC%EC%9D%98%EC%82%AC%ED%95%AD)

---

## 플랫폼별 핵심 차이 요약

시작 전에 Mac과 Windows의 주요 차이점을 한눈에 확인하세요.

| 항목 | 🍎 Mac | 🪟 Windows |
| --- | --- | --- |
| **단축키 조합** | `Cmd` + 키 | `Ctrl` + 키 |
| **우클릭** | `Ctrl` + 클릭 또는 트랙패드 두 손가락 탭 | 마우스 오른쪽 버튼 |
| **파일 경로 구분자** | `/` (슬래시) | `\` (백슬래시) |
| **이미지 경로 예시** | `/Users/이름/church/photos/kim.jpg` | `C:\church\photos\kim.jpg` |
| **CSV 저장 인코딩** | UTF-8 (기본 지원) | UTF-8 명시 선택 필요 |
| **엑셀 한국어 날짜 함수** | `TEXT(A2,"yyyy년 m월 d일")` | 동일 |
| **환경설정 메뉴** | `Affinity Studio → Settings…` | `Edit → Preferences…` |
| **앱 종료** | `Cmd + Q` | `Alt + F4` |

---

## 1. 개요 & 핵심 용어 정의

**Data Merge**는 하나의 졸업장 디자인 템플릿에 엑셀 데이터를 자동으로 채워,
학생 수만큼의 개인화된 졸업장을 한 번에 만드는 기능입니다.
학생 20명이면 버튼 하나로 20페이지의 졸업장이 완성됩니다.

> **핵심 패널 위치 — Mac·Windows 동일**
>
> | 패널 | 메뉴 경로 |
> | --- | --- |
> | Data Merge Manager | `Window → Data Merge Manager` |
> | Fields 패널 | `Window → References → Fields` |
> | Master Pages 패널 | `Window → Pages → Master Pages` |

---

### 용어 정의

| 용어 (한글) | 영문 | 설명 |
| --- | --- | --- |
| **데이터 병합** | Data Merge / Mail Merge | 외부 데이터 소스(엑셀/CSV)의 내용을 Affinity 문서에 자동으로 채워넣는 기능 |
| **데이터 소스** | Data Source | 병합에 사용할 외부 데이터 파일. Excel(.xlsx), CSV(.csv), JSON 형식 지원 |
| **병합 필드** | Merge Field / Placeholder | 문서에서 실제 데이터가 들어갈 자리를 표시하는 마커. 예: `<<한글이름>>` |
| **Data Merge Manager** | Data Merge Manager | 데이터 소스 파일을 연결하고, 미리보기하고, 병합을 실행하는 핵심 패널 |
| **Fields 패널** | Fields Panel | 연결된 데이터 소스의 열 이름(컬럼 헤더)이 목록으로 표시되는 패널 |
| **마스터 페이지** | Master Page | 모든 페이지에 공통 적용되는 배경 레이어. 테두리·로고·배경을 여기에 배치 |
| **레코드** | Record | 데이터 소스의 한 행(Row). 학생 1명의 정보 전체. 레코드 1개 = 출력 페이지 1장 |
| **Generate** | Generate / Run Merge | 병합을 실행해 새 문서를 만드는 동작. 원본 템플릿 파일은 변경되지 않음 |

---

## 2. 엑셀 파일 구조

> ⚠️ **핵심 규칙:** 1행은 반드시 컬럼 이름(헤더)이어야 합니다.
> 특수문자와 공백은 피하세요. **2행부터 실제 학생 데이터**이며, 각 행이 졸업장 1장이 됩니다.

### 권장 컬럼 구조

| 열 | 헤더명 | 예시값 | 설명 |
| --- | --- | --- | --- |
| A | `한글이름` | 김민준 | 졸업장에 표시될 한국어 이름 |
| B | `영문이름` | Minjun Kim | 영문 이름 (선택) |
| C | `부서` | 중등부 | 유아부, 초등부, 중등부, 고등부 등 |
| D | `성별` | 남 | `남` 또는 `여`로 통일 |
| E | `생년월일_표시` | 2012년 3월 14일 | 엑셀 TEXT 함수로 미리 포맷 완성 |
| F | `생년월일_영문` | March 14, 2012 | 영문 날짜도 미리 포맷 완성 |
| G | `수료구분` | 수료 | 졸업 / 수료 / 진급 등 |
| H | `사진경로` | 아래 플랫폼별 경로 참고 | 학생 사진 삽입 시 (선택) |
| I | `수여자직함` | 담임목사 | 서명란에 들어갈 직함 |

### 🍎 Mac — 사진 경로 예시 (H열)

```plain text
/Users/john/church/photos/kim-minjun.jpg
/Users/john/church/photos/lee-seoyeon.jpg
```

- 경로 구분자는 `/` (슬래시)
- 홈 폴더 기준으로 작성하거나 절대 경로 사용
- 경로에 한글·공백·특수문자 포함 금지
- Finder에서 파일 선택 후 `Cmd + Option + C`로 전체 경로 복사 가능

### 🪟 Windows — 사진 경로 예시 (H열)

```plain text
C:\church\photos\kim-minjun.jpg
C:\church\photos\lee-seoyeon.jpg
```

- 경로 구분자는 `\` (백슬래시)
- 드라이브 문자(C:, D: 등)부터 시작하는 절대 경로 사용
- 경로에 한글·공백·특수문자 포함 금지
- 파일 탐색기에서 `Shift + 우클릭 → 경로로 복사`로 경로 확인 가능

### 실제 데이터 예시 (2행부터)

| 한글이름 | 영문이름 | 부서 | 성별 | 생년월일_표시 | 생년월일_영문 |
| --- | --- | --- | --- | --- | --- |
| 김민준 | Minjun Kim | 중등부 | 남 | 2012년 3월 14일 | March 14, 2012 |
| 이서연 | Seoyeon Lee | 초등부 | 여 | 2015년 11월 2일 | November 2, 2015 |
| 박지호 | Jiho Park | 고등부 | 남 | 2009년 7월 25일 | July 25, 2009 |

### CSV 저장 방법 — 플랫폼별 주의사항

한글이 포함된 CSV는 인코딩 설정이 중요합니다.

**🍎 Mac — Numbers 또는 Excel for Mac**

- Excel for Mac: `파일 → 다른 이름으로 저장 → CSV UTF-8 (쉼표로 분리)` 선택
- Numbers: `파일 → 내보내기 → CSV` → 기본값이 UTF-8이므로 그대로 사용
- Mac은 기본적으로 UTF-8을 사용하므로 한글 깨짐이 거의 없음

**🪟 Windows — Excel**

- `파일 → 다른 이름으로 저장 → 파일 형식: CSV UTF-8 (쉼표로 분리)(*.csv)` 반드시 선택
- 일반 `CSV (쉼표로 분리)`는 CP949(ANSI) 인코딩이라 **한글이 깨집니다**
- "CSV UTF-8" 옵션이 없는 구버전 Excel은 `.xlsx`로 저장하는 것을 권장

> 💡 **공통 권장:** 한글이 포함된 경우 CSV보다 `.xlsx` 형식이 더 안전합니다.

---

## 3. Affinity Studio 설정 단계

> **시작 전 준비:** 졸업장 템플릿 디자인이 완성되어 있어야 합니다.
> 배경·테두리·교회 로고 등은 **Master Page**에, 학생 정보가 들어갈 텍스트 박스는 **일반 페이지**에 배치하세요.

---

### Step 1 — Data Merge Manager 패널 열기

`Window → Data Merge Manager` 를 클릭합니다. (Mac·Windows 동일)
화면 오른쪽 또는 원하는 위치에 패널이 도킹됩니다.

|  | 방법 |
| --- | --- |
| 🍎 Mac | `Window → Data Merge Manager` |
| 🪟 Windows | `Window → Data Merge Manager` |

> 💡 패널이 보이지 않을 때:
>
> - 🍎 Mac: `Window → Reset Studio`
> - 🪟 Windows: `Window → Reset Studio`
> 
> 양쪽 동일하지만, 레이아웃이 틀어졌을 때 Mac은 패널이 화면 밖으로 나가는 경우가 있습니다.
> `Window → Arrange in Front`로 불러올 수 있습니다.

---

### Step 2 — 엑셀 파일 연결 (Add Data Source)

1. Data Merge Manager 패널 하단 왼쪽의 **`[+]`**** 아이콘** (Add Data Source 버튼)을 클릭합니다
2. 파일 선택 대화상자가 열립니다

**🍎 Mac — 파일 선택 대화상자**

- Finder 스타일의 파일 선택창이 열립니다
- 사이드바에서 폴더를 탐색하거나 `Cmd + Shift + G`로 경로를 직접 입력할 수 있습니다
- `.xlsx` 또는 `.csv` 파일 선택 후 `열기` 클릭

**🪟 Windows — 파일 선택 대화상자**

- Windows 탐색기 스타일의 파일 선택창이 열립니다
- 주소창에 경로를 직접 입력하거나 폴더를 탐색합니다
- `.xlsx` 또는 `.csv` 파일 선택 후 `열기` 클릭

1. 파일이 열리지 않고 데이터 소스 목록에 추가됩니다 — 이것이 정상입니다

> ⚠️ **공통 주의:** 엑셀 파일은 반드시 **닫혀 있는 상태**여야 합니다.
> 열려 있으면 연결 오류가 발생합니다.

---

### Step 3 — Fields Panel 열기

`Window → References → Fields` 를 클릭합니다. (Mac·Windows 동일)
패널 하단에 **'Data Merge'** 섹션이 있고, 엑셀의 컬럼 헤더가 목록으로 나타납니다.

```plain text
예시: 한글이름, 영문이름, 부서, 성별, 생년월일_표시, 생년월일_영문 …
```

> 💡 Fields 패널이 비어 있다면 Data Merge Manager에서 파일 연결이 제대로 됐는지 확인하세요.

---

### Step 4 — 텍스트 박스에 필드 삽입

1. *Text Tool (T)**로 이름이 들어갈 텍스트 박스를 클릭해 커서를 위치시킵니다
2. Fields 패널에서 원하는 필드(예: `한글이름`)를 **더블클릭** 또는 문서로 드래그합니다
3. 문서에 `<<한글이름>>` 형태의 마커가 표시됩니다

> ⚠️ **중요 (Mac·Windows 공통):** 병합 필드는 반드시 **일반 페이지**에 넣어야 합니다.
> Master Page에 넣으면 작동하지 않습니다.

### 단축키 비교

| 작업 | 🍎 Mac | 🪟 Windows |
| --- | --- | --- |
| Text Tool 선택 | `T` | `T` |
| 실행 취소 | `Cmd + Z` | `Ctrl + Z` |
| 다시 실행 | `Cmd + Shift + Z` | `Ctrl + Y` |
| 저장 | `Cmd + S` | `Ctrl + S` |
| 다른 이름으로 저장 | `Cmd + Shift + S` | `Ctrl + Shift + S` |
| 확대 | `Cmd + =` | `Ctrl + =` |
| 축소 | `Cmd + -` | `Ctrl + -` |
| 전체 페이지 보기 | `Cmd + 0` | `Ctrl + 0` |

---

## 4. 졸업장에 병합 필드 삽입하기

### 필드 배치 예시 — 졸업장 레이아웃

```plain text
┌─────────────────────────────────────────────────┐
│                                                 │
│           HERITAGE SEUM CHURCH                  │
│                                                 │
│                  졸업증서                        │
│             ───────────────                     │
│                                                 │
│    <<한글이름>> (<<영문이름>>)                   │
│    생년월일: <<생년월일_표시>> (<<생년월일_영문>>) │
│                                                 │
│    위 학생은 본 교회 <<부서>> 과정을             │
│    성실히 이수하였기에 이 증서를 수여합니다.     │
│                                                 │
│                  2025년 2월 23일                 │
│              Heritage Seum Church               │
│              <<수여자직함>>  홍길동              │
│                                                 │
└─────────────────────────────────────────────────┘
```

### 필드 삽입 순서 (Mac·Windows 동일)

1. Text Tool (T)로 이름 텍스트 박스 클릭 → 커서 위치
2. Fields 패널 하단 'Data Merge' 섹션에서 `한글이름` 더블클릭
3. 문서에 `<<한글이름>>` 표시 확인
4. 나머지 필드도 같은 방법으로 삽입
5. Data Merge Manager에서 **'Preview With Record'** 체크 → 실제 데이터로 확인

---

## 5. 성별에 따라 다른 내용 넣기

> ℹ️ Affinity Publisher/Studio는 문서 내에서 직접 IF 조건 수식을 지원하지 않습니다.
> 대신 **엑셀에서 IF 함수로 결과 텍스트나 이미지 경로를 미리 만들어** 두는 방식을 사용합니다.

---

### 방법 A — 엑셀에서 완성된 문장 만들기 ⭐ (추천)

엑셀 수식 자체는 Mac·Windows 동일합니다.

```plain text
=IF(D2="남",
  "위 학생은 본 교회 "&C2&" 과정을 성실히 이수하였음을 증명합니다.",
  "위 학생은 본 교회 "&C2&" 과정을 성실히 이수하였음을 증명합니다."
)
```

> 📝 남/여 문장이 동일하면 IF가 필요 없습니다.
> 예) 남: `"그가 이수하였음"`, 여: `"그녀가 이수하였음"` 처럼 다를 때 IF를 사용합니다.

---

### 방법 B — 성별에 따른 이미지 경로 바꾸기

이미지 파일 경로 형식이 플랫폼마다 다릅니다.

**🍎 Mac**

```plain text
=IF(D2="남",
  "/Users/john/church/backgrounds/boy_cert.webp",
  "/Users/john/church/backgrounds/girl_cert.webp"
)
```

**🪟 Windows**

```plain text
=IF(D2="남",
  "C:\church\backgrounds\boy_cert.webp",
  "C:\church\backgrounds\girl_cert.webp"
)
```

> ⚠️ Mac에서 만든 엑셀 파일을 Windows에서 사용하거나 그 반대의 경우,
> **이미지 경로 열을 반드시 해당 OS에 맞게 수정**해야 합니다.
> 텍스트 데이터(이름, 날짜, 문장 등)는 수정 없이 그대로 사용할 수 있습니다.

---

### 성별 구분 실전 예시

| 상황 | 🍎 Mac 경로 예시 | 🪟 Windows 경로 예시 |
| --- | --- | --- |
| 배경 이미지 | `/Users/john/church/bg/boy.webp` | `C:\church\bg\boy.webp` |
| 남/여 도장 | `/Users/john/church/stamps/blue.webp` | `C:\church\stamps\blue.webp` |

| 상황 | 엑셀 수식 (공통) | Affinity 필드 |
| --- | --- | --- |
| 그/그녀 구분 | `=IF(D2="남","그가 이수함","그녀가 이수함")` | `<<본문문장>>` |
| 호칭 구분 | `=IF(D2="남","군","양")` | `<<호칭>>` |

---

## 6. 날짜 포맷 처리

### Q. 날짜 포맷은 엑셀에서 설정해야 하나요, Affinity에서 하나요?

**엑셀에서 TEXT 함수로 미리 완성된 문자열로 만드는 것이 가장 안정적입니다.**
Affinity는 날짜 포맷 변환 기능이 없으므로, 보여줄 형태 그대로 엑셀에 저장해야 합니다.

> ⚠️ **플랫폼별 주의:** Mac과 Windows는 시스템 날짜·지역 설정이 다를 수 있어,
> 날짜 셀을 서식 그대로 전달하면 결과가 달라질 수 있습니다.
> **TEXT 함수를 사용하면 어느 OS에서 열어도 결과가 동일하게 고정**됩니다.

---

### Q. `"2012년 3월 14일(March 14, 2012)"` 형태로 만들려면?

엑셀 수식은 Mac·Windows 동일합니다.

```plain text
' 한글 날짜 열 (E열)
=TEXT(A2,"yyyy년 m월 d일")

' 영문 날짜 열 (F열)
=TEXT(A2,"mmmm d, yyyy")

' 합친 열 (한 필드로 쓰고 싶을 때)
=TEXT(A2,"yyyy년 m월 d일")&"("&TEXT(A2,"mmmm d, yyyy")&")"
```

> 💡 **Mac Excel 주의:** `mmmm`(영문 월 이름)이 Mac의 언어 설정에 따라
> 한국어로 출력될 수 있습니다. 시스템 언어가 한국어로 설정된 경우
> `3월`처럼 나올 수 있으니, 반드시 미리보기로 확인하세요.
> 해결 방법: Excel 환경설정 → 수식 → 함수 목록 언어를 영어로 설정하거나,
> 영문 날짜 열을 직접 텍스트로 입력합니다.

---

### TEXT 함수 날짜 포맷 레퍼런스 (Mac·Windows 공통)

| 원하는 결과 | 엑셀 수식 (A2에 날짜 있을 때) |
| --- | --- |
| 2012년 3월 14일 | `=TEXT(A2,"yyyy년 m월 d일")` |
| March 14, 2012 | `=TEXT(A2,"mmmm d, yyyy")` |
| 2012년 3월 14일(March 14, 2012) | `=TEXT(A2,"yyyy년 m월 d일")&"("&TEXT(A2,"mmmm d, yyyy")&")"` |
| 2012.03.14 | `=TEXT(A2,"yyyy.mm.dd")` |
| 03/14/2012 (US 형식) | `=TEXT(A2,"mm/dd/yyyy")` |

---

### Q. 날짜 셀을 그냥 입력하면 안 되나요?

엑셀의 날짜 셀 서식은 Affinity로 전달될 때 숫자(예: `44269`)로 들어올 수 있습니다.
반드시 TEXT 함수를 사용해 문자열로 변환하거나, 처음부터 텍스트로 입력하세요.

**🍎 Mac — 값만 붙여넣기**

> TEXT 결과 열 선택 → `Cmd + C` 복사 → 같은 셀에 `Cmd + Option + V` → 값(Values) 선택

**🪟 Windows — 값만 붙여넣기**

> TEXT 결과 열 선택 → `Ctrl + C` 복사 → 같은 셀에 `Ctrl + Alt + V` → 값(Values) 선택

---

## 7. 병합 실행 (Generate)

### Step 1 — 미리보기로 최종 확인

Data Merge Manager 패널에서 **'Preview With Record'** 체크박스를 활성화합니다.
레코드 번호를 1, 2, 3… 으로 바꿔가며 각 학생의 졸업장이 올바르게 표시되는지 확인합니다.

- 이름, 날짜, 부서 등이 잘 들어가는지
- 텍스트가 박스를 벗어나거나 잘리지 않는지
- 이미지 링크가 제대로 연결됐는지

---

### Step 2 — Generate 클릭

Data Merge Manager 패널 하단의 **'Generate'** 버튼을 클릭합니다. (Mac·Windows 동일)
학생 수(데이터 행 수)만큼의 페이지를 가진 새 문서가 자동으로 생성됩니다.

> ✅ 원본 템플릿 파일은 변경되지 않습니다. 새 문서가 별도 탭으로 열립니다.

---

### Step 3 — 생성된 문서 확인

탭 바에 새 문서가 열립니다.
각 페이지를 확인하며 레이아웃이 깨진 부분이 없는지 검토합니다.
문제가 있으면 원본 템플릿으로 돌아가 수정 후 다시 Generate합니다.

---

### Step 4 — PDF로 내보내기 (Mac·Windows 공통 메뉴)

```plain text
File → Export → PDF (Print)
  ├── Colour Space: CMYK
  ├── Resolution: 300 DPI 이상
  ├── All Pages (전체 학생)
  └── Export 클릭 → 저장 위치 지정
```

**🍎 Mac — 저장 위치 지정**

- Finder 스타일 저장 대화상자
- 사이드바 즐겨찾기에서 폴더 선택 또는 경로 직접 입력
- `Cmd + D` 단축키로 데스크탑에 빠르게 저장 가능

**🪟 Windows — 저장 위치 지정**

- Windows 탐색기 스타일 저장 대화상자
- 주소창에 경로 입력 또는 폴더 탐색
- 바탕화면 등 즐겨찾기 위치에서 빠르게 선택 가능

> 💡 인쇄소 제출 시 **PDF/X** 형식을 추가로 선택할 수 있습니다. (Mac·Windows 동일)

---

## 8. Tips & 주의사항

### ⚠️ 파일 저장 경로에 한글 금지 (공통)

이미지 경로에 한글 폴더명이 포함되면 이미지가 링크되지 않을 수 있습니다.

|  | ❌ 잘못된 예 | ✅ 올바른 예 |
| --- | --- | --- |
| 🍎 Mac | `/Users/john/교회/사진/김민준.jpg` | `/Users/john/church/photos/kim-minjun.jpg` |
| 🪟 Windows | `C:\교회\사진\김민준.jpg` | `C:\church\photos\kim-minjun.jpg` |

---

### 📁 CSV vs XLSX — 플랫폼별 권장 방식

| 형식 | 🍎 Mac | 🪟 Windows |
| --- | --- | --- |
| `.xlsx` | ✅ 권장. 수식 결과 그대로, 한글 안전 | ✅ 권장. 한글 깨짐 없음 |
| `.csv` | ⚠️ 저장 시 UTF-8 확인 필요 | ⚠️ 반드시 `CSV UTF-8` 선택. 일반 CSV는 한글 깨짐 |

---

### 🔄 Generate는 항상 새 문서를 만든다 (공통)

Generate 버튼을 누를 때마다 원본은 그대로이고 새 문서가 생성됩니다.
원본 템플릿은 항상 보존되므로 마음 놓고 여러 번 실행해도 됩니다.

---

### 👁️ Preview With Record로 먼저 확인 (공통)

Generate 전에 반드시 Preview로 여러 레코드를 확인하세요.
긴 이름이 텍스트 박스를 벗어나거나, 빈 필드가 있는 경우를 미리 잡을 수 있습니다.

---

### 🖼️ 학생 사진 삽입하기

**공통 절차:**

1. **Picture Frame Tool**로 사진이 들어갈 프레임을 만듭니다
2. Fields 패널에서 `사진경로` 필드를 그 프레임 안으로 드래그합니다
3. 모든 사진 파일은 동일한 폴더에 있어야 합니다
4. 파일명에 공백이나 한글이 없는지 확인하세요

**🍎 Mac 추가 주의:**

- HEIC 형식 사진은 Affinity가 인식하지 못할 수 있습니다
- iPhone으로 찍은 사진은 JPEG(JPG)으로 변환 후 사용하세요
- 변환: Finder에서 파일 선택 → `스페이스바`로 미리보기 → 미리보기 앱에서 `파일 → 내보내기 → JPEG`

**🪟 Windows 추가 주의:**

- OneDrive 동기화 폴더 내 파일은 오프라인 상태일 때 링크가 끊길 수 있습니다
- 사진 폴더를 로컬 드라이브(예: `C:\church\photos`)에 두는 것을 권장합니다

---

### 🔤 폰트(글꼴) 호환성

한국어 폰트가 Mac과 Windows 간에 다를 수 있어, 파일 공유 시 문제가 생길 수 있습니다.

| 상황 | 권장 조치 |
| --- | --- |
| Mac에서 만든 파일을 Windows에서 열 때 | 동일한 폰트가 설치되어 있는지 확인 |
| Noto Serif KR 사용 시 | 두 플랫폼 모두 Google Fonts에서 설치 가능 — 호환 문제 없음 |
| 시스템 폰트 사용 시 | Mac 전용(AppleGothic 등), Windows 전용(맑은 고딕 등)은 상대 OS에서 대체 폰트로 표시됨 |

> 💡 **권장:** Noto Serif KR, Noto Sans KR처럼 Google Fonts의 무료 폰트를 사용하면 Mac·Windows 양쪽에서 동일하게 표시됩니다.

---

### 💾 최종 출력 PDF — 저장 위치 권장

|  | 권장 저장 위치 |
| --- | --- |
| 🍎 Mac | `~/Documents/church/output/` 또는 외장 드라이브 |
| 🪟 Windows | `C:\church\output\` 또는 외장 드라이브. OneDrive/iCloud 폴더는 피하세요 |

---

## 전체 워크플로우 요약

```plain text
1. 엑셀 준비 (Mac·Windows 공통)
   └─ 컬럼 헤더 정의 + 학생 데이터 입력
   └─ TEXT 함수로 날짜 포맷 (어느 OS에서나 동일하게 고정됨)
   └─ IF 함수로 성별별 문장 처리
   └─ 이미지 경로는 사용 중인 OS에 맞게 작성
        🍎 Mac:     /Users/이름/church/photos/파일명.jpg
        🪟 Windows: C:\church\photos\파일명.jpg

2. Affinity 템플릿 디자인 (공통)
   └─ Master Page에 배경·로고 배치
   └─ 일반 페이지에 텍스트 박스 배치

3. Data Merge Manager 열기 (공통)
   └─ Window → Data Merge Manager
   └─ [+] 버튼으로 엑셀 파일 연결 (파일은 반드시 닫혀 있어야 함)

4. Fields 패널 열기 (공통)
   └─ Window → References → Fields
   └─ Data Merge 섹션에서 컬럼 목록 확인

5. 필드 삽입 (공통)
   └─ 각 텍스트 박스에 커서 위치
   └─ Fields 패널에서 필드 더블클릭

6. 미리보기 확인 (공통)
   └─ Preview With Record 체크
   └─ 레코드 번호 변경하며 여러 학생 확인

7. Generate (공통)
   └─ Data Merge Manager → Generate 버튼
   └─ 새 문서 생성 확인

8. PDF 내보내기 (공통)
   └─ File → Export → PDF (Print)
   └─ CMYK / 300 DPI 이상 설정
   └─ 저장 위치: 로컬 드라이브 권장 (클라우드 동기화 폴더 피하기)
```

---

## 빠른 단축키 참조표

| 작업 | 🍎 Mac | 🪟 Windows |
| --- | --- | --- |
| 저장 | `Cmd + S` | `Ctrl + S` |
| 다른 이름으로 저장 | `Cmd + Shift + S` | `Ctrl + Shift + S` |
| 실행 취소 | `Cmd + Z` | `Ctrl + Z` |
| 다시 실행 | `Cmd + Shift + Z` | `Ctrl + Y` |
| 전체 선택 | `Cmd + A` | `Ctrl + A` |
| 복사 | `Cmd + C` | `Ctrl + C` |
| 붙여넣기 | `Cmd + V` | `Ctrl + V` |
| 값만 붙여넣기 | `Cmd + Option + V` | `Ctrl + Alt + V` |
| 내보내기 | `Cmd + Option + Shift + S` | `Ctrl + Alt + Shift + S` |
| 환경설정 | `Cmd + ,` | `Edit → Preferences` |
| Text Tool | `T` | `T` |
| 확대 | `Cmd + =` | `Ctrl + =` |
| 축소 | `Cmd + -` | `Ctrl + -` |
| 전체 페이지 보기 | `Cmd + 0` | `Ctrl + 0` |

---

*Heritage Seum Church 교회학교 졸업장 제작 가이드Affinity Studio (구 Affinity Publisher) — macOS · Windows 공용*
