function Parent() {
  this.pName = 'name'
}
Parent.prototype.say = function () {}
function Child(sex) {
  Parent.call(this,sex)
}

Child.prototype = Object.create(Parent.prototype)
Child.constructor = Child

var cc = new Child('father')
var bb = new Child('vvv')

console.log(cc.say === bb.say)