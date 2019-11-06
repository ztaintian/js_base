// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var longStr = function (str) {
  var temp = [];
  var i = 0;
  while (i < str.length) {
    if (temp.indexOf(str[i]) === -1) {
      temp.push(str[i])
    } else {
      temp.shift();
      continue;
    }
    console.log('temp', temp)
    i++
  }
}

var str = 'abcabcnmbb'
longStr(str)
