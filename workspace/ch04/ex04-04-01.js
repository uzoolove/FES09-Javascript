var sum = function(x, y, z){
  return x + y + z;
}

// Function에 partial 기능 추가
// mylib.js에 추가
// prototype, this, arguments, 고차함수, apply
Function.prototype.partial = function(){
  var fn = this;
  var preArgs = [...arguments];
  return function(){
    var args = [...preArgs, ...arguments];
    return fn.apply(this, args);
  };
};

var sum30 = sum.partial(10, 20);
console.log(sum30(30));