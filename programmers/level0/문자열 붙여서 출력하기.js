// 문자열 붙여서 출력하기 :181946
// https://school.programmers.co.kr/learn/courses/30/lessons/181946

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str1 = input[0];
  str2 = input[1];
  // solution written by me
  console.log(str1 + str2);
});
