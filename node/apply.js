Function.prototype.myApply = function (context) {
  context = context || window
  context.fn = this
  var result
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
var obj = {
  name: 'gggg'
}
var test = function (a,b,c) {
  console.log(this.name,a,b,c)
}
// test.apply(obj, [1,2,3,4])
test.myApply(obj, [1,2,3,4])