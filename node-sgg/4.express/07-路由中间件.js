/**
 * 针对 /admin /setting 的请求，要求URL携带code=521参数，如未携带提示[暗号错误]
 */

// 导入 express
const express = require('express')

// 创建应用对象
const app = express()

// 声明路由中间件(应用到单个路由)
let routerMiddleware = function (request, response, next) {
    //实现功能代码
    console.log(request.query);
    let code = Number(request.query.code)
    if (code !== 521) {
        next()
    } else {
        res.send('暗号错误')
    }
    //执行next函数(当如果希望执行完中间件函数之后，仍然继续执行路由中的回调函数，必须调用next)
    next();
}

// 创建路由
app.get('/home', (req, res) => {
    res.send('前台首页')
})
app.get('/admin', routerMiddleware, (req, res) => {
    res.send('后台首页')
})
app.get('/setting', routerMiddleware, (req, res) => {
    res.send('设置首页')
})

app.all('*', (req, res) => {
    res.send('<h1>404 NOT FOUND</h1>')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})