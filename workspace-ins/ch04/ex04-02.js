var Counter = function(){
	this.count = 0;
	this.ride = function(){
    if(this.count < 40){
      this.count++;
    }else{
      console.log('정원 초과!');
    }
	};
	this.getCount = function(){
		return this.count;
	};
};

var c = new Counter();
c.ride();
c.ride();

for(var i=0; i<40; i++){
  c.ride();
}

console.log('전체 탑승자', c.getCount());