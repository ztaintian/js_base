var myNew = function (obj, ...args) {
  var _obj = {}
  _obj._proto_ = obj.prototype
  var result = obj.apply(_obj, args)
  return typeof result === 'object' ? result : _obj
}

var test = function () {
  this.a = '44444'
}

var newTest = myNew(test)

console.log(newTest.a)