---
title: " Affinity Chapter 1_04. Apps → Studio 변경사항"
date: 2025-11-06T05:13:00.000Z
author: "Gihyun Park"
lastmod: 2026-06-17
summary: "Affinity Apps에서 Affinity Studio로의 변경사항(업데이트 내용/차이점)을 정리한 노트."
description: "Affinity Apps에서 Affinity Studio로의 변경사항(업데이트 내용/차이점)을 정리한 노트."
comments: false
notion_url: https://app.notion.com/p/Affinity-Chapter-1_04-Apps-Studio-2a3091c284f680da9bc9daced020f5fb
notion_id: 2a3091c2-84f6-80da-9bc9-daced020f5fb
path: ["class", "affinity"]
---

# Notion

# Affinity Studio 통합 변경사항 상세 조사

## 1. 전반적인 변경사항

### 앱 통합 구조

- **Affinity Publisher → Layout 탭**
- **Affinity Photo → Pixel 탭**
- **Affinity Designer → Vector 탭**

단일 앱으로 통합되면서 세 가지 스튜디오 간 전환이 가능하게 되었으며, 환경설정에서 "Switch studio based on file type"(파일 형식에 따라 스튜디오 전환) 옵션을 통해 자동 전환을 설정할 수 있습니다.

## 2. Export 기능 변경

### 주요 변경사항

- **기존:** Command + Option + Shift + S 단축키로 Export 실행
- **변경:** Export가 패널 기반으로 변경되어 기존 단축키 사용 불가
- **영향:** 빠른 내보내기 워크플로우에 변화가 생김

## 3. 새로 추가된 주요 기능

### Vector Warp 기능 (Designer/Vector 탭)

Affinity Designer 2에서 새로 추가된 Vector Warp 기능은 벡터 객체를 다양한 방식으로 왜곡할 수 있는 기능입니다.

### 비파괴 RAW 개발 워크플로우 (Photo/Pixel 탭)

Affinity Photo 2에서 Develop Persona를 비파괴 RAW 워크플로우로 사용할 수 있게 되었습니다. 작업 중에도 RAW 파일의 원본 품질을 유지하면서 편집이 가능합니다.

### 각주, 측주, 미주 제어 기능 (Publisher/Layout 탭)

Affinity Publisher 2에서 각주(footnotes), 측주(sidenotes), 미주(endnotes) 간 변환 및 위치 자동 조정 기능이 추가되었습니다. Microsoft Word 문서에서 가져온 각주도 변환할 수 있습니다.

## 4. 머신러닝 모델 통합

### 새로운 ML 기능

- **Segmentation (분할) - 290 MB:** 픽셀 레이어나 배치된 이미지에서 정밀한 픽셀 선택 생성, "객체 선택 도구" 사용
- **Depth Estimation (깊이 추정) - 314 MB:** 픽셀 레이어나 배치된 이미지에서 깊이 맵 생성, "Portrait Blur" 도구 및 "Select Sampled Depth" 도구 활성화
- **Colorization (색상화) - 215 MB:** 흑백 픽셀 레이어에서 사실적인 색상 복원
- **Super Resolution (초고해상도) - 34 MB:** 픽셀 레이어를 품질 손실 없이 확대

## 5. 환경설정 변경사항

### 문서 관련 설정

- **Reopen document(s) on startup:** 시작 시 문서 다시 열기 (기본 활성화)
- **Switch studio based on file type:** 파일 형식에 따라 스튜디오 자동 전환 (기본 활성화)
- **Save thumbnails with documents:** 문서와 함께 썸네일 저장 (기본 활성화)

### PSD 파일 처리

- **Import PSD text as text rather than bitmap:** PSD 텍스트를 비트맵이 아닌 텍스트로 가져오기 (기본 활성화)
- **Import PSD smart objects where possible:** 가능한 경우 PSD 스마트 객체 가져오기 (기본 활성화)

### 색상 관리

