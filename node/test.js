function Person(name) {
  this.name = name; //1
  this.className = "person"
}
Person.prototype.getName = function () {
  console.log(this.name)
}
function Man(name) {
  Person.apply(this, arguments)
}
//注意此处
Man.prototype = Object.create(Person.prototype);
Man.prototype.constructor = Man

var man1 = new Man("Davin");

console.log(Man.prototype.constructor)
console.log(Person.prototype.constructor)