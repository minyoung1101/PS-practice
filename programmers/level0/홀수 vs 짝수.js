// 홀수 vs 짝수 :181887
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

// solution 1
function solution(num_list) {
  const odd = num_list.reduce((a, c, i) => (i % 2 === 1 ? a + c : a), 0);
  const even = num_list.reduce((a, c, i) => (i % 2 === 0 ? a + c : a), 0);
  return Math.max(odd, even);
}

// solution 2
function solution(num_list) {
  let [odd, even] = [0, 0];
  num_list.forEach((v, i) => (i % 2 ? (odd += v) : (even += v)));
  return Math.max(odd, even);
}
