// 글자 지우기 :181900
// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  const remove = new Set(indices);
  return [...my_string].filter((_, i) => !remove.has(i)).join('');
}
