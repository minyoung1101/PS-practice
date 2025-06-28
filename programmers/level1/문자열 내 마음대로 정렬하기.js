// 문자열 내 마음대로 정렬하기 :12915
// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) return a < b ? -1 : a > b ? 1 : 0;
    return a[n] < b[n] ? -1 : 1;
  });
  return strings;
}
