var flat = function (arr) {
  var tempArr = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      tempArr = [...tempArr,...flat(item)]
    } else {
      tempArr.push(item)
    }
  })
  return tempArr
}

var arr = [1,2,[3,4,[66,99],[44324,4242]]]
console.log(flat(arr))