var data = [
  { id: 1, name: "用户管理", pid: 0 },
  { id: 2, name: "菜单申请", pid: 1 },
  { id: 3, name: "信息申请", pid: 1 },
  { id: 4, name: "模块记录", pid: 2 },
  { id: 5, name: "系统设置", pid: 2 },
  { id: 6, name: "权限管理", pid: 5 },
  { id: 7, name: "用户角色", pid: 6 },
  { id: 8, name: "菜单设置", pid: 6 },
];

function tree(arr, pid, result) {
  arr.map((item) => {
    if (item.pid === pid) {
      var newItem = { ...item, child: [] };
      result.push(newItem);
      tree(arr, item.id, item.child);
    }
  });
}

function arrToTree(arr,pid) {
  var result = [];
  tree(arr, 0, result);
  return result;
}
arrToTree(data,0);
