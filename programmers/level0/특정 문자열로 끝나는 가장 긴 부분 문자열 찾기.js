// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기 :181872
// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
