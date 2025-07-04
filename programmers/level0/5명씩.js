// 5명씩 :181886
// https://school.programmers.co.kr/learn/courses/30/lessons/181886

// solution 1
function solution(names) {
  return names.filter((_, i) => !(i % 5));
}

// solution 2
function solution(names) {
  let result = [];
  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }
  return result;
}
