// 특별한 이차원 배열 2 :181831
// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }
  return 1;
}
