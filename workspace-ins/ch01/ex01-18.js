var arr = [1, 2, 3, 4];
var initialValue = 0;
var sum = arr.reduce(function(accumulator, currentValue){
  return accumulator + currentValue
}, initialValue);
console.log(sum); // 0 + 1 + 2 + 3 + 4
