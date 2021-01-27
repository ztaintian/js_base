// js 宏任务和微任务 https://www.cnblogs.com/ckAng/p/11133643.html

console.log(1)
setTimeout(function() {
  console.log(2)
}, 0)
new Promise(function (resolve) {
  console.log(3)
  var i = 0
  while (i < 9) {
    i++
  }
  console.log(i);
  resolve()
  console.log(4)
}).then(function() {
  console.log(5)
})
console.log(6)
// 1
// 3
// 9
// 4
// 6
// 5
// 2