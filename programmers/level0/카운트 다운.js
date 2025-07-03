// 카운트 다운 :181899
// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start_num, end_num) {
  return Array.from({ length: start_num - end_num + 1 }, (_, i) => start_num - i);
}
