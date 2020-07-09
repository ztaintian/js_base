var result = [];

var treeSort = function (node) {
  if (node) {
    if (node.left) {
      treeSort(node.left);
    }
    result.push(node.val);
    if (node.right) {
      treeSort(node.right)
    }
  }
  return result;
}
var node = {
  val: 2,
  left: {
    val: 99
  },
  right: {
    val: 66
  }
}
console.log(treeSort(node))