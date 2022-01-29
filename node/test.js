var arr = [23,43,2,2,3,2,2,2]

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var tempArr = arr.splice(0,1)[0];
    var leftArr=[], rightArr=[];
    arr.map((item) => {
        if (item < tempArr) {
            rightArr.push(item);
        } else {
            leftArr.push(item)
        }
    })
    return [...quickSort(rightArr), ...[tempArr], ...quickSort(leftArr)]
}
console.log(quickSort(arr))