// 参考链接  https://blog.csdn.net/hyl999/article/details/97035381?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task

// 数组
var a = [1, 23, 4], b = [23, 'da', 'dd'];
var c = [...a, ...b];
console.log(c) // [ 1, 23, 4, 23, 'da', 'dd' ]

// object {} 浅拷贝(Shallow-cloning, 不包含 prototype) 和对象合并, 可以使用更简短的展开语法。而不必再使用 Object.assign() 方式.
var aa = { aa: 1, bb: 22 }, bb = { bb: 88, cc: 55 }
var cc = { ...aa, ...bb }
console.log(cc) // { aa: 1, bb: 88, cc: 55 }