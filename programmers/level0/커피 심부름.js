// 커피 심부름 :181837
// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  return order.reduce((a, c) => a + (c.includes('cafelatte') ? 5000 : 4500), 0);
}
