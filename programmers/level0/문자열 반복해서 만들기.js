// 문자열 반복해서 만들기 :181950
// https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    // solution written by me
    console.log(str.repeat(n));
});