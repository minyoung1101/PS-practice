// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  return [...String(n)].reduce((a, c) => a + +c, 0);
}
