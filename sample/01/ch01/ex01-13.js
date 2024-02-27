// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

// 지정한 객체의 모든 속성을 출력한다.
function printObj(obj){
  
}

var arr = ['zero', 'one', 'two'];
arr.push('three');
arr.push('four');
arr.pop();
arr.shift();

// 일반 객체처럼 속성 추가

// 대입연산자로 속성 추가. enumerable, writable, configurable true로 설정됨

// 속성 추가 전용 메소드

printArr(arr);
