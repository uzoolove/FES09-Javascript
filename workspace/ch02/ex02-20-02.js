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

// 완료된 할일 목록과 남은 할일 목록
var doneList = [];
var reaminList = [];

for (var i = 0; i < todolist.length; i++) {
  var todo = todolist[i];
  if (todo.done) {
    doneList.push(todo);
  } else {
    reaminList.push(todo);
  }
}

console.log('완료된 할일 목록', doneList);
console.log('남은 할일 목록', reaminList);

// 남은 할일 수
var reaminCount = reaminList.length;
console.log('남은 할일 수', reaminCount);

// _id=2인 할일과 _id=3인 할일의 index
var todo = {};
var todoIndex = -1;

for (var i = 0; i < todolist.length; i++) {
  var currentTodo = todolist[i];
  if (currentTodo._id === 2) {
    todo = currentTodo;
  }

  if (currentTodo._id === 3) {
    todoIndex = i;
  }
}

console.log('_id=2인 할일', todo);
console.log('_id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = reaminCount > 0;
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
var busy = reaminCount === 0;
console.log('할일이 모두 완료 되었는가?', busy);