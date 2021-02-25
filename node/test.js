const testArr = [1, 2, 3, 4]
Array.prototype.reduceFilter = function (callback) {
  return this.reduce((acc, cur, index, array) => {
    if (callback(cur, index, array)) {
      acc.push(cur)
    }
    return acc
  }, [])
}
testArr.reduceFilter(item => item % 2 == 0) // 过滤出偶数项。
// [2, 4]