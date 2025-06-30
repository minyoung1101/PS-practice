// 다트 게임 :17682
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  let scores = [];
  let i = 0;
  while (i < dartResult.length) {
    // score
    let score =
      dartResult[i] === '1' && dartResult[i + 1] === '0' ? ((i += 2), 10) : +dartResult[i++];

    // area
    let square = { S: 1, D: 2, T: 3 }[dartResult[i++]];
    score = Math.pow(score, square);

    // option
    if (dartResult[i] === '*') {
      if (scores.length) scores[scores.length - 1] *= 2;
      score *= 2;
      i++;
    } else if (dartResult[i] === '#') {
      score *= -1;
      i++;
    }
    scores.push(score);
  }
  return scores.reduce((a, c) => a + c);
}
