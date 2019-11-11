// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// var longestPalindrome = function (s) {
//   let n = s.length;
//   if (n == 0) return ''; //字符串为空则返回空
//   if (n == 1) return s;  //字符串为一个字符, 显然返回自身
//   let result = ''
//   for (let i = 0; i < n; i++) { //字符串长度超过2
//     for (let j = i + 1; j <= n; j++) {
//       let str = s.slice(i, j); //可得到所有子串
//       let f = str.split('').reverse().join(''); //对字符串利用数组方法倒序

//       if (str == f) { //判断是否为回文
//         result = str.length > result.length ? str : result;
//       }
//     }
//   }
//   return result;
// }
// var str = 'babad'
// console.log(longestPalindrome(str))

// var longestPalindrome = function (s) {
//   let len = s.length;
//   let result;
//   let i, j, L;
//   let dp = Array(len).fill(0).map(x => Array(len).fill(0));
//   //console.log(dp);
//   if (len <= 1) {
//     return s
//   }
//   // 只有一个字符的情况是回文
//   for (i = 0; i < len; i++) {
//     dp[i][i] = 1
//     result = s[i]
//   }
//   // [
//   //   [ 0, 0, 0, 0, 0 ],
//   //   [ 0, 0, 0, 0, 0 ],
//   //   [ 0, 0, 0, 0, 0 ],
//   //   [ 0, 0, 0, 0, 0 ],
//   //   [ 0, 0, 0, 0, 0 ]
//   // ]
//   // L是i和j之间的间隔数（因为间隔数从小到大渐增，所以大的间隔数总能包含小的间隔数）
//   // i     j
//   // abcdcba.length = L   所以 L = j-i+1; => j = i+L-1;
//   for (L = 2; L <= len; L++) {
//     // 从0开始
//     for (i = 0; i <= len - L; i++) {
//       j = i + L - 1;
//       if (L == 2 && s[i] == s[j]) {
//         dp[i][j] = 1;
//         result = s.slice(i, i + L);
//       } else if (s[i] == s[j] && dp[i + 1][j - 1] == 1) {
//         dp[i][j] = 1
//         result = s.slice(i, i + L);
//       }
//     }
//   }
//   //console.log(result);
//   return result;
// }

// var str = 'ddabbade'
// const longestPalindrome = function (s) {
//   if (s.length == 1) {
//     return s
//   }
//   let str = '#' + s.split('').join('#') + '#'
//   let rl = []
//   let mx = 0
//   let pos = 0
//   let ml = 0
//   for (let i = 0; i < str.length; i++) {
//     if (i < mx) {
//       rl[i] = Math.min(rl[2 * pos - i], mx - i)
//     } else {
//       rl[i] = 1
//     }
//     while (i - rl[i] > 0 && i + rl[i] < str.length && str[i - rl[i]] == str[i + rl[i]]) {
//       rl[i]++
//     }
//     if (rl[i] + i - 1 > mx) {
//       mx = rl[i] + i - 1
//       pos = i
//     }
//     if (ml < rl[i]) {
//       ml = rl[i]
//       sub = str.substring(i - rl[i] + 1, i + rl[i])
//     }
//   }
//   return sub.split('#').join('').trim()
// }
// console.log(longestPalindrome(str)) //输出dabbad

//  #  a  #  c  #  b  #  b  #  c  #  b  #  d  #  s  #
// [1, 2, 1, 2, 1, 2, 5, 2, 1, 4, 1, 2, 1, 2, 1, 2, 1]

var longStr = function (str) {
  if (str.length < 2) {
    return str
  }

  var result = ''
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      var tempStr = str.slice(i, j)
      var resTempStr = tempStr.split('').reverse().join('')
      if (tempStr === resTempStr) {
        result = result.length > resTempStr.length ? result : resTempStr
      }
    }
  }
  console.log(result)
}
var str = 'ddabbade'
longStr(str)