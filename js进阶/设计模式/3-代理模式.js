// 代理的理解
// 理解案例：
// VPN代理,访问外网时DNS解析会被墙，此时通过VPN进行代理，实际上就是一台能访问到外网的服务器代替你向外网发送请求，然后把请求的结果返回给你。
// 跨域-请求代理,浏览器同源策略（协议、IP、端口号）,前端开发过程中本地调试代码本机直接请求资源会导致跨域，此时需要在config文件中写Proxy。项目上线后则通过Nginx反向代理解决跨域。
// vue中的代理,为啥你写在props、 data、methods、computed里的方法能够直接通过 this 访问到？因为 Vue 内部做了代理. this.xxx 相当于 this._data.xxx

// 实践案例
// 保护代理 对 一个对象 的属性读写做拦截就算是读写代理。
let definePropertypp = () => {
    console.log('defineProperty----------');
    const obj = {}
    let initVal = 0
    Object.defineProperty(obj, 'id', {
    get() {
        return ++initVal
    }
    })
    obj.id
    obj.id
    obj.id
    console.log(obj.id) // 4
}
definePropertypp()

let Proxypp = ()=> {
    console.log('Proxypp----------');
    const obj = {}
    let initVal = 0
    const objProxy = new Proxy(obj, {
        get() {
            return ++initVal
        }
    })
    objProxy.adasdd
    objProxy.id
    objProxy.id
    console.log(objProxy.dsad) // 4
}
Proxypp()

// proxy对象
// 语法
// let p = new Proxy(target, handler); 
// target是被代理对象。它可以是JavaScript中的任何合法对象.如: (数组, 对象, 函数等等)
// handler是你要自定义操作的一个方法的集合
// p是被代理之后的新对象，它有target所有的属性和方法。只不过其行为和结果都是在handler中定义的。

// 案例
let obj = {
    a: 1,
    b: 2
}
const p = new Proxy(obj,{
    get(target,key,value) {
        if(key === 'C') {
            return '我是一个自定义结果'
        } else {
            return target[key]
        }
    },
    set(target,key,value) {
        if(value === 4) {
            target[key] = '我是一个自定义结果'
        }else {
            target[key] = value
        }
    }
})
console.log(obj.a) // 1
console.log(obj.c) // undefined
console.log(p.a) // 1
console.log(p.c) // 我是自定义的一个结果

obj.name = '李白';
console.log(obj.name); // 李白
obj.age = 4;
console.log(obj.age); // 4

p.name = '李白';
console.log(p.name); // 李白
p.age = 4;
console.log(p.age); // 我是自定义的一个结果



