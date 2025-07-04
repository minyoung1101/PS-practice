// 리스트 자르기 :181897
// https://school.programmers.co.kr/learn/courses/30/lessons/181897

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;
  const actions = {
    1: num_list.slice(0, b + 1),
    2: num_list.slice(a),
    3: num_list.slice(a, b + 1),
    4: num_list.slice(a, b + 1).filter((_, i) => !(i % c)),
  };
  return actions[n];
}
