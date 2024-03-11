var name = 'global';
function returnName(){
	return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());  // global

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = '김철수';
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: '이영희',
  age: 35,
  getName: returnName
};

console.log(kim.age, kim.getName());  // 30 김철수
console.log(lee.age, lee.getName());  // 35 이영희

console.log(kim.getName(), kim.getName.call(window)); // 김철수, global
console.log(lee.getName(), lee.getName.apply(kim)); // 이영희, 김철수
console.log(returnName(), returnName.call(lee));  // 반성문, 이영희