// 문자열 섞기 :181942
// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  return str1.split('').map((v,i)=>v+str2[i]).join('')
}