const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const README_PATH = path.join(__dirname, 'README.md');
const TARGET_PLATFORMS = ['programmers', 'baekjoon'];

function getCreatedDate(filePath) {
  try {
    const firstCommitHash = execSync(
      `git log --diff-filter=A --follow --format=%H -- "${filePath}"`
    ).toString().trim().split('\n').pop();

    if (!firstCommitHash) return 'Unknown';

    const date = execSync(
      `git show -s --format=%ad --date=short ${firstCommitHash}`
    ).toString().trim();

    return date || 'Unknown';
  } catch (err) {
    console.warn(`❗최초 커밋 날짜 추적 실패: ${filePath}`);
    return 'Unknown';
  }
}

function getProblemsByPlatform() {
  const problems = {
    programmers: [],
    baekjoon: [],
  };

  for (const platform of TARGET_PLATFORMS) {
    const platformPath = path.join(__dirname, platform);
    if (!fs.existsSync(platformPath)) continue;

    const levels = fs.readdirSync(platformPath);
    for (const level of levels) {
      const levelPath = path.join(platformPath, level);
      if (!fs.lstatSync(levelPath).isDirectory()) continue;

      const files = fs.readdirSync(levelPath).filter((f) => f.endsWith('.js'));

      for (const file of files) {
        const filePath = path.join(levelPath, file);
        const created = getCreatedDate(filePath);
        const problemName = path.basename(file, '.js');
        const relativePath = path.relative(__dirname, filePath).replace(/\\/g, '/');

        const encodedPath = encodeURI(relativePath); // 공백/한글 대응
        problems[platform].push({
          platform: capitalize(platform),
          level: 'Lv.' + level.replace(/[^0-9]/g, ''),
          date: created,
          name: problemName,
          link: `[${problemName}](./${encodedPath})`, // 인코딩된 링크
        });
      }
    }
  }

  return problems;
}

function formatLevelWithEmoji(levelStr, platform) {
  const num = parseInt(levelStr.replace(/[^\d]/g, ''), 10);

  if (platform === 'Programmers') {
    if (num <= 1) return `🟢 ${levelStr}`;
    if (num <= 3) return `🟡 ${levelStr}`;
    return `🔴 ${levelStr}`;
  }

  return levelStr;
}

function buildTable(problems, platformName) {
  if (problems.length === 0) return '_No problems yet._';

  const header = '| Date | Level | Problem |\n|------------|--------|---------|';
  const rows = problems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((p) => {
      const styledLevel = formatLevelWithEmoji(p.level, platformName);
      return `| ${p.date} | ${styledLevel} | ${p.link} |`;
    });

  return `${header}\n${rows.join('\n')}`;
}

function buildStatsSection(problemData) {
  const stats = {};
  let total = 0;

  for (const platform of TARGET_PLATFORMS) {
    const problems = problemData[platform];
    const platformName = capitalize(platform);
    stats[platformName] = { total: problems.length, levels: {} };
    total += problems.length;

    for (const p of problems) {
      const level = p.level;
      if (!stats[platformName].levels[level]) {
        stats[platformName].levels[level] = 1;
      } else {
        stats[platformName].levels[level]++;
      }
    }
  }

  let output = `**Solved Problems: ${total}**\n\n`;
  for (const [platform, data] of Object.entries(stats)) {
    output += `- ${platform}: ${data.total}\n`;

    const sortedLevels = Object.entries(data.levels).sort((a, b) => {
      const numA = parseInt(a[0].replace(/\D/g, ''));
      const numB = parseInt(b[0].replace(/\D/g, ''));
      return numA - numB;
    });

    for (const [level, count] of sortedLevels) {
      const emojiLevel = formatLevelWithEmoji(level, platform);
      output += `  - ${emojiLevel}: ${count}\n`;
    }
  }

  return output.trim();
}

function updateReadme(problemData) {
  const statsBlock = buildStatsSection(problemData);

  const programmersSection = `## Programmers\n\n${buildTable(
    problemData.programmers,
    'Programmers'
  )}`;
  const baekjoonSection = `## Baekjoon\n\n${buildTable(problemData.baekjoon, 'Baekjoon')}`;

  const fullTableBlock = `<!-- problem-table-start -->\n${programmersSection}\n\n${baekjoonSection}\n<!-- problem-table-end -->`;

  const readme = fs.readFileSync(README_PATH, 'utf-8');

  const newContent = readme
    .replace(/\*\*Solved Problems: \d+\*\*[\s\S]*?(?=<!-- problem-table-start -->)/, `${statsBlock}\n\n`)
    .replace(/<!-- problem-table-start -->[\s\S]*<!-- problem-table-end -->/, fullTableBlock);

  fs.writeFileSync(README_PATH, newContent, 'utf-8');
  console.log('✅ README updated with problem summary and table.');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 실행
const problems = getProblemsByPlatform();
updateReadme(problems);
