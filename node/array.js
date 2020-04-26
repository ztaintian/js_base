// foreach 不支持 return 和 break，一定会把所有数据遍历完毕; value ‘引用类型值改变，基础类型值不改变’  
var array = [1, 2, 3, 4, 5]
var objArray = [{ a: 1 }, { a: 2 }]
// array.forEach(element => {
//   return element * 2
// });
// console.log(array) // [ 1, 2, 3, 4, 5 ]
// objArray.forEach((element) => {
//   element.a = element.a * 2
// })
// console.log(objArray) // [ { a: 2 }, { a: 4 } ]

// map  有return ‘引用类型值改变，基础类型值不改变’

// var returnArray = array.map((element) => {
//   return element * 2
// })
// // console.log(array, returnArray) // [ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]
// var returnObjArray = objArray.map(element => {
//   return element.a = element.a * 2
// })
// console.log(objArray, returnObjArray) // [ { a: 2 }, { a: 4 } ] [ 2, 4 ]

// filter 过滤条件 不改变原值 return的值中; 引用类型的值改变 原对象与返回对象共用地址 值都改变;
// var returnArray = array.filter(element => {
//   return element > 4
// })
// console.log(array, returnArray) // [ 1, 2, 3, 4, 5 ] [ 5 ]

// var returnObjArray = objArray.filter(element => {
//   return element.a > 1
// })
// returnObjArray[0].a = 6
// console.log(objArray, returnObjArray) // [ { a: 1 }, { a: 6 } ] [ { a: 6 } ]

// some return 布尔值 判断条件 只要满足中间一个就条件return true循环就停止  节省性能
// var flag = array.some(element => {
//   return element > 2
// })
// var flagObj = objArray.some(element => {
//   return element.a > 1
// })
// console.log(flag, flagObj) // true true

// every return 布尔值 数组中每个值都要满足条件  如果有一个元素不满足，则表达式返回 false，剩余的元素不会再进行检测。
// var flag = array.every(element => {
//   return element > 2
// })  
// console.log(flag)

// reduce  return 数组累加的值
// var firstValue = 0
// var addValue = array.reduce((firstValue, secodedVlaue) => {
//   return firstValue + secodedVlaue;
// }, firstValue)
// console.log(addValue)

// find 类似some 区别数组返回值不是布尔值

// var returnArray = array.find(element => {
//   return element > 2
// })
// console.log(array, returnArray)

// includes 类似于some 没有回调函数 只能检测值

var flag = array.includes(1)
console.log(flag)
var objFlag = objArray.includes((elememt) => {
  return elememt.a === 2
})
console.log(objFlag) // false