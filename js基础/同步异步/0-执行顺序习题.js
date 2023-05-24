// js同步与异步的区分
// 同步：你打电话去书店订书，老板说我查查，你不挂电话在等待，老板把查到的结果告诉你，这期间你不能做自己的事情
// 异步：你打电话去书店订书，老板说我查查，回头告诉你，你把电话挂了，先去做自己的事情


// js执行机制
// 1、遇到同步代码直接执行
// 2、遇到异步代码先放一边，并且将他回调函数存起来，存的地方叫事件队列
// 3、等所有同步代码都执行完，再从事件队列中把存起来的所有异步回调函数拿出来按顺序执行


// 解题步骤
// 1、标记区分异步和同步
// 2、异步中，标记区分宏任务和微任务
// 3、分轮数，一轮一轮慢慢走

// 例题一
// console.log(1)
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => {
//         console.log(3)
//     })
// });
// console.log(4)
// new Promise((resolve, reject) => {
//     console.log(5)
//     resolve()
// }).then(() => {
//     console.log(6)
//     setTimeout(() => {
//         console.log(7)
//     })
// })
// console.log(8)

async function abcd() {
    function d() {
        return new Promise((resolve,reject) => {
            console.log(1),
            resolve()
        })
    };
    function c() {
        return new Promise((resolve,reject) => {
            d().then(res => {
                console.log(2),
                resolve()
            })
        })
    };
    function a() {
        c().then(res => {
            console.log(3)
        })
    };
    async function b() {
        try {
            await a()
        }catch(e) {

        }
        console.log(4)
    }
    await b()
}
abcd()



const object = { a2: '', 2: '', 1: '', a1: '' };
for (const key in object) {
  console.log(key);
}