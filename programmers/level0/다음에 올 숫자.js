// 다음에 올 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  const len = common.length;
  const [n3, n2, n1] = [common[len - 1], common[len - 2], common[len - 3]];
  return n3 - n2 === n2 - n1 ? n3 + n3 - n2 : (n3 * n3) / n2;
}
