var stack = [];
stack.push(100);
stack.push(200);
stack.push(300);
console.log(stack.pop());

stack.push(400);
stack.push(500);
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);

var queue = [];
queue.unshift(100);
queue.unshift(200);
queue.unshift(300);
console.log(queue.pop());

queue.unshift(400);
queue.unshift(500);
console.log(queue.pop());
console.log(queue.pop());

console.log(queue);