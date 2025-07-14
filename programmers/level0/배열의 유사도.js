// 배열의 유사도
// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}
