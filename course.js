var express = require("express");
var app = express();
app.use(express.static("course"));

var students = [
	{"username":"lee","age":12,"sex":"男"},
	{"username":"zhang","age":13,"sex":"男"},
	{"username":"wang","age":14,"sex":"女"},
	{"username":"zhao","age":15,"sex":"男"},
	{"username":"zhou","age":16,"sex":"女"},
]

app.get("/getFruits",function(req,res){
	var data = ["橡胶","苹果","鸭梨"];
	res.send(data);
})

app.get("/getStudent",function(req,res){
	res.send(students);
})

app.get("/insertStudent",function(req,res){
	students.push(req.query);
	res.send(students);
})

app.listen(3000);
console.log("服务器已经启动！")