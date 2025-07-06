// 특정한 문자를 대문자로 바꾸기 :181873
// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
