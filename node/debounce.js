
// 防抖
function debounce(fn, delay) {
  var timer = null;
  return function () {
    let args = [...arguments];
    if (timer) clearTimeout(timer);
    let callNow = !timer;
    setTimeout(() => {
      fn.apply(null, args);
    }, delay)
    if (callNow) {
      func.apply(null, args);
    }
  }
}

// 节流
function throttle(fn, delay) {
  var timer = null;
  return function (args) {
    if (timer) return
    timer = true;
    setTimeout(() => {
      timer = null;
      fn.apply(null, args)
    }, delay)
  }
}

function test(){
  console.log(11)
}
debounce(test,1000)