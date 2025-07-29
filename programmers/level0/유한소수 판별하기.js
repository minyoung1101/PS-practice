// 유한소수 판별하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120878

function solution(a, b) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  b /= gcd;
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}
