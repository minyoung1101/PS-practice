// 배열 만들기 3 :181895
// https://school.programmers.co.kr/learn/courses/30/lessons/181895

// solution 1
function solution(arr, intervals) {
  return intervals.reduce((a, [s, e]) => [...a, ...arr.slice(s, e + 1)], []);
}

// solution 2
function solution(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals;
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
}
