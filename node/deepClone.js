var isType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8,-1)
}
var deepClone = function (obj) {
  var _obj;
  if (isType(obj) === "Array") {
    _obj = []
  } else if (isType(obj) === "Object") {
    _obj = {}
  } else {
    return obj
  }
  for (item in obj) {
    if (isType(obj[item]) === "Array" || isType(obj[item]) === "Object") {
      _obj[item] = deepClone(obj[item])
    } else {
      _obj[item] = obj[item]
    }
  }
  return _obj
}

var obj = {
  aa: {
    bb: 333
  }
}
var newObj = deepClone(obj)
newObj.aa.bb = 99999
console.log('newObj', newObj, 'obj', obj)
