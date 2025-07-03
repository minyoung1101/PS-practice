// 주사위 게임 3 :181916
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  const numbers = {};
  [a, b, c, d].forEach((n) => (numbers[n] = (numbers[n] || 0) + 1));
  const counts = Object.entries(numbers)
    .map(([num, cnt]) => [Number(num), cnt])
    .sort((a, b) => b[1] - a[1]);

  const [p, pCount] = counts[0];
  if (counts.length === 1) return 1111 * p;
  if (counts.length === 2) {
    const q = counts[1][0];
    return pCount === 3 ? Math.pow(10 * p + q, 2) : (p + q) * Math.abs(p - q);
  }
  if (counts.length === 3) return counts[1][0] * counts[2][0];

  return p;
}
