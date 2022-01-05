

var emitEvent = {
  _list: {},
  on(event,fn) {
    // 订阅
    (this._list[event]||(this._list[event]=[])).push(fn)
  },
  emit(event) {
    // 发布
    var fns = this._list[event]
    if (!fns||fns.length === 0){
      return
    }
    for (var i=0;i<fns.length;i++) {
      fns[i].apply(null)
    }
    console.log('i', i)
  },
  off(event,fn) {
    var fns = this._list[event]
    if (!fn) {
      fns = []
    } else {
      for (var i=0; i<fns.length;i++) {
        if (fns[i] === fn) {
          fns.splice(i,1);
          break;
        }
      }
    }
  }
}
const aa = emitEvent
function test(){
  console.log('dadad')
}

aa.on('test',test)
console.log(aa._list)
aa.off('test', test)
aa.emit('test')