// 参考 https://juejin.cn/post/7048497932647006216

const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const {ClenWebpackPlugin} = require('clean-webpack-pugin')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    port: 9090
  },
  plugins: [
    new ClenWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: path.join(__dirname, './dist/index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.csss$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jpg|png|gif$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 6666, // 单位是字节（byte）只有 ≤ limit 大小的图片，才会被转为 base64 格式的图片
            optputPath: 'image', // outputPath:是指定的存储文件夹 dist/image 把图片文件统一生成到 image 目录中
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}
