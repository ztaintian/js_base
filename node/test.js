// const getJSON = function (url) {
//   return new Promise(function (resolve, reject) {
//     const handler = function () {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

// };

// getJSON("../posts.json").then(function (json) {
//   console.log('Contents: ' + json);
// }, function (error) {
//   console.error('出错了', error);
// });

function axios(method,url) {
  return new Promise((resolve, reject) => {
    var http = new XMLHttpRequest()
    var handle = function (data) {
      if (http.readyState == 4 && http.status ==200) {
        resolve(http.response)
      } else {
        reject(new Error(http.statusText))
      }
    }
    http.open(method, url);
    http.onreadystatechange = handle
    http.responseType = "json"
    http.setRequestHeader('Accept', 'application/json')
    http.send()
  })
}