// 0 떼기 :181847
// https://school.programmers.co.kr/learn/courses/30/lessons/181847

// solution 1
function solution(n_str) {
  while (n_str[0] === '0') n_str = n_str.slice(1);
  return n_str;
}

// solution 2
function solution(n_str) {
  return String(Number(n_str));
}
