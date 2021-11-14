var json = {
  0: 1,
};
var params = Object.keys(json)
  .map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
  })
  .join("&");
  console.log('params', params)
