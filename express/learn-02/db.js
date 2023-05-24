// db.js

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('数据库已连接');
});

mongoose.connection.on('error', (err) => {
  console.log('数据库连接错误：', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('数据库已断开连接');
});

module.exports = mongoose.connection;
