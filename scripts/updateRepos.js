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

// 알려진 리포지터리의 이름 및 카테고리 사전 정의
const KNOWN_REPOS = {
  // AI & Agents
  'cline/cline': { name: 'Cline', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'steipete/openclaw': { name: 'OpenClaw', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'ollama/ollama': { name: 'Ollama', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'supertone-inc/supertonic': { name: 'Supertonic', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'madslorentzen/ai-job-search': { name: 'AI Job Search', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'addyosmani/agent-skills': { name: 'Agent Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'stablyai/orca': { name: 'Orca', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'juliusbrussee/caveman': { name: 'Caveman', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'asgeirtj/system_prompts_leaks': { name: 'System Prompts Leaks', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'mattpocock/skills': { name: 'Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },
  'alirezarezvani/claude-skills': { name: 'Claude Skills', category: '🤖 인공지능 및 에이전트 (AI & Agents)' },

  // Self-Hosting & Homelab
  'tubearchivist/tubearchivist': { name: 'Tube Archivist', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)' },
  'pewdiepie-archdaemon/odysseus': { name: 'Odysseus', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)' },
  'karakeep-app/karakeep': { name: 'KaraKeep', category: '🏠 자체 호스팅 및 홈랩 (Self-Hosting & Homelab)' },

  // Productivity & Notes
  'zackriya-solutions/meetily': { name: 'Meetily', category: '📅 생산성 및 노트 (Productivity & Notes)' },
  'devlaner/devlane': { name: 'Devlane', category: '📅 생산성 및 노트 (Productivity & Notes)' },
  'jolleydesign/tudo': { name: 'Tudo', category: '📅 생산성 및 노트 (Productivity & Notes)' },
  'laurent22/joplin': { name: 'Joplin', category: '📅 생산성 및 노트 (Productivity & Notes)' },
  'go-vikunja/vikunja': { name: 'Vikunja', category: '📅 생산성 및 노트 (Productivity & Notes)' },

  // Ministry & Non-Profit
  'churchapps/freeshow': { name: 'FreeShow', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },
  'civicrm/civicrm-core': { name: 'CiviCRM', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },
  'churchcrm/crm': { name: 'ChurchCRM', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },
  'andbible/and-bible': { name: 'AndBible', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },
  'bibletime/bibletime': { name: 'BibleTime', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },
  'knadh/listmonk': { name: 'Listmonk', category: '⛪ 기독교 사역 및 비영리 (Ministry & Non-Profit)' },

  // Security
  'usestrix/strix': { name: 'Strix', category: '🛡️ 보안 (Security)' },
  'vxcontrol/pentagi': { name: 'Pentagi', category: '🛡️ 보안 (Security)' },

  // Multimedia & Creation
  'opencut-app/opencut': { name: 'OpenCut', category: '🎬 멀티미디어 및 창작 (Multimedia & Creation)' },

  // System & Utilities
  'wallabydesigns/windows-telemetry-guard': { name: 'TelemetryGuard', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)' },
  'microsoft/markitdown': { name: 'MarkItDown', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)' },
  'actualbudget/actual': { name: 'Actual Budget', category: '🛠️ 시스템 및 유틸리티 (System & Utilities)' },

  // Dev Tools & Virtualization
  'apple/container': { name: 'Container', category: '💻 개발 도구 및 가상화 (Dev Tools & Virtualization)' }
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

          const url = `https://github.com/${owner}/${repo}`;
          reposMap.set(fullRepoKey, { url, name: displayName, category });
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
      markdown += `## ${cat}\n`;
      repos.forEach(repo => {
        markdown += `- [${repo.name}](${repo.url})\n`;
      });
      markdown += `\n`;
    }
  });

  fs.writeFileSync(OUTPUT_FILE, markdown, 'utf-8');
  console.log(`성공: ${OUTPUT_FILE}에 카테고리화된 ${reposMap.size}개의 리포지터리를 업데이트 완료했습니다.`);
}

main();
