// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// var solution = (arr1, arr2) => {
//   var soluArr = [];
//   arr1.map((item) => {
//     var flag = arr2.some((item2) => {
//       return item === item2
//     })
//     if (flag) {
//       soluArr.push(item)
//     }
//   })
//   return soluArr;
// }
// var arr1 = [1, 2, 2, 1], arr2 = [2, 2];
// console.log(solution(arr1, arr2));

// 存哈希表
// const intersect = (nums1, nums2) => {
//   const map = {};
//   const res = [];
//   for (const num1 of nums1) { // 存下nums1数字的出现次数
//     if (map[num1]) {
//       map[num1]++;  
//     } else {         
//       map[num1] = 1; 
//     }
//   }
//   for (const num2 of nums2) { // 遍历nums2看看有没有数字在nums1出现过
//     const val = map[num2];
//     if (val > 0) {            // 出现过
//       res.push(num2);         // 推入res数组
//       map[num2]--;            // 匹配掉一个，就少了一个
//     }
//   }
//   return res;
// };
// var arr1 = [1, 2, 2, 1], arr2 = [2, 2,1,5];
// console.log(intersect(arr1,arr2))

// 双指针 解法
const intersect = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); // 先排序，使得重复的元素相邻出现
  const res = [];
  let p1 = 0;                  // 两个指针
  let p2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界了就不能找交集
    if (nums1[p1] > nums2[p2]) {        // p1指向的数大，移动p2，期待遇到一样大的
      p2++;
    } else if (nums1[p1] < nums2[p2]) { // 类似
      p1++;
    } else {                   // 遇到相同的，推入res数组，两个指针同时移动考察下一个
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};
var arr1 = [1, 2, 2, 1], arr2 = [2, 2,1,5];
console.log(intersect(arr1,arr2))