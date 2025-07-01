// 대소문자 바꿔서 출력하기 :181949
// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // solution written by me
    console.log(str.split('').map(c=>c===c.toUpperCase()? c.toLowerCase(): c.toUpperCase()).join(''));
});