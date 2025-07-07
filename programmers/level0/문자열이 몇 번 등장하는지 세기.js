// 문자열이 몇 번 등장하는지 세기 :181871
// https://school.programmers.co.kr/learn/courses/30/lessons/181871

// solution 1
function solution(myString, pat) {
  return [...myString].reduce((acc, _, i) => {
    return myString.slice(i, i + pat.length) === pat ? acc + 1 : acc;
  }, 0);
}

// solution 2
function solution(myString, pat) {
  let cnt = 0;
  let idx = 0;
  while ((idx = myString.indexOf(pat, idx)) !== -1) {
    cnt++;
    idx++;
  }

  return cnt;
}
