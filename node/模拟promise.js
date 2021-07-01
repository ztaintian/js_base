// https://blog.csdn.net/qq_40285497/article/details/108200056

// // 封装promise
// // 1. Promise 就是一个类，在执行这个类的时候，需要传递一个执行器进去，执行去会立即执行
// // 2. Promise 中有三个状态，分别为：成功(fulfilled)、失败(rejected)、等待(pending)；一旦状态确定就不可更改
// // 3. resolve和reject函数用来更改状态
// // 4. then 方法内部做的事情就是判断状态，根据状态调用不同的回调函数(成功失败)
// // 5. then 成功回调有一个参数，表示成功之后的值，then失败回调有一个参数，表示失败的原因

// const PENDING = 'pending'
// const FULFILLED = 'fulfilled'
// const REJECTED = 'rejected'

// class MyPromise {
//   // 当前执行状态
//   status = PENDING
//   // 成功值
//   value = undefined
//   // 失败原因
//   reason = undefined

//   // new Promise是立即执行
//   constructor(executor) {
//     executor(this.resolve, this.reject)
//   }

//   resolve = value => {
//     // 如果状态不在等待 阻止程序向下执行
//     if (this.status !== PENDING) return
//     // 状态变更为成功
//     this.status = FULFILLED
//     // 保存成功之后的值
//     this.value = value
//   }

//   reject = reason => {
//     if (this.status !== PENDING) return
//     this.status = REJECTED
//     this.reason = reason
//   }

//   // then中的回调
//   then(successCallback, failCallback) {
//     if (this.status === FULFILLED) {
//       successCallback(this.value)
//     } else if (this.status === REJECTED) {
//       failCallback(this.reason)
//     }
//   }
// }

// let promise = new MyPromise((resolve, reject) => {
//   resolve('成功')
// }).then((res) => {
//   console.log(res)
// })


class myPromise {
  status = 'pending'
  value = ''
  reason = ''
  successCallback = []
  failCallback = []
  constructor(fun) {
    fun(this.resolve, this.reject)
  }
  resolve = value => {
    if (this.status != 'pending') return
    this.status = 'fulfilled'
    this.value = value
  }
  reject = reason => {
    if (this.status != 'pending') return
    this.status = 'reject'
    this.reason = reason
  }
  then = (successCallback, failCallback) => {
    if (this.status === 'fulfilled') {
      successCallback(this.value)
    } else if (this.status === 'reject') {
      failCallback(this.reason)
    } else {
      this.successCallback = successCallback;
      this.failCallback = failCallback;
    }
  }
}