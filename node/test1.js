class EventEmitter {
  constructor() {
    this.list = {}
  }
  on(event, fn) {
    let _this = this;
    (_this.list[event] || (_this.list[event] = [])).push(fn)
    console.log('_this.list', _this.list)
  }
  off(event, fn) {
    let _this = this;
    let fns = _this.list[event];
    console.log('fns', fns)
    if (!fns) return false
    if (!fn) {
      fns && (fhs.lenght = 0);
    } else {
      for (let i = 0; i < fns.length; i++) {
        if (fns[i] === fn || fns[i].fn === fn) {
          fns.splice(i, 1);
          break;
        }
      }
    }
  }
  emit() {
    let _this = this;
    let event = [].shift.call(arguments);
    let fns = _this.list[event];
    if (!fns || fns.length === 0) {
      return false;
    }
    fns.map((fn) => {
      fn.apply(_this, arguments)
    })
  }
  once(event, fn) {
    // 先绑定，调用后删除
    let _this = this;

    function on() {
      _this.off(event, on);
      fn.apply(_this, arguments);
    }
    _this.on(event, on);
  }
}
var bb = new EventEmitter()

function use1(content) {
  console.log('content', content)
}
// bb.on('even', use1)
bb.once('even', use1)
bb.emit('even', 'lll')
bb.emit('even', '2222')
