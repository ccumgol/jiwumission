#!/usr/bin/env python3
"""Add or update one Notion tutorial video in data/notion_videos.yaml.

The page /class/notion/노션-기초-영상-강좌/ renders this file through the
`notion_videos` shortcode, so running this script is all a new upload needs.

Usage:
    python3 scripts/add_notion_video.py <unit> [youtube_id]

    <unit>        unit folder prefix under the Notion manual folder, e.g. 02-015
                  (the folder 02-015_페이지란 is found automatically)
    [youtube_id]  optional; when omitted it is read from the "본편: https://youtu.be/<id>"
                  line of the unit's 유튜브_제목_설명.md

What it reads from the unit folder:
    title    first **bold** line under the "### 제목" heading (" ← 추천" removed)
    summary  first line of the first ``` code block (the YouTube description)
    duration ffprobe on *_가로_1920x1080.mp4
    date     "✅ YYYY-MM-DD 공개 게시 완료" line (falls back to today)
    unit     META.unit in _제작파일/data.js (e.g. "02-009 ~ 02-013"), else the folder prefix

Environment:
    NOTION_UNITS_DIR  override the unit folder root
                      (default ~/Desktop/Playground/Notion)

The YAML is written in a fixed, line-based format (no PyYAML needed). Entries are
kept sorted by unit; an entry with the same id or unit is replaced, not duplicated.
"""
import datetime
import json
import os
import re
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
DATA_FILE = REPO_ROOT / "data" / "notion_videos.yaml"
UNITS_DIR = Path(os.environ.get("NOTION_UNITS_DIR", Path.home() / "Desktop/Playground/Notion"))
FIELDS = ("id", "unit", "part", "title", "summary", "duration", "date")
HEADER = """# Notion 기초 영상 강좌 목록 — layouts/shortcodes/notion_videos.html 이 읽는다.
# 새 영상은 손으로 고치지 말고: python3 scripts/add_notion_video.py <unit> [youtube_id]
# part 이름은 아래 parts 에서 바꾼다. videos 는 unit 순서로 정렬된다.
"""
PARTS_DEFAULT = {
    "PART 00": "입문 특강",
    "PART 01": "노션 시작하기",
    "PART 02": "화면 구성과 기본 개념",
}


def q(value):
    """Quote a string as a YAML double-quoted scalar (JSON strings are valid YAML)."""
    return json.dumps(str(value), ensure_ascii=False)


def parse_data_file(path):
    """Read parts and videos back from the fixed format this script writes."""
    parts, videos, section, current = {}, [], None, None
    if not path.exists():
        return dict(PARTS_DEFAULT), videos
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.rstrip()
        if not line or line.lstrip().startswith("#"):
            continue
        if line in ("parts:", "videos:"):
            section = line[:-1]
            continue
        m = re.match(r'^\s*(-\s+)?(\w+|"[^"]+"):\s*(".*")\s*$', line)
        if not m:
            raise ValueError(f"Unrecognised line in {path}: {line!r}")
        key, value = m.group(2).strip('"'), json.loads(m.group(3))
        if section == "parts":
            parts[key] = value
        elif section == "videos":
            if m.group(1):
                current = {}
                videos.append(current)
            current[key] = value
    return parts or dict(PARTS_DEFAULT), videos


def write_data_file(path, parts, videos):
    lines = [HEADER, "parts:"]
    lines += [f"  {q(k)}: {q(v)}" for k, v in sorted(parts.items())]
    lines += ["", "videos:"]
    for video in videos:
        for i, field in enumerate(FIELDS):
            prefix = "  - " if i == 0 else "    "
            lines.append(f"{prefix}{field}: {q(video.get(field, ''))}")
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def find_unit_dir(unit):
    matches = sorted(UNITS_DIR.glob(f"{unit}_*"))
    if not matches:
        raise FileNotFoundError(f"No folder starting with {unit}_ in {UNITS_DIR}")
    return matches[0]


def read_title(md_text):
    in_title = False
    for line in md_text.splitlines():
        if line.startswith("### "):
            in_title = line.startswith("### 제목")
            continue
        if in_title:
            m = re.search(r"\*\*(.+?)\*\*", line)
            if m:
                return m.group(1).replace("← 추천", "").strip()
    raise ValueError("No bold title found under '### 제목'")


def read_summary(md_text):
    m = re.search(r"```[^\n]*\n(.*?)\n", md_text)
    if not m:
        raise ValueError("No description code block found")
    return m.group(1).strip()


def read_youtube_id(md_text):
    m = re.search(r"본편:\s*https://youtu\.be/([\w-]{11})", md_text)
    return m.group(1) if m else None


def read_date(md_text):
    m = re.search(r"✅\s*(\d{4}-\d{2}-\d{2})", md_text)
    return m.group(1) if m else datetime.date.today().isoformat()


def read_unit_label(unit_dir, unit):
    data_js = unit_dir / "_제작파일" / "data.js"
    if data_js.exists():
        m = re.search(r'unit:\s*"([^"]+)"', data_js.read_text(encoding="utf-8"))
        if m:
            return m.group(1)
    return unit


def read_duration(unit_dir):
    videos = sorted(unit_dir.glob("*_가로_1920x1080.mp4"))
    if not videos:
        raise FileNotFoundError(f"No *_가로_1920x1080.mp4 in {unit_dir}")
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(videos[0])],
        capture_output=True, text=True, check=True,
    ).stdout.strip()
    seconds = round(float(out))
    return f"{seconds // 60}:{seconds % 60:02d}"


def build_entry(unit, youtube_id=None):
    unit_dir = find_unit_dir(unit)
    md_text = (unit_dir / "유튜브_제목_설명.md").read_text(encoding="utf-8")
    video_id = youtube_id or read_youtube_id(md_text)
    if not video_id or not re.fullmatch(r"[\w-]{11}", video_id):
        raise ValueError(f"Invalid or missing YouTube id for {unit}: {video_id!r}")
    return {
        "id": video_id,
        "unit": read_unit_label(unit_dir, unit),
        "part": f"PART {unit.split('-')[0]}",
        "title": read_title(md_text),
        "summary": read_summary(md_text),
        "duration": read_duration(unit_dir),
        "date": read_date(md_text),
    }


def upsert(videos, entry):
    """Return a new list with entry replacing any video of the same id or unit."""
    key = entry["unit"].split()[0]
    kept = [v for v in videos if v["id"] != entry["id"] and v["unit"].split()[0] != key]
    return sorted(kept + [entry], key=lambda v: (v["part"], v["unit"]))


def main(argv):
    if len(argv) not in (2, 3) or not re.fullmatch(r"\d{2}-\d{3}", argv[1]):
        print(__doc__)
        return 2
    try:
        entry = build_entry(argv[1], argv[2] if len(argv) == 3 else None)
        parts, videos = parse_data_file(DATA_FILE)
        write_data_file(DATA_FILE, parts, upsert(videos, entry))
    except (OSError, ValueError, subprocess.CalledProcessError) as err:
        print(f"error: {err}", file=sys.stderr)
        return 1
    print(f"updated {DATA_FILE.relative_to(REPO_ROOT)}: {entry['unit']} {entry['id']} {entry['title']}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
