function objectFactory() {
  var obj = {};
  //取得该方法的第一个参数(并删除第一个参数)，该参数是构造函数
  var Constructor = [].shift.apply(arguments);
  console.log('Constructor', Constructor)
  //将新对象的内部属性__proto__指向构造函数的原型，这样新对象就可以访问原型中的属性和方法
  obj.__proto__ = Constructor.prototype;
  //取得构造函数的返回值
  var ret = Constructor.apply(obj, arguments);
  //如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
  return typeof ret === "object" ? ret : obj;
}
function Test() {

}
Test.prototype.cc = function () {
  console.log(00000)
}
console.log(Test)
var test = objectFactory(Test)