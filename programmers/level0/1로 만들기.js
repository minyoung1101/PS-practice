// 1로 만들기 :181880
// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
  let cnt = 0;
  num_list.forEach((num) => {
    while (num !== 1) {
      num = num % 2 ? (num - 1) / 2 : num /= 2;
      cnt++;
    }
  });
  return cnt;
}
