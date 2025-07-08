// 배열의 길이를 2의 거듭제곱으로 만들기 :181857
// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  const maxLen = Math.pow(2, Math.ceil(Math.log2(arr.length)));
  return [...arr, ...Array(maxLen - arr.length).fill(0)];
}
