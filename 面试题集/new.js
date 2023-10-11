function myNew(fn) {
  let obj = {}
  let args = [...arguments][1]
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args)
}