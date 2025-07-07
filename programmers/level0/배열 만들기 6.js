// 배열 만들기 6 :181859
// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr) {
  let stk = [];
  arr.forEach((v) => (stk[stk.length - 1] === v ? stk.pop() : stk.push(v)));
  return stk.length ? stk : [-1];
}
