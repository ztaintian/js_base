function Test(a, b, c) {
  console.log(a, b, c)
}
// var aa = new Test(1,2,3)
var myNew = function (obj, ...args) {
  var _obj = {}
  _obj._proto_ = obj.prototype
  var result = obj.apply(_obj, args)
  return typeof result === 'object' ? result : _obj
}

myNew(Test, 1,2,3)