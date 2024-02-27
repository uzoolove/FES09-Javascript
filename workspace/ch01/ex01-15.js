var arr = ['zero', 'one', 'three', 'four'];
var arr2 = arr.splice(2, 0, 'two');
console.log('arr', arr);

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 요소를 삭제, 교체, 추가하고 제거한 요소를 담은 배열을 반환한다.
// deleteCount 생략시 마지막까지 제거
// var arr2 = arr.splice(3, 1);
// var arr2 = arr.splice(1);
// var arr2 = arr.splice();  // 빈배열 반환

// slice([begin[, end]])
// 배열의 begin부터 end까지(end 미포함) 요소를 복사해서 새로운 배열을 반환한다.
// begin 생략시 0
// begin이 음수일 경우 배열의 뒤에서 부터 복사
// end 생략시 마지막까지 복사
// 원본 데이터 유지
var arr2 = arr.slice(1, 3);
var arr2 = arr.slice(-3, -1);
var arr2 = arr.slice(2);
var arr2 = arr.slice(-2);
var arr2 = arr.slice(); // 전체복사

console.log('arr', arr);
console.log('arr2', arr2);
console.log(arr == arr2);