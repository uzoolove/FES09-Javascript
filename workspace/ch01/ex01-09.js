var arr = [300, 400];

// push: 배열의 마지막에 새로운 요소 추가.
arr[2] = 500;
arr.push(600);

// unshift: 배열의 처음에 새로운 요소 추가.
// arr[0] = 100;
arr.unshift(200);
arr.unshift(100);

console.log(arr);

// pop: 배열의 마지막 요소를 제거 후 반환
console.log(arr.pop());
console.log(arr.pop());

// shift: 배열의 첫번째 요소를 제거 후 반환
console.log(arr.shift());
console.log(arr.shift());

console.log(arr);