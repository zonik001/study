/**
 * 在JavaScript中，每个对象（除了null和undefined）都有一个指向它的原型对象，即原型（prototype）。
 * 原型是一个普通的对象，它包含对象的共享属性和方法。
 * 当我们尝试访问对象的属性或方法时，
 * 如果该对象本身没有这个属性或方法，JavaScript会通过原型链去查找继承链上的对象是否有该属性或方法。
 * 
 * 原型链是一个指向父原型对象的一个指针链，它在继承中起着十分重要的作用。
 * 当我们访问一个对象的属性时，如果该对象本身没有该属性，JavaScript引擎就会去它的原型对象上查找该属性，
 * 如果还没有，则再去父原型对象上查找，直到找到该属性或查找到原型链的末端null为止
*/

/** 
 * 继承的实现方式；
 * 1.原型链继承  
 *  实现方式：通过将父类对象的实例赋值给子类对象原型
 *  问题：所有的子类对象都共享父类属性，存在原型对象中的引用类型会被实例对象共享等。
 * 
 * 2.构造函数继承
 *  实现方式：在一个构造函数内部调用另外一个构造函数并传入this
 *  优点：可以传递参数给父类
 *  问题：无法继承父类原型上的方法
 * 
 * 3.组合继承
 *  实现方式：通过父类构造函数属性继承和原型上的方法继承来达到完全继承的效果
 *  问题：既调用了父类构造函数又创建了父类的实例，会导致效率问题
 * 
 * 4.原型式继承
 * 5.寄生式继承
 * 6.寄生组合式继承
 */

// 3.组合式继承
const Block3 = () => {
    // 定义一个父类 Person
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    
    Person.prototype.sayName = function() {
        return `"My name is " ${this.name}`
    };
    
    // 定义一个子类 Child
    function Child(name, age, grade) {
        Person.call(this, name, age); // 调用父类构造函数，继承父类上的属性
        this.grade = grade;
    }
    
    Child.prototype = new Person(); // 继承父类原型上的方法和属性
    // 每个函数都有一个特殊的属性叫做 constructor，它默认指向该函数的原型对象的 constructor 属性，即该函数本身。
    Child.prototype.constructor = Child; // 将 constructor 属性指向自己
    
    Child.prototype.sayGrade = function() {
        return `I am in " + ${this.grade} + " grade.`
    };
  
    let child = new Child('tom',12,99)
    console.log(child.name);
    console.log(child.sayName());
    console.log(child.sayGrade());
}
Block3()

// 6.寄生组合式继承
const Block6 = () => {
    function Parent(name) {
        this.name = name;
    }
    
    Parent.prototype.getName = function () {
        return this.name;
    }
    
    function Child(name) {
      // 调用了父类的构造函数，并传递了子类需要的参数
      Parent.call(this, name);
    }
    
    // 子类的原型指向父类的实例，这里使用Object.create方法可以避免调用父类的构造函数而创建实例
    Child.prototype = Object.create(Parent.prototype);
    // 设置子类的构造函数
    Child.prototype.constructor = Child;
    
    let child = new Child('child');
    console.log(child.name);  // 'child'
    console.log(child.getName());  // 'child'
}
// Block6()