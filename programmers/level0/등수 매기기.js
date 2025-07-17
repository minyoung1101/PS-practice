// 등수 매기기
// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score) {
  score = score.map(([v1, v2]) => (v1 + v2) / 2);
  let sorted = [...score].sort((a, b) => b - a);
  return score.map((v) => sorted.indexOf(v) + 1);
}
