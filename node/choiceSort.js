var choice = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('i', i, arr[i])
    var min = arr[i + 1], minIndex = i + 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        minIndex = j;
        min = arr[minIndex];
      }
    }
    if (arr[i] > arr[minIndex]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr;
}
var arr = [13, 534, 632, 21, 3, 34]
console.log(choice(arr))