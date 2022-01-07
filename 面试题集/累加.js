function add (...args) {
	return args.reduce((a, b) => a + b)
}

function currying (fn) {
	let args = []
	return function _c (...newArgs) {
		if (newArgs.length) {
			args = [
				...args,
				...newArgs
			]
			return _c
		} else {
			return fn.apply(this, args)
		}
	}
}

let addCurry = currying(add)
// 注意调用方式的变化
console.log(addCurry(1)(2)(3)(4)())



// function add(x) {
//   var sum = x;
//   var tmp = function (y) {
//     sum = sum + y;
//     return tmp;
//   };
//   tmp.toString = function () {
//     return sum;
//   };
//   return tmp;
// }
// console.log(+add(1)(2)(3)); //6
