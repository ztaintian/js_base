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

# axios

    //增加随机数，防止缓存
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date())
      }
    } else if (config.method === 'get') {
      config.params = {
        _t: Math.random(),
        ...config.params
      }
    }

# vite.config.ts - 自动导入配置

    // vite.config.ts

    import AutoImport from "unplugin-auto-import/vite";

    plugins: [
      AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue"]
    ]

# pinia 数据持久化插件

    // store/index
    import { createPinia } from "pinia";
    import piniaPersist from "pinia-plugin-persistedstate";

    const pinia = createPinia();
    pinia.use(piniaPersist)
    export default pinia;

    // main
    import pinia from "./stores/index";

    app.use(router);
    app.use(pinia);
    app.mount("#app");

# ts 组件全局化
    // main
    import "./assets/main.css";
    import { createApp } from "vue";
    import pinia from "./stores/index";
    import router from "./router";
    import App from "./App.vue";
    import components from './components/index'
    const app = createApp(App);

    console.log('components', components)
    Object.keys(components).map((item) => {
      console.log('itemitem', item)
      app.component(item, components[item as keyof typeof components]);
    })
    app.use(router);
    app.use(pinia);
    app.mount("#app");

    // components/index
    import "@vueup/vue-quill/dist/vue-quill.snow.css";
    import { QuillEditor } from "@vueup/vue-quill";

    export default {
      QuillEditor,
    };

