// 평행
// https://school.programmers.co.kr/learn/courses/30/lessons/120875

function solution(dots) {
  const pairs = [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [0, 3, 1, 2],
  ];
  for (let [d1, d2, d3, d4] of combs) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = [
      dots[d1],
      dots[d2],
      dots[d3],
      dots[d4],
    ];
    if ((x2 - x1) * (y4 - y3) === (x4 - x3) * (y2 - y1)) return 1;
  }
  return 0;
}
