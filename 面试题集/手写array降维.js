var arr = [[12,34,5,67],3,4,4,[3,43,[223,2,2],3]];

function faltArr(arr) {
  return arr.reduce((pre,next) => {
    return pre.concat(Array.isArray(next)?faltArr(next):next)
  },[])
}
console.log(faltArr(arr))