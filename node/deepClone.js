var deepClone = function (obj) {
  var _obj
  if (typeObj(obj) === 'Array') {
    _obj = []
  } else if(typeObj(obj) === 'Object')  {
    _obj = {}
  } else {
    return obj
  }
  for (item in obj) {
    if (typeObj(obj[item]) === 'Array' || typeObj(obj[item]) === 'Object') {
      _obj[item] = deepClone(obj[item])
    } else {
      _obj[item] = obj[item]
    }
  }
  return _obj
}

var typeObj = function (obj) {
  return Object.prototype.toString.call(obj).slice(8,-1)
}

var obj = {
  aa: 222,
  bb: {
    cc: 555
  }
}

var newObj = deepClone(obj)
console.log(newObj)
newObj.bb.cc = 999
console.log(newObj, obj)
