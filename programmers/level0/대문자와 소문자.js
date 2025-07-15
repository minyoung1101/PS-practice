// 대문자와 소문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  return [...my_string]
    .map((v) => (v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()))
    .join('');
}
