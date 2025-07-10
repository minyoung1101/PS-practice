// 정수를 나선형으로 배치하기 :181832
// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
  const mat = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let [right, bottom, left, top] = [n - 1, n - 1, 0, 0];
  while (num <= n * n) {
    // right
    for (let j = left; j <= right; j++) mat[top][j] = num++;
    top++;

    // bottom
    for (let i = top; i <= bottom; i++) mat[i][right] = num++;
    right--;

    // left
    for (let j = right; j >= left; j--) mat[bottom][j] = num++;
    bottom--;

    // top
    for (let i = bottom; i >= top; i--) mat[i][left] = num++;
    left++;
  }
  return mat;
}
