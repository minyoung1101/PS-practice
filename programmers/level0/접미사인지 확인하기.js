// 접미사인지 확인하기 :181908
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

// soution 1
function solution(my_string, is_suffix) {
  let suffix = Array.from(my_string, (_, i) => my_string.slice(i));
  return +suffix.includes(is_suffix);
}

// solution 2
function solution(my_string, is_suffix) {
  return +my_string.endsWith(is_suffix);
}
