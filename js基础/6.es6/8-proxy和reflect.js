// 1.将对象属性的访问和修改权限控制

// 使用 Proxy 对象创建 secureObject 实例，
// 该实例拦截了目标对象（obj）的 get 和 set 操作，并根据 accessRules 对象的设置来控制属性的访问和修改权限。
// 通过返回被代理的原始对象或者 false，从而实现对属性的读写权限控制
const secureObject = (obj, accessRules) => {
    return new Proxy(obj, {
        get(target, property) {
            if (accessRules && accessRules[property] === 'read') {
                console.log(`Read access denied to property ${property}`);
                return undefined;
            } else {
                console.log(`Reading property ${property}`);
                return Reflect.get(target, property);
            }
        },
        set(target, property, value) {
            if (accessRules && accessRules[property] === 'write') {
                console.log(`Write access denied to property ${property}`);
                return false;
            } else {
                console.log(`Setting property ${property} to ${value}`);
                return Reflect.set(target, property, value);
            }
        }
    });
};
  
const obj = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
  
const secureObj = secureObject(obj, { age: 'read', email: 'write' });
  
// 访问属性
console.log(secureObj.name);  // 输出：Reading property name
                            //      John Doe

console.log(secureObj.age);   // 输出：Read access denied to property age
                            //      undefined
  
// 修改属性
secureObj.name = 'Jane Doe';  // 输出：Setting property name to Jane Doe

secureObj.age = 35;           // 输出：Write access denied to property age
                            //      false

secureObj.email = 'jane.doe@example.com';  // 输出：Setting property email to jane.doe@example.com



// 2.缓存函数
function createCacheableFunction(fn) {
    const cache = new Map();
    return new Proxy(fn, {
      apply(target, thisArg, args) {
        const cacheKey = JSON.stringify(args);
        if (cache.has(cacheKey)) {
          console.log('Retrieving from cache...');
          return cache.get(cacheKey);
        } else {
          console.log('Executing function...');
          const result = Reflect.apply(target, thisArg, args);
          cache.set(cacheKey, result);
          return result;
        }
      }
    });
}
  
const sum = (a, b) => a + b;
const cachedSum = createCacheableFunction(sum);

console.log(cachedSum(1, 2));  // 执行函数...  输出: 3
console.log(cachedSum(1, 2));  // 检索缓存...  输出: 3
  