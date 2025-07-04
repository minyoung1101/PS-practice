// 배열 조각하기 :181893
// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  query.forEach((v, i) => (i % 2 ? arr.splice(0, v) : arr.splice(v + 1)));
  return arr;
}
