var quickSort = function (arr) {
  if (arr.length < 2) {
    return arr
  }
  var tempNum = arr.splice(0, 1)[0];
  console.log('arr', arr, 'tempNum', tempNum)
  var leftArr = [];
  var rightArr = [];
  arr.map((item) => {
    if (item > tempNum) {
      rightArr.push(item);
    } else {
      leftArr.push(item);
    }
  })
  return [...quickSort(leftArr), ...[tempNum], ...quickSort(rightArr)]
}
var arr = [333,4,32,64,2,4,67,8,79]
console.log(quickSort(arr))