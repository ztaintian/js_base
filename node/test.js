var fs = require('fs')
//  fs.readFile('index.txt', (err, data) => {
//   console.log('读取', data.toString())
//  })

var value = fs.readFileSync('index.txt', 'utf-8');
console.log(value)