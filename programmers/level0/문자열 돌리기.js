// 문자열 돌리기 :181945
// https://school.programmers.co.kr/learn/courses/30/lessons/181945

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  // solution written by me
  str.split('').forEach((c) => console.log(c));
});
