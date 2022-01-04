// 原型链继承
// function Parent(name) {
//   this.name = name
// }
// function Child(age) {
//   this.age = age
// }
// Child.prototype = new Parent('sasas')
// var cc = new Child(18)
// var bb = new Child(90)
// console.log(cc.age,bb.age,cc.name)

// 借用结构函数继承

// function Parent(name) {
//   this.name = name
//   this.say = function () {
//     console.log(this.name)
//   }
// }

// function Child(name, age) {
//   console.log(this)
//   Parent.call(this, name)
//   this.age = age
// }

// var cc = new Child('father', 18)
// var bb = new Child('vvv', 88)
// cc.say()
// bb.say()
// console.log(cc.say === bb.say)

// 组合继承

function Parent(name) {
  console.log(2222)
  this.name = name
}
Parent.prototype.say = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = new Parent();
Child.constructor = Child;

var cc = new Child('father', 18)
var bb = new Child('vvv', 88)
cc.say()
bb.say()
console.log(cc.say === bb.say)

// // 寄生组合式继承
function Father(name,cc) {
  // 属性
  console.log(name, cc)
  this.name = name || 'father';
  // 实例方法
  this.sleep = function () {
    console.log(this.name + "asas")
  }
}
// 原型方法
Father.prototype.look = function (book) {
  console.log(this.name + "sasa:" + book);
}
function Son(parm) {
  console.log(parm)
  Father.apply(this,parm)
}
Son.prototype = createObject(Father.prototype)
Son.prototype.constructor = Son;

function createObject(o) {
  function fn() { }
  fn.prototype = o;
  return new fn;
}
var cc = new Son([1,2,3])
cc.look(44)