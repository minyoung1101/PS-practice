// 길이에 따른 연산 :181879
// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
  return num_list.reduce((a, c) => (num_list.length >= 11 ? a + c : a * c));
}
