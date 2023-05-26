// express.static 内置处理静态资源的中间件

// 导入 express
const express = require('express')

// 创建应用对象
const app = express()

//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
app.use(express.static('./08-public')) //当然这个目录中都是一些静态资源

// 创建路由
// 路由响应动态资源，静态资源中间件响应静态资源
app.get('/index.html', (req, res) => {
    res.send('前台首页')
})
app.get('/admin', (req, res) => {
    res.send('后台首页')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})