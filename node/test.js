// 选择排序

((arr) => {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i + 1], minIndex = i + 1;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (arr[i] > arr[minIndex]) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  console.log(arr)
})([3235, 45, 567, 56, 7454])