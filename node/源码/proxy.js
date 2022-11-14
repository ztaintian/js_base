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


const target = {
  _id: '1024',
  name:  'vuejs'
}

const proxy = new Proxy(target, {
  get(target, propkey, proxy){
    console.log('propkey', propkey)
    if(propkey[0] === '_'){
      throw Error(`${propkey} is restricted`)
    }
    return Reflect.get(target, propkey, proxy)
  },
  set(target, propkey, value, proxy){
    if(propkey[0] === '_'){
      throw Error(`${propkey} is restricted`)
    }
    return Reflect.set(target, propkey, value, proxy)
  }
})

proxy.name // vuejs
proxy._id // Uncaught Error: _id is restricted
proxy._id = '1025' // Uncaught Error: _id is restricted