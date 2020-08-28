var fs = require('fs');
var value = fs.readFileSync('index.txt', 'utf-8');
console.log(value);