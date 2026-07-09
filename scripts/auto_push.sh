#!/bin/bash

# 설정 변수
PROJECT_DIR="/Users/$USER/Desktop/jiwumission"
GIT_BIN="/opt/homebrew/bin/git"
LOG_FILE="$PROJECT_DIR/scripts/auto_push.log"

# 로그 함수 정의
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

log_message "=== 자동 푸시 스크립트 실행 시작 ==="

# 프로젝트 폴더로 이동
cd "$PROJECT_DIR" || { log_message "오류: $PROJECT_DIR 폴더로 이동할 수 없습니다."; exit 1; }

# 원격 저장소와 동기화 (conflict 방지)
log_message "원격 저장소 상태 동기화 시도 중 (pull --rebase)..."
$GIT_BIN pull --rebase origin main >> "$LOG_FILE" 2>&1

# 새로 생성된 파일 또는 수정된 파일이 있는지 검증
STATUS_OUT=$($GIT_BIN status --porcelain)

if [ -z "$STATUS_OUT" ]; then
    log_message "알림: 새로 추가되거나 변경된 문서 파일이 없습니다. 작업을 종료합니다."
    log_message "=== 자동 푸시 스크립트 실행 종료 ==="
    exit 0
fi

log_message "감지된 변경 사항:\n$STATUS_OUT"

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
