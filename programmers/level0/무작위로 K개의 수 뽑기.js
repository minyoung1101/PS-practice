// 무작위로 K개의 수 뽑기 :181858
// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const set = [...new Set(arr)];
  return set.length >= k ? set.slice(0, k) : set.concat(Array(k - set.length).fill(-1));
}
