// 왼쪽 오른쪽 :181890
// https://school.programmers.co.kr/learn/courses/30/lessons/181890

// solution 1
function solution(str_list) {
  for (let i = 0; i < str_list.length; i++) {
    if (str_list[i] == 'l') return str_list.slice(0, i);
    else if (str_list[i] == 'r') return str_list.slice(i + 1);
  }
  return [];
}

// solution 2
function solution(str_list) {
  const idx = str_list.findIndex((v) => v === 'l' || v === 'r');
  if (idx === -1) return [];
  return str_list[idx] === 'l' ? str_list.slice(0, idx) : str_list.slice(idx + 1);
}
