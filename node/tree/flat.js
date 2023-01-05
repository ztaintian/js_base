const treeNode = [{
  parentId: 0,
  title: "目录1",
  id: 1,
  children: [{
    parentId: 1,
    title: "子目录1-1",
    id: 22,
  }, {
    parentId: 1,
    title: "子目录1-2",
    id: 33,
  }],
}, {
  parentId: 0,
  title: "目录2",
  id: 2,
  children: [{
    parentId: 2,
    title: "子目录2-1",
    id: 44,
  }, {
    parentId: 1,
    title: "子目录2-2",
    id: 55,
  }],
}];

function flat(arr, parentId) {
  var tempArr = [];
  (function flat2(arr, parentId) {
    arr.map((item) => {
      tempArr.push({
        id: item.id,
        parentId: parentId,
        title: item.title
      });
      if (item.children) {
        flat2(item.children, item.id);
      }
    })
  }(arr, parentId));
  return tempArr;
}
console.log(flat(treeNode, null))

function flatToTree(arr, parenId) {
  let tempArr = [];
  arr.map((item) => {
    if (item.parentId === parenId) {
      const children = flatToTree(arr.filter(v => v.parenId !== parenId), item.id);
      if (children.length) {
        tempArr.push({
          children: children,
          ...item
        })
      } else {
        tempArr.push({
          ...item
        })
      }
    }
  })
  return tempArr;
}
console.log(flatToTree(flat(treeNode, null), null))