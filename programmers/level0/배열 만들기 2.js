// 배열 만들기 2 :181921
// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  let result = [];
  let list = ['5'];

  while (list.length) {
    let num = list.shift();

    if (+num > r) continue;
    if (+num >= l) result.push(+num);

    list.push(num + '0', num + '5');
  }
  return result.length ? result : [-1];
}
