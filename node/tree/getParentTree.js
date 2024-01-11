const getParentTree = (id, tree) => {
  let arr = [] //要返回的数组
  for (let i = 0; i < tree.length; i++) {
    let item = tree[i]
    arr = []
    arr.push(item) //保存当前节点id
    if (id == item.id) {
      //判断当前id是否是默认id
      return arr //是则退出循环、返回数据
    } else {
      //否则进入下面判断，判断当前节点是否有子节点数据
      if (item.children && item.children.length > 0) {
        //合并子节点返回的数据
        arr = arr.concat(getParentTree(id, item.children ? item.children : []))
        console.log(arr)
        if (arr.map((item2) => (item2 ? item2.id : '')).includes(id)) {
          //如果当前数据中已包含默认节点，则退出循环、返回数据
          return arr
        }
      }
    }
  }
}

const treeData = [{
  name: '1',
  id: 1,
  children: [{
    name: '1-1',
    id: 2,
    children: [{
      name: '1-1-1',
      id: 4,
    }],
    name: '1-2',
    id: 3,
    children: [{
      name: '1-2-1',
      id: 5,
    }],
  }]
}, {
  name: '2',
  id: 6,
  children: [{
    name: '2-1',
    id: 7,
    children: [{
      name: '2-1-1',
      id: 9,
    }],
    name: '2-2',
    id: 8,
    children: [{
      name: '2-2-1',
      id: 10,
    }],
  }]
}]
console.log(getParentTree(5, treeData))