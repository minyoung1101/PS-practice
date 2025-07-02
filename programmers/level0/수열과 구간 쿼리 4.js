// 수열과 구간 쿼리 4 :181922
// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr, queries) {
  for (let [s, e, k] of queries) {
    arr = arr.map((v, i) => (s <= i && i <= e && i % k === 0 ? v + 1 : v));
  }
  return arr;
}
