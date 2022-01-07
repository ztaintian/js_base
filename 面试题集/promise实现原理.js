class PrmiseX {
  constructor(fn) {
    this.states = 'pending';
    this.value = null;
    this.list = [];
    fn(this.resolve.bind(this))
  }
  resolve(value) {
    this.states = 'full';
    this.value = value;
    this.list.forEach((fn) => fn(value))
  }
  then(fn) {
    if (this.states === 'pending') {
      this.list.push(fn)
    } else {
      fn(this.value)
    }
    return this
  }
}
var p = new PrmiseX((resolve) => {
  resolve('111')
}) 
p.then((value) => {
  console.log(value)
}).then(() => {
  console.log('ggggg')
})