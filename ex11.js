var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	//include OK HTTP header
	fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));