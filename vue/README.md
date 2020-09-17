vue 问题总集

1、vue-router解决相同路径跳转报错

    在router.js中添加就好了

     const originalPush = Router.prototype.push
      Router.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
      }
