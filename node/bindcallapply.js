// bind

// Function.prototype.wBind = function (context) {
//   context = context || window || global;
//   context.fn = this;
//   var args = [...arguments].slice(1)
//   return function () {
//     context.fn(...args)
//     delete context.fn
//   }
// }


// function test() {
//   console.log(this.value)
// }

// var obj = {
//   value: 111
// }
// test.wBind(obj)()

// call

// Function.prototype.wCall = function(context) {
//   context = context || window;
//   context.fn = this;
//   var args = [...arguments].slice(1)
//   console.log(args)
//   var result = context.fn(...args)
//   delete context.fn;
//   return result;
// }

// function test(a,b,c) {
//   console.log(a,b,c)
// }

// var obj = {

// }
// test.wCall(obj,1,2,3)


// apply

Function.prototype.wApply = function (context) {
  context = context || window;
  context.fn = this;
  var args = [...arguments].slice(1);
  var result = context.fn(...args);
  delete context.fn;
  return result;

}