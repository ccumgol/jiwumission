const fs = require('fs');
const path = require('path');

const NEWS_DIR = path.join(__dirname, '../content/blog/daily-it-news');
const OUTPUT_FILE = path.join(__dirname, '../content/databank/pds/github-repos.md');

// 카테고리 정의
const CATEGORIES = [
  '🤖 인공지능 및 에이전트 (AI & Agents)',
  '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)',
  '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)',
  '📅 생산성 및 노트 (Productivity & Notes)',
  '🛠️ 시스템 및 유틸리티 (System & Utilities)',
  '💻 개발 도구 및 가상화 (Dev Tools & Virtualization)',
  '🛡️ 보안 (Security)',
  '🎬 멀티미디어 및 창작 (Multimedia & Creation)',
  '📦 기타 / 미분류 (Uncategorized)'
];

// 알려진 리포지터리의 이름, 카테고리 및 설명 사전 정의
const KNOWN_REPOS = {
  // AI & Agents
  'cline/cline': { name: 'Cline', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: 'IDE/터미널에서 동작하는 오픈소스 자율 AI 코딩 에이전트' },
  'steipete/openclaw': { name: 'OpenClaw', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '개인 하드웨어에서 메신저와 AI 에이전트를 연결해주는 비서' },
  'ollama/ollama': { name: 'Ollama', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '개인 PC에서 다양한 최신 LLM을 손쉽게 실행하는 도구' },
  'supertone-inc/supertonic': { name: 'Supertonic', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '기기 내에서 완전히 구동되는 초고속 다국어 온디바이스 TTS 엔진' },
  'madslorentzen/ai-job-search': { name: 'AI Job Search', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: 'Claude Code 기반 AI 구직 자동화 프레임워크' },
  'addyosmani/agent-skills': { name: 'Agent Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '코딩 에이전트용 프로덕션급 엔지니어링 스킬 모음' },
  'stablyai/orca': { name: 'Orca', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '여러 에이전트를 병렬로 실행하는 에이전트 개발환경 (ADE)' },
  'juliusbrussee/caveman': { name: 'Caveman', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '토큰 사용량을 약 65% 절약해주는 Claude Code용 스킬' },
  'asgeirtj/system_prompts_leaks': { name: 'System Prompts Leaks', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '다양한 AI 상용 서비스들의 시스템 프롬프트 모음' },
  'mattpocock/skills': { name: 'Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '실무 엔지니어를 위한 코딩 에이전트 스킬 모음' },
  'alirezarezvani/claude-skills': { name: 'Claude Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)', description: '코딩 에이전트용 플러그인 및 스킬 모음' },

  // Self-Hosting & Homelab
  'tubearchivist/tubearchivist': { name: 'Tube Archivist', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)', description: '유튜브 영상을 메타데이터와 함께 백업/정리하는 미디어 서버' },
  'pewdiepie-archdaemon/odysseus': { name: 'Odysseus', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)', description: '자체 호스팅 프라이버시 우선 AI 워크스페이스' },
  'karakeep-app/karakeep': { name: 'KaraKeep', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)', description: '오프라인 요약/태그를 지원하는 무엇이든 저장 북마크 앱' },

  // Productivity & Notes
  'zackriya-solutions/meetily': { name: 'Meetily', category: '📅 생산성 및 노트 (Productivity & Notes)', description: 'Whisper/Ollama 기반 로컬 100% 회의록 작성/요약 도구' },
  'devlaner/devlane': { name: 'Devlane', category: '📅 생산성 및 노트 (Productivity & Notes)', description: 'Jira/Linear 등을 대체하는 오픈소스 프로젝트 관리 플랫폼' },
  'jolleydesign/tudo': { name: 'Tudo', category: '📅 생산성 및 노트 (Productivity & Notes)', description: '빠르고 로컬에서 동작하는 TUI 할 일/노트 관리 앱' },
  'laurent22/joplin': { name: 'Joplin', category: '📅 생산성 및 노트 (Productivity & Notes)', description: '종단간 암호화 동기화를 지원하는 무료 메모/노트 앱' },
  'go-vikunja/vikunja': { name: 'Vikunja', category: '📅 생산성 및 노트 (Productivity & Notes)', description: '칸반/간트 차트 등을 지원하는 강력한 프로젝트 관리 앱' },

  // Ministry & Non-Profit
  'churchapps/freeshow': { name: 'FreeShow', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '예배 가사, 성경, 설교 송출용 무료 예배 프레젠테이션 프로그램' },
  'civicrm/civicrm-core': { name: 'CiviCRM', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '비영리/선교단체를 위한 후원자 및 회원 관계 관리 CRM' },
  'churchcrm/crm': { name: 'ChurchCRM', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '교인 명단, 행사, 재정 관리를 위한 교회관리시스템 (ChMS)' },
  'andbible/and-bible': { name: 'AndBible', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '인터넷 없이도 여러 역본을 볼 수 있는 안드로이드 성경 공부 앱' },
  'bibletime/bibletime': { name: 'BibleTime', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '다양한 성경 역본과 주석을 연구할 수 있는 데스크톱 성경 공부 앱' },
  'knadh/listmonk': { name: 'Listmonk', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)', description: '후원자 소식지 및 정기 이메일을 대량 발송할 수 있는 메일링 도구' },

  // Security
  'usestrix/strix': { name: 'Strix', category: '🛡️ 보안 (Security)', description: '앱 취약점을 탐지하고 패치 PR을 생성하는 AI 침투 테스트 도구' },
  'vxcontrol/pentagi': { name: 'Pentagi', category: '🛡️ 보안 (Security)', description: '자율적으로 취약점을 분석하고 검증하는 펜테스트 에이전트' },

  // Multimedia & Creation
  'opencut-app/opencut': { name: 'OpenCut', category: '🎬 멀티미디어 및 창작 (Multimedia & Creation)', description: '로컬에서 비디오를 처리하는 오픈소스 CapCut 대안 편집기' },

  // System & Utilities
  'wallabydesigns/windows-telemetry-guard': { name: 'TelemetryGuard', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)', description: '윈도우 10/11의 텔레메트리 및 추적을 차단하는 툴킷' },
  'microsoft/markitdown': { name: 'MarkItDown', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)', description: 'PDF/오피스 문서 등을 마크다운 포맷으로 변환해주는 도구' },
  'actualbudget/actual': { name: 'Actual Budget', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)', description: '봉투 예산(envelope budgeting) 방식의 로컬 우선 무료 가계부' },

  // Dev Tools & Virtualization
  'apple/container': { name: 'Container', category: '💻 개발 도구 및 가상화 (Dev Tools & Virtualization)', description: 'Mac에서 리눅스 컨테이너를 가볍게 구동하는 가상머신' }
};

function main() {
  console.log('추천 리포지터리 파싱 및 카테고리 분류 시작...');

  if (!fs.existsSync(NEWS_DIR)) {
    console.error(`에러: IT 뉴스 폴더가 존재하지 않습니다: ${NEWS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(NEWS_DIR)
    .filter(f => f.endsWith('.md') && f !== 'CLAUDE.md' && f !== '_index.md')
    .sort();

  console.log(`총 ${files.length}개의 일일 뉴스 파일을 발견했습니다.`);

  const reposMap = new Map();

  for (const file of files) {
    const filePath = path.join(NEWS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    let inTargetSection = false;
    let currentSectionHeader = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // H2 헤더 검출
      if (line.startsWith('## ')) {
        const headerText = line.substring(3).trim();
        if (headerText.includes('추천 GitHub 리포') || headerText.includes('추천 리포')) {
          inTargetSection = true;
          currentSectionHeader = headerText;
        } else {
          inTargetSection = false;
        }
        continue;
      }

      // 수평선이 나오면 해당 섹션 종료
      if (inTargetSection && line.startsWith('---')) {
        inTargetSection = false;
        continue;
      }

      if (inTargetSection) {
        // github.com 링크 정규식 매칭
        const githubRegex = /(?:https?:\/\/)?(?:www\.)?github\.com\/([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)/gi;
        let match;
        while ((match = githubRegex.exec(line)) !== null) {
          const owner = match[1];
          let repo = match[2];

          // 괄호, 마침표, 마크다운 기호 등 특수문자 제거
          repo = repo.replace(/[)\].,>:\s\/]+$/, '');

          const fullRepoKey = `${owner}/${repo}`.toLowerCase();

          // 기본 디스플레이 이름 설정
          let displayName = repo;

          // markdown link [이름](링크) 형태에서 이름 추출
          const mdLinkRegex = new RegExp(`\\[([^\\]]+)\\]\\([^\\)]*github\\.com\\/${owner}\\/${repo}[^\\)]*\\)`, 'i');
          const mdLinkMatch = line.match(mdLinkRegex);
          if (mdLinkMatch) {
            const label = mdLinkMatch[1].trim();
            if (label && !label.includes('github.com') && !/github/i.test(label) && label !== '링크' && label !== 'URL') {
              displayName = label;
            }
          }

          // 볼드 텍스트 **이름** 또는 **Reddit — 이름** 등에서 추출
          const boldMatch = line.match(/\*\*(.*?)\*\*/);
          if (boldMatch) {
            let boldText = boldMatch[1].trim();
            boldText = boldText.replace(/^(Reddit|YouTube|GitHub 트렌딩|보너스)\s*(?:—|\(|-)\s*/i, '');
            boldText = boldText.replace(/\(.*?\)/g, '').trim(); // 괄호 설명 제거
            boldText = boldText.replace(/·.*$/, '').trim(); // 구분자 이후 제거
            if (boldText && !boldText.includes('추천') && boldText !== displayName && boldText.length < 40) {
              if (boldText.includes('/') && boldText.split('/')[1]) {
                displayName = boldText.split('/')[1].trim();
              } else {
                displayName = boldText;
              }
            }
          }

          // 마크다운 형식 정리
          displayName = displayName.replace(/\[|\]|\*|`/g, '').trim();

          // 기본 카테고리 지정
          let category = '📦 기타 / 미분류 (Uncategorized)';

          if (KNOWN_REPOS[fullRepoKey]) {
            category = KNOWN_REPOS[fullRepoKey].category;
            displayName = KNOWN_REPOS[fullRepoKey].name;
          } else {
            // 자동 카테고리 추론 (본문 텍스트 맥락 분석)
            const contextText = (lines[i - 1] || '') + '\n' + line + '\n' + (lines[i + 1] || '');
            const lowerContext = contextText.toLowerCase();
            const lowerHeader = currentSectionHeader.toLowerCase();

            if (lowerHeader.includes('사역') || lowerHeader.includes('교회') || lowerHeader.includes('선교') || lowerHeader.includes('비영리') || lowerHeader.includes('성경') ||
                lowerContext.includes('church') || lowerContext.includes('bible') || lowerContext.includes('예배') || lowerContext.includes('교회') || lowerContext.includes('사역') || lowerContext.includes('선교')) {
              category = '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)';
            } else if (lowerContext.includes('ai') || lowerContext.includes('agent') || lowerContext.includes('llm') || lowerContext.includes('claude') || lowerContext.includes('gpt') || lowerContext.includes('ollama') || lowerContext.includes('tts') || lowerContext.includes('voice')) {
              category = '🤖 인공지능 및 에이전트 (AI & Agents)';
            } else if (lowerContext.includes('security') || lowerContext.includes('pentest') || lowerContext.includes('exploit') || lowerContext.includes('vuln') || lowerContext.includes('침투') || lowerContext.includes('보안')) {
              category = '🛡️ 보안 (Security)';
            } else if (lowerContext.includes('self-host') || lowerContext.includes('docker') || lowerContext.includes('homelab') || lowerContext.includes('hosting') || lowerContext.includes('server')) {
              category = '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)';
            } else if (lowerContext.includes('todo') || lowerContext.includes('note') || lowerContext.includes('productivity') || lowerContext.includes('project') || lowerContext.includes('manage') || lowerContext.includes('task') || lowerContext.includes('wiki') || lowerContext.includes('메모') || lowerContext.includes('일정')) {
              category = '📅 생산성 및 노트 (Productivity & Notes)';
            } else if (lowerContext.includes('video') || lowerContext.includes('audio') || lowerContext.includes('image') || lowerContext.includes('media') || lowerContext.includes('player') || lowerContext.includes('edit') || lowerContext.includes('영상') || lowerContext.includes('편집')) {
              category = '🎬 멀티미디어 및 창작 (Multimedia & Creation)';
            } else if (lowerContext.includes('container') || lowerContext.includes('vm') || lowerContext.includes('virtual') || lowerContext.includes('가상화')) {
              category = '💻 개발 도구 및 가상화 (Dev Tools & Virtualization)';
            } else if (lowerContext.includes('system') || lowerContext.includes('utility') || lowerContext.includes('utilities') || lowerContext.includes('telemetry') || lowerContext.includes('convert') || lowerContext.includes('가계부')) {
              category = '🛠️ 시스템 및 유틸리티 (System & Utilities)';
            }
          }

          // 이름의 첫 글자 대문자화 폴백 (사전에 정의되지 않은 경우에만)
          if (!KNOWN_REPOS[fullRepoKey] && displayName === repo && /^[a-z0-9_-]+$/.test(displayName)) {
            displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);
          }

          // 설명(description) 추출
          let description = '';
          if (KNOWN_REPOS[fullRepoKey]) {
            description = KNOWN_REPOS[fullRepoKey].description || '';
          }

          if (!description) {
            // 주변 줄에서 "- 한 줄 설명:" 또는 "- 설명:" 패턴 검색
            for (let offset = 0; offset <= 4 && (i + offset) < lines.length; offset++) {
              const checkLine = lines[i + offset];
              const descMatch = checkLine.match(/-\s*(?:한\s*줄\s*)?설명\s*:\s*(.*)/i);
              if (descMatch) {
                description = descMatch[1].trim();
                break;
              }
            }
          }

          if (!description) {
            // 다음 줄이 설명 단락인지 확인 (목록, 헤더, 빈 줄 등이 아니면 설명으로 간주)
            const nextIndex = i + 1;
            if (nextIndex < lines.length) {
              const nextLine = lines[nextIndex].trim();
              if (nextLine && !nextLine.startsWith('#') && !nextLine.startsWith('-') && !nextLine.startsWith('*') && !nextLine.startsWith('>') && !nextLine.startsWith('http') && !nextLine.includes('github.com')) {
                // 첫 문장만 추출
                const sentence = nextLine.split(/[.?!]/)[0].trim();
                if (sentence && sentence.length > 5) {
                  description = sentence;
                }
              }
            }
          }

          // 마크다운 형식 정리 및 좌우 공백 트리밍
          if (description) {
            description = description.replace(/\[|\]|\*|`/g, '').trim();
          }

          const url = `https://github.com/${owner}/${repo}`;
          reposMap.set(fullRepoKey, { url, name: displayName, category, description });
        }
      }
    }
  }

  // 추출된 정보 가공 및 분류 그룹화
  const groupedRepos = {};
  CATEGORIES.forEach(cat => {
    groupedRepos[cat] = [];
  });

  for (const [key, repoInfo] of reposMap.entries()) {
    const cat = repoInfo.category;
    if (groupedRepos[cat]) {
      groupedRepos[cat].push(repoInfo);
    } else {
      groupedRepos['📦 기타 / 미분류 (Uncategorized)'].push(repoInfo);
    }
  }

  // 카테고리별 알파벳 순 정렬
  CATEGORIES.forEach(cat => {
    groupedRepos[cat].sort((a, b) => a.name.localeCompare(b.name, 'ko-KR', { sensitivity: 'base' }));
  });

  // 날짜 구하기 (현재 한국 시간 기준 ISO 포맷)
  const now = new Date();
  const tzOffset = 9 * 60; // KST는 UTC+9
  const localTime = new Date(now.getTime() + tzOffset * 60 * 1000);
  const dateStr = localTime.toISOString().split('.')[0] + '+09:00';

  // 마크다운 파일 내용 빌드
  let markdown = `---
title: "추천 GitHub 리포지터리 모음"
date: ${dateStr}
description: "daily-it-news 브리핑에서 엄선하여 소개한 GitHub 오픈소스 리포지터리 모음집입니다."
categories: ["오픈소스", "자료실"]
tags: ["GitHub", "오픈소스", "에이전트", "자체호스팅"]
type: "post"
---

\`blog/daily-it-news\`에 소개된 오픈소스 프로젝트 및 GitHub 리포지터리들을 카테고리별로 분류한 목록입니다. 새로운 추천 프로젝트가 추가될 때마다 자동으로 업데이트됩니다.

`;

  CATEGORIES.forEach(cat => {
    const repos = groupedRepos[cat];
    if (repos.length > 0) {
      markdown += `### ${cat}\n`;
      repos.forEach(repo => {
        if (repo.description) {
          markdown += `- [${repo.name}](${repo.url}) - ${repo.description}\n`;
        } else {
          markdown += `- [${repo.name}](${repo.url})\n`;
        }
      });
      markdown += `\n`;
    }
  });

  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf-8');
  console.log(`성공: ${OUTPUT_FILE}에 카테고리화된 ${reposMap.size}개의 리포지터리를 업데이트 완료했습니다.`);
}

main();
