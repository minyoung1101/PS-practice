// 문자열 내 p와 y의 개수 :12916
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let p_cnt = s.split('').filter((c) => c === 'p' || c === 'P');
  let y_cnt = s.split('').filter((c) => c === 'y' || c === 'Y');

  return p_cnt.length === y_cnt.length;
}
