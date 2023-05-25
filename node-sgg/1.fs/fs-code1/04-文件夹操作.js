const fs = require('fs')

// 1.创建文件夹 mkdir
// a.单个创建
fs.mkdir('./html', err => {
    if (err) {
        console.log('创建失败');
        return
    }
    console.log('创建成功');
})
// b.递归创建
fs.mkdir('./a/b/c', { recursive: true }, err => {
    if (err) {
        console.log('创建失败');
        return
    }
    console.log('创建成功');
})

// 2.读取文件夹 readdir
fs.readdir('./', (err, data) => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log(data, '读取成功');
})


// 3.删除文件夹 rmdir
fs.rmdir('./html', err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})
// 递归删除  会移除，建议使用rm
// fs.rmdir('./a', { recursive: true }, err => {
//     if (err) {
//         console.log(err, '删除失败');
//         return
//     }
//     console.log('删除成功');
// })
// 建议使用rm递归删除
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log('删除失败');
        return
    }
    console.log('删除成功');
})