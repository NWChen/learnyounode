var http = require('http');
var map = require('through2-map');

http.createServer(function(req, res){
	if(req.method != 'POST') return res.end();

	req.pipe(map(function(chunk){
		return chunk.toString().toUpperCase();
	})).pipe(res);
}).listen(Number(process.argv[2]));