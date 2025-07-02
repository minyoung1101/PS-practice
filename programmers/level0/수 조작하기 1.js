// 수 조작하기 1 :181926
// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  const ctr = { w: +1, s: -1, d: +10, a: -10 };
  control.split('').forEach((v) => (n += ctr[v]));
  return n;
}
