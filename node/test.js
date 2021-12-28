

var addTwoNumbers = function(l1, l2) {
  // 创建一个虚拟头节点，申明一个cur节点指向虚拟头节点
  let pre = new ListNode(0),cur = pre;
  let carry = 0; // 申明一个计数值
  while(l1 || l2){
    // 获取链表的值
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;
    let sum = x + y + carry;
    // 超出10的话，记录1，加入到下次的运算中
    carry = Math.floor(sum / 10); // 取模
    sum = sum % 10; // 取余
    cur.next = new ListNode(sum); // 给cur下个节点赋值
    cur = cur.next; // 节点往后走一位
    if(l1 != null){
      l1 = l1.next; // 循环的节点不为null，就往后走一位
    }
    if(l2 != null){ // 循环的节点不为null，就往后走一位
      l2 = l2.next;
    }
  }
  if(carry == 1){ // 最后判断计数值是否大于1，大于1，链表往后加一位，且值为1
    cur.next = new ListNode(carry);
  }
  return pre.next;
};

console.log(addTwoNumbers([1,2,3], [2,3,4]))