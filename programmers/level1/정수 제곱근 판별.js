// 정수 제곱근 판별 :12934
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let x = Math.sqrt(n);
    return (n%x)? -1: (x+1)*(x+1);
}