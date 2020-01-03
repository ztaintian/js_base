const path = require('path');
module.exports = {
  entry: "./index.js", // string | object | array
  // Webpack打包的入口
  output: {  // 定义webpack如何输出的选项
    path: path.resolve(__dirname, "dist"), // string
    // 所有输出文件的目标路径
    filename: "[chunkhash].js", // string
    // 「入口(entry chunk)」文件命名模版
  },
  optimization: {
    splitChunks: {
      // minChunks: 1,  //被多少模块共享
      chunks: "all", // 默认`async`只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
      minSize: 0, // 分离前模块最小体积下限（默认30k，可修改)
      maxAsyncRequests: 5, // 对于异步模块，生成的公共模块文件不能超出5个（可修改）
      maxInitialRequests: 3, // 对于入口模块，抽离出的公共模块文件不能超出3个（可修改）
      automaticNameDelimiter: '~',// 自动命名连接符
      cacheGroups: {
        vendors: {
          test: path.join(__dirname, 'js'),  // 匹配js目录下的文件
          priority: -10, // 优先级更高
          filename: 'vendor.js', // 设置文件名
        },
        default: {
          minChunks: 2, // 就是说如果引用的模块来自node_modules,那么只要它被引用，那么满足其他条件时就可以进行自动分割。否则该模块需要被重复引用才继续判断其他条件。（对应的就是下文配置选项中的minChunks为1或2的场景） // 被entry引入的次数，默认1（为1时，适合分离node_modules里的第三方库）
          priority: -20,   // 优先级配置项
          reuseExistingChunk: true
        },
        // runtimeChunk: { // 提取出入口chunk中的runtime部分，形成一个单独的文件，由于这部分不常变化，可以利用缓存
        //   filename: 'manifest.js'
        // },
      }
    }
  },
}


// splitChunks: {
//   chunks: "async”,//默认作用于异步chunk，值为all/initial/async/function(chunk),值为function时第一个参数为遍历所有入口chunk时的chunk模块chunk._modules为gaichunk所有依赖的模块，通过chunk的名字和所有依赖模块的resource可以自由配置,会抽取所有满足条件chunk的公有模块，以及模块的所有依赖模块，包括css
//   minSize: 30000,  //默认值是30kb
//   minChunks: 1,  //被多少模块共享
//   maxAsyncRequests: 5,  //所有异步请求不得超过5个
//   maxInitialRequests: 3,  //初始话并行请求不得超过3个
//   name: true,  //打包后的名称，默认是chunk的名字通过分隔符（默认是～）分隔开，如vendor~
//   cacheGroups: { //设置缓存组用来抽取满足不同规则的chunk,下面以生成common为例
//      common: {
//        name: 'common',  //抽取的chunk的名字
//        chunks(chunk) { //同外层的参数配置，覆盖外层的chunks，以chunk为维度进行抽取
//        },
//        test(module, chunks) {  //可以为字符串，正则表达式，函数，以module为维度进行抽取，只要是满足条件的module都会被抽取到该common的chunk中，为函数时第一个参数是遍历到的每一个模块，第二个参数是每一个引用到该模块的chunks数组。自己尝试过程中发现不能提取出css，待进一步验证。
//        },
//       priority: 10,  //优先级，一个chunk很可能满足多个缓存组，会被抽取到优先级高的缓存组中
//      minChunks: 2,  //最少被几个chunk引用
//      reuseExistingChunk: true，//	如果该chunk中引用了已经被抽取的chunk，直接引用该chunk，不会重复打包代码
//      enforce: true  // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的minSize，true：则使用0，false：使用上层minSize
//      }
//   }
// }