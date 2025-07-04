// 수열과 구간 쿼리 1 :181883
// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  });
  return arr;
}
