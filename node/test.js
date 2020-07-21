Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') {
    console.log('ffff')
  }
  console.log(this)
}
function test() {
}
test.mycall(null,'111')