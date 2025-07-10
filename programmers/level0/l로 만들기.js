// l로 만들기 :181834
// https://school.programmers.co.kr/learn/courses/30/lessons/181834

// solution 1
function solution(myString) {
  return [...myString].map((v) => (v < 'l' ? 'l' : v)).join('');
}

// solution 2
function solution(myString) {
  return myString.replace(/[a-k]/g, 'l');
}
