// 배열 회전시키기
// https://school.programmers.co.kr/learn/courses/30/lessons/120844

// solution 1
function solution(numbers, direction) {
  direction === 'right' ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift());
  return numbers;
}

// solution 2
function solution(numbers, direction) {
  const len = numbers.length;
  return direction === 'right'? 
    [numbers[len - 1], ...numbers.slice(0, len - 1)]: 
    [...numbers.slice(1), numbers[0]];
}
