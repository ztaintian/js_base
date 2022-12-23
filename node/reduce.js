// const testArr = [1, 2, 3, 4]
// Array.prototype.reduceFilter = function (callback) {
//   return this.reduce((acc, cur, index, array) => {
//     if (callback(cur, index, array)) {
//       acc.push(cur)
//     }
//     return acc
//   }, [])
// }
// var cc = testArr.reduceFilter(item => item % 2 == 0) // 过滤出偶数项。
// console.log(cc)

// 模拟foreach
// const testArr = [{name:'eee'},{name:'kkkk'}]
// Array.prototype.reduceForEach = function (callback) {
//   this.reduce((acc, cur, index, array) => {
//     callback(cur, index, array)
//   }, [])
// }

// testArr.reduceForEach((item, index, array) => {
//   item.name = 'llll'
//   console.log(item, index)
// })
// // 1234
// // 0123
// console.log(testArr)

// 将二维数组转为一维数组
// const testArr = [[1,2], [3,4], [5,6]]
// testArr.reduce((acc, cur) => {
//   return acc.concat(cur)
// }, [])
// // [1,2,3,4,5,6]

// 数组扁平化
// var arr = [323, [22, 3, 2, [32, 43]], 4, 5, 3, 3, 21, 2, 3, 2]

// function cc(arr) {
//   return arr.reduce((acc, cur) => {
//     return acc.concat(Array.isArray(cur) ? cc(cur) : cur)
//   }, [])
// }

// 计算数组中每个元素出现的个数
// const testArr = [1, 3, 4, 1, 3, 2, 9, 8, 5, 3, 2, 0, 12, 10]
// testArr.reduce((acc, cur) => {
//   if (!(cur in acc)) {
//     acc[cur] = 1
//   } else {
//     acc[cur] += 1
//   }
//   return acc
// }, {})

// {0: 1, 1: 2, 2: 2, 3: 3, 4: 1, 5: 1, 8: 1, 9: 1, 10: 1, 12: 1}

// 数组去重
// const testArr = [1,0,'0' ,2, 2, 3, 4, 4, 5, 5, 5, 6, 7]
// let cc = testArr.reduce((acc, cur) => {
//   if (!(acc.includes(cur))) {
//     acc.push(cur)
//   }
//   return acc
// }, [])

// console.log('cc', cc)

// 多维数组转化为一维数组

const arr = [[1, [2]], 3, [4, 5], [6, [7]]];
function test(arr) {
  var aa
  arr.reduce((acc, cur) => {
    if (Array.isArray(cur)) {
      acc.concat(cur);
    } else {
      return acc.push(cur)
    }
  }, [])
  return aa
}
console.log(test(arr))
