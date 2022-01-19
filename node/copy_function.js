// 模拟filter方法

// Array.prototype._filter = function (callback) {
//   var res = [];
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this) && res.push(this[i]);
//   }
//   return res;
// };

// var arr = [1, 2, 3, 4, 5];
// var result = arr._filter((item) => {
//   return item > 3;
// });

// console.log("result", result);

// 模拟call

// Function.prototype._call = function (context) {
//   context = context || window;
//   context.fn = this;
//   var arg = arguments[1];
//   console.log('arguments', arguments)
//   var result = context.fn(arg);
//   delete context.fn;
//   return typeof result === "object" ? result : context;
// };
// var obj = {
//   a: 111
// }

// function test(b) {
//   console.log(b)
//   console.log(this.a)
// }

// test._call(obj,'444')

// 防抖函数

// function debounce(callback, delay) {
//   var time = null;
//   return function () {
//     if (time) {
//       clearTimeout(time);
//       time = setTimeout(callback, delay);
//     } else {
//       time = setTimeout(callback, delay);
//     }
//   };
// }

// 节流函数

// function throttle(fn, delay) {
//   let flag = true;
//   return function () {
//     if (!flag) {
//       return false;
//     }
//     flag = false;
//     setTimeout(() => {
//       fn();
//       flag = true;
//     }, delay);
//   };
// }
// // eg
// function showTop() {
//   var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//   console.log("滚动位置：" + scrollTop);
// }
// window.onscroll = throttle(showTop, 1000);

// 模拟new
function _new(fn, ...args) {
  var _obj = {};
  _obj.__proto__ = fn.prototype;
  var result = fn.apply(_obj, args);
  return typeof result === "object" ? result : _obj;
}
