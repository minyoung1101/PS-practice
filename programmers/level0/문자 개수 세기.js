// 문자 개수 세기 :181902
// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
  let counts = Array(52).fill(0);
  for (let c of my_string) {
    let code = c.charCodeAt();
    code >= 97 ? counts[code - 97 + 26]++ : counts[code - 65]++;
  }

  return counts;
}
