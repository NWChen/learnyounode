var ex_6 = require('./ex_6');

ex_6(process.argv[2], process.argv[3], function(err, list){
	if(err) return console.log(err);
	list.forEach(function(file){
		console.log(file);
	})
});

