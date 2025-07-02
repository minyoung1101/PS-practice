// 수 조작하기 2 :181925
// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
  const ctr_r = { '1': 'w', '-1': 's', '10': 'd', '-10': 'a' };
  let result = '';
  for (let i = 1; i < numLog.length; i++) {
    result += ctr_r[String(numLog[i] - numLog[i - 1])];
  }
  return result;
}
