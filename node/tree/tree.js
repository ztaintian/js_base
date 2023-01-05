var data = [
  { id: 1, name: '用户管理', pid: 0 },
  { id: 2, name: '菜单申请', pid: 1 },
  { id: 3, name: '信息申请', pid: 1 },
  { id: 4, name: '模块记录', pid: 2 },
  { id: 6, name: '权限管理', pid: 5 },
  { id: 7, name: '用户角色', pid: 6 },
  { id: 5, name: '系统设置', pid: 0 },
  { id: 8, name: '菜单设置', pid: 6 },
]

function toTree(data) {
  // 删除 所有 children,以防止多次调用
  console.log('data', data)
  data.forEach(function (item) {
    delete item.children
  })

  // 将数据存储为 以 id 为 KEY 的 map 索引数据列
  var map = {}
  data.forEach(function (item) {
    map[item.id] = item
  })
  //        console.log(map);
  var val = []
  data.forEach(function (item) {
    // 以当前遍历项，的pid,去map对象中找到索引的id
    var parent = map[item.pid]
    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
      val.push(item)
    }
  })
  return val
}
console.log(toTree(data))
