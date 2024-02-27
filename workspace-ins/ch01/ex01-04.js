// Symbol
var s1 = Symbol('hello');
var s2 = Symbol('world');
var s3 = Symbol('hello');
console.log(s1 === s2);
console.log(s1 === s3);

// Symbol.for(): 자바스크립트 엔진이 관리하는 전역 심볼 레지스트리에 저장됨
var s4 = Symbol.for('hello');
var s5 = Symbol.for('hello');
console.log(s4 === s5);

var obj = {
  [Symbol('hello')]: 10,
  [Symbol('hello')]: 20,
};

var obj2 = {
  [Symbol.for('hello')]: 10,
  [Symbol.for('hello')]: 20,
};
console.log(obj);
console.log(obj2);

console.log(Symbol.keyFor(Symbol.for('hello')));