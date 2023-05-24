// 介绍：利用原型实例化对象来创建新的对象实例，而不是通过直接调用构造函数来创建   

// 作用：
// 减少对象的创建次数。
// 减少内存消耗，提高性能。
// 使代码结构更加清晰，易于扩展。
// 统一管理一类对象的属性和方法，易于维护。

// 使用场景：
// 对象的创建成本较大，但同一类别的对象仅需要改变少量属性值。
// 在运行时刻指定对象的类型，避免了显式的创建子类的工厂方法。
// 当对象之间的差异仅在于其状态的时候，可以使用原型模式来减少构造函数调用的次数。
// 需要动态配置对象时，原型模式可以使运行时配置更加灵活。


let Person = function() {};

Person.prototype = {
setName: function(name) {
    this.name = name;
},
setAge: function(age) {
    this.age = age;
},
setLanguage: function(lang) {
    this.language = lang;
},
getInfo: function() {
    return "Name: "+this.name+"  Age: "+this.age+"  Language: "+this.language;
}
}

let person1 = new Person();
person1.setName("Jack");
person1.setAge(25);
person1.setLanguage("English");

console.log(person1.getInfo());  // "Name: Jack Age: 25 Language: English"

let person2 = new Person();
person2.setName("Mary");
person2.setAge(30);

console.log(person2.getInfo());  // "Name: Mary Age: 30 Language: undefined"

Person.prototype.setLanguage.call(person2, "French");
console.log(person2.getInfo()) // "Name: Mary Age: 30 Language: French"
