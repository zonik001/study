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

// 1.原型链继承
const Block1 = () => {
    function Parent(){
        this.name = 'Parent';
    }
    Parent.prototype.sayHello = function(){
        console.log('Hello, I am ' + this.name);
    };
    function Child() {}
    Child.prototype = new Parent()
    Child.prototype.constructor = Child // 将 constructor 属性指向自己

    var child = new Child();
    child.sayHello(); // Hello, I am Child
}
Block1()

// 2.构造函数继承
const Block2 = () =>{
    function Parent(name){
        this.name = name;
    }
    Parent.prototype.sayHello = function(){
        console.log('Hello, I am ' + this.name);
    };
    
    function Child(name){
        Parent.call(this, name);
    }
    
    var child = new Child('Child');
    console.log(child.name);
    // child.sayHello() // 报错 undefined
}
Block2()

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
// 步骤
// 1.在子类构造函数中，我们使用call方法来调用父类构造函数，并将父类实例属性和方法继承到子类中。
// 2.在创建子类原型时，我们通过Object.create方法来将父类原型复制一份，并将子类原型指向这个复制的对象。
// 3.最后，我们将子类原型上的方法添加到子类原型上。
// Block6()
const Block7 = () => {
    function inherit(subClass, superClass) {
        function F() {}
        F.prototype = superClass.prototype;
        let proto = new F();
        proto.constructor = subClass;
        subClass.prototype = Object.create(proto);
    }
    
    function Person(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    
    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    
    function Student(name, grade) {
        Person.call(this, name);
        this.grade = grade;
    }
    
    inherit(Student, Person);
    
    Student.prototype.sayGrade = function() {
        console.log(this.grade);
    };
    
    var student1 = new Student("Tom", 1);
    var student2 = new Student("Bob", 2);
    
    student1.colors.push("yellow");
    
    console.log(student1.colors); // ["red", "blue", "green", "yellow"]
    console.log(student2.colors); // ["red", "blue", "green"]
    student1.sayName(); // "Tom"
    student1.sayGrade(); // 1
}
Block7()




// 不同的继承方式各有优缺点。下面是各种继承方式的优缺点：

// 1. 原型链继承
// 优点：
// - 实现简单，易于理解。
// 缺点：
// - 无法实现多继承。
// - 子类无法向父类构造函数传参。
// - 所有子类实例共享父类引用类型的属性和方法，容易造成修改值混乱的问题。

// 2. 借用构造函数继承
// 优点：
// - 可以在子类构造函数中向父类构造函数传递参数。
// - 可以避免共享引用类型属性和方法的问题。
// 缺点：
// - 无法实现函数复用，每个实例都会创建一遍方法。
// - 无法继承父类的原型上定义的属性和方法。

// 3. 组合继承
// 优点：
// - 既可以继承父类的属性和方法，又可以共享父类的原型方法。
// 缺点：
// - 父类构造函数会被调用两次，影响效率。

// 4. 原型式继承
// 优点：
// - 实现简单。
// 缺点：
// - 共享引用类型属性和方法的问题与原型链继承相同。
// - 无法实现函数复用。
// - 无法通过传递参数的方式向父类传入参数。

// 5. 寄生式继承
// 优点：
// - 实现简单。
// - 可以增强父类。
// 缺点：
// - 无法实现函数复用。
// - 无法继承父类的原型方法。

// 6.寄生组合式继承
// 优点：

// 可以继承父类原型上的属性和方法，也可以继承父类实例属性和方法
// 子类实例既能通过子类构造函数进行构造，又能够通过父类构造函数进行构造
// 子类构造函数只会调用一次父类构造函数，避免了构造函数被调用多次的问题
// 对于父类的原型对象进行了复制，避免了在子类原型对象上直接添加属性影响到父类原型对象的问题

// 但也存在一些缺点：
// 实现较为复杂，需要通过中间函数来复制父类原型对象
// 增加了函数执行的时间和空间成本
// 可能会误用，不太容易理解，需要在实践中进行反复理解和应用

// 根据不同的需求，我们可以选用适合的继承方式。
// 如果需要继承父类的属性和方法，并且需要复用函数，则可以使用组合继承；
// 如果只需要继承父类的属性和方法，则可以使用原型链继承或者借用构造函数继承；
// 如果需要增强父类，则可以使用寄生式继承。