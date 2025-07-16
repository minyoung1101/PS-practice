// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890#

function solution(array, n) {
    return array.sort((a,b)=>Math.abs(a-n)-Math.abs(b-n)||a-b)[0]
}