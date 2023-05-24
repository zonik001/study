// 介绍：
// 通过使用工厂方法来创建对象的创建型设计模式。
// 在工厂模式中，我们不必指定具体类的名称，而是使用一个通用接口来创建对象。

// 作用：
// 简化对象的创建，避免代码的冗余。
// 通过使用一个通用的接口来创建对象，避免了客户端和具体类实现之间的耦合。
// 可以轻松扩展和升级系统中的新功能和对象类型。

// 使用场景：
// 当对象的创建过程较为复杂，且包含大量重复代码时，我们可以使用工厂模式来减少代码冗余。
// 当对象的创建过程需要参考特定的条件或者状态时，可以使用工厂模式来根据不同的条件创建不同的对象。
// 当我们需要将对象的创建和实现解耦时，可以使用工厂模式来封装对象的创建过程。


// 定义 Phone 工厂对象
let PhoneFactory = {
    createPhone: function(type) {
    switch(type) {
        case "xiaomi":
        return new XiaomiPhone("小米手机");
        case "huawei":
        return new HuaweiPhone("华为手机");
        case "iphone":
        return new IPhone("苹果手机");
        default:
        throw new Error("Invalid phone type");
    }
    }
};

// 定义具体的手机产品类
function XiaomiPhone(name) {
    this.name = name;
    this.camera = "2000万像素";
    this.battery = "4000mAh";
}

function HuaweiPhone(name) {
    this.name = name;
    this.camera = "4800万像素";
    this.battery = "5000mAh";
}

function IPhone(name) {
    this.name = name;
    this.camera = "1200万像素";
    this.battery = "3000mAh";
}

// 创建不同类型的手机
let xiaomiPhone = PhoneFactory.createPhone("xiaomi");
let huaweiPhone = PhoneFactory.createPhone("huawei");
let iphone = PhoneFactory.createPhone("iphone");

console.log(xiaomiPhone);  // XiaomiPhone { name: '小米手机', camera: '2000万像素', battery: '4000mAh' }
console.log(huaweiPhone);  // HuaweiPhone { name: '华为手机', camera: '4800万像素', battery: '5000mAh' }
console.log(iphone);       // IPhone { name: '苹果手机', camera: '1200万像素', battery: '3000mAh' }
  