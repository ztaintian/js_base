function foo() {
  var a = 1;

  function bar() {
    a++;
    console.log(a)
  }
  return bar
}
var b = foo()
setInterval(function () {
  b()
}, 1000)