// 문자열 여러 번 뒤집기 :181913
// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
  let result = [...my_string];
  for (let [s, e] of queries) {
    let sliced = [...result].splice(s, e - s + 1);
    result.splice(s, e - s + 1, ...sliced.reverse());
  }
  return result.join('');
}