- **Enable EDR by default in 32bit RGB views:** 32비트 RGB 뷰에서 기본적으로 EDR(Extended Dynamic Range) 활성화
- **OpenColorIO 통합:** OCIO 구성 파일 및 검색 폴더 설정 가능

## 6. 성능 관련 변경사항

### 하드웨어 가속

- **Enable Metal compute acceleration:** Metal 컴퓨팅 가속 활성화 (기본 설정)
- **Apple Silicon 최적화:** M4 Pro 등 최신 칩셋에 대한 최적화

### 메모리 및 성능 설정

- **RAM usage limit:** RAM 사용 제한 설정 가능 (예: 24576 MB)
- **Undo limit:** 실행 취소 제한 (기본 1024)
- **File Recovery Interval:** 파일 복구 간격 (기본 300초)

## 7. 사용자 인터페이스 변경사항

### UI 개선사항

- **UI contrast:** Default / High 선택 가능
- **UI font size:** Default / Large 선택 가능
- **Tool handle size:** Small / Default / Medium / Large 선택 가능

### 새로운 레이어 관리 옵션

- **Automatically lock background layer on import:** 가져오기 시 배경 레이어 자동 잠금 (기본 비활성화)
- **Default to pixel view for images:** 이미지 기본 픽셀 뷰 (기본 활성화)

## 8. 도구 관련 변경사항

### 마우스/트랙패드 동작

- **Use mouse wheel to zoom:** 마우스 휠로 확대/축소 (기본 비활성화)
- **Enable canvas rotation with trackpad:** 트랙패드로 캔버스 회전 (기본 활성화)
- **Allow trackpad to scroll numeric fields:** 트랙패드로 숫자 필드 스크롤 허용 (기본 비활성화)

### 도구 동작 변경

- **Marquee selection behavior:** Touch / Intersect 선택 가능
- **Move Tool aspect constrain:** Automatic (선택 기반) / Manual 선택 가능

## 9. Assistant (어시스턴트) 기능

### 자동화 기능

- **레이어 선택 없이 페인팅:** 자동으로 새 픽셀 레이어 추가 후 페인팅
- **벡터 레이어에서 지우기:** 자동으로 마스크 레이어 배치 후 지우기
- **비픽셀 레이어에 필터 적용:** 자동으로 레이어 래스터화 후 필터 적용
- **이미지/RAW 레이어 선택 삭제:** 자동으로 마스크 레이어 추가

## 10. 단축키 시스템

### 단축키 관리

- **Layout / Affinity 프리셋:** 두 가지 단축키 세트 선택 가능
- **Load / Save:** 사용자 정의 단축키 저장 및 불러오기
- **Apple Defaults / Affinity Defaults:** 기본 단축키로 초기화 옵션

## 11. 텍스트 처리 변경사항

### Auto-Correct 기능

- 자동 교정 기능이 추가되었으나 기본적으로 비활성화
- 스마트 인용부호, 자동 목록 생성, 텍스트 자동 교체 등 지원

### Filler Text 사용자 정의

- 언어별 채우기 텍스트 사용자 정의 가능
- Factory Reset 옵션으로 기본값 복원

## 12. 클라우드 서비스 통합

### Linked Services

- **Dropbox 연동:** Link/Unlink 옵션 제공
- 클라우드 기반 작업 흐름 지원

## 13. 확인 필요 사항

검색 결과에는 다음 정보가 포함되어 있지 않아 추가 조사가 필요합니다:

- Export 기능의 새로운 사용 방법 및 대체 워크플로우
- 기존 단축키 중 변경되거나 제거된 다른 항목들
- 세 앱 통합으로 인해 제거된 구체적인 기능 목록
- 앱 간 전환 시 프로젝트 데이터 호환성 문제
- Canva 인수 이후 추가된 Canva 통합 기능

> 💡 **참고:** 위 내용은 검색 결과에서 확인된 정보를 바탕으로 정리한 것입니다. Affinity Studio의 공식 릴리스 노트나 사용자 매뉴얼에서 더 상세한 변경사항을 확인하실 수 있습니다.

