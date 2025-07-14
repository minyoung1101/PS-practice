// 7의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120912

// solution 1
function solution(array) {
  return array.reduce((a, c) => a + [...String(c)].filter((v) => v === '7').length, 0);
}

// solution 2
function solution(array) {
  return array.join('').split(7).length - 1;
}
