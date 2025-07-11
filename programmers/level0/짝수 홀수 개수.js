// 짝수 홀수 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120824

// solution 1
function solution(num_list) {
  const odd_cnt = num_list.filter((v) => v % 2).length;
  return [num_list.length - odd_cnt, odd_cnt];
}

// solution 2
function solution(num_list) {
  let result = [0, 0];
  for (let n of num_list) {
    result[n % 2]++;
  }
  return result;
}
