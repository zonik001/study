// 要求：当请求路径是/login时返回登录，当请求路径是/reg时返回注册,
// 以及请求方法为get

// 1.导入http模块
const http = require('http')

// 2.创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求方法
    let { method } = request; // 解构赋值的写法， 
    // 获取请求路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
    response.setHeader('content-type', 'text/html;charset=utf-8')

    if (method === 'GET' && pathname === '/login') {
        response.end('登录页');
    } else if (method === 'GET' && pathname === '/reg') {
        response.end('注册页');
    } else {
        response.end('NOT FOUND')
    }


})

// 3.监听端口 启动服务
server.listen(9000, () => {
    console.log('服务已启动... 端口9000监听中');
})