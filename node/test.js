function debounce(fn, delay = 1000) {
  let time = null;
  return function () {
    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      fn()
    }, delay)
  }
}

var aa = debounce(() => {
  console.log(1)
})
aa()
var cc = debounce(() => {
  console.log(2)
})
cc()