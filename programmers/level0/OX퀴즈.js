// OX퀴즈
// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const calc = { '+': (a, b) => a + b, '-': (a, b) => a - b };
  return quiz.map((q) => {
    const [a, op, b, _, c] = q.split(' ');
    return calc[op](+a, +b) === +c ? 'O' : 'X';
  });
}
