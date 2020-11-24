var singleNumber = function (nums) {
  var obj = {};
  nums.map((item) => {
    if (obj[item]) {
      obj[item]++
    } else {
      obj[item] = 1
    }
  })
  var tempValue, result;
  for (k in obj) {
    if (tempValue) {
      if (obj[k] < tempValue) {
        tempValue = obj[k]
        result = k
      }  
    } else {
      tempValue = obj[k]
      result = k
    }
  }
  return result
};