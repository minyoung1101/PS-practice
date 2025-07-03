// qr code :181903
// https://school.programmers.co.kr/learn/courses/30/lessons/181903

// solution 1
function solution(q, r, code) {
  return Array.from({ length: Math.ceil(code.length / q) }, (_, i) => code[i * q + r]).join('');
}

// solution 2
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q === r).join('');
}
