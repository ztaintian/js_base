// 扁平数据
var arr = [
  {
    name: "文本1",
    parent: null,
    id: 1,
  },
  {
    name: "文本2",
    id: 2,
    parent: 1,
  },
  {
    name: "文本3",
    parent: 2,
    id: 3,
  },
];

var getResult = (arr, id) => {
  var result = [];
  arrayToTree(arr, id, result);
  return result;
};
function arrayToTree(arr, id, result) {
  arr.map((item) => {
    if (item.parent === id) {
      var newItem = { ...item, child: [] };
      result.push(newItem);
      arrayToTree(newItem, newItem.id, newItem.child);
    }
  });
}
getResult(arr, null);
