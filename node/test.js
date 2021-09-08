class EventEmitter {
  constructor() {
    this.events = {}; // 存放着所有的事件{eventName: [callback, ...]}
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }
  emit(eventName, ...argu) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((fn) => fn(...argu));
    }
  }
  off(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(
        (fn) => callback !== fn && fn.l !== callback
      );
    }
  }
  once(eventName, callback) {
    const _once = () => {
      callback();
      this.off(eventName, _once);
    };
    _once.l = callback;
    this.on(eventName, _once);
  }
}

var aa = new EventEmitter();


Proxy(target, {
  set: function(target, name, value, receiver) {
    var success = Reflect.set(target, name, value, receiver);
    if (success) {
      console.log('property ' + name + ' on ' + target + ' set to ' + value);
    }
    return success;
  }
});