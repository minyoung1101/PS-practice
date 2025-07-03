// 접미사 배열 :181909
// https://school.programmers.co.kr/learn/courses/30/lessons/181909

function solution(my_string) {
  return Array.from(my_string, (_, i) => my_string.slice(i)).sort();
}
