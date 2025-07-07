// 간단한 식 계산하기 :181865
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
  const oph = {
    "*": (a, b) => a * b,
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  const [a, op, b] = binomial.split(" ");
  return oph[op](+a, +b);
}
