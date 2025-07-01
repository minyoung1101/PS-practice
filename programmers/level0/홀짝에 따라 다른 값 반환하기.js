// 홀짝에 따라 다른 값 반환하기 :181935
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    if (n % 2 && num % 2) sum += num;
    else if (!(n % 2 || num % 2)) sum += num ** 2;
  }
  return sum;
}
