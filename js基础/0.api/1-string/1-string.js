// split
let str1 = '张三-25-男'
let arr = str1.split('-')
console.log(arr) 

// slice
let str2 = 'hellow world'
let str3 = str2.slice(5)
console.log(str3); //w world

// subString
let str4 =str2.substring(3,-4)
let str5 =str2.substring(3,0)
console.log(str4,str5);


// 判断字符串中是否包含指定的内容
// includes startsWith endsWith 
// 分别是判断是否有、开头有、结尾有

// 语法
// str.inlcudes(str,[position]) //position默认为0

// 返回值均为true\false

// eg
const message = 'Error: foo is not defined.' 
console.log(
    message.startsWith('Error'), // 判断字符串是否已Error开头
    message.endsWith('.'),// 判断是否已点 . 结尾 
    message.includes('foo') // 判断中间是否 包含 foo 
)
    

// toUpperCase() 变为大写
// 语法 str.toUpperCase()

// toLowerCase() 小写 