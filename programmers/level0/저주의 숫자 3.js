// 저주의 숫자 3
// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  let num = 0;
  while (n) {
    num++;
    if (num % 3 === 0 || String(num).includes("3")) continue;
    n--;
  }
  return num;
}
