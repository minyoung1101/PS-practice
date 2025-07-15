// 인덱스 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  let result = [...my_string];
  [result[num1], result[num2]] = [result[num2], result[num1]];
  return result.join('');
}
