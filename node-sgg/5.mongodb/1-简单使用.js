// 1.安装并导入mongoose
const mongoose = require('mongoose')

// 2.连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

// 3.设置连接回调
mongoose.connection.on('open', ()=> {
    console.log('连接成功')

    // 4.创建文档结构对象
    let BookSchema = new mongoose.Schema({
        title: String,
        author: String,
        price: Number
    })

    // 5.创建文档模型对象
    let BookModel = mongoose.model('book', BookSchema)

    // 6.插入文档
    BookModel.create({
        title: '西游记',
        author: '吴承恩',
        price: 100
    })
})

//连接出错
mongoose.connection.on('error', () => {
    console.log('连接出错~~');
})

//连接关闭
mongoose.connection.on('close', () => {
    console.log('连接关闭');
})



