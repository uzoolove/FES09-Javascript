var maxNum = Number.MAX_VALUE;
var maxSafeNum = Number.MAX_SAFE_INTEGER;

// BigInt
var b1 = 12345n;
var b2 = BigInt(maxSafeNum);

console.log(maxNum, maxSafeNum, b1, b2);
console.log(typeof maxNum, typeof maxSafeNum, typeof b1, typeof b2);

console.log(maxSafeNum, maxSafeNum+1, maxSafeNum+2, maxSafeNum+3);
console.log(Number.isSafeInteger(maxSafeNum), Number.isSafeInteger(maxSafeNum+1));
console.log(b2, b2+1n, b2+2n, b2+3n);

