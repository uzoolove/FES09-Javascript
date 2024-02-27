function fn(n1, n2){
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for(var i=0; i<arguments.length; i++){
    sum += arguments[i];
  }
  console.log('합계', sum);
}

fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(1342,53,64,57,58,67,967,6734,5,234,23,6,467,567,97,8,566,34);
