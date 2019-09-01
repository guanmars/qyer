<<<<<<< HEAD
//引入express模块
const express = require("express");
//引入body-parser模块
const parser = require("body-parser");
//引入user路由器模块
const userRouter = require("./router/user.js");
//创建web服务器
var app = express();
//监听端口
app.listen(8080);
//把静态资源托管到public目录下
// app.use(express.static("public"));
app.use(express.static("public"));
app.use(parser.urlencoded({
	extended: false
}));
//使用路由器，挂载到/user下
app.use("/user", userRouter);
=======
//引入express
const express=require('express');
const bodyParser=require('body-parser');
//引入userRouter
const userRouter=require('./Routers/user.js');
//创建web
 var app=express();
 app.listen(8080);
//中间件body
 app.use(bodyParser.urlencoded({
	extended:false
 }));
//设置PUBLIC
 app.use(express.static("PUBLIC"));
//路由器
 //路由器userRouter
 app.use('/user',userRouter);
>>>>>>> aca861a5b51a6b8bf699ee87a249d5694269f21a
