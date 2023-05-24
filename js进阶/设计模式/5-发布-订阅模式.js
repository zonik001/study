
/** 理解
 * 它允许在应用程序中定义对象之间的一对多的依赖关系，
 * 当一个对象的状态发生变化时，所有依赖于它的对象都会被通知和更新。
 * 
 * 两种类型对象：
 * 发布者和订阅者。
 * 发布者是事件的发出者，它通常维护一个事件列表，并且可以向列表中添加或删除事件。
 * 当某个事件发生时，它会将这个事件通知给所有订阅者。
 * 订阅者则是事件的接收者，它们订阅感兴趣的事件，并且在事件发生时接收通知
 */

const addEventLi = ()=> {
// 我们需要在一定条件下干一些事情
// 但我们不知道的是这个条件会在什么时间点成立
// 所以我们留下我们的函数
// 当条件成立时自动执行
class DOM {
    #eventObj = {
        click: [],
        mouseover: [],
        mouseout: [],
        mousemove: [],
        keydown: [],
        keyup: []
        // 还有很多事件类型就不一一写啦
    }
    addEventListener (event, fn) {
        this.#eventObj[event].push(fn)
    }
    removeEventListener (event, fn) {
        const arr = this.#eventObj[event]
        const index = arr.indexOf(fn)
        arr.splice(index, 1)
    }
    click () {
        this.#eventObj.click.forEach(fn => fn.apply(this))
    }
    mouseover () {
        this.#eventObj.mouseover.forEach(fn => fn.apply(this))
    }
    // 还有很多事件方法就不一一写啦
}


const dom = new DOM()

dom.addEventListener('click', () => console.log('点击啦！'))
dom.addEventListener('click', function () { console.log(this) })

dom.addEventListener('mouseover', () => console.log('鼠标进入啦！'))
dom.addEventListener('mouseover', function () { console.log(this) })

// 模拟点击事件
dom.click() // 依次打印出：'点击啦！' 和相应的 this 对象

// 模拟鼠标事件
dom.mouseover() // 依次打印出：'鼠标进入啦！' 和相应的 this 对象

const fn = () => {}
dom.addEventListener('click', fn)
// 还可以移除监听
dom.removeEventListener('click', fn)


// 首先要指定好谁充当发布者（比如售楼处）在本例中是 dom 这个对象
// 然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者（售楼处的花名册）在本例中是 dom.#eventObj
// 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数（遍历花名册，挨个发短信）
}
addEventLi()


// 发布者对象
const publisher = {
    events: {},
    subscribe(event, callback) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);   //存花名册上 
    },
    publish(event, args) {
      if (!this.events[event]) {
        return;
      }
      this.events[event].forEach((callback) => {
        callback(args);  //从花名册上取出来执行
      });
    }
};
  
// 订阅者对象
const subscriber = {
    onEvent(args) {
        console.log(`收到消息：${args}`);
    },
};
  
// 订阅者订阅事件
publisher.subscribe("eventA", subscriber.onEvent);   //订阅，然后被发布者对象存花名册

// 发布者发布消息
publisher.publish("eventA", "Hello, World!");  //发布者根据花名册 通知订阅者（执行订阅事件）
  