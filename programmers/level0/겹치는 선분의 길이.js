// 겹치는 선분의 길이
// https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
  let result = new Set();
  const comps = [
    [lines[0], lines[1]],
    [lines[0], lines[2]],
    [lines[1], lines[2]],
  ];

  for (let [[s1, e1], [s2, e2]] of comps) {
    for (let i = Math.max(s1, s2); i < Math.min(e1, e2); i++) {
      result.add(i);
    }
  }
  return result.size;
}
