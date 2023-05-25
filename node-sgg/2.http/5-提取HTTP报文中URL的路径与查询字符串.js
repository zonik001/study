// 导入http模块
const http = require('http')
// 1. 导入url模块
const url = require('url')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 2.解析 request.url
    // console.log(request.url);

    let res = url.parse(request.url, true)  //第二个参数true 能把查询字符串改为对象
    console.log(res); //是个对象，如下
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: null,
    //     query: [Object: null prototype] { wd: '123' },
    //     pathname: '/favicon.ico',
    //     path: '/favicon.ico',
    //     href: '/favicon.ico'
    // }

    // 路径
    let pathname = res.pathname;  //[Object: null prototype] { wd: '123' } 前面那一坨没什么意义
    // console.log(pathname);

    // 查询字符串
    let keyword = res.query;
    console.log(keyword);


    // 响应
    response.end('url') //设置响应体

})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})
