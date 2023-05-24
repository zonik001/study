// 装饰器(Decorator) 它可以被用来修改类和类的属性、方法和参数等。
function get(target) {
    target.get = 'GET';
}
  
@get
class MyHttpClass {}
  
console.log(MyHttpClass.get) // GET
  
// 如果觉得一个参数不够用，可以在修饰器外面再封装一层函数
function get(type) {
    return function(target) {
        target.type = type;
        // 添加实例属性
        target.prototype.isDev = true;
    }
}

@get('json')
class MyHttpClass {}
MyHttpClass.type // 'json'

let http = new MyHttpClass();
http.isDev // true