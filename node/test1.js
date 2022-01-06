Function.prototype.myApply = function (context) {
  var context = context || window;
  context.fn = this;
  if (arguments[1]) {
    var result = context.fn (...arguments[1])
  } else {
    context.fn()
  }
  delete context.fn;
  return result
}