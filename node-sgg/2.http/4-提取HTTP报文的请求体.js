// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // 1.声明一个变量
    let body = '';

    // 2.绑定事件
    request.on('data', chunk => {
        body += chunk
    })

    // 3.绑定end事件
    request.on('end', () => {
        console.log(body);

        // 响应
        response.end('http HTTP server') //设置响应体
    })



})

// 3.监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})


// 这块了解即可，会有更简单获取请求体的方法