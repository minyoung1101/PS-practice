// k의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let num = Array.from({ length: j - i + 1 }, (_, idx) => i + idx).join('');
  return num.split(k).length - 1;
}
