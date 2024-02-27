var todolist = [
  {
    _id: 1,
    title: 'Javascript 공부',
    done: true,
  },
  {
    _id: 2,
    title: 'Typescript 공부',
    done: false,
  },
  {
    _id: 3,
    title: 'React 공부',
    done: false,
  },
  {
    _id: 4,
    title: 'React 프로젝트',
    done: true,
  },
];

// 완료된 할일 목록
var doneList = getDoneList(todolist);
function getDoneList(todolist) {
  let doneList = [];
  for (let task of todolist) {
    if (task.done === true) doneList.push(task.title);
  }
  return doneList;
}
console.log('완료된 할일 목록', doneList);

// 남은 할일 목록
var reaminList = getReaminList(todolist);
function getReaminList(todolist) {
  let reaminList = [];
  for (let task of todolist) {
    if (task.done === false) reaminList.push(task.title);
  }
  return reaminList;
}
console.log('남은 할일 목록', reaminList);

// 남은 할일 수
var reaminCount = getReaminCount(todolist);
function getReaminCount(todolist) {
  return getReaminList(todolist).length;
}
console.log('남은 할일 수', reaminCount);

// _id=2인 할일
var todo = getTodo(todolist, 2);
function getTodo(todolist, num) {
  for (let task of todolist) {
    if (task._id === num) return task.title;
  }
  return `_id가 ${num}인 할일이 없습니다.`;
}
console.log('_id=2인 할일', todo);

// _id=3인 할일의 index
var todoIndex = getTodoIndex(todolist, 3);
function getTodoIndex(todolist, num) {
  for (let i = 0; i < todolist.length; i++) {
    if (todolist[i]._id === num) return i;
  }
  return `_id가 ${num}인 할일의 index가 없습니다.`;
}
console.log('_id=3인 할일의 index', todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = isHasTodo(todolist);
function isHasTodo(todolist) {
  for (let task of todolist) {
    if (task.done === false) return true;
  }
  return false;
}
console.log('남은 할일이 하나라도 있는가?', hasTodo);

// 할일이 모두 완료 되었는가?
var busy = isBusy(todolist);
function isBusy(todolist) {
  for (let task of todolist) {
    if (task.done === false) return false;
  }
  return true;
}
console.log('할일이 모두 완료 되었는가?', busy);