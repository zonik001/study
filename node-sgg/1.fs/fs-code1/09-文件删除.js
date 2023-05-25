const fs = require('fs')

// 1.unlink unlinkSync
// fs.unlink('./hellow.txt', err => {
//     if (err) {
//         console.log('操作失败');
//         return
//     }
//     console.log('操作成功');
// })

// 2.rm node.js 14.4新加 reSync
fs.rm('./9-delete.txt', err => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log('操作成功');
})


