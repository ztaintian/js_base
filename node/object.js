var obj = [
  {
    aa: 1,
    bb: 333
  },
  {
    aa: 55,
    bb: 000
  }
]

var tempObj = obj.map((item) => {
  return {
    ...item,
    bb: (() => {
      return 5555
    })()
  }
})

console.log(tempObj)