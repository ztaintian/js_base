// 参考 https://www.cnblogs.com/apple78/p/12972004.html

function f() {
  let args = [...arguments];
  let add = function() {
    args.push(...arguments);
    return add;
  };
  add.toString = function() {
    return args.reduce((a, b) => {
      return a + b;
    });
  };
  return add;
}
console.log(+f(1)(2)(3)); // 6
