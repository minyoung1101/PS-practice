// 잘라서 배열로 저장하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  let result = [];
  for (let i = 0; i < my_str.length; i += n) {
    result.push(my_str.slice(i, i + n));
  }
  return result;
}
