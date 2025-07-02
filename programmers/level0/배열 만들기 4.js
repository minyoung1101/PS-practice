// 배열 만들기 4 :181918
// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (!stk.length) {
      stk.push(arr[i]);
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
      } else {
        stk.pop();
        i--;
      }
    }
  }
  return stk;
}
