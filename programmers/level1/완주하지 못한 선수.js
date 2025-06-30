// 완주하지 못한 선수 :42576
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// solution 1 - using sort
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (sortedp[i] !== sortedc[i]) return sortedp[i];
  }
}

// using 2 - using hash
function solution(participant, completion) {
  let pmap = new Map();
  for (let i = 0; i < participant.length; i++) {
    pmap.set(participant[i], (pmap.get(participant[i]) || 0) + 1);
    pmap.set(completion[i], (pmap.get(completion[i]) || 0) - 1);
  }
  for (let [p, v] of pmap) {
    if (v === 1) return p;
  }
}
