// 배열 만들기 5 :181912
// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
  return intStrs.map((n) => (n = +n.slice(s, s + l))).filter((n) => n > k);
}
