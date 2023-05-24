/**
 * 定义：
 * 定义一系列的算法，将每一个算法都封装起来，并且使它们可以相互替换。
 * 在前端开发中，可以使用策略模式来动态切换组件的算法和行为。
 * 
 * 作用：
 * 它可以让我们在不改变对象本身的情况下，通过修改其内部的算法实现不同的行为。
 * 策略模式常常被用于实现一些复杂的业务逻辑，特别是需要根据不同的条件进行处理的情况。
 */


// 代码的健壮性和可扩展性
// 定义校验策略对象
const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === "") {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg;
    }
  },
};

// 定义表单校验类
class Validator {
  constructor() {
    this.cache = [];
  }

  add(value, rules) {
    rules.forEach((rule) => {
      const strategyArr = rule.strategy.split(":");
      const errorMsg = rule.errorMsg;
      const strategy = strategyArr.shift();
      strategyArr.unshift(value);
      strategyArr.push(errorMsg);
      this.cache.push(() => strategies[strategy].apply(null, strategyArr));
    });
  }

  validate() {
    for (let i = 0, len = this.cache.length; i < len; i++) {
      const errorMsg = this.cache[i]();
      if (errorMsg) {
        return errorMsg;
      }
    }
  }
}

// 使用示例
const validator = new Validator();
validator.add("13812345678", [
  { strategy: "isNonEmpty", errorMsg: "手机号不能为空" },
  { strategy: "isMobile", errorMsg: "手机号格式不正确" },
]);
validator.add("123", [
  { strategy: "minLength:6", errorMsg: "密码长度不能小于6位" },
]);
const errorMsg = validator.validate();
console.log(errorMsg); // 输出：手机号格式不正确



// 使用策略模式实现一个计算器

// 定义一个策略对象
const strategiy = {
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

// 定义一个计算器对象
const Calculator = function(strategy) {
  this.calculate = function(num1, num2) {
    return strategy(num1, num2);
  }
};

// 使用策略模式来创建一个计算器对象
const addCalculator = new Calculator(strategies.add);
const subtractCalculator = new Calculator(strategies.subtract);
const multiplyCalculator = new Calculator(strategies.multiply);
const divideCalculator = new Calculator(strategies.divide);

// 使用计算器对象进行计算
console.log(addCalculator.calculate(10, 5)); // 输出 15
console.log(subtractCalculator.calculate(10, 5)); // 输出 5
console.log(multiplyCalculator.calculate(10, 5)); // 输出 50
console.log(divideCalculator.calculate(10, 5)); // 输出 2
