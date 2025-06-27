// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  if (s.includes('x') || s.includes('e')) return false;
  return Boolean((s.length == 4 || s.length == 6) & (+s >= 0));
}
