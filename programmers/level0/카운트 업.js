// 카운트 업 :181920
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start_num, end_num) {
  return Array.from({ length: end_num - start_num + 1 }, (v, i) => start_num + i);
}