# GenSpark

이제 수집한 모든 정보를 바탕으로 상세한 분석 결과를 제공하겠습니다.

# Affinity Studio (V3) 통합 앱 변경사항 상세 분석

2024년 Canva의 Serif 인수 이후, 2025년 10월 30일에 공개된 **Affinity Studio (V3)**는 기존의 Affinity Publisher, Photo, Designer 세 개의 독립 앱을 하나의 통합 앱으로 완전히 재구성한 메이저 업데이트입니다.

## 🔄 핵심 구조 변경사항

### 1. **통합 앱 구조로 전환**

- **이전 (V2)**: 3개의 독립 실행 앱 (Designer, Photo, Publisher)
- **현재 (V3)**: 단일 앱 “Affinity Studio”
  - **Vector 탭** (구 Affinity Designer)
  - **Pixel 탭** (구 Affinity Photo)
  - **Layout 탭** (구 Affinity Publisher)
  - **Canva AI 스튜디오** (신규 - 구독 필요)

### 2. **파일 형식 통일**

- **V2**: `.afdesign`, `.afphoto`, `.afpub` (3개의 개별 확장자)
- **V3**: **단일 ****`.af`**** 확장자**로 통합
  - ⚠️ **역호환성 없음**: V3에서 저장한 `.af` 파일은 V2나 V1에서 열 수 없음
  - ✅ V3는 V2/V1 파일을 열 수 있지만, 저장하면 `.af` 형식으로 변환됨
  - ⚠️ V3에서 V2 형식으로 역저장하는 기능 없음

### 3. **가격 정책 변경**

- **V2**: 영구 라이선스 (1회 구매)
- **V3**:
  - **기본 기능 완전 무료** (Canva 무료 계정 필요)
  - **AI 기능**은 Canva Pro 구독 필요 ($120/년 또는 $15/월)

---

## ⌨️ 단축키 및 워크플로우 변경사항

### **1. Export 기능 변경 (사용자 제보 사례)**

**V2에서의 방식:**

- 단축키: `⌘ + ⌥ + ⇧ + S` (Mac) / `Ctrl + Alt + Shift + S` (Windows)
- Export Persona를 통한 직접 실행

**V3에서의 변경:**

```plain text
❌ 기존 4-key 단축키는 여전히 복잡하게 유지됨
⚠️ Export가 패널 기반으로 변경되어 일부 워크플로우 영향
✅ 하지만 Export Persona 자체는 여전히 존재 (완전히 제거되지 않음)

```

**대안:**

- 사용자 정의 단축키 설정 가능: `Settings > Shortcuts`에서 재설정
- 커뮤니티에서는 `⌘ + E` (Ctrl + E)로 변경 권장

### **2. Workspace/Studio 커스터마이징**

**새로운 기능:**

- ✅ **완전 커스터마이징 가능한 워크스페이스**
  - Vector, Pixel, Layout 탭에서 도구 혼합 사용 가능
  - 패널 재배치, 도구 추가/제거 자유
  - **커스텀 스튜디오 저장 및 공유 가능**
  - `Window > Studio > Add Preset`으로 저장

**저장 위치 (Windows):**

```plain text
C:\Users\<username>\AppData\Roaming\Affinity\<application>\1.0\Workspaces\Custom\<persona>\

```

---

## 🆕 새로 추가된 주요 기능

### **Vector 모드 (구 Designer)**

### 1. **Image Trace (자동 벡터 변환)** ⭐

```plain text
위치: Vector 메뉴 > Image Trace
기능: 비트맵 이미지를 벡터로 자동 변환
- 여러 프리셋 제공
- Adobe Illustrator의 Image Trace와 유사
- 커뮤니티 요청 10년 만에 추가됨

```

### 2. **Mesh Gradient Fill** ⭐

