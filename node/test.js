var arr = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];

function conmb(m, n) {}

function result(numRow) {
  var arr = [];
  var result = [];
  for (var i = 0; i < numRow; i++) {
    for (var j = 0; j <= i; j++) {
      // arr.push(conmb(i,j-1))
      if (j > 0 && j < i) {
        arr.push(1);
      } else {
        arr.push(result[i - 1][j - 1] + result[i - 1][j]);
      }
    }
    result.push(arr);
  }
}


