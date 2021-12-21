function Super() {
  this.color = ['red']
}

function Sub() {

}

Sub.prototype = new Super()

