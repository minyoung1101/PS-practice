// 평균 구하기 :12944
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((a, c) => a + c) / arr.length;
}