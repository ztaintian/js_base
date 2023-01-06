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

// function flatToTree(arr, parentId) {
//   let tempArr = [];
//   arr.map((item) => {
//     if (item.parentId === parentId) {
//       const children = flatToTree(arr.filter(v => v.parentId !== parentId), item.id);
//       if (children.length) {
//         tempArr.push({
//           children: children,
//           ...item
//         })
//       } else {
//         tempArr.push({
//           ...item
//         })
//       }
//     }
//   })
//   return tempArr;
// }

function flatToTree2(arr, parentId, tempArr = [],) {
  arr.map((item) => {
    if (item.parentId === parentId) {
      var flag = arr.some((itemC) => item.id === itemC.parentId)
      console.log()
      const newItem = { ...item, children: flag ? [] : '' };
      tempArr.push(newItem)
      flatToTree2(arr, item.id, newItem.children)
    }
  })
  return tempArr;
}
console.log(flatToTree2(flat(treeNode, null), null))