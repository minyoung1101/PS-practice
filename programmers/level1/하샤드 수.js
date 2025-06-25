// 하샤드 수 :12947
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

// solution 1
return !(x % String(x).split('').reduce((a, c) => a + Number(c), 0));

// solution 2
let sum = 0;
let remain = x;
while (remain > 0) {
  sum += remain % 10;
  remain = Math.floor(remain / 10);
}
return !(x % sum);
