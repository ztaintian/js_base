class eventBus {
  constructor() {
    this.eventList = {}
  }
  $off(name) {
    delete this.eventList[name]
  }
  $on(name, fn) {
    this.eventList[name]
    if (!this.eventList[name]) {
      this.eventList[name] = []
    }
    this.eventList[name].push(fn)
  }
  $emit() {
    var cc = [].slice.call(arguments)
    var name = cc.shift()
    let arrList = this.eventList[name]
    for (let i = 0; i < arrList.length; i++) {
      arrList[i].apply(null, cc)
    }
  }
}
let arr = new eventBus()

arr.$on('cc', (...cc) => {
  console.log(cc)
})
arr.$emit('cc', 'bbb', 'mmm')
