// 모음 제거
// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// solution 1
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

// solution 2
function solution(my_string) {
  return [...my_string].filter((v) => !'aeiou'.includes(v)).join('');
}
