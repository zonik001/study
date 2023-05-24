
// defineProperty

//作用：在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
// 语法：Object.defineProperty(obj, prop, descriptor)
// obj:要添加属性的对象
// prop:要定义或修改的属性的名称或 [Symbol]
// descriptor:要定义或修改的属性描述符

// 1. 单个属性监听
// 添加一个对象，监听person上的name属性的变化。
let person = {}
let personName = 'hubohan'

//在person对象上添加属性namep,值为personName
Object.defineProperty(person,'namep',{
    get:()=> {
        console.log('get()触发');
        return personName
    },
    set:(val)=> {
        console.log('set()触发');
        personName = val
    }
})

//当读取person对象的namp属性时，触发get方法
console.log(person.namep) //get()触发 hubohan

//当修改personName时，重新访问person.namep发现修改成功
personName = 'liming'
console.log(person.namep) //get()触发 liming

// 对person.namep进行修改，触发set方法
person.namep = 'huahua'  //set()触发
console.log(person.namep) // get()触发 huahua



// 2. 一个对象多个属性监听

// 错误案例
// 错误原因：person2[propName]相当于person.propName,
// 这样就触发get()或set(),然后get()、set()中又直接访问了person2[propName]，结果就是导致递归调用，最后栈溢出
// let person2 = {name:'hubohan',age:24}
// Object.keys(person2).forEach(propName=> {
//     Object.defineProperty(person2,propName,{
//         get: ()=> {
//             return person2[propName]
//         },
//         set:(val)=> {
//             console.log(`对person中的${propName}属性进行了修改`)
//             return person2[propName] = val
//         }
//     })
// })
// console.log(person2.age);

console.log('一个对象多个属性监听------------------------------');

// 所以需要一个中转Obsever，让get、set return的值不会直接访问obj[prop]
// 实现一个响应式函数
const defineProperty = (obj,key,value) => {
    Object.defineProperty(obj,key,{
        get:()=> {
            console.log(`访问了${key}属性`);
            return value
        },
        set:(newVal) => {
            console.log(`将对象中的${key}属性值修改为了${newVal}`)
            return value = newVal
        }
    })
}
const Obsever = (obj) => {
    Object.keys(obj).forEach(key=> {
        defineProperty(obj,key,obj[key])
    })
}
let person3 = {name:'hubohan03',age:24}
Obsever(person3)

console.log(person3.name);

person3.name = 'zhangsan'

console.log(person3.name);



// 3.深度监听一个对象
// 在上面的基础上，在defineProperty函数中递归调用Observer函数。在Oberver中添加递归停止条件。
console.log('一个对象多个属性监听，深度监听------------------------------');

// 在defineProperty()函数中，添加一个递归的情况
const defineProperty_deep = (obj,key,value) => {
    //如果某对象的属性也是一个对象，递归进入该对象，进行监听
    if(value && typeof value === 'object'){
        Obsever_deep(value)
    }
    Object.defineProperty(obj,key,{
        get:()=> {
            console.log(`访问了${key}属性`);
            return value
        },
        // 当原本对象的属性值是一个字符串，当我们给他赋成一个对象，
        // 此时这个对象的监听也需要在set中进行递归
        set:(newVal) => {
            if(typeof newVal === 'object'){
                Obsever_deep(newVal)
            }
            console.log(`将对象中的${key}属性值修改为了${newVal}`)
            return value = newVal
        }
    })
}
// 在observer里面加一个递归停止的条件
const Obsever_deep = (obj) => {
    //如果传入的不是一个对象，return
    if (typeof obj !== "object" || obj === null) {
        return
    }
    Object.keys(obj).forEach(key=> {
        defineProperty_deep (obj,key,obj[key])
    })
}
let person4 = {Msg:{name:'hubohan03',age:24},Place:'hunan'}
Obsever_deep(person4)

console.log(person4.Msg.name);

person4.Msg.age = 1

console.log(person4.Msg.age);


// 4.监听数组
// 不能监听到push、unshif增加的属性，所以vue2.x对Array的这些方法进行了重写



// Proxy

// 通过Proxy，我们可以对设置代理的对象上的一些操作进行拦截，外界对这个对象的各种操作，都要先通过这层拦截。
// 语法：const p = new Proxy(target, handler)
// 1.target:要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
// 2.handler:一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

// **Object.defineProperty()给对象添加一个属性之后，我们对对象属性的读写操作仍然在对象本身。
// 但是一旦使用Proxy，如果想要读写操作生效，我们就只能对Proxy的实例对象proxyObj进行操作。**

// 1.简单案例
console.log('proxy---------------------------------------');
let handler = {
    get:(obj,key)=> {
        console.log('触发了get');
        // 如果对象里有这个属性，就返回属性值，如果没有，就返回默认值66
        return key in obj ? obj[key] : 66
    },
    set:(obj,key,val)=> {
        console.log('触发了set')
        obj[key] = val
        return true
    }
}

let person5 = {name:'hubohan',age:24}
//把handler对象传入Proxy
let proxyObj = new Proxy(person5, handler)

console.log(proxyObj.ss);

proxyObj.name = 'xiaohu'

console.log(proxyObj.name);

// 由上面例子看出，Proxy是对整个对象进行拦截代理，并返回一个新对象让我们操作.defineProperty则是对对象的单个属性进行拦截处理

// 思考在Object.defineProperty中遇到的问题
// 1. 一次只能对一个属性进行监听，需要遍历来对所有属性监听。（Proxy不需要遍历属性，因为代理的是整个对象）
// 2. 在遇到一个对象的属性还是一个对象的情况下，需要递归监听。（Proxy同样需要递归监听）
// 3. 对于对象的新增属性，需要手动监听（不需要）
// 4. 对于数组通过push、unshift方法增加的元素，也无法监听。（可以直接监听）
// 结论：proxy比起Object.defineProperty有很大的优势


