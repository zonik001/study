// express.static 内置处理静态资源的中间件

// 导入 express
const express = require('express')
const path = require('path')

// 创建应用对象
const app = express()

//静态资源中间件的设置，将当前文件夹下的public目录作为网站的根目录
// path.resolve(__dirname, './08-public')
// app.use(express.static(__dirname + '/08-public')) //当然这个目录中都是一些静态资源
app.use(express.static(path.resolve(__dirname, './08-public'))) //当然这个目录中都是一些静态资源
// path.resolve写法更规范一点比上面写法

// 创建路由
// 路由响应动态资源，静态资源中间件响应静态资源
// 但是，在这里有一个问题，如果public目录下有index.html文件，单独也有index.html的路由，
// 则谁书写在前，优先执行谁
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