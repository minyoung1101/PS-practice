// 문자열 정렬하기 (1)
// https://school.programmers.co.kr/learn/courses/30/lessons/120850

// solution 1
function solution(my_string) {
  return [...my_string]
    .filter((v) => v >= '0' && v <= '9')
    .map(Number)
    .sort((a, b) => a - b);
}

// solution 2
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map(Number);
}
