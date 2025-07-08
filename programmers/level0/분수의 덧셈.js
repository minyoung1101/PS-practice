// 분수의 덧셈 :120808
// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  let n = numer1 * denom2 + numer2 * denom1;
  let d = denom1 * denom2;
  let gcd = 0;
  for (let i = Math.min(n, d); i >= 1; i--) {
    if (n % i === 0 && d % i === 0) {
      gcd = i;
      break;
    }
  }
  return [n / gcd, d / gcd];
}
