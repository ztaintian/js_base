let input = [{
  id: 1,
  val: '学校',
  parentId: null
}, {
  id: 2,
  val: '班级1',
  parentId: 1
}, {
  id: 3,
  val: '班级2',
  parentId: 1
}, {
  id: 4,
  val: '学生1',
  parentId: 2
}, {
  id: 5,
  val: '学生2',
  parentId: 3
}, {
  id: 6,
  val: '学生3',
  parentId: 3
}, ]

function arrToTree(arr) {
  var tree = {};
  tree = {
    id:arr[0].id,
    val:arr[0].val,
    parentId:arr[0].parentId,
    child: arr.length > 0 ? toTree(arr[0].id,arr) : []
  }
}

function toTree(parentId,arr) {
  var child = []
  arr.map((item) => {
    var newItem = {...item,child:[]}
    if (item.parentId === parentId) {
      child.push(newItem)
    }
  })
}