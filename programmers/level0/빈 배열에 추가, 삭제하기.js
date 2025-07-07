// 빈 배열에 추가, 삭제하기 :181860
// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
  let x = [];
  arr.forEach((v, i) => (flag[i] ? x.push(...Array(v * 2).fill(v)) : x.splice(-v)));
  return x;
}
