// fs模块可以实现与硬盘的交互，例如文件的创建、删除、重命名、移动，还有文件内容的希尔、读取以及文件夹的相关操作

// 文件写入
/**
 * 需求：
 * 新建一个文件，wenjian.txt,写入内容 “哈哈哈哈哈”
 */

// 1.导入fs模块
const fs = require('fs');

// 2.写入文件 参数（文件名，内容 ,回调函数（错误时调用）
fs.writeFile('./wenjian.txt', '哈哈哈哈哈,你好', err => {
    // err 写入失败：错误对象 写入成功：null
    if (err) {
        console.log('写入失败');
        return
    }
    console.log('写入成功');
})
// 执行命令 node 4-"TAP键"

// 同步写入
fs.writeFileSync('./4-data.txt', '同步，js主线程会等待i/o线程文件写入完成再往下执行')

// 追加写入
// 调用 appendFile \r\n换行追加
fs.appendFile('./4-wenjian.txt', '\r\n我是追加文字', err => {
    if (err) {
        console.log('追加写入失败');
        return
    }
    console.log('追加写入成功');
})

