// 전국 대회 선발 고사 :181851
// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((v, i) => [v, i])
    .filter(([v, i]) => attendance[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3);
  return 10000 * a[1] + 100 * b[1] + c[1];
}
