// 极简版每次定义数据时都需要手写一遍getter和setter、手动的去执行一下依赖收集函数以及触发的函数，可以继续封装

let activeEffect
class Dep {
    subscribers = new Set()
    depend() {
      if (activeEffect) {
        this.subscribers.add(activeEffect)
      }
    }
    notify() {
      this.subscribers.forEach(effect => effect())
    }
}
function watchEffect(effect) {
    activeEffect = effect
    effect()
}

// 对订阅者对象进行代理，对其的每一个键创建一个依赖对象，最后返回的代理对象具有响应式
// raw 未加工的、原始的
function reactive(raw) {
    // 使用 Object.defineProperty
    // 1. 遍历对象上存在的 key
    Object.keys(raw).forEach(key=> {
        // 2. 为每个 key 都创建一个依赖对象
        const dep = new Dep()
        // 3. 用 getter 和 setter 重写原对象的属性
        let realValue = raw[key]
        Object.defineProperty(raw,key,{
            get() {
                // 4. 在 getter 和 setter 里调用依赖对象的对应方法
                dep.depend()
                return realValue
            },
            set(newVal) {
                realValue = newVal
                dep.notify()
            }
        })
    })
    return raw
}
// vue2不管三七二十一，全部添加响应式，
// vue3则是：
// 当获取对象上的某个键对应的值时，会先判断这个值到底有没有对应的发布者对象，没有的话再创建发布者对象。
// 而且当获取到的值是引用类型时再把这个值变成响应式对象，等你用到了响应式对象里的值时再去新建发布者对象。


// 使用
const state = reactive({
    count: 0
})

watchEffect(()=> {
    console.log(state.count); //0
})

state.count++ //1
state.count++ //2