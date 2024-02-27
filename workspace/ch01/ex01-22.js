function sum(a, b = 0) {
  return a + b;
}
console.log(sum(10, 20)); // 30
console.log(sum(30)); // 30

// 구조 분해 할당과 같이 사용
function sum([x = 1, y = 2] = []) {
  return x + y;
}

console.log(sum()); // 3
console.log(sum([])); // 3
console.log(sum([4])); // 6
console.log(sum([5, 6])); //11

// TODO: 변수, 함수 중복 선언. hoisting 단원에서 확인
function sum({ x=3, y=4 } = {}) {
  return x + y;
}

console.log(sum()); // 7
console.log(sum({})); // 7
console.log(sum({x: 4})); // 8
console.log(sum({x: 5, y: 6})); // 11