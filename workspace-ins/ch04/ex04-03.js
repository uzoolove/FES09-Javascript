function sum(a, b, c){
  return a + b + c;
}
console.log(sum(10, 20, 30));


console.log(currySum(10)(20)(30));

// 일반 함수
var add = function(x, y){
  return x + y;
};

// Currying
var curryAdd = function(x){
  return function(y){
    return x + y;
  };
};

var curryAdd = x => y => x + y;

console.log(add(10, 20)); // 30
console.log(curryAdd(30)(40)); // 70

// Currying 함수
var myCurry = function(fn){
  return function(a){
    return function(b){
      return fn(a, b);
    }
  };
};

var myCurry = function(fn){
  return function(a, b){
    if(b !== undefined){
      return fn(a, b);
    }else{
      return function(b){
        return fn(a, b);
      }
    }    
  };
};

var curryAdd = myCurry(add);
console.log(curryAdd(50)(60)); // 110
console.log(curryAdd(70, 80)); // 150

// lodash 사용
var currySum = _.curry(sum);
console.log(currySum(1)(2)(3));
console.log(currySum(1, 2)(3));
