// 피자 나눠 먹기 (2) :120815
// https://school.programmers.co.kr/learn/courses/30/lessons/120815

function solution(n) {
  let cnt = 1;
  while ((6 * cnt) % n) cnt++;
  return cnt;
}
