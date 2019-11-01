const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  var tempArr = arr.splice(0, 1)[0]
  var leftArr = []
  var rightArr = []
  arr.map((item) => {
    if (item > tempArr) {
      leftArr.push(item)
    } else {
      rightArr.push(item)
    }
  })
  return [...quickSort(leftArr),...[tempArr], ...quickSort(rightArr)]
}
var arr = [333, 4, 2, 353, 6, 78, 9, 4, 545, 22]
console.log(quickSort(arr))
