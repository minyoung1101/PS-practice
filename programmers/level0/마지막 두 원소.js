// 마지막 두 원소 :181927
// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  let [end, prev] = [num_list[num_list.length - 1], num_list[num_list.length - 2]];
  return [...num_list, end > prev ? end - prev : end * 2];
}
