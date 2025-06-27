// 자연수 뒤집어 배열로 만들기 :12932
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

// solution 1
return String(n).split('').reverse().map(x=>+x);

// solution 2
let result = [];
    while(n) {
        result.push(n%10);
        n = Math.floor(n/10);
    }
    return result;