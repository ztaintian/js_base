// var arr = [[12,34,5,67],3,4,4,[3,43,[223,2,2],3]];

// import { isArray } from "util"

// function faltArr(arr) {
//   return arr.reduce((pre,next) => {
//     return pre.concat(Array.isArray(next)?faltArr(next):next)
//   },[])
// }
// console.log(faltArr(arr))



var arr = [[1, 2, 3, 4], [1, 2, 3, 4, [1, 2, 3, 4]]]


function flatArr(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatArr(cur) : cur);
  }, [])
}

console.log(flatArr(arr))





















