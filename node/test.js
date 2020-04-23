function AA(o) {
  function F() {}
  F.prototype = o
  return new F()
}

var obj = {
  name: 'ww',
  arr: [1,2]
}

var oneinstance = AA(obj)
oneinstance.arr.push(88)
oneinstance.name = 'rrr'
var twoinstance = AA(obj)
twoinstance.arr.push(99)
twoinstance.name = 'twoinstance'
console.log(oneinstance.arr, twoinstance.arr)