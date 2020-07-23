function effect(fn) {
  // 定义一个内部 _effect 
  const _effect = function(...args) {
    // 在执行是将自身赋值给 activeEffect
    activeEffect = _effect;
    // 执行回调
    return fn(...args);
  };
  // _effect();
  // 返回闭包
  return _effect;
}
console.log(effect(function() {
  console.log(1111)
}))