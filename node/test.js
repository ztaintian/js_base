Mypromise.all = function (promiseList) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseList)) return reject(new Error('必须是数组'))
    if (!promiseList.length) return resolve([])
    let arr = [], count = 0;
    for (let i = 0, len = promiseList.length; i < len; i++) {
      Promise.resolve(promise).then(result => {
        count++
        arr[i] = result;
        if (count === len) resolve(arr);
      }).catch(err => reject(err))
    }
  })
}