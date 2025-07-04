// 순서 바꾸기 :181891
// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  return [...num_list.slice(n), ...num_list.slice(0, n)];
}
