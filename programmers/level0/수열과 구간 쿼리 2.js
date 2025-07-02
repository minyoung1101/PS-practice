// 수열과 구간 쿼리 2 :181923
// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  let result = [];
  for (let [s, e, k] of queries) {
    let filtered = arr.slice(s, e + 1).filter((v) => v > k);
    result.push(filtered.length ? Math.min(...filtered) : -1);
  }
  return result;
}
