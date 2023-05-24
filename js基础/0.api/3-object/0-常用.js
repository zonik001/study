// 1.Object.assign() 
// 特性
// 将源对象的属性复制到目标对象中，并返回目标对象。
// 如果多个源对象具有相同的属性，则后面的源对象的属性将覆盖前面的源对象的属性。

// 作用
// 用于将一个或多个源对象的属性复制到目标对象的方法.

// 语法
// Object.assign(target, ...sources)
// target 复制的目标对象     sources 是一个或多个源对象

console.log('assign--------------------------------');
let assignBlock = ()=> {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    const newObj = Object.assign({}, obj1, obj2);
    console.log(newObj); // { a: 1, b: 3, c: 4 }
}
assignBlock()

// 2.Object.is()
// 特性
// 返回一个布尔值，表示两个值是否相等
// 与 === 运算符不同的是，Object.is 方法将 NaN 和 NaN 视为相等的，将 +0 和 -0 视为不相等的。

// 作用
// 比较两个值是否相等

// 语法
// Object.is(value1, value2)

console.log('is--------------------------------');
function isBlock() {
    console.log(Object.is(1, 1)); // true
    console.log(Object.is(1, '1')); // false
    console.log(Object.is(NaN, NaN)); // true
    console.log(Object.is(+0, -0)); // false

    console.log(Object.is({a:'1',b:'2'},{a:'1',b:'2'})); //false
}
isBlock()

// 3.Object.entries() 、keys() 、value()
const entriesBlock = () => {
    console.log('entries\keys\valueBlock--------------------');
    const obj1 = {
        age: 18,
        name: 'zg',
        friends: ['lucy', 'jam']
      }
      const result = Object.entries(obj1);
      console.log(result);  //[ [ 'age', 18 ], [ 'name', 'zg' ], [ 'friends', [ 'lucy', 'jam' ] ] ]
      const result2 = Object.keys(obj1);
      console.log(result2);  //[ 'age', 'name', 'friends' ]
      const result3 = Object.values(obj1);
      console.log(result3);  //[ 18, 'zg', [ 'lucy', 'jam' ] ]
}
entriesBlock()



// 4.Object.prototype.hasOwnProperty()、Object.hasOwn()





// 5.Object.create()

// 作用：新创建一个对象，这个新对象的 __proto__ 指向了现有对象
// 语法：Object.create(proto，[propertiesObject]) 

// proto：新创建对象的原型对象，必须为null或者原始包装对象，否则会抛出异常

// propertiesObject：可选参数，需要是一个对象，该传入对象的自有可枚举属性，
// (即其自身定义的属性，而不是其原型链上的枚举属性)将为新创建的对象添加指定的属性值和对应的属性描述符

// 返回值：返回一个新对象，带着指定的原型对象和属性。





