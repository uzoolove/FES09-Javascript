var sum = function(x, y){
  return x + y;
}

// lodash
var hello = _.partial(sum, 'hello');
console.log(hello(' world'));