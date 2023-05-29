// 导入 express
const express = require('express')

// 创建应用对象
const app = express()

// 声明中间件
const fangdaoMid = (req, res, next) => {
    // 检测请求头中的referer 是否为 127.0.0.1
    // 获取referer
    let referer = req.get('referer')
    if (referer) {
        let url = new URL(referer);
        // 获取主机名
        let hostname = url.hostname
        console.log(hostname);
        if (hostname !== '127.0.0.1') {
            res.status(404).send('404')
            return
        }
    }
    next()
}
app.use(fangdaoMid)
app.use(express.static('./08-public'))

// 创建路由
app.get('/home', (req, res) => {
    res.sendFile()
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已启动 ，端口3000正在监听中....');
})