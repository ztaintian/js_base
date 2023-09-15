var list = [
  { id: 1, name: 'aaa', parentId: 0, },
  { id: 2, name: 'bbb', parentId: 1, },
  { id: 3, name: 'ccc', parentId: 3, },
  { id: 4, name: 'ddd', parentId: 2, },
  { id: 5, name: 'eee', parentId: 1, },
  { id: 6, name: 'fff', parentId: 3, },
]

function toTree(list) {
  var arr = [];
  var obj = {};

  for (let i in list) {
    obj[list[i].id] = list[i];
  }
  for (item of list) {
    console.log('item', item)
    if (item.parentId != 0) {
      if (!obj[item.parentId].children) {
        obj[item.parentId].children = [];
      }
      obj[item.parentId].children.push(item);
    } else {
      arr.push(item)
    }
  }

  return arr;
}
toTree(list)