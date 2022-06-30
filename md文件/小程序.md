# 2022年6月 uni-app小程序创建

    1、vue-cli 创建 uni-app 项目。
        
    vue create -p dcloudio/uni-preset-vue my-project（最好参考[uni-app](https://uniapp.dcloud.io/quickstart-cli.html)官网快速搭建教程)

    2、stylus配置

      npm i style-resources-loader -D

      npm i stylus stylus-loader  -D

      版本要求（可以使用）
      "style-resources-loader": "^1.3.3",
      "stylus": "^0.54.7",
      "stylus-loader": "^3.0.2",

    3、vue.config.js 中配置单个引用全局stylus

    const webpack = require('webpack');
    const path = require('path');
    
    function resolve(dir) {
        return path.join(__dirname, dir);
    }
    
    // 加载 stylus 文件，可以是多个
    function importStylus (rule) {
        rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, 'src/assets/stylus/global.styl')
            ]
        })
    }
    
    module.exports = {      
        css: {
            extract: false
        },
        // 它支持webPack-dev-server的所有选项
        devServer: {
            host: 'localhost',
            // host: '192.168.82.64',
            port: 8086, // 端口号
            https: false, // https:{type:Boolean}
            open: true, //配置自动启动浏览器
            proxy: {
                '/tiles': {
                    target: 'http://localhost:6768',
                    changeOrigin: true,
                    pathRewrite: {
                        '/tiles': ''
                    }
                }
            }
        },
        chainWebpack(config) {
            // 引入 stylus
            const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
            types.forEach(type => importStylus(config.module.rule('stylus').oneOf(type)));
            // 别名设置
          config.resolve.alias
          .set('@', resolve('src'))
          .set('@components', resolve('src/components'))
                .set('@images', resolve('src/assets/images'))
                .set('@stylus', resolve('src/assets/stylus'))
          .set('@libs', resolve('public/libs'))
        }
      };
