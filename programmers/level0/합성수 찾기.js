// 합성수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/120846

// solution 1
function solution(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (Number.isInteger(i / j)) {
        result++;
        break;
      }
    }
  }
  return result;
}

// solution 2
function solution(n) {
  const isNotPrime = Array.from({ length: n + 1 }, () => 0);
  isNotPrime[0] = isNotPrime[1] = 0;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!isNotPrime[i]) {
      for (let j = i * i; j <= n; j += i) isNotPrime[j] = 1;
    }
  }
  return isNotPrime.reduce((acc, cur) => acc + cur);
}
