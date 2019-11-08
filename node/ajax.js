var ajax = function (url) {
  return new Promise((resolve, reject) => {
    var http = new XMLHttpRequest()
    http.open('GET', url)
    http.onreadystatechange = function () {
      if (this.readyState != 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
  })
}
ajax().then((response) => {
  console.log(response)
})

