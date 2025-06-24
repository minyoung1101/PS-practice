// 숫자 짝꿍 :131128
// https://school.programmers.co.kr/learn/courses/30/lessons/131128#

function solution(X, Y) {
    let x_count = [0,0,0,0,0,0,0,0,0,0];
    let y_count = [0,0,0,0,0,0,0,0,0,0];
    let m_count = [0,0,0,0,0,0,0,0,0,0];
    X.split('').forEach(x=>x_count[x]++);
    Y.split('').forEach(y=>y_count[y]++);
    
    let result = m_count.map((e,i) => 
            String(i).repeat(Math.min(x_count[i],y_count[i])))
            .sort().reverse().join('');
    
    if(result[0] === '0') result = '0';
    return result? result: '-1';
}