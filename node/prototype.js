// 1、继承
function Father() {

}
function Son() {
  Fathen.call(this, args)
}

Son.construct = Father.prototype.construct