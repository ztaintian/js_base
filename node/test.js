var a = 1
function a1() {
  function a2() {
    console.log(a)
  }
  a2()
  var a = 3;
}
a1()