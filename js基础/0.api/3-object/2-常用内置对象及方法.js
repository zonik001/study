// 常用内置对象及方法

// 一、Boolean 布尔对象
// 1.Boolean.toString() ---> 将布尔值转换成字符串
// 2.Boolean.valueOf() ---> Boolean 对象的布尔值

// 二、Date 日期时间
// 1.创建当前(现在)日期对象的实例，不带任何参数
console.log('Date----------------------------------');
const today = new Date
console.log(today,'today');  //2023-05-04T09:01:30.561Z today

// 2.创建指定时间戳的日期对象实例，参数是时间戳。 
// 时间戳：是指某一个时间距离 1970 年 1 月 1 日 0 时 0 分 0 秒，过去了多少毫秒值(1 秒=1000 毫秒)
const timer = new Date(10000);
console.log(timer,'timer'); //1970-01-01T00:00:10.000Z timer

// 3.指定一个字符串的日期时间信息，参数是一个日期时间字符串
const timer1 = new Date("2021/9/18 10:00:00")
console.log(timer1,'timer1');

// Date.getDate()--->返回一个月中的某一天
// Date.getDay()---> 返回一周中的某一天
// Date.getFullYear() --->返回 Date 对象的年份字段
// Date.getHours() --->返回 Date 对象的小时字段
// Date.getMilliseconds() --->返回 Date 对象的毫秒字段
// Date.getMinutes() --->返回 Date 对象的分钟字段
// Date.getMonth() --->返回 Date 对象的月份字段
// Date.getSeconds()--->返回 Date 对象的秒字段
// Date.getTime()--->返回 Date 对象的毫秒表示
// Date.toString()--->将 Date 转换为字符串

console.log(today.getDate());  //返回几号
console.log(today.getDay());  //返回星期几



// 三、 Error 异常对象
// Error.message--->可以读取的错误消息
// Error.name --->错误的类型
// Error.toString() --->把 Error 对象转换成字符串



// 四、Function 函数构造器


// 五、Math 数学对象
// Math --->对象是一个静态对象
// Math.ceil() --->向上取整(整数加 1，小数去掉)
// Math.floor() ---> 向下取整(直接去掉小数)
// Math.round() ---> 四舍五入
// Math.random() --->随机数
console.log('Math---------------------------------');
console.log(Math.ceil(1.12));
console.log(Math.floor(1.12));
console.log(Math.round(1.12));
console.log(Math.random());   //Math.random()会随机生成一个0到1的小数
//一般会对随机数做取整
console.log(Math.floor(Math.random())); 
// 生成1到10的整数
console.log(Math.floor(Math.random() * 10 + 1));





