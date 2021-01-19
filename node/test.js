var arr = [424, 43, 4346, 656, 767, 6565, 545]
var bubleSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j]>arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
console.log(bubleSort(arr))