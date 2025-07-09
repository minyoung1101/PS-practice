// 옷가게 할인 받기 :120818
// https://school.programmers.co.kr/learn/courses/30/lessons/120818

function solution(price) {
  let rate = 1;
  if (price >= 100000) rate = 0.95;
  if (price >= 300000) rate = 0.9;
  if (price >= 500000) rate = 0.8;
  return Math.floor(price * rate);
}
