// 문자열 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120902

function solution(my_string) {
  let sign = 1;
  let result = 0;
  for (let n of my_string.split(' ')) {
    if (n === '+') sign = 1;
    else if (n === '-') sign = -1;
    else result += +n * sign;
  }
  return result;
}
