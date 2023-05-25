// 兼容原生
// 1.导入 express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/home', (req, res) => {
    // 原生响应
    // res.statusCode = 404
    // res.statusMessage = 'asdsadsdsad'
    // res.setHeader('dsad', 'asdsa')
    // res.write('write')
    // res.end('hello express')

    // express  
    // res.status(500);  //设置状态码
    // res.set('asd', 'eqwe')  //设置响应头
    // res.send('send') //设置响应体（不会出现乱码）
    // 链式写法
    res.status(500).res.set('asd', 'eqwe').res.send('send') //不会出现乱码
})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})