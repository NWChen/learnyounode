var http = require('http');
var url = require('url');
var date; 

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'application/json'});
	if(req.method != 'GET') return res.end();
	var query = url.parse(req.url, true).query['iso'];
	console.log("ISO");
	if(url.parse(req.url, true).pathname=='/api/parsetime'){
		date = new Date(query);
		res.write(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	}
	if(url.parse(req.url, true).pathname=='/api/unixtime'){
		date = new Date(query);
		res.write(JSON.stringify({unixtime:date.getTime()}));
	}
	else{
		return res.end();
	}
}).listen(Number(process.argv[2]));