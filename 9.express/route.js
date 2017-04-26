var express = require('express');
var app = express();

app.get('/',function (req,res){
	console.log('主页get请求');
	res.send('get主页');
});

app.post('/post_1',function (req,res){
	console.log('主页post请求');
	res.send('post主页');
});

app.get('/list', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
});

var server = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('访问地址：http//%s,%s',host,port);
})
