var myNew = function (context,...args) {
  var _obj = {}
  _obj.__proto__ = context.prototype
  var result = context.apply(_obj,args)
  return typeof result==='Object'?result:_obj
}

function Test (name, age) {
  this.name = name
  this.age = age
}
var myNewTest = myNew(Test, '小明', 19)
console.log(myNewTest.name)
console.log(myNewTest.age)
var newTest = new Test('小天', 28)
console.log(newTest.name)
console.log(newTest.age)
