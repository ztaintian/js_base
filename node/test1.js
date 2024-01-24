var data = [
  {
    name: "所有物品",
    children: [
      {
        name: "水果",
        children: [{ name: "苹果", children: [{ name: '青苹果' }, { name: '红苹果' }] }]
      },
      {
        name: '主食',
        children: [
          { name: "米饭", children: [{ name: '北方米饭' }, { name: '南方米饭' }] }
        ]
      },
      {
        name: '生活用品',
        children: [
          { name: "电脑类", children: [{ name: '联想电脑' }, { name: '苹果电脑' }] },
          { name: "工具类", children: [{ name: "锄头" }, { name: "锤子" }] },
          { name: "生活用品", children: [{ name: "洗发水" }, { name: "沐浴露" }] }
        ]
      }
    ]
  }]
//递归遍历实现
var recursiveFunction = function () {
  var str = ''
  const getStr = function (list) {
    list.forEach(function (row) {
      if (row.children) {
        getStr(row.children)
      } else {
        str += row.name + ";"
      }
    })
  }
  getStr(data)
  console.log(str)
}
recursiveFunction()