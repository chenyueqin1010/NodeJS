
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('output.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('output.txt.gz'));
console.log('压缩完毕');