```plain text
기능: 복잡한 그라데이션 메쉬 생성
- 사실적인 반사 및 음영 표현 가능
- 부드러운 표면의 입체감 표현
- 벡터 기반으로 확장 가능

```

### 3. **Hatch Fill Tool**

```plain text
기능: 패턴 해칭 채우기
- 벡터 기반 텍스처 표현

```

### **Pixel 모드 (구 Photo)**

### 1. **Multi-Band Sharpen Filter** ⭐

```plain text
기능: 개선된 샤프닝 필터
- 헤일로 효과 없이 샤프닝 가능
- 인물 사진 및 천체 사진에 최적화

```

### 2. **Filter Brush Tool** ⭐

```plain text
기능: 필터를 브러시처럼 부분적으로 적용
- 선택적 필터 적용
- 비파괴 편집 유지

```

### 3. **Adjustment Brush Tool**

```plain text
기능: 조정 레이어를 브러시로 적용
- 부분적인 색상/톤 보정

```

### **Layout 모드 (구 Publisher)**

### 1. **EPUB Export (고정 레이아웃)** ⭐

```plain text
기능: 전자책 EPUB 형식 직접 내보내기
- Fixed Layout EPUB 지원
- ⚠️ Reflowable EPUB은 아직 미지원
- 전자출판 워크플로우 개선

```

### 2. **개선된 사용자 인터페이스**

```plain text
- 디지털 퍼블리싱 비전문가도 사용 쉽게 단순화
- 단일 앱 통합으로 Publisher 기능 접근성 향상

```

### **Canva AI 스튜디오 (구독 필요)**

```plain text
⚠️ Canva Pro 구독 필요 ($120/년)

포함 기능:
• Generative Fill (AI 생성 채우기)
• Generative Expand (AI 이미지 확장)
• Generate Image/Vector (AI 이미지/벡터 생성)
• Remove Background (AI 배경 제거)
• Select Subject (AI 피사체 선택)
• Colorize (흑백 사진 컬러화)
• AI Cropping (AI 자동 크롭)

품질:
✅ Select Subject: V2의 Object Selection보다 우수
⚠️ Generative Edit: 불안정, 저해상도 출력
⚠️ Colorize: 품질 일관성 부족

```

---

## ❌ 작동하지 않거나 제거된 기능

### **1. 플러그인 호환성 문제**

```plain text
⚠️ 일부 Photoshop 플러그인 호환성 저하
- Nik Collection 통합 문제 보고됨
- ON1 Photo RAW 플러그인 실행 불가 사례
- NVIDIA 드라이버 관련 버그

```

### **2. 여전히 누락된 기능들**

**Vector 모드:**

- ❌ Auto Blend (자동 블렌드)
- ❌ True Vector Brush (진정한 벡터 브러시)
  - 참고: V3에서 "Vector Brush"가 "Paint Brush"로 이름 변경됨 (혼동 방지)
- ❌ Right-to-Left (RTL) 스크립트 지원
  - 아랍어, 히브리어 등 우→좌 언어 미지원
  - 디자이너들의 가장 큰 불만 사항

**Pixel 모드:**

- ❌ 일부 현대적인 사진 편집 도구 부족
- ⚠️ **안정성 문제**: 무거운 픽셀 작업 시 크래시 보고
- ❌ Batch Editing (일괄 편집) 여전히 없음

**Layout 모드:**

- ❌ PDF Forms 지원
- ❌ Script 지원
- ❌ Caption 자동화 (이미지/텍스트 프레임)
- ❌ RTL 스크립트 지원
- ⚠️ PDF Export 신뢰성 문제 지속 (에러 검증 필수)

### **3. 포럼 폐쇄**

```plain text
⚠️ 기존 Affinity 공식 포럼 폐쇄 (읽기 전용)
새로운 소통 채널: Discord 서버
문제점:
- 정보 분산 (Canva 블로그, Discord, Affinity 사이트)
- 체계적인 Change Log 부재
- 기능 찾기 어려움

```

---

## 🔍 세부 변경사항 비교표

