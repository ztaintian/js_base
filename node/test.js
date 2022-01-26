function Node(value, left, right) {
  if (value) {
    this.value = value;
    if (left) this.left = left;
    if (right) this.right = right;
  }
}

function Btree(arr) {
  if (arr) {
    if (arr.length === 1) {
      return new Node(arr[0]);
    }
    return new Node(arr[0], Btree(arr[1]), Btree(arr[2]));
  }
}
