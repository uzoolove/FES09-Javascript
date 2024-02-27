var Counter = function(){
	var count = 0;
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

// c.count += 40;

for(var i=0; i<40; i++){
  c.ride();
}

console.log('전체 탑승자', c.getCount());