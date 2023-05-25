// 1.导入http模块
const { log } = require('console')
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求的方法
    // console.log(request.method);

    // 获取请求的url
    // console.log(request.url);  //只包含url中的路径与查询字符串

    // 获取HTTP协议版本号 （几乎用不到）
    // console.log(request.httpVersion);

    // 获取HTTP请求头
    console.log(request.headers);// 获取的值是一个对象，可以细化取对象里面的值，用‘.’

    response.end('http HTTP server') //设置响应体
})

// 3.监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})