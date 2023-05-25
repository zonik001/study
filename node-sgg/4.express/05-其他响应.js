// 兼容原生
// 1.导入 express
const express = require('express')

// 2.创建应用对象
const app = express()

// 3.创建路由
app.get('/home', (req, res) => {
    // 跳转响应 未登录跳转登录页    
    // res.redirect('https://www.baidu.com')

    // 下载响应
    // res.download(__dirname + '/package.json')

    // json响应 常用
    // res.json({
    //     name: 'hubohan',
    //     age: '24'
    // })

    // 响应文件内容
    res.sendFile(__dirname + '/test.html')
})

// 4.监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})