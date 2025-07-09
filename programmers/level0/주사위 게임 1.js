// 주사위 게임 1 :181839
// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  return a % 2 && b % 2 ? a ** 2 + b ** 2 : a % 2 || b % 2 ? 2 * (a + b) : Math.abs(a - b);
}
