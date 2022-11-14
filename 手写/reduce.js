// Array.prototype.my_reduce = function (callback, initialValue) {
//   if (!Array.isArray(this) || !this.length || typeof callback !== 'function') {
//     return []
//   } else {
//     // 判断是否有初始值
//     let hasInitialValue = initialValue !== undefined
//     let value = hasInitialValue ? initialValue : tihs[0]
//     for (let index = hasInitialValue ? 0 : 1; index < this.length; index++) {
//       const element = this[index]
//       value = callback(value, element, index, this)
//     }
//     return value
//   }
// }

// let arr = [1, 2, 3, 4, 5]
// let res = arr.my_reduce((pre, cur, i, arr) => {
//   console.log(pre, cur, i, arr)
//   return pre + cur
// }, 10)
// console.log(res) //25

Function.prototype._myreduce = function (cb, initialValue) {
  let value = initialValue ? initialValue : this[0]
  for (let index = initialValue ? 0 : 1; index < this.length; index++) {
    const element = this[index]
    value = cb(value, element, index, this)
  }
  return value;
}
