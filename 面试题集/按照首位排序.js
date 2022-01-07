var arr = [12, 3, 24, 1, 932, 6423];
function getParse(num) {
  var result;
  if (num>10) {
    result = parseInt(num / 10) > 10 ? getParse(parseInt(num / 10)):parseInt(num / 10);
  } else {
    result = num
  }
  return result;
}
function sortFirst(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (getParse(arr[j]) > getParse(arr[j+1])) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(sortFirst(arr));
