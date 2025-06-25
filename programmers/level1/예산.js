// 예산 :12982
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    let used_b = 0;
    let result = 0;
    for(let b of d.sort((a,b)=>a-b)) {
        if(used_b+b <= budget) {
            used_b += b;
            result++;
        }
    }
    return result;
}