// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 1.设置响应状态码
    response.statusCode = 404;

    // 2.响应状态描述（很少用到）
    response.statusMessage = 'ssssssssssss'

    // 3.设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('Server', 'Node.js')
    response.setHeader('myHeader', 'test test test') //可以自定义响应头
    response.setHeader('test', ['a', 'b', 'c'])// 设置多个同名响应头 名称都是test 值则分别为数组中的值

    // 4.设置响应体
    // a.write 和 end 的结合使用 响应体相对分散
    response.write('love');
    response.write('love');
    response.write('love');
    response.end('response') //设置响应体  有且只能有一个end方法

    // b.单独使用 end 方法 响应体相对集中
})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})