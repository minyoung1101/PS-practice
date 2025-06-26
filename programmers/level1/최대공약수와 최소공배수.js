// 최대공약수와 최소공배수 :12940
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    let gcd = 1;
    for(let i=1;i<=Math.min(n,m);i++){
        if(n%i===0 && m%i===0){
            gcd = i;
        }
    }
    let lcm = n*m/gcd;
    return [gcd,lcm];
}