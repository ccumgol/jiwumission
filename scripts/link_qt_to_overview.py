#!/usr/bin/env python3
"""
성경개론(bible-overview)의 '내용구분'에 매일 QT(daily-bible) 링크를 붙이는 스크립트.

무엇을 하나요?
  - content/databank/daily-bible/*.md 의 각 QT(발행된 것: draft:false)를 읽어
    front matter의 book/passage/date 로 "어느 본문인지"를 파악합니다.
  - content/databank/bible-overview/*.md 의 "각 장 및 문단의 내용 정리"(= 내용구분)
    섹션에서, 각 QT의 '시작 절'이 속한 '가장 좁은 항목'에 링크를 덧붙입니다.
  - 링크 라벨은 본문 범위(예: 1:1-13)이며, 형식은:  · 📖 [1:1-13](/databank/daily-bible/2026-01-01/)

특징
  - 발행된(draft:false) QT만 링크 → 깨진 링크가 생기지 않습니다.
  - idempotent: 여러 번 돌려도 중복되지 않습니다(기존 "  · 📖 ..." 를 지우고 다시 붙임).
    → QT가 더 발행되면 그냥 다시 실행하세요.
  - QT가 있는 책(창세기/요한복음/사사기/고린도전서/시편/이사야/고린도후서/야고보서 등)만 처리.

사용법 (반드시 저장소 루트에서 실행)
  cd /Users/gihyunpark/Desktop/jiwumission
  python3 scripts/link_qt_to_overview.py
"""
import os, re, glob

QT_DIR = "content/databank/daily-bible"
OV_DIR = "content/databank/bible-overview"
MARK = "  · 📖 "  # 링크 구분 접두 (idempotent 갱신 기준)


def parse_fm(path):
    """md 파일의 YAML front matter를 아주 단순하게 파싱."""
    text = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---", text, re.S)
    if not m:
        return None
    fm = {}
    for line in m.group(1).splitlines():
        mm = re.match(r"^(\w+):\s*(.*)$", line)
        if mm:
            fm[mm.group(1)] = mm.group(2).strip().strip('"')
    return fm


def P(chapter, verse):
    """장:절을 비교 가능한 정수 위치로 (절은 999 미만 가정)."""
    return chapter * 1000 + verse


def parse_ref(tok):
    """'1:1-2:3' / '1:1-18' / '1:1' 형태를 (시작위치, 끝위치)로."""
    m = re.match(r"^(\d+):(\d+)-(?:(\d+):)?(\d+)$", tok)
    if m:
        sc, sv = int(m.group(1)), int(m.group(2))
        ec = int(m.group(3)) if m.group(3) else sc
        ev = int(m.group(4))
        return (P(sc, sv), P(ec, ev))
    m = re.match(r"^(\d+):(\d+)$", tok)
    if m:
        c, v = int(m.group(1)), int(m.group(2))
        return (P(c, v), P(c, v))
    return None


def collect_qts():
    """book -> [(시작위치, 날짜, 본문라벨), ...]  (발행분만)."""
    qts = {}
    for p in glob.glob(f"{QT_DIR}/*.md"):
        fm = parse_fm(p)
        if not fm or "passage" not in fm or "book" not in fm:
            continue
        if fm.get("draft", "false") == "true":  # 미발행(draft) 제외 → 깨진 링크 방지
            continue
        mm = re.match(r"^(\S+)\s+(.+)$", fm["passage"])
        if not mm:
            continue
        label = mm.group(2).split()[0].strip()  # 책 이름 제외한 본문 범위, 예: 1:1-13
        rng = parse_ref(label)
        if not rng:
            continue
        qts.setdefault(fm["book"], []).append((rng[0], fm.get("date", "")[:10], label))
    return qts


def book_of(path):
    m = re.match(r"^\d+-(.+)\.md$", os.path.basename(path))
    return m.group(1) if m else None


