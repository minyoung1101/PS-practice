// 중복된 문자 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  return [...new Set(my_string)].join('');
}
