function test(a) {
  console.log(a); 
  var a = 123;
  a = function () {}
  console.log(a)
}

test(1)