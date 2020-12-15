var choice = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i + 1],
      minIndex = i + 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        minIndex = j;
        min = arr[j];
      }
    }
    if (arr[i] > arr[minIndex]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr;
}
var arr = [13, 5545, 667, 7677, 43, 2, 5, 3, 2]
console.log(choice(arr))