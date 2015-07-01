var http = require('http');
var output = "";

http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on("data", function(data){
		output += data;
	});
	res.on("end", function(){
		console.log(output.length);
		console.log(output);
	});
});