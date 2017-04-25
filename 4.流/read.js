
var fs = require('fs');
/* 读取 */
var data = '';
var readerStream = fs.createReadStream('output.txt');
readerStream.setEncoding('utf8');
readerStream.on('data',function(chunk){
	data += chunk;
});
readerStream.on('end',function(){
	console.log(data);
});
readerStream.on('error',function(err){
	console.log(err.stack);
});
console.log('读取完毕');