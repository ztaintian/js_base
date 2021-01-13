function observe(obj, callback) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(target, key, value) {
      target[key] = value
      callback(key, value)
    }
  })
}

const obj = observe(
  {
    name: '子君',
    sex: '男'
  },
  (key, value) => {
    console.log(`属性[${key}]的值被修改为[${value}]`)
  }
)

// 这段代码执行后，输出 属性[name]的值被修改为[妹纸]
obj.name = '小明'

// 这段代码执行后，输出 属性[sex]的值被修改为[女]
obj.name = '男'

