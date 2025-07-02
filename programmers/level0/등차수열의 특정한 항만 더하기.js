// 등차수열의 특정한 항만 더하기 :181931
// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  return included.map((v, i) => (v = v * (a + d * i))).reduce((acc, cur) => acc + cur);
}
