let p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 3000)
  })
}

let p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
}

// Promise.all([p2(), p1()]).then((res) => {
//   console.log('res', res)
// })

let myPromiseAll = function (arrayPrse) {
  return new Promise((resolve, reject) => {
    let resArr = [], num = 0;
    arrayPrse.map((item) => {
      Promise.resolve(item).then((response) => {
        num++
        resArr.push(response)
        if (num === arrayPrse.length) {
          resolve(resArr)
        }
      })
    })
  })
}

myPromiseAll([p1(), p2()]).then((res) => {
  console.log('res', res)
})