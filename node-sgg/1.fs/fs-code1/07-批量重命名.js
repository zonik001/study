const fs = require('fs')

const file = fs.readdirSync('./')

file.forEach(item => {
    let data = item.split('-')
    let [num, name] = data
    if (Number(num) < 10) {
        num = Number(num)
        num = '0' + num
    }
    let newName = num + '-' + name
    fs.renameSync(`./${item}`, `./${newName}`)
})
console.log(file);

// 更改同一文件夹下的文件时部分文件会出现undefine后缀 ，原因未知