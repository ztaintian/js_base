var fs = require('fs');
// 同步读取
var value = fs.readFileSync('index.txt', 'utf-8');
console.log(value);
// 异步读取
fs.readFile('index.txt', (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log('data', data.toString());
})

// 异步打开文件
console.log("准备打开文件！");
fs.open('index.txt', 'r+', function (err, fd) {
  if (err) {
    return console.error(err);
  }
  console.log("文件打开成功！", fd);
});