// 响应一个四行三列，点击变色的页面

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
    // 获取请求url路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    // 根据路径去判断文件类型（后面不会这样做）
    if (pathname === '/') {
        // 读取文件内容
        let html = fs.readFileSync(__dirname + '/table.html')
        response.end(html)
    } else if (pathname === '/index.css') {
        // 读取文件内容
        let css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname === '/index.js') {
        // 读取文件内容
        let js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404;
        response.end('<h1>404 Not Found</h1>')
    }
})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
}) 