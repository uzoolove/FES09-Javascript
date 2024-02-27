var colors = ['two', 'three', 'four'];
var newColors = [ ...colors ];
// var newColors = [ 'one', ...colors, 'five' ];
console.log(newColors, colors === newColors);

var user = {name: '김철수', age: 30};
var newColors = { ... user, age: user.age+1 }; 
console.log(newColors, user === newColors);

// 함수에서 사용
function sum(x, y) {
  return x + y;
}
var numbers = [1, 2];
console.log(sum(...numbers));

// 배열 결합
var arr1 = [100, 200];
var arr2 = [300, 400, 500];
var arr3 = [...arr1, ...arr2];
console.log(arr3);

// 객체 결합
var obj1 = {id: 'kim', age: 30};
var obj2 = {phone: '0102223333', address: '서울시', age: 35};
var obj3 = { ...obj1, ...obj2 };
console.log(obj3);