#!/bin/bash
# 사이트 제작기(content/extra/site-story.md)의 '변경 이력' 블록을
# git 커밋 기록에서 자동 생성/갱신합니다.
#
# 다음 커밋은 '변경 이력'에 넣지 않습니다(내용을 알 수 없거나 일일 반복 작업이라서):
#   - 자동 일일 콘텐츠·정기 배포 커밋 (scheduled daily publish / 일일 자동 생성 …)
#   - 날짜만 적힌 커밋:  2026-08-16 (하이픈), 20260816 (8자리) ← 매일의 IT 뉴스 업데이트
#   - 의미 없는 커밋:    test / 테스트 / wip / tmp / 임시
# 사용: 저장소 루트에서  bash scripts/gen_changelog.sh
set -e
cd "$(dirname "$0")/.."
FILE="content/extra/site-story.md"

CHANGELOG=$(git log --date=short --pretty="format:%ad|%s" \
  | grep -viE 'scheduled daily publish|일일 자동 생성|자동 생성 컨텐츠' \
  | grep -vE '\|[0-9]{4}-[0-9]{2}-[0-9]{2}$' \
  | grep -vE '\|20[0-9]{6}$' \
  | grep -viE '\|(test|테스트|wip|tmp|임시)$' \
  | awk -F'|' '{printf "- **%s** — %s\n", $1, substr($0, index($0,"|")+1)}')

export CHANGELOG
python3 - "$FILE" <<'PY'
import os, sys, re
fp = sys.argv[1]
cl = os.environ.get("CHANGELOG", "").strip() or "_변경 이력이 없습니다._"
t = open(fp, encoding="utf-8").read()
new = re.sub(r"(<!-- CHANGELOG:START -->).*?(<!-- CHANGELOG:END -->)",
             "\\1\n" + cl + "\n\\2", t, flags=re.S)
open(fp, "w", encoding="utf-8").write(new)
print("변경 이력 갱신 완료:", fp)
PY
