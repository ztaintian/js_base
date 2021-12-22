// Function.prototype.myApply = function (context) {
//   context = context || window
//   context.fn = this
//   var result;
//   if (arguments[1]) {
//     result = context.fn(...arguments[1])
//   } else {
//     result = context.fn()
//   }
//   delete context.fn
//   return result
// }

// var test = function (a, b, c) {
//   console.log(a, b, c)
//   console.log(this.a)
// }
// var obj = {
//   a: 666
// }
// test.myApply(obj)

// Function.prototype.myApply = function (context) {
//   context = context || window;
//   context.fn = this;
//   var result;
//   if (argument[1]) {
//     result = context.fn(...arguments[1]);
//   } else {
//     result = context.fn();
//   }
//   delete context.fn;
//   return result;
// }

Function.prototype.myApply = function(context) {
  contxet = context || window;
  contxet.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}
var test = function(arges) {
  console.log(arges)
}
test.myApply(null, [1,2,3])

function myApply(context) {
  context = context || window;
  context.fn = this;
  var result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}