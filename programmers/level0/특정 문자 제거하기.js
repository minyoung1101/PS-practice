// 특정 문자 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120826

// solution 1
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}

// solution 2
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}
