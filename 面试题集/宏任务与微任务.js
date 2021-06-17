
  
  function request() {
    // promise 一初始化, 就直接执行参数这个callback
    // callback 里面又直接 resolve, 所以此处是同步代码
    return new Promise(resolve => {
      resolve('request')
    })
  }
  // 直接输出 (1)
  console.log('script start')
  // 函数进macro队列 (2)
  setTimeout(() => {
    // 执行 macro队列事件 (13)
    console.log('setTimeout')
  })
  // 进 micro 队列 (3)
  Promise.resolve().then(() => {
    // 执行micro事件 (7)
    console.log('promise 1')
    // 完成后, 下面这个函数进 micro 队列 (8)
  }).then(() => {
    // 执行 micro 事件 (11)
    console.log('promise 2')
    // 到此为止, 所有micro事件执行完成 (12)
  })
  async function foo() {
    // 执行micro事件 (9) 因为有await, 相当同步执行 request()
    // await fetch() 这行, fetch 是异步代码, 应该是把事件加到macro队列里面去了, 等执行完成 之后才调用 resolve, 所以会最后显示 .
    await request()
    // 因为 request中不是异步代码, 所以直接返回, 往下走 (10)
    console.log('req end')
  }
  // 执行foo, 但 foo是async, 异步, 所以是进 micro 队列 (4)
  foo()
  
  // 直接输出 (5)
  console.log('script end')
  
  // 到此, macro 队列事件完成一次, 下面执行 micro 队列的事件 (6)
