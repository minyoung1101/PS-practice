// 숨어있는 숫자의 덧셈 (2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  return my_string.split(/[A-z]/g).reduce((a, c) => a + +c, 0);
}
