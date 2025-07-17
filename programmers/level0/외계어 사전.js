// 외계어 사전
// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell, dic) {
  for (let word of dic) {
    let r = word;
    spell.forEach((v) => (r = r.replace(v, 'A')));
    if (r === 'A'.repeat(spell.length)) {
      return 1;
    }
  }
  return 2;
}
