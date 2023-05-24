const asyncFun = () =>{
    return new Promise((resolve,reject)=>{
        // 最常见的异步 发送http请求
        // 此处用setTimeOut模拟异步 
        setTimeout(()=>{
            resolve('等到我了')
            // reject('没等到我')
        },2000)
    })
}
// then的参数是两个回调函数，第一个回调函数成功时执行，第二个回调函数失败时执行。
// 回调函数的参数就是resolve或reject参数，(两个回调函数可以理解为一个是resolve,一个是reject)
// then方法的返回值是一个promise对象
let abc = asyncFun().then(
    (result)=> { 
        console.log(result,'等了2秒才执行我') 
    }
    // (result)=>{console.log(result);} //没怎么见过reject执行第二个函数的情况
    
).catch((result)=>{ //异步操作执行失败时执行
    console.log(result);
})
console.log(abc);

// then()方法返回一个新的Promise对象，可以通过链式调用then()方法来处理多个异步操作的结果。
// 如果then()方法中的回调函数返回一个值，那么这个值会作为下一个then()方法的参数传递。(暂且就先理解为：then回调函数中的return就是Promise回调函数执行resolve)
asyncFun().then((res)=>{
    return res + '我作为下一个then方法的回调函数的参数传过来了'
}).then((res=>{
    console.log(res);
    return res + '又传一次哈哈'
})).then(res=> {
    console.log(res);
})


// 常见的异步操作包括：

// 网络请求：包括HTTP请求、WebSocket通信等，这些操作需要等待服务器响应才能继续执行。

// 定时器：包括setTimeout和setInterval等，这些操作需要等待指定的时间间隔后才能执行。

// 文件读写：包括读取本地文件、上传文件等，这些操作需要等待文件读取或上传完成才能继续执行。

// 数据库操作：包括查询、插入、更新、删除等，这些操作需要等待数据库响应才能继续执行。

// 动画效果：包括CSS动画、Canvas动画等，这些操作需要等待动画效果完成才能继续执行。

// 用户输入：包括鼠标点击、键盘输入等，这些操作需要等待用户输入才能继续执行。

// 其他异步操作：包括定位、推送通知、音视频播放等，这些操作都需要等待相应的事件发生才能继续执行。

// 以上异步操作都需要等待一定的时间或事件才能完成，因此需要使用异步编程的方式来处理它们。常见的异步编程方式包括回调函数、Promise、async/await等。


// 常见的异步函数包括：

// Promise：Promise是一种异步编程的解决方案，它可以将异步操作封装成一个Promise对象，并通过then()和catch()方法来处理异步操作的结果。

// async/await：async/await是ES2017引入的异步编程解决方案，它可以让异步代码看起来像同步代码一样，使得代码更加易于理解和维护。

// setTimeout/setInterval：setTimeout和setInterval是JavaScript中常用的定时器函数，它们可以在指定的时间间隔后执行一段代码。

// fetch：fetch是一种用于获取网络资源的API，它返回一个Promise对象，可以使用then()和catch()方法来处理异步操作的结果。

// XMLHttpRequest：XMLHttpRequest是一种用于发送HTTP请求的API，它也返回一个Promise对象，可以使用then()和catch()方法来处理异步操作的结果。

// Node.js中的异步函数：Node.js中有很多异步函数，比如fs.readFile()、http.get()等，它们都是基于回调函数的异步编程方式，但也可以使用Promise或async/await来处理异步操作的结果。