// 중복된 숫자 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  return array.filter((v) => v === n).length;
}
