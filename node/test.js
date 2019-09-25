var makeArray = function (arr) {
  return Array.prototype.slice.call(arr, 0)
}
var obj = {
  0: 1,
  1: 2,
  length: 2
}
console.log(makeArray(obj))