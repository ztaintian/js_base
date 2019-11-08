// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
var str = 'bbbada'
var longestPalindrome = function (s) {
  var temp = [];
  var tempArr = [];
  var strArr = s.split('');
  var j = 0;
  var i = 0;
  while (i < strArr.length) {
    if (temp.indexOf(strArr[i]) === -1 ) {
      temp.push(strArr[i]);
    } else {
      console.log('temp', temp)
      temp.push(strArr[i]);
      tempArr.push(temp)
      temp = []
      i = j;
      j++;
    }
    i++;
  }
  console.log('tempArr', tempArr)
};
longestPalindrome(str);