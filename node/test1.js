// 示例 1:
// 输入: [2,2,1]
// 输出: 1

// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4

var arr = [22, 3, 4, 22];

function once(arr) {
  var obj = {};
  var temp = []
  arr.map((item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });
  for (var i in obj) {
    if (obj[i] === 1) {
      temp.push(i)
    }
  }
  return temp;
}
console.log(once(arr))
