
var arr = [
  { id: 1, name: "用户管理", pid: 0 },
  { id: 2, name: "菜单申请", pid: 1 },
  { id: 3, name: "信息申请", pid: 1 },
  { id: 4, name: "模块记录", pid: 2 },
  { id: 5, name: "系统设置", pid: 0 },
  { id: 6, name: "权限管理", pid: 5 },
  { id: 7, name: "用户角色", pid: 6 },
  { id: 8, name: "菜单设置", pid: 6 },
];

const arrayToTree = (data, pid) => {
  const result = [];
  getChildren(data, result, pid);
  return result;
};
const getChildren = (data, result, pid) => {
  for (const item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] };
      result.push(newItem);
      getChildren(data, newItem.children, item.id);
    }
  }
};
console.log(arrayToTree(arr, 0));