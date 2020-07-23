
function treeSort(node) {
  var result = [];
  return (function (node) {
    if (node) {
      if (node.left) {
        arguments.callee(node.left);
      }
      result.push(node.val);
      if (node.right) {
        arguments.callee(node.right)
      }
    }
    return result;
  })(node)
};
var node = {
  val: 2,
  left: {
    val: 99
  },
  right: {
    val: 66
  }
};
console.log(treeSort(node));