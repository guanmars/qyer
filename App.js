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