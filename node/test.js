var obj = {
  a:1,
  aa() {
  console.log(this.a)
  }
}
var newObj = {
  a:2
}
obj.aa.apply(newObj)
obj.a