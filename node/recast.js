const recast = require('recast');

const code = `a = 11`

const ast = recast.parse(code);

const add  = ast.program.body[0]

console.log(add)