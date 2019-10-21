var unique = function (arr) {
  var tempArr = []
  arr.map((item) => {
    if (tempArr.indexOf(item) === -1) {
      tempArr.push(item)
    }  
  })
  return tempArr
}
var arr = [1,'1',2,3,5,5,6,7,3]
console.log(unique(arr))