// 다항식 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120863?language=javascript

function solution(polynomial) {
  let x = 0;
  let c = 0;
  polynomial.split(" + ").forEach((term) => {
    if (term.includes("x")) x += +term.replace("x", "") || 1;
    else c += +term;
  });
  if (x && c) return `${x === 1 ? "" : x}x + ${c}`;
  if (x) return `${x === 1 ? "" : x}x`;
  return `${c}`;
}
