// 나누어 떨어지는 숫자 배열 :12910
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  let answer = arr.filter((n) => !(n % divisor));
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
