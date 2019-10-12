var bubbleSort = function (arr) {
  for (var i=0; i<arr.length; i++) {
    for (var j=i;j<arr.length;j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
var arr = [43,55,775,565,66]
console.log(bubbleSort(arr))