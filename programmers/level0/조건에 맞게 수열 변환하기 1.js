// 조건에 맞게 수열 변환하기 1 :181882
// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(arr) {
  return arr.map((x) => {
    if (x < 50 && x % 2) return x * 2;
    else if (x >= 50 && !(x % 2)) return x / 2;
    return x;
  });
}