| 항목 | V2 (구버전) | V3 (Affinity Studio) |
| --- | --- | --- |
| **앱 구조** | 3개 독립 앱 | 단일 통합 앱 (탭 전환) |
| **파일 확장자** | .afdesign, .afphoto, .afpub | 통합 .af |
| **역호환성** | V1↔V2 부분 호환 | V3→V2 불가 |
| **가격** | 영구 라이선스 ($69.99) | 무료 (AI는 구독) |
| **Image Trace** | ❌ 없음 | ✅ 추가됨 |
| **Mesh Gradient** | ❌ 없음 | ✅ 추가됨 |
| **EPUB Export** | ❌ 없음 | ✅ Fixed Layout만 |
| **Export 단축키** | Cmd+Opt+Shift+S | 동일 (변경 없음) |
| **Workspace 저장** | 제한적 | 완전 커스터마이징 |
| **AI 기능** | 기본 ML 도구 | Canva AI (구독) |
| **플러그인 지원** | 일부 PS 플러그인 | 호환성 저하 |

---

## ⚠️ 주의사항 및 알려진 문제

### **1. 안정성 문제**

```plain text
보고된 문제:
• 설치 오류
• 크래시 (특히 대용량 픽셀 프로젝트)
• JPG 내보내기 시 크래시
• 메모리 누수 의심

```

### **2. 온라인 인증 요구**

```plain text
⚠️ V3는 1년에 한 번 온라인 인증 필요
- 오프라인 작업자에게 문제
- Canva 계정 필수 (무료 계정 가능)

```

### **3. 업데이트 정책 변화**

```plain text
V2:
- 마이너 업데이트 계속 제공
- 영구 라이선스 유지

V3:
- V2는 더 이상 업데이트 없음
- V3로 이전 권장 (무료이므로)

```

---

## 💡 사용자 대응 전략

### **기존 V2 사용자라면:**

**계속 V2 사용:**

```plain text
✅ 안정성 중시
✅ 플러그인 의존도 높음
✅ 오프라인 작업 필수
⚠️ 단, 더 이상 업데이트 없음

```

**V3로 마이그레이션:**

```plain text
✅ 새 기능 필요 (Image Trace, Mesh Gradient)
✅ 무료 앱 선호
✅ Canva 생태계 통합 원함
⚠️ 파일 역호환 불가 주의
⚠️ 안정화 될 때까지 대기 권장

```

### **신규 사용자라면:**

```plain text
✅ V3 추천 (무료 + 최신 기능)
✅ Canva 무료 계정만 있으면 사용 가능
⚠️ AI 기능은 필요시에만 구독

```

---

## 📚 참고 자료

- [Canva 공식 발표](https://www.canva.com/newsroom/news/all-new-affinity/)
- [Affinity Studio 다운로드](https://www.affinity.studio/)
- [Ars Technica 리뷰](https://arstechnica.com/gadgets/2025/10/canvas-new-affinity-app-is-free-to-use-but-locks-ai-features-behind-a-subscription/)
- Reddit r/Affinity 커뮤니티 토론

---

## 🎯 결론

Affinity V3는 **“무료화”**와 **“통합”**이라는 큰 변화를 가져왔지만, 동시에 여러 **트레이드오프**가 존재합니다:

**긍정적:**

- 완전 무료 (기본 기능)
- 오랫동안 요청된 기능 추가 (Image Trace, Mesh Gradient)
- 더 유연한 워크플로우 (단일 앱)

**부정적:**

- 역호환성 없음
- 안정성 문제
- 일부 기능 여전히 누락 (RTL 지원 등)
- 구독 모델 도입 (AI 기능)

당신의 사례처럼 **Export 단축키**는 변경되지 않았지만, **Export 워크플로우**가 패널 중심으로 변경되어 일부 사용자들이 적응이 필요한 상황입니다. 이런 세부적인 UX 변경사항들이 V3 전환의 주요 고려사항이 되고 있습니다.

# Claude
