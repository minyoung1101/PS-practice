// 연속된 수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num, total) {
  const s = total / num - (num - 1) / 2;
  return Array.from({ length: num }, (_, i) => s + i);
}
