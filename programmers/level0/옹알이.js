// 옹알이
// https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  const babbls = ['aya', 'ye', 'woo', 'ma'];
  let result = 0;
  for (let word of babbling) {
    babbls.forEach((v) => (word = word.replace(v, ' ')));
    if (!word.trim().length) result++;
  }
  return result;
}
