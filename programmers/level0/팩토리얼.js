// 팩토리얼
// https://school.programmers.co.kr/learn/courses/30/lessons/120848

function solution(n) {
  if (n === 1) return 1;

  let fact = 1;
  let i = 2;
  while (fact <= n) fact *= i++;
  
  return i - 2;
}
