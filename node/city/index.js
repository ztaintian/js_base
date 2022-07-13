// 使用node 运行生成相应需要的index.js 文件
const cityArr = require('./city.js').default

function findChild(parentName) {
  const childArr = []
  cityArr.forEach(it => {
    const [, right = ''] = it.NamePath.split(parentName)
    const n = (right.split('@')).length - 1 // @出现的次数
    if (n === 1) { // 匹配成功是子节点。排除孙子节点
      const child = {
        value: it.Name,
        label: it.Name,
        parentName: parentName,
        children: findChild(it.NamePath)
      }
      if (child.children.length === 0) delete child.children
      childArr.push(child)
    }
  })
  return childArr
}
const arr = []
// 父级
cityArr.forEach(it => {
  if (it.NamePath.indexOf('@') < 0) {
    arr.push({
      value: it.Name,
      label: it.Name,
      parentName: '', // 第一层parentName为空
      children: findChild(it.Name)
    })
  }
})
// console.log(arr)
const fs = require('fs')
var stream = fs.createWriteStream('./city.min.js')
stream.write('export default ' + JSON.stringify(arr))
stream.close()
