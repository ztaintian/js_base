var reduceFlat = function (arr) {
  return arr.reduce((pre, next) => {
    return pre.concat(Array.isArray(next) ? reduceFlat(next) : next);
  }, [])
}
var arr = [12, 3, 4, 5, [53, 23, 33, [55]], 99]
console.log(reduceFlat(arr))


var flat = function (arr) {
  var tempArr = []
  arr.map((item) => {
    if (Array.isArray(item)) {
      tempArr = [...tempArr,...arguments.callee(item)]
    } else {
      tempArr.push(item)
    }
  })
  return tempArr
}

var arr = [1,2,[3,4,[66,99],[44324,4242]]]
console.log(flat(arr))