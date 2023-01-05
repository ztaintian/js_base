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

// const arr = [{
//   id: 1,
//   parentId: 0,
//   title: "目录1"
// }, {
//   id: 22,
//   parentId: 1,
//   title: "子目录1-1"
// }, {
//   id: 33,
//   parentId: 1,
//   title: "子目录1-2"
// }，{
//   id: 2,
//   parentId: 0,
//   title: "目录2"
// }, {
//   id: 44,
//   parentId: 1,
//   title: "子目录2-1"
// }, {
//   id: 55,
//   parentId: 2,
//   title: "子目录2-2"
// }];
// var tempArr = []

// const flat = function (arr) {
//   arr.map((item) => {
//     tempArr.push({
//       id: item.id,
//       parentId: item.parentId,
//       title: item.title
//     });
//     if (item.children) {
//       flat(item.children)
//     }
//   })
//   return tempArr;
// }
function flat(arr) {
  var tempArr = [];
    (function flat2(arr) {
      arr.map((item) => {
        tempArr.push({
          id: item.id,
          parentId: item.parentId,
          title: item.title
        });
        if (item.children) {
          flat2(item.children);
        }
      })
    }(arr));
  return tempArr;
}
(function () { console.log(1111) }());
console.log(flat(treeNode))