// 口诀：箭头函数、new、bind、apply 和 call、欧比届点（obj.）、直接调用、不在函数里


// 常见的this指向：

// 全局作用域中或者普通函数中this指向全局对象window
// 立即执行函数this必定指向window
// 定时器this指向window
// 事件中this指向事件源对象
// 方法中谁调用就指向谁
// 构造函数中this指向对象实例



const obj = {
    name: "胡伯涵",
    func(age,work) {
        console.log(`${this.name}${age}岁了在${work}`)
    }
}
const obj2 = {
    name: "张三" 
}



// call 
// 语法: fnc.call(obj,...args)
// obj：想让this指向的对象   ...args:该函数的实参,单个单个写
console.log('call-------------------------------');
obj.func.call(obj2,24,'搬砖')  //张三24岁了在搬砖

// apply
// 语法：fuc.apply(obj,arr)
// obj：想让this指向的对象  arr:该函数实参组成的数组
console.log('apply-----------------------------');
obj.func.apply(obj2,[22,"搬砖"])

// bind
// 语法和call一样，返回值是一个函数
console.log('bind--------------------------------');
obj.func.bind(obj2,24,'搬砖') ()



// 练习
