// 암호 해독
// https://school.programmers.co.kr/learn/courses/30/lessons/120892

function solution(cipher, code) {
  return [...cipher].filter((v, i) => !((i + 1) % code)).join('');
}
