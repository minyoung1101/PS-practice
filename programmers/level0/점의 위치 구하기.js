// 점의 위치 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120841

function solution(dot) {
  const [x, y] = dot;
  return x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3;
}
