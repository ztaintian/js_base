import {
  def
} from '../util/index';

// 复制数组构造函数的原型，Array.prototype也是一个数组。
const arrayProto = Array.prototype

// 创建对象，对象的__proto__指向arrayProto，所以arrayMethods的__proto__包含数组的所有方法。
export const arrayMethods = Object.create(arrayProto)

// 下面的数组是要进行重写的方法
const methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

// 遍历methodsToPatch数组，重写其中的方法
methodsToPatch.forEach(function (method) {
  // 缓存原有方法
  const original = arrayProto[method]
  // def方法定义在lang.js文件中，是通过object.defineProperty对属性进行重新定义。  
  // 即在arrayMethods中找到我们要重写的方法，对其进行重新定义  
  def(arrayMethods, method, function mutator(...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      // ，对于push，unshift会新增索引，所以需要手动observe     
      case 'push':
      case 'unshift':
        inserted = args
        break;
        // splice方法，如果传入了第三个参数，也会有新增索引，所以也需要手动observe      
      case 'splice':
        inserted = args.slice(2)
        break;
    }
    // push，unshift，splice触发后，手动observe，其他方法的变更会在当前的索引上进行更新，不需要执行observe
    if (inserted) ob.observeArray(inserted);

    // notify change    
    ob.dep.notify()
    return result
  })
})