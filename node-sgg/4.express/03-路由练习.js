// 导入 express
const express = require('express')
// 导入singer.json文件
const { singers } = require('./singers.json') //解构赋值 （去掉外边的大括号）
// console.log(singers);

// 创建应用对象
const app = express()

// 创建路由
app.get('/singer/:id.html', (req, res) => {
    // 获取路由参数
    let id = req.params.id
    // 在singer数组中寻找对应数据
    let result = singers.find(singer => singer.id === Number(id))
    if (!result) {
        res.status(404).end('Not Found')
        return
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${result.singer_name}<h1>
            <img src="${result.singer_pic}" alt="">
    </body>
    </html>`)
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})