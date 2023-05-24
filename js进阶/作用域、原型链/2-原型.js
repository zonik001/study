function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// 在 Person 构造函数中直接使用 sayHello 方法，是不行的。
// 因为 sayHello 方法是添加到 Person.prototype 上的，而不是 Person 构造函数自身的属性。
// Person.sayHello('报错',1) //会报错

person1.sayHello(); // 输出 "Hello, my name is Alice"
person2.sayHello(); // 输出 "Hello, my name is Bob"


// Object.getPrototypeOf() 方法来获取任意对象的原型
// 使用 new 操作符创建一个对象时，该对象会继承其构造函数的原型对象。
console.log(Object.getPrototypeOf(person1) === Person.prototype); // 输出 true

// prototype 属性是函数对象才有的属性，而 person1 是通过 new 操作符创建的一个对象，它本身并没有 prototype 属性。
// 相反，它有一个 [[Prototype]] 内部属性，指向它所继承的原型对象。
console.log(person1.prototype === Person.prototype); // 输出 false
console.log(person1);

  