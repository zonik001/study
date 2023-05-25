// 导入http模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {

    // 实例化URL对象
    // let url = new URl('http://wwww.xxx.com/search/?a=100&b=200')
    // let url = new URL('/search/?a=100&b=200', 'http://127.0.0.1:9000')
    let url = new URL(request.url, 'http://127.0.0.1:9000')
    console.log(url);
    // 
    // URL {
    //     href: 'http://127.0.0.1:9000/ssssss?key=100',
    //     origin: 'http://127.0.0.1:9000',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: '127.0.0.1:9000',
    //     hostname: '127.0.0.1',
    //     port: '9000',
    //     pathname: '/ssssss',
    //     search: '?key=100',
    //     searchParams: URLSearchParams { 'key' => '100' },  //通过get方法获取
    //     hash: ''
    // }

    // 输出路径
    console.log(url.pathname);

    // 输出查询字符串
    console.log(url.searchParams.get('key'));

    // 响应
    response.end('new url') //设置响应体

})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})
