// n보다 커질 때까지 더하기 :181884
// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
  return numbers.reduce((a, c) => (a <= n ? a + c : a), 0);
}
