// 공배수 :181936
// https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number, n, m) {
  return +!(number % m || number % n);
}
