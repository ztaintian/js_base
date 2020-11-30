// var obj = [
//   {
//     aa: 1,
//     bb: 333
//   },
//   {
//     aa: 55,
//     bb: 000
//   }
// ]

// var tempObj = obj.map((item) => {
//   return {
//     ...item,
//     bb: (() => {
//       return 5555
//     })()
//   }
// })

// console.log(tempObj)
// var aa = Object.assign({},'123')
// console.log(aa)

// 循环拿obj的值

var obj = {
  name: 'xiaoming',
  age: '18'
}

for (let value in obj) {
  console.log('value', value, `obj[${value}]`, obj[value])
}