// 가장 큰 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  const max = Math.max(...array);
  return [max, array.indexOf(max)];
}
