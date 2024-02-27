function f1(resolve){
  console.log('f1 작업시작.');
  setTimeout(function(){
    console.log('f1 작업중...');
    // ......
    console.log('f1 작업종료.');
    resolve('f1의 결과물');
  }, 1000);
}
function f2(f1Result, resolve){
  console.log('f2 작업시작.', f1Result);
  setTimeout(function(){
    console.log('f2 작업중...');
    // ......
    console.log('f2 작업종료.');
    resolve();
  }, 900);
}
function test1(){
  f1(function(f1Result){
    f2(f1Result, function(){
      console.log('모든 작업완료.');
    });    
  });  
}
// test1();

function p1(){
  return new Promise(function(resolve, reject){
    console.log('f1 작업시작.');
    setTimeout(function(){
      console.log('f1 작업중...');
      // ......
      console.log('f1 작업종료.');
      resolve('f1의 결과물');
    }, 1000);
  });
}
function p2(f1Result){
  return new Promise(function(resolve, reject){
    console.log('f2 작업시작.', f1Result);
    setTimeout(function(){
      console.log('f2 작업중...');
      // ......
      console.log('f2 작업종료.');
      resolve();
    }, 900); 
  });
}
function test2(){
  p1().then(p2).then(function(){
    console.log('모든 작업완료.');
  }).catch();
}
// test2();

async function test3(){
  var f1Result = await p1();
  await p2(f1Result);
  console.log('모든 작업종료.');
}
test3();

console.log('f1, f2 작업 종료보다 이 메세지가 먼저 나오면 비동기로 호출된다는 의미임');