var todolist = [
  {
    "_id": 1,
    "title": "Javascript 공부",
    "done": true
  },
  {
    "_id": 2,
    "title": "Typescript 공부",
    "done": false
  },
  {
    "_id": 3,
    "title": "React 공부",
    "done": false
  },
  {
    "_id": 4,
    "title": "React 프로젝트",
    "done": true
  }
]

// sort() _id로 내림차순 정렬
todolist.sort((a, b) => {
  if(a._id < b._id){
    return 1; // 0보다 큰 수를 반환하면 b를 앞으로
  }else{
    return -1;  // 0보다 작은 수를 반환하면 a를 앞으로
  }
});
console.log('정렬 결과', todolist);

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(todo => {
  if(todo.done){
    doneList.push(todo);
  }
});
console.log('forEach() 완료된 할일 목록', doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter((todo) => {
  return todo.done;
});
var doneList = todolist.filter(todo => todo.done);
console.log('filter() 완료된 할일 목록', doneList);

// map() 남은 할일 목록
var reaminList = todolist.map((todo) => {
  if(!todo.done){
    return todo;
  }
}).filter(todo => {
  return todo ? true : false;
});
console.log('map() 남은 할일 목록', reaminList);

// reduce() 남은 할일 수
var reaminCount = todolist.reduce((acc, todo) => acc + (todo.done ? 0 : 1), 0);
console.log('reduce() 남은 할일 수', reaminCount);

// find() _id=2인 할일
var todo = todolist.find(todo => todo._id===2);
console.log('find() _id=2인 할일', todo);

// find() _id=3인 할일의 index
var todoIndex = todolist.findIndex(todo => todo._id===3);
console.log('find() _id=3인 할일의 index', todoIndex);

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some(todo => !todo.done);
console.log('some() 남은 할일이 하나라도 있는가?', hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every(todo => todo.done);
console.log('every() 할일이 모두 완료 되었는가?', busy);
