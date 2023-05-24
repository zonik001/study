
// Settled 稳定的
// 1.Promise.allSettled()
// 介绍：
// 它接收一个 Promise 数组作为参数，并返回一个新的 Promise 对象。
// 当所有的 Promise 对象都已经 settled（已完成或已拒绝）时，新的 Promise 对象会 resolve，返回一个包含所有 Promise 对象的状态和值的数组。
// 返回值示例
// [
//     { status: 'fulfilled', value: [ 1, 2, 3 ] },
//     {
//       status: 'rejected',
//     },
//     { status: 'fulfilled', value: [ 4, 5, 6 ] },
//     { status: 'fulfilled', value: [ 7, 8, 9 ] }
// ]
// 即便其中任何一个 Promise 对象被拒绝，新的 Promise 对象也会 resolve
// 被拒绝的 Promise 对象的状态为 rejected，值为拒绝原因

// 语法：
// Promise.allSettled(iterable) 
// iterable 是一个可迭代对象，例如数组或类数组对象，它包含多个 Promise 对象。

// 作用：
// 方便地处理多个 Promise 对象的 settled 状态，避免了使用 Promise.all() 方法时因为某个 Promise 对象被拒绝而导致整个 Promise 对象被拒绝的问题。

// 分析：
// 相较于all,不会因为其中一个promise状态不是fufilled就导致整个rejected


// 先熟悉一下new操作符传回调函数resolve和直接写的写法

let ii = new Promise((resolve)=>{
    resolve('lisi')
})
console.log(ii); //Promise { 'lisi' }

const promises = [
    Promise.resolve([1,2,3]),
    Promise.reject(new Error('Error 1')), 
    Promise.resolve([4,5,6]),
    Promise.resolve([7,8,9])
]
console.log(promises);

// 例子：
let obj = {}
function asyFunc1() {
    return Promise.allSettled(promises).then(result=>{
        console.log(result);  //格式为[{status:'',value:}]
        result.forEach(item=> {
            if(item.status === 'fulfilled') {
                obj.value = item.value
            }
        })
        // console.log(obj,'obj');
        return obj
    })
}

function asFun() {
    new Promise(resolve=> {
        resolve(asyFunc1())
    }).then(res=> {
        let abc = res
        console.log(abc,'abc');
    })
}
// async 语法糖写法
// async function asFun() {
//     let abc = await asyFunc1()
//     console.log(abc,'abc');
// }
asFun()



// Promise.all()
// 方法会等待所有的 Promise 对象 resolved（已完成），并返回一个包含所有 Promise 对象的值的数组。
// 如果其中任何一个 Promise 对象被拒绝，新的 Promise 对象会立即被拒绝，并返回被拒绝的 Promise 对象的拒绝原因。