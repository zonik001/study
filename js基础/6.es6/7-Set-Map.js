// Set 类似于数组，但是成员的值都是唯一的，没有重复的值。Set本身是一个构造函数，用来生成Set数据结构。

// 实例属性和方法
// add(value)：添加某个值，返回Set结构本身。
// delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// has(value)：返回一个布尔值，表示该值是否为Set的成员。
// clear()：清除所有成员，没有返回值。
let s = new Set()
s.add(1).add(3).add(3);
console.log(s);
// 注意3被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // false

s.delete(3);
s.has(3) // false



// 应用场景
// 数组去重
let arr = [1,2,2,3];
let unique = [...new Set(arr)];
// or
function dedupe(array) {
  return Array.from(new Set(array));
}

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}



// Map 类似于对象，也是键值对的集合，各种类型的值（包括对象）都可以当作键。
// Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现