function once(fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}

function launchRocket(val) {
  console.log('我已经执行了', val)
}
const launchRocketOnce = once(launchRocket)
launchRocketOnce()
launchRocketOnce()
launchRocketOnce()
