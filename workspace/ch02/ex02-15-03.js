// ex02-14.js 복사
var count = 0;
var myObj = {
	count: 0,
	visit: function(){
		// 방문자를 한명 증가시킨다.
		this.count++; // this = myObj
    var visit2 = () => {
      this.count++; // this = myObj
    };
    visit2();
	}
};

myObj.visit();
myObj.visit();
console.log('합계', myObj.count);
