// 진료 순서 정하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120835

// solution 1
function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  const rank = new Map(sorted.map((v, i) => [v, i + 1]));
  return emergency.map((v) => rank.get(v));
}

// solution 2
function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
