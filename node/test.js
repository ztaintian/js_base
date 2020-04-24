// "use strict";
var aa = (function f(num) {
  if (num === 1) {
    return num
  } else {
    return num * arguments.callee(num-1)
  }
})
console.log(aa(5))