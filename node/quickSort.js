var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr
  }
  var firstArr = arr.splice(0,1)[0]
  var tempLeft = []
  var tempRight = []
  arr.map((item) => {
    if (item < firstArr) {
      tempLeft.push(item)
    } else {
      tempRight.push(item)
    }
  })
  return [...quickSort(tempLeft), ...[firstArr], ...quickSort(tempRight)]
}

var arr = [44,5,6,32, 7,8,3,32,3444]

console.log(quickSort(arr))
