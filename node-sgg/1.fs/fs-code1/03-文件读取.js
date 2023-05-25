const fs = require('fs')

// 异步读取
fs.readFile('./5-观书有感.txt', (err, data) => {
    if (err) {
        console.log('读取失败');
        return
    }
    console.log(data, '异步'); //读取到的是buffer，需要用toSring转换为字符串
    console.log(data.toString());
})

// 同步读取
let data1 = fs.readFileSync('./5-观书有感.txt');
console.log(data1.toString(), '同步'); 