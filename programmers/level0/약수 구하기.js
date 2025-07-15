// 약수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120897

// solution 1
function solution(n) {
  let result1 = [];
  let result2 = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result1.push(i);
      if (n / i !== i) result2.unshift(n / i);
    }
  }
  return [...result1, ...result2];
}

// solution 2
function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result.push(i);
  }
  return result;
}
