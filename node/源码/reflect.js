// function aa () {
//   Object.definePropertie()
// }

// function observe(data) {
//   Object.keys(data).forEach((key) => {
//     defineReactive(data, key, data[key])
//   })
// }

// function defineReactive(data, key, val) {
//   Object.defineProperty(data, key, {
//     // enumerable: true,
//     // configurable: true,
//     set(newVal) {
//       console.log(data)
//       console.log(`set key: ${key} val: ${newVal}`)
//       val = newVal
//     },
//     get() {},
//   })
// }
// let data = [1, 2, 3]

// observe(data)

// data[0] = 4


const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

methodsToPatch.forEach(function (method) {
  // 缓存原生数组
  const original = arrayProto[method]
  // def使用Object.defineProperty重新定义属性
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args) // 调用原生数组的方法

    const ob = this.__ob__  // ob就是observe实例observe才能响应式
    let inserted
    switch (method) {
      // push和unshift方法会增加数组的索引，但是新增的索引位需要手动observe的
      case 'push':
      case 'unshift':
        inserted = args
        break
      // 同理，splice的第三个参数，为新增的值，也需要手动observe
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 其余的方法都是在原有的索引上更新，初始化的时候已经observe过了
    if (inserted) ob.observeArray(inserted)
    // dep通知所有的订阅者触发回调
    ob.dep.notify()
    return result
  })
})