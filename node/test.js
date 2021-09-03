var arr = [323, 435, 6, 4, 3, 24, 342];
function quickSort(arr) {
  var left = [],
    right = [],
    tempValue;
  if (arr.length < 2) {
    return arr;
  }
  tempValue = arr.splice(0, 1)[0];
  arr.map((item) => {
    if (item < tempValue) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return [...quickSort(left), tempValue, ...quickSort(right)];
}
console.log(quickSort(arr));
