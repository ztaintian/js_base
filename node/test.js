var arr = [323, [22, 3, 2, [32, 43]], 4, 5, 3, 3, 21, 2, 3, 2]

function cc(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? cc(cur) : cur)
  }, [])
}

console.log(cc(arr))