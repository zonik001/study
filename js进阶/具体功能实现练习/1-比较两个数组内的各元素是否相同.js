// 问题具体描述

// 如下两个数组，比较其除了rate元素之外的元素是否一致
//  let newArr = [{a:'1',b:'2',rete:'2'},{a:'1',b:'2',rete:'2'},{a:'1',b:'2',rete:'2'}];
//  let oldArr = [{a:'11',b:'2',rete:'2'},{a:'1',b:'2',rete:'2'},{a:'1',b:'2',rete:'2'}];

// 思路一：
// 1.将其中一组数组的键名统一修改成 old + [key]
// 2.将两个数组的对象元素混合在一起 eg{a:'1',b:'2',rete:'2', olda: '11', oldb: '2', oldrete: '2'}
// 3.将新元素遍历，分别比较除了rate之外的元素是否相同，不相同便返回false

let newArr = [{a:'1',b:'2',rete:'2'},{a:'11',b:'22',rete:'2'},{a:'111',b:'222',rete:'2'}];
let oldArr = [{a:'1',b:'2',rete:'2'},{a:'11',b:'22',rete:'2'},{a:'111',b:'222',rete:'2'}];
// 1
function modifyKeys(arr) {
    const changedArr = arr.map(obj=> {
        const obj2 = Object.keys(obj).map(key=> {
            const newKey = 'old' + key
            return {[newKey]: obj[key]}
        })
        return Object.assign({}, ...obj2)
    })
    return changedArr
}

// 2
function sumArr(arr1,arr2) {
    const sumArr = []
    for(let i = 0; i < arr1.length; i++) {
        sumArr[i] = {...arr1[i],...arr2[i]}
    }
    return sumArr
}

// 3
function compareArr(arr) {
    return arr.every(item => {
        if(item.a !== item.olda){
            return false
        }else if(item.b !== item.oldb) {
            return false
        }
        return true
    });
}
let olds = modifyKeys(oldArr)
let sum = sumArr(newArr,olds)
console.log(compareArr(sum));


// 思路二
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (key === 'rate') {
        continue;
      }
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
    return true;
}
  
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let result = true;
  arr1.forEach((obj1, index) => {
    const obj2 = arr2[index];
    if (!compareObjects(obj1, obj2)) {
      result = false;
    }
  });
  return result;
}
console.log(compareArrays(newArr, oldArr)); // true