// 문자열 정수의 합 :181849
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
  return [...num_str].reduce((acc, cur) => acc + +cur, 0);
}
