const fs = require('fs')

// stat  status
fs.stat('./', (err, data) => {
    if (err) {
        console.log('操作失败');
        return
    }
    console.log(data, 'data');
    // isFile 
    console.log(data.isFile());
    // isDirectory
    console.log(data.isDirectory());
})