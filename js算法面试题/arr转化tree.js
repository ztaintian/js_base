let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];
const map = arr.reduce((obj, cur) => {
  obj[cur.id] = cur;
  return obj;
}, {});
const test = arr.reduce((result, cur) => {
  const { id, pid } = cur;
  const parentObj = map[pid];
<<<<<<< HEAD
  console.log('parentObj', parentObj)
=======
>>>>>>> 9552c9eaebf9823916ce558de413548aafc56df1
  // 不存在 直接插入
  if (!parentObj) {
    result.push(cur);
    return result;
<<<<<<< HEAD
  }
  if (Array.isArray(parentObj.children)) {
    parentObj.children.push(cur);
  } else {
    parentObj.children = [cur];
  }
  return result;
}, []);

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
=======
>>>>>>> 9552c9eaebf9823916ce558de413548aafc56df1
  }
  if (Array.isArray(parentObj.children)) {
    parentObj.children.push(cur);
  } else {
    parentObj.children = [cur];
  }
  return result;
}, []);

// const arrayToTree = (arr, pid) => {
//   const result = [];
//   treeFunction(arr,pid, result);
//   return result;
// };
// function treeFunction(arr, pid, result) {
//   arr.map((item) => {
//     if (item.pid === pid) {
//       result.push({ ...item, children: [] });
//       treeFunction(arr, item.id, item.children)
//     }
//   });
// }
// console.log(arrayToTree(arr,0))

// const arrayToTree = (data, pid) => {
//   const result = [];
//   getChildren(data, result, pid);
//   return result;
// };
// const getChildren = (data, result, pid) => {
//   for (const item of data) {
//     if (item.pid === pid) {
//       const newItem = { ...item, children: [] };
//       result.push(newItem);
//       getChildren(data, newItem.children, item.id);
//     }
//   }
// };
// console.log(arrayToTree(arr, 0));

// function arrayToTree(items) {
//   const result = []; // 存放结果集
//   const itemMap = {}; //
//   for (const item of items) {
//     const id = item.id;
//     const pid = item.pid;

//     if (!itemMap[id]) {
//       itemMap[id] = {
//         children: [],
//       };
//     }

//     itemMap[id] = {
//       ...item,
//       children: itemMap[id]["children"],
//     };

//     const treeItem = itemMap[id];

//     if (pid === 0) {
//       result.push(treeItem);
//     } else {
//       if (!itemMap[pid]) {
//         itemMap[pid] = {
//           children: [],
//         };
//       }
//       itemMap[pid].children.push(treeItem);
//     }
//   }
//   return result;
// }

// 链接：https://juejin.cn/post/6983904373508145189
