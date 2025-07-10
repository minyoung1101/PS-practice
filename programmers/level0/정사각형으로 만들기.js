// 정사각형으로 만들기 :181830
// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  const [row, col] = [arr[0].length, arr.length];
  const max_len = Math.max(row, col);
  return Array.from({ length: max_len }, (_, i) =>
          Array.from({ length: max_len }, (_, j) => 
            (i < col && j < row ? arr[i][j] : 0))
  );
}
