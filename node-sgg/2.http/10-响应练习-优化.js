// 响应一个四行三列，点击变色的页面

const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {

    // 读取文件内容
    let html = fs.readFileSync(__dirname + '/9-table.html')
    response.end(html)
})

// 监听端口，启动服务
server.listen(9000, () => {  //http默认端口是80 ，https默认端口是443
    console.log(('服务已启动..'));
})