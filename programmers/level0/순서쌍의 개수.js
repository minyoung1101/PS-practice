// 순서쌍의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120836

function solution(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) cnt++;
  }
  return Number.isInteger(Math.sqrt(n)) ? cnt * 2 - 1 : cnt * 2;
}
