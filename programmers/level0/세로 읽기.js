// 세로 읽기 :181904
// https://school.programmers.co.kr/learn/courses/30/lessons/181904

// solution 1
function solution(my_string, m, c) {
  return Array.from({ length: my_string.length / m }, (_, i) => my_string[i * m + c - 1]).join('');
}

// solution 2
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join('');
}
