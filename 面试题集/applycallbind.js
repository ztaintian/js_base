// https://mp.weixin.qq.com/s/nc3EYZWqBssLmXDhPdIlxQ

// call

Function.prototype.call = function (context) {
  // 基础类型转包装对象
  if (context === undefined || context === null) {
    context = window;
  } else if (typeof context === "string") {
    context = new String(context);
  } else if (typeof context === "number") {
    context = new Number(context);
  } else if (typeof context === "boolean") {
    context = new Boolean(context);
  }
  // 保存原函数至指定对象的fn属性上
  context.fn = this;
  // 获取除第一个参数之后的所有参数
  const args = Array.from(arguments).slice(1);
  // 通过指定对象的fn属性执行原函数并出入参数
  const fnValue = context.fn(...args);
  delete context.fn; // 从context中删除fn原函数
  return fnValue;
};

// apply

Function.prototype.apply = function (context) {
  context = context || window;
  var args = arguments[1];
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.bind = function (context) {
  context = context || window;
  context.fn = this;
  var args = Array.from(arguments).slice(1);
  function O() {}
  function fn() {
    context.fn.apply(
      this instanceof O ? this : context,
      args.concat(Array.from(arguments))
    );
  }
  O.prototype = this.prototype;
  fn.prototype = new O();
  return fn;
};


// bind 参考https://www.cnblogs.com/ningyn0712/p/11793127.html