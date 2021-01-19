var bubbleSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
var arr = [43, 55, 775, 565, 66]
console.log(bubbleSort(arr))

// var bubble = function (arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         var temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr;
// }
// console.log(bubble(arr));