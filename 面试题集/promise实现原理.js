// 简单实现

class PrmiseJ {
  constructor(fn) {
    this.list = [];
    fn(this.resolve.bind(this)) 
  }
  then(fn) {
    console.log('this.list', this.list, fn)
    this.list.push(fn)
    console.log('this.list', this.list, fn)

  }
  resolve(value) {
    console.log('this.listthis.list', this.list)
    if (this.list.length === 0) return
    this.list.forEach(fn => fn(value))
  }
}

new PrmiseJ((resolve) => {
  setTimeout(() => {
    resolve('dd')
  })  
}).then((value) => {
  console.log('value', value)
})