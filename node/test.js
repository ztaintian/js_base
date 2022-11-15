// function Person(){}
// Person.prototype.drink = function() {
//   console.log('喝东西')
// }

// let personA = new Person('张三')
// Person.drink() // 输出：喝东西

function myNew(fn, args) {
  var obj = {}
  obj._proto_ = fn.prototype
  fn.apply(obj, args)
  delete fn
  return typeof obj === 'object'?obj:
}
