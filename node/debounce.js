function debounce(fn, delay = 1000) {
  let time = null;
  return function (args) {

    if (time) {
      clearTimeout(time)
    }
    time = setTimeout(()=> {
      fn(args)
    }, delay)
  }
}
function test(args) {
  console.log(args)
}
const aa = debounce(test, 1000)
aa('11')