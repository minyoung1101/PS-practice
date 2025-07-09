// 배열의 평균값 :120817
// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}
