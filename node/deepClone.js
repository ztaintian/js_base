var isType = function (obj) {
  return Object.prototype.toString.call(obj).slice(8,-1)
}
var clone = function (obj) {
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

// var obj = {
//   aa: {
//     bb: 333
//   }
// }

// var newObj = deepClone(obj)
// newObj.aa.bb = 99999
// console.log('newObj', newObj, 'obj', obj)

// var clone = function (obj) {
//   if (obj === null) return null;
//   if (typeof obj !== "object") return obj;
//   if (obj.constructor === Date) return new Date(obj);
//   if (obj.constructor === RegExp) return new RegExp(obj);
//   var newObj = new obj.constructor(); //保持继承链
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       //不遍历其原型链上的属性
//       var val = obj[key];
//       newObj[key] = typeof val === "object" ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
//     }
//   }
//   return newObj;
// };

var obj = {
  aa: {
    bb: 333
  },
  cc: new Date('2010-10-01')
}

var newObj = clone(obj)
newObj.aa.bb = 99999
newObj.cc = new Date('2011-12-01')
console.log('newObj', newObj, 'obj', obj)