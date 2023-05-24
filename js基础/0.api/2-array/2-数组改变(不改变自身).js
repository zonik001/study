// concat 连接两个或更多的数组，并返回一个新的数组。
let a = [1,2,3],b = [2,3,4],c =[3,4,5];
let a1 = a.concat(b,c)
console.log(a1,a,b,c,'concat');

// concat可使用 ...取代，更简洁和具有高度自定义数组元素位置的效果
let a2 = [...c,8,8,8,...a,...b]
console.log(a2,a,b,c,'...');

// join(separator) 把数组的所有元素放入一个字符串。返回转换后的字符串 separator:分隔符，默认为 ,
// 字符串方法 split(separator) 将字符串根据分隔符切割。返回转换后的数组。与上方法对应
let a3 = a2.join('888')
console.log(a3,'a3');

// slice(start,end) 选取数组的的一部分，并返回一个新数组，并不会更改原始数组的值。常用来截取数组。
// start必选，end可选，(包含start,不包含end下标元素)不选默认到最后一个元素（可负数,从右往左算,-1为最后一个元素，-2为倒数第二个，以此类推）
let arr = [{a:'1',b:'1'},{a:'2',b:'2'},{a:'3',b:'3'},{a:'4',b:'4'}]
let a4 = arr.slice(1,-1)
console.log(a4,'a4');

// indexOf(item,start) 搜索数组中的元素，并返回它第一个所在的位置。如果没有该元素则返回-1。
// item必须，start整数可选、默认为0（合法取值为0到arr.length-1）
let array = ['abc', 'def', 'ghi','123'];
console.log(array.indexOf('def')); // 1
console.log(array.indexOf('def',-1)); // -1 此时表示从最后一个元素往后查找,因此查找失败返回-1
console.log(array.indexOf('def',-4)); // 1 由于4大于数组长度,此时将查找整个数组,因此返回1
console.log(array.indexOf(123)); // -1, 由于是严格匹配,因此并不会匹配到字符串'123'

// includes(item,start) 返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似.
// item必须，start可选、默认为0，可为负值(从右往左)大于长度时转为0
let arr3= [1,'2',NaN]
console.log(arr3.includes(1));
console.log(arr3.includes(NaN));

// toString() 返回数组的字符串形式，该字符串由数组中的每个元素的 toString() 返回值经调用 join() 方法连接（由逗号隔开）组成。
let a5 = arr.toString() 
console.log(a5,'a5');//[object Object],[object Object],[object Object],[object Object]

// toLocaleString() 
var ary= [{name:'zz'}, 123, "abc", new Date()];
var str = ary.toLocaleString();
var str1 = ary.toString()
console.log(str,str1); // [object Object],123,abc,2016/1/5 下午1:06:23



// Array.isArray() 用来判断是不是数组


// Array.from() 用于将类对象转为真正的数组：类似数组的对象和可遍历的对象（包括 ES6 新增的数据结构 Set 和 Map）
// 实际应用中我们更多的是将Array.from用于DOM 操作返回的 NodeList 集合，以及函数内部的arguments对象。



// Array.of 用于将一组值，转换为数组。
// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一
