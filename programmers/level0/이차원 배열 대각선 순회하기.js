// 이차원 배열 대각선 순회하기 :181829
// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board, k) {
  return board.reduce( (acc, row, i) => 
        acc + row.reduce((a, c, j) => 
        a + (i + j <= k ? c : 0), 0), 0);
}
