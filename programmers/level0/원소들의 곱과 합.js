// 원소들의 곱과 합 :181929
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  return +(num_list.reduce((a, c) => a * c) < num_list.reduce((a, c) => a + c) ** 2);
}
