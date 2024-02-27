var Score = function(kor, eng, math){
  this.kor = kor;
  this.eng = eng;
  this.math = math;
	this.sum = function(){
    // TODO: closure 단원. 실행이 완료된 함수의 지역변수가 참조 가능한 상태로 유지되는 현상
    // return kor + eng + math;
    return this.kor + this.eng + this.math;
  };
  this.avg = function(){
    return this.sum() / 3;
  };
};

// kim은 점수가 각각 100, 90, 80이다.
// lee는 점수가 각각 90, 80, 60이다.
var kim = new Score(100, 90, 80);
var lee = new Score(90, 80, 60);

// 두 사람의 총점과 평균을 출력하시오.
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());

// 수학점수를 10점 올린 후 총점과 평균 출력
kim.math += 10;
lee.math += 10;
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());