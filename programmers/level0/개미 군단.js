// 개미 군단
// https://school.programmers.co.kr/learn/courses/30/lessons/120837

function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp %= 5) / 3) + (hp % 3);
}
