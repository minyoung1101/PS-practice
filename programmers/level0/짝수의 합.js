// 짝수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120831

// solution 1
function solution(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

// solution 2
function solution(n) {
  return Math.floor(n / 2) * (Math.floor(n / 2) + 1);
}
