Function.prototype.myCall = function (context) {
  context = context || window;
  context.fn = this;
  var result;
  var args = [...arguments].slice(1)
  result = context.fn(...args)
  delete context.fn
  return result;
}

var test = function (a,b,c) {
  console.log(a,b,c)
  console.log(this.a)
}

var obj = {
  a: '4444'
}
test.myCall(obj)
