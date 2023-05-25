// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // response.end('http HTTP server') //设置响应体

    // 解决响应体中文乱码，添加一个响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好 HTTP server') //设置响应体
})

// 3.监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})