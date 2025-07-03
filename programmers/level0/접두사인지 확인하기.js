// 접두사인지 확인하기 :181906
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

// solution 1
function solution(my_string, is_prefix) {
  let prefix = Array.from(my_string, (_, i) => my_string.slice(0, i + 1));
  return +prefix.includes(is_prefix);
}

// solution 2
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
