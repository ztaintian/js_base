var myNew = function (context, ...args) {
  var _obj = {};
  _obj.__proto__ = context.prototype;
  var result = context.call(_obj, args);
  console.log('result', result, _obj)
  return _obj
  // return typeof result === "object" ? result : result;
};

function Test(name, age) {
  this.name = name;
  this.age = age;
  // return {
  //   name: "daad",
  // };
}
var myNewTest = myNew(Test, "小明", 19);
// var newTest = new Test("小天", 28);
console.log(myNewTest.name);
console.log(myNewTest.age);

function newNew(obj, ...args) {
  var _obj = {};
  _obj.__proto__ = obj.prototype;
  var result = obj.apply(_obj, args);
  return typeof result === "object" ? result : _obj;    
}
