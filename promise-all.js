// function promiseAll(promises) {
//   return new Promise(function (resolve, reject) {
//     if (!Array.isArray(promises)) {
//       throw new TypeError(`argument must be a array`)
//     }
//     var resolvedCounter = 0;
//     var promiseNum = promises.length;
//     var resolvedResult = [];
//     for (let i = 0; i < promiseNum; i++) {
//       Promise.resolve(promises[i]).then(value => {
//         resolvedCounter++;
//         resolvedResult[i] = value;
//         if (resolvedCounter == promiseNum) {
//           return resolve(resolvedResult)
//         }
//       }, error => {
//         return reject(error)
//       })
//     }
//   })
// }

// // test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
// promiseAll([p3, p1, p2]).then(res => {
//   console.log(res) // [3, 1, 2]
// })

Promise.all([p3, p1, p2]).then(res => {
  console.log('resres', res)
})