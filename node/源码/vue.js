function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function toString(val) {
  if (val === null || val === undefined) return ''
  if (Array.isArray(val)) return JSON.stringify(val)
  if (isPlainObject(val) && val.toString === Object.prototype.toString)
    return JSON.stringify(val)
  return String(val)
}
const obj = {
  title: 'devpoint',
  toString() {
    return 'obj'
  },
}
console.log(toString(obj)) // obj
console.log(toString([1, 2, 3])) // [1, 2, 3]
console.log(toString(undefined)) // ""
console.log(toString(null)) // ""
