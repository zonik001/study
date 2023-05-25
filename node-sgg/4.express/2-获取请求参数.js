// 完全兼容原生写法
// 兼容原生
// 1.导入 express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/home', (req, res) => {
    // 原生
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.header)

    // express  
    console.log(req.path);
    console.log(req.query);
    console.log(req.ip);


})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})