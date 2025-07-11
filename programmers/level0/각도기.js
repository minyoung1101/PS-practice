// 각도기
// https://school.programmers.co.kr/learn/courses/30/lessons/120829

// solution 1
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// solution 2
function solution(angle) {
  return [0, 90, 91, 180].filter((v) => v <= angle).length;
}
