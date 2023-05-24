// 类只有一个实例。这个实例会在程序运行期间创建，并且在整个程序生命周期内保持存在。
// 类需要提供一个全局的访问方法，让其他对象可以访问这个唯一实例。


// 基本实现
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        // 如果 Singleton 没有实例化，则创建一个新的实例
        Singleton.instance = this;
      }
      // 如果 Singleton 已经有实例化对象，则返回该实例化对象
      return Singleton.instance;
    }
}
  
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // 输出 true


// vuex
