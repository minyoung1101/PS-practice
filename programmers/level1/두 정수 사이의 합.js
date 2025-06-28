// 두 정수 사이의 합 :12912
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let [s, l] = [a, b].sort((a, b) => a - b);
  return ((l - s + 1) / 2) * (s + l);
}
