// 문자열 밀기
// https://school.programmers.co.kr/learn/courses/30/lessons/120921

// solution 1
function solution(A, B) {
  if (A === B) return 0;
  for (let i = 1; i < A.length; i++) {
    const pushed = A.slice(-i) + A.slice(0, -i);
    if (pushed === B) return i;
  }
  return -1;
}

// solution 2
function solution(A, B) {
  return (B + B).indexOf(A);
}
