// 외계행성의 나이 :120834
// https://school.programmers.co.kr/learn/courses/30/lessons/120834

// solution 1
function solution(age) {
  return [...String(age)].map((v) => String.fromCharCode(+v + 97)).join("");
}

// solution 2
function solution(age) {
  return [...String(age)].map((v) => "abcdefghij"[v]).join("");
}
