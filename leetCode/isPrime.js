// 验证一个数是否是素数
// 如果这个数是 2 或 3，一定是素数;
// 如果是偶数，一定不是素数;
// 如果这个数不能被3~它的平方根中的任一数整除，m必定是素数。而且除数可以每次递增2(排除偶数)

var isPrime = function (num) {
  if (num === 2 || num === 3) {
    return true;
  };
  if (num % 2 === 0) {
    return false;
  };

  let divisor = 3, limit = Math.sqrt(num);
  while (limit >= divisor) {
    console.log(num)
    if (num % divisor === 0) {
      return false;
    } else {
      divisor += 2;
    }
  }
  return true;
}
console.log(isPrime(28)); // false
