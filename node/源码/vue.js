// function isPlainObject(obj) {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }
// function toString(val) {
//   if (val === null || val === undefined) return ''
//   if (Array.isArray(val)) return JSON.stringify(val)
//   if (isPlainObject(val) && val.toString === Object.prototype.toString)
//     return JSON.stringify(val)
//   return String(val)
// }
// const obj = {
//   title: 'devpoint',
//   // toString() {
//   //   console.log(111)
//   //   return 'obj'
//   // },
// }
// console.log(toString(obj)) // obj
// console.log(toString([1, 2, 3])) // [1, 2, 3]
// console.log(toString(undefined)) // ""
// console.log(toString(null)) // ""

var _toString = Object.prototype.toString
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]'
}

function toString(val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
    ? JSON.stringify(val, null, 2)
    : String(val)
}

// JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，
// String(val)
// String 函数将其他值生成或转换成字符串

var o = {
  name: 'mimin',
  age: '17',
}
var st1 = ' hello word'

console.log(toString(o)) //true
console.log(isPlainObject(st1)) //false
console.log(st1.toString)
console.log(o.toString === _toString) //true
console.log(JSON.stringify(o, null, 2))
console.log(JSON.stringify(o, null, 8))
