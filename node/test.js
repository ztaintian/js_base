var obj = {
  aa: 1,
  bb: 2
}

var obj2 = {
  bb: 55,
  cc: 44
}

var cc = {
  ...obj,
  ...obj2,
  ...{
    aa: (() => 999)()
  }
}
console.log(cc)