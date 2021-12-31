class deepClone {
  isType (obj) {
    return Object.prototype.toString.call(obj).slice(8,-1)
  }
  getObj(obj) {
    var _result;
    if (this.isType(obj) === 'Array') {
      _result = [];
    } else if (this.isType(obj) === 'Object') {
      _result = {}
    } else {
      return obj;
    }
    for (var key in obj) {
      if (this.isType(obj) === 'Array' || this.isType(obj) === 'Object') {
        _result[key] = this.getObj(obj[key])
      } else {
        _result[key] = obj[key]
      }
    } 
    return _result
  }
}

var aa =new deepClone()
var cc = {
  aa: 11,
  bb: 22
}
var dd = aa.getObj(cc)
cc.bb = 88
console.log(dd)
