  
  # vite.config.js

    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    const path = require('path')
    function _resolve(dir) {
      return path.resolve(__dirname, dir);
    }
    export default defineConfig({
      resolve: {
        alias: {
          '@': _resolve('src'),
          // '@assets': _resolve('src/assets'),
          // '@comps': _resolve('src/components'),
          // '@utils': _resolve('src/utils'),
          '@router': _resolve('src/router'),
          // '@store': _resolve('src/store'),
        }
      },
      plugins: [vue()],
    })
  # main.js

    import { createApp } from 'vue'
    import App from './App.vue'
    import router from '@router/index.js'
    
    createApp(App).use(router).mount('#app')

  # index.html

    引入js加上随机数去缓存

    <script src="/config.js?<%= _.random(0, 100, true) %>"></script>

