// 我们提前定义好一个函数，当函数里面依赖的数据项发生变化时就会自动执行这段函数，这就是响应式！
// 实现
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


// 使用
const dep = new Dep()

let actualCount = 0
const state = {
  get count() {
    dep.depend()
    return actualCount
  },
  set count(newCount) {
    actualCount = newCount
    dep.notify()
  }
}

watchEffect(() => {
  console.log(state.count)
}) // 0

state.count++ // 1
state.count++ // 2


// 这段代码是个典型的发布订阅者模式
// 发布者：dep 对象
// 缓存列表：subscribers
// 发布消息：dep.notify()