def entry_ref(text):
    """내용구분 항목의 앞부분에서 본문 범위를 추출. 'N편'(시편)과 'C:V-..' 모두 지원."""
    m = re.match(r"^(?:시편\s*)?(\d+)(?:-(\d+))?편", text)
    if m:
        c1 = int(m.group(1))
        c2 = int(m.group(2)) if m.group(2) else c1
        return (P(c1, 1), P(c2, 999))
    m = re.match(r"^(\d+):\d+(?:-(?:\d+:)?\d+)?", text)
    if m:
        return parse_ref(text.split()[0])
    return None


# 내용구분 섹션의 '끝'을 판단하는 다음 상위 섹션 키워드
END_KEYWORDS = ["참고", "특징", "특성", "문학", "신학", "의의", "연구 자료", "저자", "저작", "중심 내용"]


def process(path, qts):
    book = book_of(path)
    bq = qts.get(book, [])
    if not bq:
        return None
    lines = open(path, encoding="utf-8").read().split("\n")

    # 1) 내용구분 섹션 헤딩 찾기 ("각 장 ... 내용 정리" 또는 "각 장의 내용 요약")
    hs = hl = None
    for i, l in enumerate(lines):
        if re.match(r"^(#{2,4})\s*(?:\d+\.\s*)?각 장.*(?:내용 정리|내용 요약)", l):
            hs = i
            hl = len(re.match(r"^(#{2,4})", l).group(1))
            break
    if hs is None:
        return None

    # 2) 섹션 끝(다음 상위 섹션) 찾기 — 내부 소제목(원시사/제N권 등)은 건너뜀
    he = len(lines)
    for i in range(hs + 1, len(lines)):
        m = re.match(r"^(#{1,6})\s*(.*)$", lines[i])
        if not m:
            continue
        lvl, title = len(m.group(1)), m.group(2)
        if lvl < hl or (lvl <= hl and (re.match(r"^\d+\.", title) or any(k in title for k in END_KEYWORDS))):
            he = i
            break

    # 3) 기존 링크 제거 (idempotent)
    for i in range(hs + 1, he):
        j = lines[i].find(MARK)
        if j != -1:
            lines[i] = lines[i][:j].rstrip()

    # 4) 항목(범위 있는 - 불릿) 수집
    entries = []
    for i in range(hs + 1, he):
        m = re.match(r"^(\s*)-\s+(\*\*)?(.+)$", lines[i])
        if not m:
            continue
        ref = entry_ref(m.group(3))
        if ref:
            entries.append([i, ref[0], ref[1]])

    # 5) 각 QT를 '시작 절이 속한 가장 좁은 항목'에 배정
    assign = {}
    for spos, date, label in bq:
        best, best_span = None, None
        for e in entries:
            if e[1] <= spos <= e[2]:
                span = e[2] - e[1]
                if best_span is None or span < best_span:
                    best_span, best = span, e
        if best is not None:
            assign.setdefault(best[0], []).append((spos, date, label))

    # 6) 링크 덧붙이기
    for idx, items in assign.items():
        items = sorted(set(items))
        links = " ".join(f"[{lab}](/databank/daily-bible/{d}/)" for _, d, lab in items)
        lines[idx] = lines[idx].rstrip() + MARK + links

    open(path, "w", encoding="utf-8").write("\n".join(lines))
    return (len(assign), sum(len(v) for v in assign.values()))


def main():
    qts = collect_qts()
    print("성경개론 내용구분 ← QT 링크 연결")
    total_books = total_links = 0
    for path in sorted(glob.glob(f"{OV_DIR}/*.md")):
        if os.path.basename(path) == "_index.md":
            continue
        res = process(path, qts)
        if res:
            entries, links = res
            total_books += 1
            total_links += links
            print(f"  {os.path.basename(path)}: {entries}항목 / {links}링크")
    print(f"\n총 {total_books}권 / {total_links}링크 적용")


if __name__ == "__main__":
    main()
