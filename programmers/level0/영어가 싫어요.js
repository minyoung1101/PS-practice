// 영어가 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < 10; i++) numbers = numbers.replaceAll(nums[i], i);
  return +numbers;
}
