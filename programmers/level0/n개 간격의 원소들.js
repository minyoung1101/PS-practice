// n개 간격의 원소들 :181888
// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  return num_list.filter((_, i) => !(i % n));
}
