// 로그인 성공?
// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw, db) {
  const [tid, tpw] = id_pw;
  for (let [id, pw] of db) {
    if (tid === id) return tpw === pw ? 'login' : 'wrong pw';
  }
  return 'fail';
}
