// 一堆没什么规律可循的数据 期望 小 ～ 大 [1, 3, 4, ..., 14]
const heapData = [8, 3, 10, 1, 6, 14, 4, 7, 13];
// 首先要建立一颗二叉树

// 1. 选择根结点，简单一点直接选择第一个。
const root = {
  val: heapData.shift()
};

// 2. 枝繁叶茂的规则，判断树枝往哪里分叉 R 表示右，L 表示左
// 准备插入二叉树的值，与已经存在的树形结构进行比较
const getDir = (val, node) => (val > node.val ? "R" : "L");

// 3. 找到适合的空缺位置，插入把值插入二叉树中
const searchPlace = (val, treeNode) => {
  // 判断当前数值，应该插到左边还是右边
  const dir = getDir(val, treeNode);
  // 下一个节点 注意这里是 var 而不是 let 更不是 const
  var nextNode = treeNode[dir];
  // 不存在下一个节点，那么将当前值插入树形结构中，否则，再次查询空缺节点，直到找到空缺位置为止
  !nextNode ? (treeNode[dir] = {
    val
  }) : searchPlace(val, nextNode);
};

// a. 一次遍历数据，将数组的值依次插入到二叉树中
for (const val of heapData) searchPlace(val, root);
// 二叉树建立完毕
console.log("BinaryTree", root);

// b. 根据二叉树结构，将数据串联起来
const traverse = (treeNode, printVal) => {
  // 1. 先看看根节点左边有没有节点，存在继续往树形结构的左侧查询
  treeNode["L"] && traverse(treeNode["L"], printVal);
  // 2. 当前节点左边已经没有子节点了，这时输出当前值（treeNode.val）, 输出方法自己定义
  printVal && printVal(treeNode.val); /* 中序遍历，排序 */
  // 3. 最小的找到之后，访问当前节点右侧子节点，
  // 存在则重复第一步，看看右侧子节点的左侧有没有节点，找到当前节点右侧，最小的那个值
  treeNode["R"] && traverse(treeNode["R"], printVal);
};

// 希望升序排列
const ascList = [];
traverse(root, _ => ascList.push(_));
console.log(ascList);