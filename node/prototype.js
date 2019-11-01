// 原型链继承
// function Parent(name) {
//   this.name = name
// }
// function Child(age) {
//   this.age = age
// }
// Child.prototype = new Parent()
// var cc = new Child(18)
// console.log(cc.age)
// 
// 借用结构函数继承

function Parent(name) {
  this.name = name
  this.say = function () {
    console.log(this.name)
  }
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

var cc = new Child('father', 18)
var bb = new Child('vvv', 88)
cc.say()
bb.say()
console.log(cc.say === bb.say)

// 组合继承

// function Parent(name) {
//   this.name = name
// }
// Parent.prototype.say = function () {
//   console.log(this.name)
// }
// function Child(name,age) {
//   Parent.call(this, name)
//   this.age = age
// }
// Child.prototype = new Parent()

// var cc = new Child('father', 18)
// var bb = new Child('vvv', 88)
// cc.say()
// bb.say()
// console.log(cc.say === bb.say)