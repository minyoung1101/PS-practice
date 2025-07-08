// 문자열 묶기 :181855
// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  const len = {};
  strArr.forEach((v) => (len[v.length] = (len[v.length] || 0) + 1));
  return Math.max(...Object.values(len));
}
