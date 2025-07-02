// 주사위 게임 2 :181930
// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  let score = a + b + c;
  if (a === b || a === c || b === c) score *= [a, b, c].reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
  if (a === b && b === c) score *= [a, b, c].reduce((acc, cur) => acc + Math.pow(cur, 3), 0);

  return score;
}
