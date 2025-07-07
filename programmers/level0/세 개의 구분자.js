// 세 개의 구분자 :181862
// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
  myStr = myStr.replaceAll("a", "c");
  myStr = myStr.replaceAll("b", "c");
  const result = myStr.split("c").filter((v) => v);
  return result.length ? result : ["EMPTY"];
}
