// 그림 확대 :181836
// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  return picture.flatMap((line) => Array(k).fill([...line].map((c) => c.repeat(k)).join('')));
}
