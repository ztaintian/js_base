var man;
(function () {
  function Father(name) {
    this.name = name;
  }
  Father.prototype.sayName = function () {
    console.log(this.name);
  }
  man = new Father('aoyo');
})()
console.log(man.name)
man.sayName(); // aoyo

// console.log(Father); // Father is not defined