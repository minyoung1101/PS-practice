// 문자열 뒤집기 :181905
// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
  return (
    my_string.slice(0, s) +
    [...my_string.slice(s, e + 1)].reverse().join('') +
    my_string.slice(e + 1)
  );
}
