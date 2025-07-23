// 삼각형의 완성조건(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}
