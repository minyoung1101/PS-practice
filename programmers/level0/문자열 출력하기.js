// 문자열 출력하기 :181952
// https://school.programmers.co.kr/learn/courses/30/lessons/181952

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
    console.log(str);
});