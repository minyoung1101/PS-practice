// 배열의 원소만큼 추가하기 :181861
// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  return arr.flatMap((v) => Array(v).fill(v));
}
