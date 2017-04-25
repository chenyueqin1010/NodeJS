
var fs = require('fs');
var data1 = '(｡･∀･)ﾉﾞ嗨';
/* 写入 */
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data1,'utf8');
writerStream.end();
writerStream.on('finish',function(){
	console.log('写完了');
});
writerStream.on('error',function(err){
	console.log(err.stack);
});
console.log('写入完毕');
