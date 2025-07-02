// 이어 붙인 수 :181928
// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  return (
    Number(num_list.filter((v) => v % 2).join('')) +
    Number(num_list.filter((v) => !(v % 2)).join(''))
  );
}
