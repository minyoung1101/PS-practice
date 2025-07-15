// 369게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

// solution 1
function solution(order) {
  return [...String(order)].filter((v) => '369'.includes(v)).length;
}

// solution 2
function solution(order) {
  return [...String(order).matchAll(/[369]/g)].length;
}
