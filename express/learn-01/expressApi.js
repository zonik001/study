// 中间件API
const express = require('express')

const app = express()

// express()
// 1.express.json([options])

var jsonOptions = {
    inflate: true,
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
  
//   app.use(express.static('public', jsonOptions))