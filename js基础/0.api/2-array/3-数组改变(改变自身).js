// 改变自身，相较于不改变自身的方法调用后一般不需要接收

// 1.pop() 删除一个数组中的最后的一个元素，并且返回这个元素。
var array = ["cat", "dog", "cow", "chicken", "mouse"];
var item = array.pop();
console.log('pop--------------------');
console.log(array); // ["cat", "dog", "cow", "chicken"]
console.log(item); // mouse

// 2.push() 添加一个或者多个元素到数组末尾，并且返回数组新的长度。
var array1 = ["football", "basketball", "volleyball", "Table tennis", "badminton"];
var i = array1.push("golfball");
console.log('push--------------------');
console.log(array1); // ["football", "basketball", "volleyball", "Table tennis", "badminton", "golfball"]
console.log(i); // 6

// 3.reverse() 颠倒数组中元素的位置，第一个会成为最后一个，最后一个会成为第一个，该方法返回对数组的引用。
var array2 = [1,2,3,4,5];
var array3 = array.reverse();
console.log('reverse--------------------');
console.log(array); // [5,4,3,2,1]
console.log(array3===array); // true  ***返回引用指向同一个数组***

// 4.shift() 删除数组的第一个元素，并返回这个元素
let shiftBlock = ()=> {
    var array = [1,2,3,4,5];
    var item = array.shift();
    console.log('shift--------------------');
    console.log(array); // [2,3,4,5]
    console.log(item); // 1
}
shiftBlock()

// 5.sort() 对数组元素进行排序，并返回这个数组
let sortBlock = ()=> {
    var array = ["apple","Boy","Cat","dog"];
    var array2 = array.sort((a,b)=> { a-b});
    console.log('sort--------------------');
    console.log(array); // ["Boy", "Cat", "apple", "dog"]
    console.log(array2 == array); // true

    var array3 = ['互','联','网','改','变','世','界'];
    var array4 = array3.sort((a,b)=> {return a.localeCompare(b)}) //不能省略return,否则不生效
    console.log(array4);
}
sortBlock()

// 6.splice() 向数组中添加/删除项目，然后返回被删除的项目
// 语法： array.splice(index,Num,item1,.....,itemX)
// index：必需。整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
// Num：可选。要删除的项目数量。如果设置为 0，则不会删除项目。
// item1, ..., itemX： 可选。向数组添加的新项目。
let spliceBlock = () => {
    let a = [1, 2, 3, 4, 5, 6, 7];
    let item = a.splice(0,3,'添加'); // [1,2,3]
    console.log('splice--------------');
    console.log(a,item); // ['添加',4,5,6,7]
    // 从数组下标0开始，删除3个元素，并添加元素'添加'
     let b = [1, 2, 3, 4, 5, 6, 7];
    let item1 = b.splice(-2,3,'添加1','添加2'); // [6,7]
    console.log(b,item1); // [1,2,3,4,5,'添加1','添加2']
    // 从数组最后第二个元素开始，删除3个元素，并添加两个元素'添加1'、'添加2'
}
spliceBlock()

// 7.unshift() 在数组开始处插入一些元素(就像是栈底插入)，并返回数组新的长度。
let unshiftBlock = () => {
    let a = [1,1,1,1,1,2,2]
    let a2 = a.unshift('unshift',0,0,0)
    console.log('unshift------------------');
    console.log(a,a2);
}
unshiftBlock()

