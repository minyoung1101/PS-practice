// 구슬을 나누는 경우의 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120840

// solution 1
function solution(balls, share) {
  let result = 1;
  for (let i = 1; i <= share; i++) {
    result *= balls - i + 1;
    result /= i;
  }
  return result;
}

// solution 2
function solution(balls, share) {
  function facto(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }
  return Math.round(facto(balls) / facto(balls - share) / facto(share));
}
