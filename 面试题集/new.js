function myNew(fn) {
  let obj = {}
  let args = [...arguments][1]
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args)
}






Function.prototype.myCall = function (obj,...args) {
  var _obj = {}
  obj.fn = this;
  obj.fn(this,...args);
  delete obj.fn;
}








// function myNew(fn, ...args) {
//   let obj = {};
//   obj.__proto__ = fn.prototype;
//   let result = fn.apply(obj, args);
//   return typeof result === 'object' ? result : obj
// }