// Object.keys() 和 for in 区别

let obj = {
  a: 1,
  b: 2,
};

for (let key in obj) {
  console.log("key", key); // 循环出key
}

console.log(Object.keys(obj)); // 返回数组

// 两者之间最主要的区别就是Object.keys( )不会走原型链，而for in 会走原型链；

Object.prototype.test = "test";

var obj = {
  a: 1,
  b: 2,
};
// Object.keys不会输出原型链中的数据；
console.log(Object.keys(obj));
// ["a", "b"]

for (var key in obj) {
  console.log(key);
}
// a
// b
// test　　　　// for in 会把原型链中test 输出
