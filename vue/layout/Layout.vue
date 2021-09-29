<template>
  <div class="layout">
    <el-container>
      <el-header >
        <Header @on-collapse="parentEvent" />
      </el-header>
      <el-container>
        <Aside :collapse="isCollapse" />
        <el-main>
          <Breadcrumb />
          <div class="wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Header from './Header'
  import Aside from './Aside'
  import Breadcrumb from './Breadcrumb'
  export default {
    name: 'Layout',
    components: {
      Header,
      Aside,
      Breadcrumb
    },
    data() {
      return {
        isCollapse: false,
        currentRouter: []
      }
    },
    mounted() {
      this.currentRouter = this.$route
    },
    methods: {
      parentEvent(value){
        this.isCollapse = value
      }
    }
  }
</script>
<style lang="scss" scoped>
  .layout {
    height: 100%;

    .fade-enter-active,
    .fade-leave-active {
      transition: .2s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
    ::v-deep.el-header {
      z-index: 9999999;
    }
    ::v-deep.el-main{
      padding:0;
      overflow-y: auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }
    ::v-deep.el-container {
      height: 100%;
    }
    .wrapper {
      padding:20px;
    }
    ::v-deep.el-header {
      padding: 0;
      height: 70px !important;
    }

    .main-center {
      flex: 1;
      width: $layoutWidth;
      margin: 0 auto;
    }
  }
</style>