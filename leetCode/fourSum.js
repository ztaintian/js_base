// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
// 注意：
// 答案中不可以包含重复的四元组。
// 示例：
// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// var fourSum = function (nums) {

// }
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  let res = [];
  nums.sort((a, b) => a - b);
  console.log('nums', nums)
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let l = j + 1, r = nums.length - 1;
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[l], nums[r]])
          while (l < r && nums[l] == nums[l + 1]) {
            l++;
          }
          while (l < r && nums[r] == nums[r - 1]) {
            r--;
          }
          l++;
          r--;
        }
        else if (sum < target) {
          l++;
        }
        else if (sum > target) {
          r--;
        }
      }
    }
  }
  return res;
};
var nums = [1, 0, -1, 2, 0, -2,-2, 2]
var target = 0
console.log(fourSum(nums, target))
