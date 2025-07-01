// 조건 문자열 :181934
// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  if (ineq === '>' && n > m) return 1;
  if (ineq === '<' && n < m) return 1;
  if (eq === '=' && n === m) return 1;
  return 0;
}
