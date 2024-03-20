var Counter = function(){
	let count = 0;
	this.ride = function(){
    if(count < 40){
      count++;
    }else{
      console.log('정원 초과!');
    }
	};
	this.getCount = function(){
		return count;
	};
};

var c = new Counter();
c.ride();
c.ride();

for(var i=0; i<40; i++){
  c.ride();
}

// c.count += 40;

console.log('전체 탑승자', c.getCount());