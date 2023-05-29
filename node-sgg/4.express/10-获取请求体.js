/**
 * 按要求搭建http服务
 * 
 * GET /login 显示表单网页
 * POST /login 获取表单中的【用户名】 【密码】
 */
// 导入 express
const express = require('express')
// 导入bodyParser
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extends: false })


// 创建应用对象
const app = express()

// 创建路由
app.get('/login', (req, res) => {
    // 响应html文件内容
    res.sendFile(__dirname + '/11_form.html')
})

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('获取用户数据')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})