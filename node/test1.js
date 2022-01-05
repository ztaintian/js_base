function Test() {}

var aa = new Test()

console.log(aa.constructor === Test.prototype.constructor)