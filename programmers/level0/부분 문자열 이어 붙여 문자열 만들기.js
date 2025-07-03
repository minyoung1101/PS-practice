// 부분 문자열 이어 붙여 문자열 만들기 :181911
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
  return parts.map(([s, e], i) => my_strings[i].slice(s, e + 1)).join('');
}
