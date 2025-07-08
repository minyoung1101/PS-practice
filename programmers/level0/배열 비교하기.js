// 배열 비교하기 :181956
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) return arr1.length > arr2.length ? 1 : -1;

  const diff = arr1.reduce((a, c) => a + c, 0) - arr2.reduce((a, c) => a + c, 0);
  return diff > 0 ? 1 : diff < 0 ? -1 : 0;
}
