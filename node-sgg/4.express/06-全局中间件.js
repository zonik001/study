/**
 * 记录每个请求的url 和 IP地址并保存到access.log文件中
 */

// 导入 express
const express = require('express')
const path = require('path')
const fs = require('fs')

// 创建应用对象
const app = express()

// 声明全局中间件(应用到每个路由)
let recordMiddleware = function (request, response, next) {
    //实现功能代码
    // console.log(request);
    let { url, ip } = request
    //将文件保存在access.log文件中
    fs.appendFileSync(path.resolve(__dirname, './06-access.log'), `${url} ${ip}\r\n`)

    //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
    next();
}
// 应用
app.use(recordMiddleware)

// 创建路由
app.get('/home', (req, res) => {
    res.send('前台首页')
})
app.get('/admin', (req, res) => {
    res.send('后台首页')
})
app.all('*', (req, res) => {
    res.send('<h1>404 NOT FOUND</h1>')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})