
// 父类构造函数
function Person(name) {
  this.name = name
  this.sum = function () {
    consolr.log('this.name', this.name)
  }
}
Person.prototype.age = 10
// 1、原型链继承
function Son() {
  this.name = 'ffff'
}

Son.prototype = new Person()
var son = new Son()
var son1 = new Son()
son1.age = 3
console.log(son.age)
