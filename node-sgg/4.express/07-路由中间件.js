/**
 * 记录每个请求的url 和 IP地址
 */

// 导入 express
const express = require('express')

// 创建应用对象
const app = express()

// 声明路由中间件(应用到单个路由)
let routerMiddleware = function(request,response,next){
    //实现功能代码
    console.log(request.path, request.ip);
    //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
    next();
}

// 创建路由
app.get('/home', routerMiddleware, (req, res) => {
    res.send('前台首页')
})
app.get('/admin', (req, res) => {
    res.send('后台首页')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})