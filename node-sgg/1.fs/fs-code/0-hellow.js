console.log('hellow nodejs')  //运行命令 node "js文件名"

// node.js中不能使用Dom、Bom的Api
// Bom
console.log(window)
console.log(history)
console.log(location)
console.log(navigator)
// DOM
console.log(document)
// AJAX
let xhr = new XMLHttpRequest()

// 以上不可用

// 定时器可用
setTimeout(() => {
    console.log('settimeout')
}, 1000);

// nodejs中顶级对象 global
console.log(global)
console.log(globalThis) //ES2020