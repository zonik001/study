  // promise对象的特性
  let p1 = new Promise((resolve,reject) => {
    resolve("成功")
    reject("失败")
})
console.log(p1) //成功 
let p2 = new Promise((resolve,reject) => {
    reject("失败")
    resolve('成功')
})
console.log(p2) //失败
let p3 = new Promise((resolve,reject) => {
    // resolve("成功")
    throw("报错")
})
console.log(p3)
// 从上得出如下特性  
// Promise的初始状态是pending
// 1、执行了resolve，Promise状态会变成fulfilled
// 2、执行了reject，Promise状态会变成rejected
// 3、Promise只以第一次为准，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected
// 4、Promise中有throw的话，就相当于执行了reject

// 手动实现resolve,reject
// 构建myPromise类 
class myPromise{
    // 构造方法
    constructor(executor) {
        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve,this.reject)
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null  //终值
        this.PromiseState = "pending"  //状态
    }

    resolve(value) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value
    }
    reject(reason) {
        // state是不可变的   
        if(this.PromiseState !== 'pending') return        
        this.PromiseState = "rejected"
        this.PromiseResult = reason
    }
}
let p4 = new myPromise((resolve,reject) => {
    resolve('成功')
    reject('失败')
})
console.log('p4',p4)