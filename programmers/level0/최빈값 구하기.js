// 최빈값 구하기 :120812
// https://school.programmers.co.kr/learn/courses/30/lessons/120812

// solution 1
function solution(array) {
  const cnt = new Map();
  array.forEach((v) => cnt.set(v, (cnt.get(v) || 0) + 1));
  const max = Math.max(...cnt.values());
  const result = [...cnt.entries()].filter(([_, v]) => v === max);
  return result.length > 1 ? -1 : result[0][0];
}

// solution 2
function solution(array) {
  const cnt = array.reduce((m, n) => m.set(n, (m.get(n) || 0) + 1), new Map());
  const sorted = [...cnt.entries()].sort((a, b) => b[1] - a[1]);
  return sorted.length === 1 || sorted[0][1] > sorted[1][1] ? sorted[0][0] : -1;
}
