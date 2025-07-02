// 콜라츠 수열 만들기 :181919
// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  let result = [n];
  while (n !== 1) {
    n = n % 2 ? 3 * n + 1 : n / 2;
    result.push(n);
  }
  return result;
}
