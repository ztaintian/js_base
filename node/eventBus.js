class EventEmeitter {
  constructor() {
    this._events = this._events || new Map()
    this._maxEvents = this._maxEvents || 10
  }
}

EventEmeitter.prototype.$on = function(type, fn) {
  console.log('type', type)
  const handle = this._events.get(type)
  if (handle) {
    handle.push(fn)
  } else {
    this._events.set(type, [fn])
  }
}

EventEmeitter.prototype.$emit = function(type, ...args) {
  const handle = this._events.get(type)
  for (let i = 0; i < handle.length; i++) {
    handle[i].apply(null, args)
  }
}

const emitter = new EventEmeitter()

emitter.$on('arson', man => {
  console.log(`expel ${man}`);
});
emitter.$on('arson', man => {
  console.log(`save ${man}`);
});

emitter.$on('arson', man => {
  console.log(`kill ${man}`);
});

// 触发事件
emitter.$emit('arson', 'low-end');