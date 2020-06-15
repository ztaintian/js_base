// Function.prototype.myBind = function (context) {
//   context = context || window
//   context.fn = this
//   var args = [...arguments].slice(1)
//   return function () {
//     context.fn(...args)
//     delete context.fn
//   }
// }

// var obj = {
//   name: 'gg'
// }
// var test = function (a,b,c) {
//   console.log(a,b,c)
// }
// // test.bind(obj,1,2,3)()
// test.myBind(obj,1,2,3)()
// Function.prototype.maBind = function (context) {
//   var context = context || window
//   context.fn = this
//   var args = [...arguments].slice(1);
//   return function () {
//     context.fn(args)
//     delete context.fn
//   }
// }


var obj = {
  name: 'jjj'
}
function test(name) {
  console.log(this.name,name)
}
test.bind(obj, 1,2)()