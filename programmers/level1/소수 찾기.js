// 소수 찾기 :12921
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  const isPrime = Array.from({ length: n + 1 }, () => true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.filter(Boolean).length;
}
