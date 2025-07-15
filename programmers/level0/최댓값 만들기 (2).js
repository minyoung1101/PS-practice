// 최댓값 만들기 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  const sorted = numbers.sort((a, b) => a - b);
  const [a, b] = [...sorted].slice(0, 2);
  const [c, d] = [...sorted].slice(-2);
  return Math.max(ab, cd);
}
