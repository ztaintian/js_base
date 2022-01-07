var arr = [1,2,3,4,5,6];
var arr2 = [1,254,43,321,32322,232,2,3];
var temp = []
for (var i = 0;i<arr.length;i++) {
  for (var j=0;j<arr2.length;j++) {
    if (arr[i] === arr2[j]) {
      temp.push(arr[i])
    }
  }
}
console.log(temp)