const fs = require('fs')

// 相对路径 ./ ../

// 绝对路径 D:/  /


// 相对路径bug 相对路径参照物不是当前文件而是命令行工作目录
fs.writeFileSync('./index.html', 'love')
// 解决方式 绝对路径 '全局变量'__dirname保存的是：文件所在目录的绝对路径
console.log(__dirname);
fs.writeFileSync(__dirname + './index.html', 'love')
// 规范用法
const path = require('path')
console.log(path.resolve(__dirname, './index.html'));
console.log(path.resolve(__dirname, 'index.html')); //与上面相同
console.log(path.resolve(__dirname, '/index.html')); //  /是绝对路径