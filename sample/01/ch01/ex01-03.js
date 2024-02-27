var maxNum = Number.MAX_VALUE;
var maxSafeNum = Number.MAX_SAFE_INTEGER;

// BigInt

console.log(maxNum, maxSafeNum);
console.log(typeof maxNum, typeof maxSafeNum);

console.log(maxSafeNum, maxSafeNum+1, maxSafeNum+2, maxSafeNum+3);
console.log(Number.isSafeInteger(maxSafeNum), Number.isSafeInteger(maxSafeNum+1));

