// 9로 나눈 나머지 :181914
// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  return [...number].reduce((a, c) => a + +c, 0) % 9;
}
