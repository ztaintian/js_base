Function.prototype.myCall = function (context) {
  context = context || window
  context.fn = this
  var cc = [...arguments].slice(1)
  var result = context.fn(...cc)
  delete context.fn
  return result
}
var obj = {
  name: '44'
}
var test = function () {
  console.log(this.name)
}
test.myCall(obj, '44')