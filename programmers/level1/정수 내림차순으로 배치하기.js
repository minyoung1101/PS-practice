// 정수 내림차순으로 배치하기 :12933
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    return +String(n).split('').sort().reverse().join('');
}