// 특별한 이차원 배열 1 :181833
// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  return Array.from({ length: n }, (_, i) =>
         Array.from({ length: n }, (_, j) => (i == j ? 1 : 0)));
}
