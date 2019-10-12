// var arr = [1, 2, 3, 4]
// var p = new Proxy(data, {
//   get(target, key, receive) {
//     return target[key]
//   },
//   set(target, key, value, receive) {
//     target[key] = value
//   }
// })

let data = [1,2,3]
let p = new Proxy(data, {
  get(target, key, receiver) {
    return target[key]
  },
  set(target, key, value, receiver) {
    console.log('set value')
    target[key] = value
    return true
  }
})

p.push(4)
console.log(p)