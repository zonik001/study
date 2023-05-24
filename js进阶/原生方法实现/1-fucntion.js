const obj = {
    name: "胡伯涵",
    func(age,work) {
        console.log(`${this.name}${age}岁了在${work}`)
    }
}
const obj2 = {
    name: "张三" 
}
Function.prototype._call = function(obj, ...args) {
    obj = obj || window
    const fn = Symbol()
    console.log(this); 
    // 利用谁调用指向谁的原则（call调func,this指向func）
    // 此时this指向 func方法 
    // obj2就有了func方法
    obj[fn] = this   
    
    // 最后返回obj2.func(...args)
    // 此时this指向obj2
    return obj[fn](...args)
}
obj.func._call(obj2,24,'搬砖')

// bind
// 用来创建一个新函数，该函数与原函数具有相同的函数体，但是绑定了指定的 this 对象和参数列表。
Function.prototype._bind = function(obj, ...args1) {
    let self = this
    return function(...args2) {
        obj = obj || window
        console.log(...args1);
        return self.apply(obj,[...args1, ...args2])
    }
}
let bindfunc = obj.func._bind(obj2,10)
bindfunc('读书')