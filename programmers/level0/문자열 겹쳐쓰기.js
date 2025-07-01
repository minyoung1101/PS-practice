// 문자열 겹쳐쓰기 :181943
// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}
