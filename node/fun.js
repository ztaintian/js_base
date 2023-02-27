// let filter = (array, fn) => {
//   let res = []
//   for (let i = 0; i < array.length; i++) {
//     if (fn(array[i])) {
//       res.push(array[i])
//     }
//   }
//   return res
// }

// let result = filter([1, 2, 3, 4, , 4, 545, 34343, 4], (item) => {
//   return item > 3
// })

// console.log('result', result)

// function once (fn) {
//   // 第一次执行的时候，flag 默认为 false
//   let flag = false
//   return function () {
//       // 只有当 flag 为 false 传递的函数才执行，执行之后立马将 flag 重置为true
//       if (!flag) {
//           flag = true
//           // 通过 apply 的方式调用该 fn 函数，并通过 arguments 传递参数
//           return fn.apply(this, arguments)
//       }
//   }
// }
// once(()=> {
//   console.log(111)
// })()

// once(()=> {
//   console.log(222)
// })()

// 2. 定义一个局部变量，计算该函数一共调用几次
var generate_count = function () {
  var container = 0;
  return function () {
    container++
    console.log(`这是第${container}次调用`);
  }
}

var result = generate_count();
result(); // 这是第1次调用
result(); // 这是第2次调用
result(); // 这是第3次调用