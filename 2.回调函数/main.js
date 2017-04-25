var fs = require('fs');
fs.readFile('test.txt',function(err,data){
	if(err) return console.logerror(err);
	console.log(data.toString());
});
console.log('执行结束');