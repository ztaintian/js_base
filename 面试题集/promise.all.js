// promise执行顺序与返回顺序

function promiseA() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('A')
      resolve('A')
    }, 3000)
  })
}


function promiseB() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('B')
      resolve('B')
    }, 1000)
  })
}

Promise.all([promiseA(),promiseB()]).then(reslove => {
  console.log(reslove)
})


// promise.all返回错直接resolve错误信息，不要reject，导致成功的信息也不能获取到