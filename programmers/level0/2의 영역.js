// 2의 영역 :181894
// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  const s = arr.indexOf(2);
  const e = arr.lastIndexOf(2);
  return s === -1 ? [-1] : arr.slice(s, e + 1);
}
