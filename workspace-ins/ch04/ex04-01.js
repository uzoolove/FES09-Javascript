var global = '전역변수';
function outer(){
  var innerVal = 'outer의 지역변수';  // 자유변수
  console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
  console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능
  /**
   * closure
   *  - 외부함수의(outer) 지역변수를(innerVal)
   *    외부함수의 실행이 완료된 후 내부함수의(innerFn) 호출로 참조하는 현상
   *  - closuer가 만들어지는 조건
   *    1. 함수 내부에서 함수를 생성(내부함수)
   *    2. 내부함수가 외부함수의 지역변수를 참조
   */
  var innerFn = function(){
    console.log(innerVal);
  };
  innerFn();
}

outer();


console.log(global);	// 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
// console.log(innerVal);// 지역변수는 선언한 함수내에서만 접근 가능
