var a = 33
var obj = {
  a: '1',
  obj: {
    a:2,
    cc() {
      console.log(this.a)
    }
  }
}
obj.obj.cc()