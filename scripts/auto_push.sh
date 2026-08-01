#!/bin/bash
#
# 매일 밤 자동 커밋 & GitHub 푸시 스크립트
#
# 실행 주체: launchd (~/Library/LaunchAgents/com.jiwumission.autopush.plist), 매일 23:30
# 실행 경로: ~/.scripts/auto_push.sh → (심볼릭 링크) → 이 파일
#            ※ 이 파일이 유일한 원본입니다. 고칠 때 여기만 고치면 됩니다.
# 로그:      ~/.scripts/auto_push.log  (저장소를 더럽히지 않도록 저장소 밖에 기록)
#
# 하는 일
#   1) 원격과 동기화 (pull --rebase --autostash: 작업 중 파일이 있어도 실패하지 않음)
#   2) 변경/신규 파일이 있으면 커밋
#   3) GitHub에 푸시  → 푸시되면 GitHub Actions가 빌드·배포까지 자동 진행
#
# 참고: 매일의 IT뉴스·QT 원고 생성은 '예정됨'(예약된 작업)이 담당합니다.
#       이 스크립트는 그 결과물을 '올리는' 역할만 합니다.
#       (옛 scripts/updateRepos.js 호출은 2026-07-31에 제거 — 예약 작업이 대체함)

# 설정 변수
PROJECT_DIR="/Users/$USER/Desktop/jiwumission"
GIT_BIN="/opt/homebrew/bin/git"
LOG_FILE="/Users/$USER/.scripts/auto_push.log"

# 로그 함수 정의
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log_message "=== 자동 푸시 스크립트 실행 시작 ==="

# 프로젝트 폴더로 이동
cd "$PROJECT_DIR" || { log_message "오류: $PROJECT_DIR 폴더로 이동할 수 없습니다."; exit 1; }

# 원격 저장소와 동기화 (conflict 방지)
# --autostash: 커밋되지 않은 수정이 남아 있어도 임시 보관 후 rebase, 끝나면 되돌림
log_message "원격 저장소 상태 동기화 시도 중 (pull --rebase --autostash)..."
$GIT_BIN pull --rebase --autostash origin main >> "$LOG_FILE" 2>&1
if [ $? -ne 0 ]; then
    log_message "경고: 원격 동기화에 실패했습니다. 로컬 상태로 계속 진행합니다."
fi

# 새로 생성된 파일 또는 수정된 파일이 있는지 검증
STATUS_OUT=$($GIT_BIN status --porcelain)

if [ -z "$STATUS_OUT" ]; then
    log_message "알림: 새로 추가되거나 변경된 문서 파일이 없습니다. 작업을 종료합니다."
    log_message "=== 자동 푸시 스크립트 실행 종료 ==="
    exit 0
fi

log_message "감지된 변경 사항:"
echo "$STATUS_OUT" >> "$LOG_FILE"

# 파일 스테이징 및 커밋 생성
log_message "변경된 파일 추가 및 커밋 진행 중..."
$GIT_BIN add -A >> "$LOG_FILE" 2>&1
$GIT_BIN commit -m "chore: 일일 자동 생성 컨텐츠 추가 [$(date '+%Y-%m-%d')]" >> "$LOG_FILE" 2>&1

# 원격 저장소(GitHub)로 푸시
log_message "원격 저장소(GitHub)로 푸시 실행 중..."
$GIT_BIN push origin main >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log_message "성공: 자동 배포 푸시가 정상 완료되었습니다."
else
    log_message "오류: git push 도중 문제가 발생했습니다. 로그를 점검하세요."
fi

log_message "=== 자동 푸시 스크립트 실행 종료 ==="
