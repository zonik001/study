const express = require('express')

const app = express()

// get post use
app.get('/home', (req, res, next) => {
    console.log(req.query); // get可以这样直接获取查询字符串
    // next方法用于对请求的多级处理
    if(Number(req.query.num) > 10) {
        // 满足条件时，才可触发同名的下一个路由。

        // 给下一级传参只要给req实例添加属性即可（注意不要覆盖系统默认属性）
        req.randomNum = Math.floor(Math.random() * 100)
        next()
    }else {
        res.send({
            error: 0,
            msg: '请求成功'
        });
    }
    // res.send({
    //     error: 0,
    //     msg: '请求成功'
    // });
    // res.send(new Buffer('wahoo')); 
    // res.send({ some: 'json' });
    // res.send('<p>some html</p>');
    // res.send(404, 'Sorry, cant find that');
    // res.send(404);

})
app.get('/home', (req, res, next) => {
    res.send({
      error: 0,
      msg: `输入成功，接收到的随机数为${req.randomNum}` //直接响应获取参数
    })
})
app.listen(8080, ()=> {
    console.log('app start ,8080 port listen');
})
