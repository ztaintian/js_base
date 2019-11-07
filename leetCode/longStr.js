// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var longStr = function (str) {
  var temp = [];
  var tempArr = []
  var i = 0;
  var tempIndex = 0
  while (i < str.length) {
    if (temp.indexOf(str[i]) === -1) {
      temp.push(str[i])
    } else {
      temp.shift();
      continue;
    }
    tempArr.push(temp.toString())
    i++
  }
  tempArr.map((item, index) => {
    if (tempArr[tempIndex].length < item.length) {
      tempIndex = index
    }
  })
  return tempArr[tempIndex]
}

var str = 'abcabcnmbb'
console.log(longStr(str), (longStr(str)).split(',').length)
