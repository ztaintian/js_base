function test(a) {
  console.log(a); 
  var a = 123;
  a = function () {}
  console.log(a)
}

test(1)

// 1、执行环境AST（抽象语法树）