// Set本身是一个构造函数，用来生成 Set 数据结构。
// Set类似于数组，但是成员的值都是唯一的，没有重复的值。

// console.log(...s);
let arr = [2,2,3,4,5,3,4,5,2]
const s = new Set(arr);
// arr.forEach(element => s.add(element));
// for (let i of s) {
//     console.log(i);
// }
// 2,3,4,5
// console.log();
console.log(s) //Set(4) { 2, 3, 4, 5 }
console.log(...s); //2 3 4 5
console.log([...s]);//[ 2, 3, 4, 5 ]
// s = [...arr]
// console.log(s);