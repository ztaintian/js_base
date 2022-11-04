// let obj = {}
// let aa = ' 11 '
// let pObj = new Proxy(obj, {
//   get() {
//     aa = aa.trim()
//     return aa;
//   }
// });

// console.log(pObj.a)
// console.log(obj.a)

let valitdator = {
  name(val) {
    return typeof val === 'string'
  },
  id(val) {
    return typeof val === 'number' && val < 1024
  },
}
let createrValidator = (target, valitdator) => {
  return new Proxy(target, {
    _valitdator: valitdator,
    set(target, prop, value, proxy) {
      let valitdator = this._valitdator[prop](value)
      if (valitdator) {
        return Reflect.set(target, prop, value, proxy)
      } else {
        console.log(`can't set ${prop} to ${value}, Invalid type`,'color:red;')
      }
    },
  })
}
let proxy = createrValidator({}, valitdator)

proxy.name = '111'
proxy.name = 111
