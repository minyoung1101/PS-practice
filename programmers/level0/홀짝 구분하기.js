// 홀짝 구분하기 :181944
// https://school.programmers.co.kr/learn/courses/30/lessons/181944

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  // solution written by me
  console.log(`${n} is ${n % 2 === 0 ? 'even' : 'odd'}`);
});
