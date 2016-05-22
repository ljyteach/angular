var express = require("express");
var app = express();
app.use(express.static("test"));
var data = ["Tony","lucy","lily"];
app.get("/getData",function(req,res){
	console.log(req.query);
	res.send(data);
})
app.get("/insert",function(req,res){
	var username = req.query.username;
	console.log(req.query);
	data.push(username);
	res.send(data);
})
app.listen(3000);
console.log("服务器已经启动！")