const fs = require('fs')

// rename方法 原理：更改文件路径
// 1.重命名
// fs.rename('./4-wenjianChange.txt', './4-wenjian.txt', err => {
//     if (err) {
//         console.log('操作失败');
//         return
//     }
//     console.log('操作成功');
// })

// 2.文件移动
fs.rename('./4-wenjian.txt', './wenjian/4-wenjian.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})
