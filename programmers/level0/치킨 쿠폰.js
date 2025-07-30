// 치킨 쿠폰
// https://school.programmers.co.kr/learn/courses/30/lessons/120884

function solution(chicken) {
  let coupons = chicken;
  let services = 0;
  while (coupons >= 10) {
    services += Math.floor(coupons / 10);
    coupons = Math.floor(coupons / 10) + (coupons % 10);
  }
  return services;
}
