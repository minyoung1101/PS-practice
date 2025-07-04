// 첫 번째로 나오는 음수 :181896
// https://school.programmers.co.kr/learn/courses/30/lessons/181896

// solution 1
function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) return i;
  }
  return -1;
}

// solution 2
function solution(num_list) {
  return num_list.findIndex((v, i) => v < 0);
}
