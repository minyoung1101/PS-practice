// 컨트롤 제트
// https://school.programmers.co.kr/learn/courses/30/lessons/120853

function solution(s) {
  let num = s.split(' ').map((v, i, arr) => (v === 'Z' ? (v = -arr[i - 1]) : +v));
  return num.reduce((a, c) => a + c, 0);
}
