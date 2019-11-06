// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:

// 输入: "abcadcvb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var str = 'abcadcvb'
function longStr(str) {
  var arr = str.split('')
  var obj = {}
  var j = 0
  var strArr = []
  var nStr = ''
  for (var i=0; i<arr.length; i++) {
    var val = arr[i]
    if (obj[val]) {
      i = j
      j++
      obj = {}
      strArr.push(nStr)
      nStr = ''
    } else {
      obj[val] = true
      nStr += val
    }
  }
  console.log(strArr)
}
longStr(str)