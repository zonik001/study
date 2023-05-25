const fs = require('fs')

const file = fs.readdirSync('./fs-code')

// 批量重命名
// file.forEach(item => {
//     let data = item.split('-')
//     let [num, name] = data
//     if (Number(num) < 10) {
//         num = Number(num)
//         num = '0' + num
//     }
//     let newName = num + '-' + name
//     fs.renameSync(`./fs-code/${item}`, `./fs-code/${newName}`)
// })
// console.log(file);

// 更改同一文件夹下的文件时部分文件会出现undefine后缀 ，原因未知




// 缺少前移
const file1 = fs.readdirSync('./fs-code1')
// console.log(file1);
// let num = []
// for (let i = 0; i < file1.length; i++) {
//     num.push(file1[i].split('-')[0])
// }
// console.log(num);
file1.forEach((item, index) => {
    let name = item.split('-')[1]
    if (Number(index) < 10) {
        index = Number(index)
        index = '0' + (index + 1)
    }
    let newName = index + '-' + name
    fs.renameSync(`./fs-code1/${item}`, `./fs-code1/${newName}`)
})