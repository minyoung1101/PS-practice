// 한 번만 등장한 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const cnt = {};
  for (let c of s) cnt[c] = (cnt[c] || 0) + 1;
  return Object.entries(cnt)
    .filter(([k, v]) => v === 1)
    .map(([k]) => k)
    .sort()
    .join('');
}
