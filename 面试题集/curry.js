// // 利用reduce实现多参数版add
// let add = function (...args) {
//   return args.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0)
// };

// // 一个简单的currying实现
// function currying(func) {
//   const args = [];
//   return function result(...rest) {
//     if (rest.length == 0) {
//       return func(...args);
//     } else {
//       args.push(...rest);
//       return result;
//     }
//   }
// }

// let sum = currying(add);

// console.log(sum(1)(2)(3)());   //未真正执行求和运算
// // sum(4);         //未真正执行求和运算
// // console.log(sum());   //执行求和

var add = (...args) => args.reduce((pre, next) => pre + next);



function curry(fn) {
  var arr = [];
  return function func(...args) {
    if (args.length == 0) {
      return fn(...arr);
    } else {
      arr.push(...args);
      return func;
    }
  }
}

let sum = curry(add);

console.log(sum(1)(2)(3)())




  // 实现一个add方法，使计算结果能够满足如下预期：
  add(1)(2)(3) = 6;
  add(1, 2, 3)(4) = 10;
  add(1)(2)(3)(4)(5) = 15;

  ////////////////////////////////////////
  function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    var _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var _adder = function () {
      _args.push(...arguments);
      return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    }
    return _adder;
  }
  ////////////////////////////////////////////////////////
  add(1)(2)(3).toString();                //>> 6
  add(1, 2, 3)(4).toString();             //>> 10
  add(1)(2)(3)(4)(5).toString();          //>> 15
  add(2, 6)(1).toString();                //>> 9