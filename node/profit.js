var arr = [-1, 66, 777, 33, 555]
//方法一es5
// var getProfit = function(arr){
// 	var minPrice = arr[0]
// 	var maxProfit = 0
// 	for(var i=0;i<arr.length;i++){
// 		var currentPrice = arr[i]
// 		minPrice = Math.min(minPrice,currentPrice)
// 		var potentilaProfit = currentPrice - minPrice
// 		maxProfit = Math.max(maxProfit,potentilaProfit)
// 	}
// 	return maxProfit
// }
// console.log(getProfit(arr))

//方法二  es6
var minProfit = Math.min(...arr)
var maxProfit = Math.max(...arr)
console.log(minProfit, maxProfit, maxProfit - minProfit)