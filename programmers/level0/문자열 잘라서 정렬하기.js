// 문자열 잘라서 정렬하기 :181866
// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
  return myString.split("x").filter((v) => v).sort();
}
