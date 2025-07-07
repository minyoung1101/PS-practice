// 문자열 바꿔서 찾기 :181864
// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  return +[...myString].map((v) => (v === "A" ? "B" : "A")).join("").includes(pat);
}
