var http = require('node:http');
var path = require('node:path');
var url = require('node:url');
var nodeStatic = require('node-static');
var jsonBody = require('body/json');
var moment = require('moment');

var home = path.join(__dirname, '..');
var file = new nodeStatic.Server(home);
http.createServer(function (req, res) {
  var parseUrl = url.parse(req.url, true);
  switch(parseUrl.pathname){
    case '/time':
      responseTime(req, res);
      break;
    case '/time-sync':
      responseTime(req, res);
      break;
    case '/timejson':
      responseTimeJson(req, res);
      break;
    default:
      file.serve(req, res);
  }	
}).listen(33080, function(){
	console.log('http://localhost:33080');
});

// 서버의 현재 시간을 응답
function responseTime(req, res){
	getQuery(req, function(err, query={}){
    console.log(query);
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 문자열로 응답
    setTimeout(() => {
      res.end(`${query.msg} ${moment().format('YYYY-MM-DD HH:mm:ss')}`);
    }, query.delay);
  });
}

// 서버의 현재 시간을 응답(JSON)
function responseTimeJson(req, res){
	getQuery(req, function(err, query={}){
    console.log(query);
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    // 추출한 query string과 함께 현재 시간을 JSON 형태의 문자열로 응답
    var result = {
      time: moment().format('YYYY-MM-DD HH:mm:ss'),
      msg: query.msg
    };
    setTimeout(() => {
      res.end(JSON.stringify(result));
    }, query.delay);
  });
}

// 쿼리스트링 추출
function getQuery(req, cb){
	if(req.method == 'GET'){
    var parseUrl = url.parse(req.url, true);
    cb(null, parseUrl.query);
	}else if(req.method == 'POST'){
		jsonBody(req, cb);
	}
}