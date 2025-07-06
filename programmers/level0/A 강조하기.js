// A 강조하기 :181874
// https://school.programmers.co.kr/learn/courses/30/lessons/181874

// solution 1
function solution(myString) {
  return [...myString]
    .map((v) => (v === "a" || v === "A" ? "A" : v.toLowerCase()))
    .join("");
}

// solution 2
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
