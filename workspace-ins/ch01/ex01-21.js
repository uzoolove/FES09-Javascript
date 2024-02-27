var colors = ['yellow', 'green', 'blue'];
var [one, two, three] = colors;
console.log(colors[0], colors[1], colors[2]);
console.log(one, two, three); // yellow green blue

var kim = { userName: '김철수', userAge: 35 };
// 변수명 변경
var { userName, userAge: age } = kim;
console.log(kim.userName, kim.userAge);
console.log(userName, age); // 김철수 35

// 선언된 변수에 적용
var first, second;
[first, second] = [100, 200];
console.log(first, second);
({first, second} = {first: 'orange', second: 'green', third: 'yellow'});
console.log(first, second);

// 기본값 할당(undefined 대체)
var [first, second=200, third] = [100, , 300];
console.log(first, second, third);

var {userName, age=20} = {userName: '이영희'};
console.log(userName, age);

// 변수명 변경과 기본값 할당
// var {userName: accountName='게스트', userAge: age} = {userName: '이영희', userAge: 30};
var {userName: accountName='게스트', userAge: age} = {userAge: 30};
console.log(accountName, age);

// 변수값 교환
var a = 100;
var b = 200;
var temp = a;
a = b;
b = temp;
console.log(a, b);

// 변수값 교환(구조 분해 할당)
var a = 100;
var b = 200;
[a, b] = [b, a];
console.log(a, b);

// 복합 객체에서 사용
var userList = [
  {
    name: '김철수',
    age: 30,
    course: {
      name: '멋사 6기'
    }
  },
  {
    name: '이영희',
    age: 35,
    course: {
      name: '멋사 8기'
    }
  }
];

// 이름과 코스명만 출력
for(var {name, course: {name: courseName}} of userList){
  console.log(name, courseName);
}

// react에서 사용(useState)
var [count, setCount] = useState(0);

var _init;
function useState(initialValue){
  _init = _init || initialValue;
  // ...
  return [_init, function(state){
    _init = state;
  }];
}

console.log(count);
setCount(count+1);
console.log(count);

// react에서 사용(props)
var TodoList = function({userId: _id, page}){
  fetch('./dummy/todolist.json?userId=' + _id + '&page=' + page).then(function(res){
    return res.json();
  }).then(function(data){
    console.log(data);
  }).catch(function(err){
    console.error(err);
  });
};

TodoList({userId: 'kim', page: 3});