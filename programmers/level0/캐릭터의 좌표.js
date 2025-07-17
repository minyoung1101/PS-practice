// 캐릭터의 좌표
// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const mv = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
  const [minX, maxX] = [-(board[0] - 1) / 2, (board[0] - 1) / 2];
  const [minY, maxY] = [-(board[1] - 1) / 2, (board[1] - 1) / 2];
  let pos = [0, 0];
  for (let key of keyinput) {
    pos[0] += mv[key][0];
    pos[1] += mv[key][1];
    pos[0] = Math.max(minX, Math.min(pos[0], maxX));
    pos[1] = Math.max(minY, Math.min(pos[1], maxY));
  }
  return pos;
}
