// mylib.js에 추가
function myCurry(fn) {
  const fnLength = fn.length;
  let args = [];

  return function executeFn(...arg) {
    if (!arg) {
      return fn();
    }

    // args = args.concat(arg);
    // args = [...args, ...arg];
    args.push(arg);
    args = args.flat();

    if (args.length < fnLength ) {
      return executeFn;
    }

    return fn.apply(this, args);
  }
}

var fun = (a, b, c) => [a, b, c];
console.log(myCurry(fun)(1, 2)(3, 4)); // [1, 2, 3]

var fun2 = (a, b, c, d, e) => a + b + c + d + e;
console.log(myCurry(fun2)(1,2)(3)(4)(5)); // 15