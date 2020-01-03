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
      chunks: "all",
      minSize: 0, // 文件小于30k一般不会分割打包，设置最小值可以打包
      cacheGroups: {
        vendors: {
          test: path.join(__dirname, 'js'),  // 匹配js目录下的文件
          priority: 10,   // 优先级配置项
          filename: 'vendor.js', // 设置文件名
        },
        default: {
          minChunks: 2,
          priority: -20,   // 优先级配置项
          reuseExistingChunk: true
        }
      }
    }
  },
}
