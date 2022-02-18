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