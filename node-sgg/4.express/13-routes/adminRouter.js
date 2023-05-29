const express = require('express')

const router = express.Router()

// 创建路由规则
router.get('/home', (req, res) => {
    res.send('前台首页')
})

// 暴露路由
module.exports = router