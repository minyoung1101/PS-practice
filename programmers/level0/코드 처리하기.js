// 코드 처리하기 :181932
// https://school.programmers.co.kr/learn/courses/30/lessons/181932

function solution(code) {
  let mode = 0;
  let ret = '';
  for (let i = 0; i < code.length; i++) {
    if (+code[i]) mode = +!mode;
    else if (i % 2 === mode) ret += code[i];
  }
  return ret || 'EMPTY';
}
