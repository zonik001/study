// // let und = undefined
// let obj = {oa:arr1}
// let arr = [{a:'1',b:'2'},{a:'1',b:'2'},{a:'1',b:'2'}]

// // und = und.concat(arr)
// und = [...arr]
// console.log(und);

// // 对象添加熟悉的三种方式
// let obj = { a: "1", b: "2" };
// obj.c = "3";
// console.log(obj);

// let obj1 = { d: "4" };
// Object.assign(obj, obj1);
// console.log(obj);

// 3.使用扩展运算符
// let obj2 = { e: "5" };
// obj = { ...obj, ...obj2 };
// console.log(obj);

/**
 * 在vuex的使用中，辅助函数mapState或mapGetter怎么样与组件中局部的计算属性混合使用
 * 由于mapState函数返回的是个对象
 * 因此直接使用上面第三种方式，扩展运算符即可
 */