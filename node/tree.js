function Node(value, left, right) {
  if (value) {
    this.value = value;
    if (left) this.left = left;
    if (right) this.right = right;
  }
}

let arrSouce = [6, [2, [-1], [3]], [3, [0]]];

function Btree(arr) {
  if (arr) {
    if (arr.length === 1) {
      return new Node(arr[0])
    }
    return new Node(arr[0], Btree(arr[1]), Btree(arr[2]))

  }
}
var treeResult = Btree(arrSouce)

// function hasTrage(treeResult, traget) {
//   if (!treeResult.right && !treeResult.left) {
//     return treeResult.value === traget
//   } else {
//     if (treeResult.left) {
//       return hasTrage(treeResult.left, traget - treeResult.value)
//     }
//     if (treeResult.right) {
//       return hasTrage(treeResult.right, traget - treeResult.value)
//     }
//   }
// }

// console.log(hasTrage(treeResult, 7))