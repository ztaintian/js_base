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

var add = function (...args) {
  return args.reduce((pre,next) => {
    return pre + next
  },0)
}


function curry(fn) {
  var arr = [];
  return function func(...args) {
    if (args.length == 0) {
      return fn(...arr);
    } else {
      arr.push(...args);
      return func
    }
  }
}

let sum = curry(add);

console.log(sum(1)(2)(3)())