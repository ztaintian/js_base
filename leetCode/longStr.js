// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

var str = 'abcabcnm'

var lengthOfLongestSubstring = function (s) {
  var res = 0,
    i = 0;
  var temp = [];
  while (i < s.length) {
    if (temp.indexOf(s[i]) === -1) {
      temp.push(s[i]);
    } else {
      temp.shift();
      continue;
    }
    res = Math.max(res, temp.length);
    i++;
  }
  console.log(temp)
  return res;
};

console.log(lengthOfLongestSubstring(str))

