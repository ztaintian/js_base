var quickSort = function (arr) {
  if (arr.length<2) {
    return arr;
  }
  var tempArr = arr.splice(0, 1),
  leftArr = [], rightArr = [];
  arr.map((item) => {
    if (item > tempArr[0]) {
      rightArr.push(item);
    } else {
      leftArr.push(item);
    }
  })
  return [...quickSort(leftArr),...tempArr, ...quickSort(rightArr)]
}
var arr = [42,5,7,8,5,23,54,6,7]
console.log(quickSort(arr))