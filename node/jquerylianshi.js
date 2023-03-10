// function Demo () {}

// Demo.prototype = {
//   getName(name) {
//     this.name = name
//     return this;
//   },
//   getAge(age) {
//     this.age = age
//     return this;
//   }
// }

// function D() {
//   return new Demo();
// }

// console.log(D().getName('fff').name)
function Demo() {
  this.name = 'rrr'
}

function D() {
  return new Demo()
}

