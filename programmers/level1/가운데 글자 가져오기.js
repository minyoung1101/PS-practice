// 가운데 글자 가져오기 :12903
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  let c_idx = Math.ceil(s.length / 2);
  return s.slice(c_idx - 1, c_idx + !(s.length % 2));
}
