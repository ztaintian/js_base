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
          minChunks: 2, // 就是说如果引用的模块来自node_modules,那么只要它被引用，那么满足其他条件时就可以进行自动分割。否则该模块需要被重复引用才继续判断其他条件。（对应的就是下文配置选项中的minChunks为1或2的场景）
          priority: -20,   // 优先级配置项
          reuseExistingChunk: true
        },
        runtimeChunk: { // 提取出入口chunk中的runtime部分，形成一个单独的文件，由于这部分不常变化，可以利用缓存
          name: 'manifest'
        },
      }
    }
  },
}
