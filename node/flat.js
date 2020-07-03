var reduceFlat = function (arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? reduceFlat(next) : next);
  }, [])
}
var arr = [12, 3, 4, 5, [1, '1', 2, 3, 5, 5, 6, 7, 3], 99]
// 方法2
Array.prototype.myFlat2 = function () {
  console.log('vvvvv', this.map(item => Array.isArray(item) ? item.myFlat2() : item))
  return [].concat(...this.map(item => Array.isArray(item) ? item.myFlat2() : [item]));
}
console.log('bbbbb', arr.myFlat2())
function compa(a, b) {
  return a - b
}
var unique = function (arr) {
  var tempArr = []
  arr.map((item) => {
    if (tempArr.indexOf(item) === -1) {
      tempArr.push(item)
    }
  })
  return tempArr
}
// var arr = [1,'1',2,3,5,5,6,7,3]
// console.log(unique(arr))
// var bubleSort = function (arr) {
//   for(var i=0; i< arr.length; i++) {
//     for(var j=i+1; j<arr.length; j++) {
//       if (arr[i]>arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//   }
//   return arr
// }
var quickSort = function (arr) {
  console.log('arr', arr)
  if (arr.length < 2) {
    return arr;
  }
  var tempArr = arr.splice(0, 1),
    leftArr = [],
    rightArr = [];
  console.log(tempArr)
  arr.map((item) => {
    if (tempArr[0] > item) {
      leftArr.push(item);
    } else {
      rightArr.push(item);
    }
  })
  return quickSort(leftArr).concat(tempArr[0], quickSort(rightArr))
}
var aaa = [1222, 34, 5, 6, 8, 9]
console.log(quickSort(aaa))
// console.log(bubleSort(aaa))
// console.log('bbb', bubleSort(unique(reduceFlat(arr))))


// var flat = function (arr) {
//   var tempArr = []
//   arr.map((item) => {
//     if (Array.isArray(item)) {
//       tempArr = [...tempArr, ...arguments.callee(item)]
//     } else {
//       tempArr.push(item)
//     }
//   })
//   return tempArr
// }

// var arr = [1, 2, [3, 4, [66, 99], [44324, 4242]]]
// console.log(flat(arr))


// var arr = [1, 2, 3, 4, 4, [5, 6, [9, 75], 60], 6, 7]
// var dotFlat = function (arr) {
//   console.log(arr)
//   var arr = [].concat(...arr);
//   return arr.some(Array.isArray) ? dotFlat(arr) : arr
// }
// console.log(dotFlat(arr))