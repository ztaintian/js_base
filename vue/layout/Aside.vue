<template>
  <div class="layout-aside" :style="collapse?'':'width:200px;'">
    <el-menu :collapse="collapse" :text-color="'#B7C5CE'" :default-active="active" :background-color="'#2F4050'"
      :unique-opened="true" :active-text-color="'#258CE7'">
      <el-submenu v-for="item in menuList" :key="item.meta.title" :index="item.name"
        v-show="item.meta&&item.meta.menuShow">
        <template slot="title"><i class="el-icon-message"></i><span>{{item.meta.title}}</span></template>
        <el-menu-item-group>
          <el-menu-item @click="toUrlChild(item,itemCdn)" v-show="itemCdn.meta.menuShow"
            v-for="itemCdn in item.children" :key="itemCdn.name" :index="itemCdn.meta.title">{{itemCdn.meta.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    props:['collapse'],
    name: 'Aside',
    data() {
      return {
        active: "businessManagement"
      }
    },
    computed: {
      menuList() {
        return this.$router.options.routes
      }
    },
    created() {
      console.log('menuList', this.collapse)
    },
    methods: {
      showMessage(test) {
        console.log(test)
      },
      toUrlChild(item, itemC) {
        console.log(item.path)
        itemC.path === '/' ? this.$router.push(`/${item.path}`) : this.$router.push(`${item.path}/${itemC.path}`)
      }
    }
  }
</script>
<style>
.el-menu-item-group__title{
  padding:0!important;
}
</style>
<style lang="scss" scoped>
  .layout-aside {
    background: #2F4050;
    ::v-deep.el-menu {
      border: 0;
      width:100%;
    }

  }
</style>