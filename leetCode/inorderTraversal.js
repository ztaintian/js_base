// 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
var  arr = [3,4,5,21,6,7,8,9,null, ' ', undefined]
var emptyReg = /^\s*$/
var newArr = arr.filter(item => item&&!emptyReg.test(item));
console.log(newArr)
newArr.sort(function(a,b) {
  return a-b
})
console.log(newArr)
// var Node = function (value, right, left) {
//   if (value) {
//     this.value = value
//     if (left) {
//       this.left = left;
//     }
//     if (right) {
//       this.right = right;
//     }
//   }
// }
// var cc = new Node(1,2,3)
// console.log(cc)