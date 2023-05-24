<template>
  <div class="wrap">
    <div class="title">{{ title }}</div>
    <div class="box" ref="box">
      <div class="item" v-for="(item, index) in items" :key="index" ref="items">{{ item }}</div>
      <div class="spin" ref="spin"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '圣诞抽抽乐',
      items: [
        '一等奖',
        '二等奖',
        '三等奖',
        '谢谢惠顾',
        '开始',
        '特等奖',
        '再见',
        '666',
        '哈哈'
      ],
      isRunning: false
    }
  },
  mounted() {
    const start = this.$refs.items[4]
    start.addEventListener('click', this.debounce(this.startSpin))
  },
  methods: {
    /**
     * 生成n维环形坐标
     * @param {number} n 维度
     * @param {number} cell 单位坐标长度
     */
    generateCirclePath(n, cell) {
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push([i * cell, 0])
      }
      for (let i = 0; i < n - 1; i++) {
        arr.push([(n - 1) * cell, (i + 1) * cell])
      }
      for (let i = 0; i < n - 1; i++) {
        arr.push([(n - i - 2) * cell, (n - 1) * cell])
      }
      for (let i = 0; i < n - 2; i++) {
        arr.push([0, (n - i - 2) * cell])
      }
      return arr
    },
    /**
     * 环形随机轨道运动函数
     * @param {element} el 运动的dom元素
     * @param {array} path 运动的环形坐标集合
     * @param {func} cb 动画结束时回调
     * @param {number} speed 运动的初始速度
     * @param {number} i 运动的初始位置
     * @param {number} len 路径的长度
     * @param {number} random 中奖坐标
     */
    run(
      el,
      path,
      n = 1,
      cb,
      speed = 60,
      i = 0,
      len = path.length,
      random = Math.floor(Math.random() * len)
    ) {
      setTimeout(() => {
        if (n > 0) {
          if (n === 1) {
            len = random
          }
          if (len <= i) {
            i = n === 1 ? len : 0
            n--
            speed += (300 - speed) / n
          }
          el.style.transform = `translate(${path[i][0]}px, ${path[i][1]}px)`
          this.run(el, path, n, cb, speed, ++i, len, random)
        } else {
          cb && cb() //不太懂 cb()
          //
          // 在动画结束时触发自定义事件
          var event = new Event('my-animation-end')
          el.dispatchEvent(event) //dispatchEvent() 派发事件 ，派发后可以用addEventListener监听到事件
        }
      }, speed)
      // 在这块不能这么用，这里的动画结束指的是滑块移动一次结束，而不是整个动画结束
      // 在动画结束时触发自定义事件
      // var event = new Event('my-animation-end')
      // el.dispatchEvent(event) //dispatchEvent() 派发事件 ，派发后可以用addEventListener监听到事件
    },
    startSpin() {
      if (this.isRunning) return
      this.isRunning = true
      const spin = this.$refs.spin
      spin.addEventListener('my-animation-end', () => {
        this.isRunning = false
        console.log(this.isRunning)
      })
      this.run(spin, this.generateCirclePath(3, 100), 3)
    },

    // 防抖函数的原理:
    // 在事件被触发 n 秒后才执行回调函数，
    // 如果在这 n 秒内事件又被触发，则重新开始计时，等待 n 秒后再执行回调函数。
    // 如果在这 n 秒内再次触发了事件，就重新计时。
    // 添加防抖函数
    // 回顾一下防抖的概念
    // 防抖函数的作用是在某个时间段内，只执行一次回调函数。
    // 该函数接受两个参数：回调函数 fn 和等待时间 delay。
    // 它返回一个新函数，每次调用该新函数时都会启动一个计时器。
    // 如果在等待时间内再次调用该函数，则会清除之前的计时器。只有等待时间过去后，该函数才会执行回调函数。
    debounce(fn, interval = 300) {
      let timer = null
      return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        }, interval)
      }
    }
  }
}
</script>
    
<style lang="scss">
.box {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;
  position: relative;
  background-color: #ce2e11;

  .item {
    box-sizing: border-box;
    width: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid #fff;
  }

  .spin {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
  
  