// 소인수분해
// https://school.programmers.co.kr/learn/courses/30/lessons/120852

function solution(n) {
  let result = new Set();
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      n /= i;
      result.add(i--);
    }
  }
  if (n > 1) result.add(n);
  return [...result];
}
