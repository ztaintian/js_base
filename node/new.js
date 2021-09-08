var myNew = function (context, ...args) {
  var _obj = {};
  console.log("argsargsargs", args, context);
  _obj.__proto__ = context.prototype;
  var result = context.apply(_obj, args);
  console.log("resultresultresult", typeof result, result, _obj);
  return typeof result === "object" ? result : _obj;
};

function Test(name, age) {
  this.name = name;
  this.age = age;
  return {
    name: "daad",
  };
}
var myNewTest = myNew(Test, "小明", 19);
console.log("dadada", myNewTest.name);
console.log("dadadad", myNewTest.age);
var newTest = new Test("小天", 28);
console.log(newTest.name);
console.log(newTest.age);

function newNew(obj, ...args) {
  var _obj = {};
  _obj.__proto__ = obj.prototype;
  var result = obj.apply(_obj, args);
  return typeof result === "object" ? result : _obj;    
}
