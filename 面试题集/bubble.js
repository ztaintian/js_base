var arr = [1,2,3,4,777,4,12,2,4,24,2,1]

function bubble(arr) {
  for (var i=0;i<arr.length;i++) {
    for(var j=0;j<arr.length-i;j++) {
      if (arr[j]>arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  console.log('arr',arr)
}
bubble(arr)