// async function async1() {
//   console.log(1)
//   const result = await async2();
//   console.log(3)
// }

// async function async2() {
//   console.log(2);
// }

// Promise.resolve().then(() => {
//   console.log(4)
// })

// setTimeout(() => {
//   console.log(5)
// })

// async1();
// console.log(6);
Promise.resolve().then(() => {
  console.log(33)
})

// 1,2,6,4,3,5
