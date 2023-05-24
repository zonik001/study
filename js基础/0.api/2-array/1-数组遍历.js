// 创建数组
// var array = new Array(); 返回空数组
// var array = new Array(length); 返回一个长度为指定参数的空位数组 ？ 空位数组有什么用？？
// var array = new Array(element0, element1, elementn);
//或者
// var array = [element0, element1, elementn];
var arr = new Array(3)

arr = [{a:'1',b:'1'},{a:'2',b:'2'},{a:'3',b:'3'},{a:'4',b:'4'}]
console.log(arr.length,arr,'arr'); //赋值也会直接改变创建时的数组长度



// ES5：
// forEach、every 、some、 filter、map、reduce、reduceRight、
// ES6：
// find、findIndex、keys、values、entries



// foreach 按升序为数组中含有效值的每一项执行一次回调函数。
// 1.返回值总为undefined
// 2.无法中途退出循环
let arr1 = arr.forEach(item=> {
    return item.a + '1'
})
console.log(arr1,'arr1') //undefined 

let arr3 = []
arr.forEach(item=> {
    arr3.push({a:item.a + '1',b:item.b})
})
console.log(arr3,'arr3');


// map 对数组中的每个元素进行处理，返回新的数组
// 1.不改变原数组
let arr2 = arr.map(item=> {
    return {a:item.a + '1',b:item.b}
})
console.log(arr2,'arr2')


// 3.reduce() 为数组提供累加器，合并为一个值**
// 语法arr.reduce(fn(total,currentValue,index,arr),initalValue) 
// total(累加器) 初始给了initalValue就是initalValue，没给则是空。第二次调用则是回调函数返回的结果
// fn 必须 数组中每个元素需要调用的函数。(前两必须，后两非必须)
// initalValue 非必须 指定第一次回调 的第一个参数。
let reduceBlock = ()=> {
    // 数组求和
    let arr = [0,1,2,3,4]
    let sum = arr.reduce((total,item)=>{
        return total + item
    })
    console.log('reduce-----------------');
    console.log(sum);
    // 二维数组转一维数组
    let arr2 = [[1,1],[2,2],[3,3]]
    let arr3 = arr2.reduce((total,item)=> {
        return [...total,...item]
    },[])
    console.log(arr3);
    console.log('reduce obj-----------------');
    // 将数组中对象的值相加
    let arr4 = [{name:'apple',price:112},{name:'banana',price:111}]
    let sumprice = arr4.reduce((total,item)=> {
        console.log(total,'total');
        return total + item.price
    },0)
    console.log(sumprice);
}
reduceBlock()

let reduce_group = ()=> {
    console.log('reduce----------------------按条件分组');
    // 将下列数组转换为
    // {
    //   25: [{ name: 'Alice', age: 25 }, { name: 'David', age: 25 }],
    //   30: [{ name: 'Bob', age: 30 }, { name: 'Emily', age: 30 }],
    //   35: [{ name: 'Charlie', age: 35 }]
    // }
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'David', age: 25 },
        { name: 'Emily', age: 30 }
    ];
    const groupedPeople = people.reduce((total,item)=> {
        const key = item.age
        if(!total[key]) {
            total[key] = []
        }
        total[key].push(item)
        return total
    },{})
    console.log(groupedPeople);
}
reduce_group()

let reduce_key_val_mergeTo_obj = () => {
    console.log('reduce-----------多个数组键值对合并为对象');
    const keys = ['name', 'age', 'gender'];
    const values = ['Alice', 25, 'female'];
    // 改造成如下对象
    // { name: 'Alice', age: 25, gender: 'female' }
    const person = keys.reduce((total,item,index)=>{
        total[item] = values[index]
        return total
    },{})
    console.log(person);
}
reduce_key_val_mergeTo_obj()

let reduce_url_to_obj = () => {
    console.log('reduce--------------------字符串转对象(报文)');
    const str = 'key1=value1&key2=value2&key3=value3';
    const obj = str.split('&').reduce((total,item)=> {
        const [key,value] = item.split('=');
        total[key] = value;
        return total
    },{})
    console.log(obj);
}
reduce_url_to_obj()

