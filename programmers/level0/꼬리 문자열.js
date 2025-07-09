// 꼬리 문자열 :181841
// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
  return str_list.filter((v) => !v.includes(ex)).join('');
}
