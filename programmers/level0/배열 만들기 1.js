// 배열 만들기 1 :181901
// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  return Array.from({ length: Math.floor(n / k) }, (_, i) => (i + 1) * k);
}
