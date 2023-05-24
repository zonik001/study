// 前置知识
// new操作符
// new操作符会做以下操作：
// 1.创建一个全新的对象
// 2.新对象内部属性[[Prototype]](非正式属性__proto__)连接到构造函数的原型
// 3.将构造函数的 this 关键字绑定到新对象上，并执行构造函数。
// 4.如果构造函数返回一个对象，则返回该对象；否则，返回新对象。

// class
// 通过class关键字可以定义类
// 类的数据类型是function，类本身就指向构造函数.
// 构造函数的prototype属性，在es6的类上继续存在。类的所有方法都定义在类的prototype属性上。
// 类内部所有定义的方法都是不可枚举的。 

class Person {
    constructor() {
        // ...
    }
    toString() {
        // ...
    }
}

// 等同于

Person.prototype = {
    toString() {},
    toValue() {}
}

// 不可枚举
console.log(Object.keys(Person.prototype)); // [] 
console.log(Object.getOwnPropertyNames(Person.prototype)); // ["constructor","toString"]


// constructor方法
// 该方法是类的默认方法。通过new关键字生成对象实例时，自动调用该方法。
// 一个类必须要有constructor方法，如果没有显示定义，一个空的constructor方法会被默认添加。
// constructor方法默认返回实例对象（this）,可以指定返回另一个对象。


// this的指向
// 类的方法内部如果含有this，它默认指向类的实例。
// 必须非常小心，一旦单独使用该方法而不是使用实例调用该方法，很可能报错




// 类的继承

// eg:
class Shape {
    constructor(color) {
        this.color = color
    }
    getColor() {
        return this.color
    }
}

class Circle extends Shape{
    constructor(color,radius) {
        super(color)
        this.radius = radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius
    }
}

const circle = new Circle('red',10)
console.log(circle.getColor()); 
console.log(circle.getArea());


class Animal {
    constructor(name) {
      this.name = name;
    }
  
    sayName() {
      console.log(`My name is ${this.name}`);
    }
  }
  
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // 调用父类的构造函数
        this.breed = breed;
    }

    bark() {
        console.log(`I'm a ${this.breed} dog`);
    }

    // 重写父类的 sayName 方法
    sayName() {
        super.sayName(); // 调用父类中的 sayName 方法
        this.bark()
    }
}
  
const d = new Dog('Buddy', 'Golden Retriever');
d.sayName(); // 输出：My name is Buddy，I'm a Golden Retriever dog




// get set关键字    //Object.defineproperty里面有get set方法，触发类似
// 在Class内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为

class Human {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name.toUpperCase();  //字符串方法 toUpperCase 大写
    }
  
    set name(value) {
      this._name = value.toLowerCase(); //toLowerCase 小写
    }
}
  
const p = new Human('Alice');
console.log(p.name); // 输出：ALICE
p.name = 'Bob';
console.log(p.name); // 输出：BOB
  




// class的静态方法
// 在一个方法前加上static关键字，就表示该方法不会被实例继承，只能通过类来调用。



// 多态
// 多态指的是不同的对象可以用相同的接口来实现相同的操作。这样就可以用相同的函数来处理不同的对象。
class Animals {
    constructor() {}

    speak() {}
}

class Dogs extends Animals {
    constructor() {
        super();
    }

    speak() {
        return '汪汪汪';
    }
}

class Cats extends Animals{
  constructor() {
    super();
  }

  speak() {
    return '喵喵喵';
  }
}

const animals = [new Dogs(), new Cats()];

animals.forEach((animal) => {
  console.log(animal.speak());
});
// 输出
// 汪汪汪
// 喵喵喵
