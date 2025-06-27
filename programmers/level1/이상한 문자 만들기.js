// 이상한 문자 만들기 :12930
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let newList = [];
  for (let word of s.split(' ')) {
    newList.push(
      word.split('')
          .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
          .join('')
    );
  }
  return newList.join(' ');
}