let reduce_obj_to_url = ()=> {
    console.log('reduce---------------对象转换为查询字符串');
    const params = { foo: "bar", baz: 42 };
    console.log(Object.entries(params));  //[ [ 'foo', 'bar' ], [ 'baz', 42 ] ]
    const queryString = Object.entries(params).reduce((total,[key,value]) => {
        return `${total}${key}=${value}`
    },"?")
    console.log(queryString);
}
reduce_obj_to_url()

let reduce_count = () => {
    console.log('reduce-----------------计算元素出现的个数');
    // 返回格式 { apple: 3, banana: 2, orange: 1 }
    const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const count = fruits.reduce((total,item) => {
        total[item] = (total[item] || 0) + 1
        return total
    },{})
    console.log(count);
}
reduce_count()

// state.list.map((mapItem) => {
//     if (newList.length == 0) {
//       newList.push({
//         yearTime: mapItem.date.slice(0, 4),
//         data: [mapItem],
//       });
//     } else {
//       let flag = newList.some((item) => {
//         if (item.yearTime == mapItem.date.slice(0, 4)) {
//           item.data.push(mapItem);
//           return true;
//         }
//       });
//       if (!flag) {
//         newList.push({
//           yearTime: mapItem.date.slice(0, 4),
//           data: [mapItem],
//         });
//       }
//     }
//   });



// 4.every() 检测数组所有元素是否都符合判断条件 返回true false 
// some() 检测数组是否有元素是否符合判断条件 有就返回ture,否则false
let everyBlock = ()=> {
    console.log('every-------------');
    //用途：表单校验（一个没过校验就不让提交）
    let arr = [{rate:0.2,money: 10},{rate:0.4,money: 10},{rate:1.1,money: 10}]
    let result = arr.every((item,index)=> {
        if(item.rate < 0 || item.rate >1) {
            console.log(`第${index + 1}行比例有问题`);
            return false
        }
        if(item.money < 0) {
            return false
        }
        return true
    })
    console.log(result);
}
everyBlock()



// 5.find() 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const findBlock = ()=> {
    console.log('find--------------------------------------');
    let arr = [
        { suffix: 'txt', filetype: 'text/plain' },
        { suffix: 'z', filetype: 'application/z' },
        { suffix: 'xml', filetype: 'application/xml' },
        { suffix: 'zip', filetype: 'application/zip' },
        { suffix: 'xls', filetype: 'application/vnd.ms-excel' },
        { suffix: 'xls', filetype: '11111111111111111' },  //只会返回第一条
        {
          suffix: 'xlsx',
          filetype:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        }
    ]
    let filetype = arr.find(item => {
        return 'G0000000000010598920.xls'.endsWith(item.suffix)
    }).filetype
    console.log(filetype);
}
findBlock()

// 6.findIndex() 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
// 和find类似，返回值不一样


// 7.filter() 过滤原始数组，返回新数组

// 语法：
// let new_array = arr.filter(function(currentValue, index, arr), thisArg)
// 回调函数的参数：
//1. currentValue(必须),数组当前元素的值
//2. index(可选), 当前元素的索引值
//3. arr(可选),数组对象本身

// eg:
const filterBlock = () => {
    console.log('filter-------------------------------');
    let a = [32, 33, 16, 40];
    let result = a.filter(function(value) {
    return value >= 18; // 返回a数组中所有大于18的元素
    });
    console.log(result); // [32,33,40] 
}
filterBlock()


// 8.keys()&values()&entries() 遍历键名、遍历键值、遍历键名+键值

const key_value_all = ()=> {
    console.log('keys()&values()&entries()---------------------');
    let obj = {1:'a',2:'b'}
    console.log(Object.entries(obj)); //[[ '1', 'a' ], [ '2', 'b' ]] key会变成字符串？ 
    console.log(obj); //{ '1': 'a', '2': 'b' } 对象会自动将number类型的key转换为string类型
    for (let index of ["a", "b"].keys()) {
        console.log(index, typeof index);
    }
    // 0 number
    // 1 number
    
    for (let elem of ["a", "b"].values()) {
        console.log(elem);
    }
    // 'a'
    // 'b'
    
    for (let [index, elem] of ["a", "b"].entries()) {
        console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
}
key_value_all()