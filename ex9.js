var http = require('http');
var p1 = "", p2 = "", p3 = "";
var f1 = false, f2 = false, f3 = false;

//URL 1
http.get(process.argv[2], function(res){
	res.setEncoding('utf8');
	res.on("data", function(data){
		p1 += data;
	});
	res.on("end", function(){
		f1 = true;

		//account for async bs
		if(f1 && f2 && f3){
			console.log(p1);
			console.log(p2);
			console.log(p3);
		}
	});
});

//URL 2
http.get(process.argv[3], function(res){
	res.setEncoding('utf8');
	res.on("data", function(data){
		p2 += data;
	});
	res.on("end", function(){
		f2 = true;
		if(f1 && f2 && f3){
			console.log(p1);
			console.log(p2);
			console.log(p3);
		}
	});
});

//URL 3
http.get(process.argv[4], function(res){
	res.setEncoding('utf8');
	res.on("data", function(data){
		p3 += data;
	});
	res.on("end", function(){
		f3 = true;
		if(f1 && f2 && f3){
			console.log(p1);
			console.log(p2);
			console.log(p3);
		}
	});
});

