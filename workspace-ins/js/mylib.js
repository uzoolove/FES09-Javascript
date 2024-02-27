var MyLib = {};

// 지정한 배열(또는 유사배열객체)의 엘리먼트 수 만큼 반복하면서 함수를 호출
MyLib.each = function(arr, fn){
  for(var i=0; i<arr.length; i++){
    fn.call(arr[i], i, arr[i]);
  }
};

// 메모이제이션(캐싱) 기능의 함수(래퍼)
// isPrime(3) -> 캐시 X
// isPrime = isPrime.memoize();
// isPrime(3) -> 캐시 O
//  -> isPrime.memoization(3);
Function.prototype.memoize = function(){
  var fn = this;  // isPrime
  return function(){
    return fn.memo.apply(fn, arguments);
  };
};

// 메모이제이션(캐싱) 기능의 함수
// isPrime(3) -> 캐시 X
// isPrime.memoization(1000000007)  -> 캐시 O
Function.prototype.memo = function(key){
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if(this._cache[key] != undefined){
    return this._cache[key];
  }else{
    return this._cache[key] = this(key);
  }
};

// 부분 적용 함수
// var minUnder100 = Math.min.mycurry(100, 200);
// minUnder100(1000, 500, 300, 400);
// -> Math.min(100, 1000, 500, 300, 400); -> 100
Function.prototype.mycurry = function(){
  var fn = this;
  var preArgs = Array.prototype.slice.call(arguments);
  return function(){
    var callArgs = Array.prototype.slice.call(arguments);
    var args = preArgs.concat(callArgs);
    return fn.apply(this, args);
  };
};

// Child가 Parent를 상속 받는다.
MyLib.inherite = function(Parent, Child){
  // var F = function(){};
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

// 배열의 최소값을 반환한다.
// var a = new Array(20, 10, 30);
// a.min()
Array.prototype.min = function(){
  return Math.min.apply(Math, this);
};

// firstLi.remove()
// -> firstLi.parentNode.removeChild(firstLi)
if(!HTMLElement.prototype.remove){
  HTMLElement.prototype.remove = function(){
    this.parentNode.removeChild(this);
  };
}