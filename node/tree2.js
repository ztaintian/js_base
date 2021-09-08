// var preorderTraversal = function (root) {
//   let result = [];
//   (function func(root) {
//     if (root)
//       result.push(root.val);
//     if (root && root.left) {
//       func(root.left);//递归
//     }
//     if (root && root.right) {
//       func(root.right);//递归
//     }
//   })(root);
//   return result;
// };
// 首序排序
// var preorderTraversal = function (root) {
//   let stack = [root];
//   let arr = [];
//   while (stack.length > 0) {//循环迭代
//     let node = stack.pop();
//     node && arr.push(node.val); // node不为空时，向arr中推入节点值
//     node && node.right && stack.push(node.right); //关键点：模拟栈，后入先出，故先压右节点
//     node && node.left && stack.push(node.left); // 关键点：后入先出，后压左节点
//   }
//   return arr
// };
// 中序排序
var preorderTraversal = function (root) {
  let result = [];
  (function func(root) {
    result.push(root.val);

    if (root) {
      if (root && root.left) {
        func(root.left); //递归
      }
      if (root && root.right) {
        func(root.right); //递归
      }
    }
  })(root);
  return result;
};
var root = {
  val: 88,
  left: {
    val: 5
  },
  right: {
    val: 66
  }
}
console.log(preorderTraversal(root))