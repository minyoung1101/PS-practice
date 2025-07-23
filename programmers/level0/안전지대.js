// 안전지대
// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  const y_len = board.length;
  const x_len = board[0].length;
  const danger = Array.from({ length: y_len }, () => Array(x_len).fill(0));
  const dir = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 0], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];
  const mines = [];
  for (let i = 0; i < y_len; i++) {
    for (let j = 0; j < x_len; j++) {
      if (board[i][j] === 1) mines.push([i, j]);
    }
  }

  for (let [x, y] of mines) {
    for (let [dy, dx] of dir) {
      const ny = y + dy;
      const nx = x + dx;
      if (ny >= 0 && ny < y_len && nx >= 0 && nx < x_len) danger[ny][nx] = 1;
    }
  }
  return danger.flat().filter((v) => v === 0).length;
}
