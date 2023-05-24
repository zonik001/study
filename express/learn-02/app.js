// app.js

const express = require('express');
const app = express();
const db = require('./db');
const todoRouter = require('./routes/todo');
const port = 3000;

// 设置中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 设置路由
app.use('/api/todo', todoRouter);

// 启动应用程序
db.on('connected', () => {
  app.listen(port, () => {
    console.log(`服务器已启动，监听端口 ${port}`);
  });
});
