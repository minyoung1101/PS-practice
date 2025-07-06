// 조건에 맞게 수열 변환하기 2 :181881
// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr) {
  let arr1 = [...arr];
  let arr2 = [];
  let result = 0;
  while (true) {
    arr2 = arr1.map((v) => v >= 50 && !(v % 2)? v/2: v<50 && v%2? v*2+1: v);
    if (String(arr1) == String(arr2)) return result;
    result++;
    arr1 = arr2;
  }
}
