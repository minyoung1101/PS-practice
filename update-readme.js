const fs = require('fs');
const path = require('path');

const TARGET_FOLDERS = ['baekjoon', 'programmers'];
const README_PATH = path.join(__dirname, 'README.md');

function countJsFiles(folder) {
  const folderPath = path.join(__dirname, folder);
  let count = 0;

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        count++;
      }
    }
  }

  walk(folderPath);
  return count;
}

function generateStats() {
  const stats = {};
  let total = 0;

  for (const folder of TARGET_FOLDERS) {
    const count = countJsFiles(folder);
    stats[folder] = count;
    total += count;
  }

  stats.total = total;
  return stats;
}

function updateReadme(stats) {
  const readme = fs.readFileSync(README_PATH, 'utf-8');

  const summaryBlock = `**Solved Problems: ${stats.total}**
- Baekjoon: ${stats.baekjoon}
- Programmers: ${stats.programmers}`;

  const updated = readme.replace(
    /\*\*Solved Problems: \d+\*\*[\s\S]*?- Programmers: \d+/,
    summaryBlock
  );

  fs.writeFileSync(README_PATH, updated, 'utf-8');
  console.log('✅ README updated with latest problem stats!');
}

const stats = generateStats();
updateReadme(stats);
