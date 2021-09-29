<template>
  <header class="header">
    <div class="header-content">
      <div class="header-left">
        <div class="logo-icon"></div>
        <i @click="collapseClick" :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </div>
      <div class="header-right">
        <el-popover placement="bottom" width="104" popper-class="popper-modify" trigger="hover">
          <div class="info_popover">
            <p @click="modifyPsw">
              修改密码
            </p>
            <p @click="loginOut">
              退出登录
            </p>
          </div>
          <div slot="reference">
            <div class="text">
              <span class="iconfont icon-zhanghushezhi"></span>账户信息
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </header>
</template>

<script>
  import http from '@/utils/api/index'
  import userManager from '@/utils/sso'
  export default {
    name: 'Header',
    data() {
      return {
        isCollapse: false
      }
    },
    computed: {
      menuList() {
        return this.$router.options.routes[1].children
      }
    },
    mounted() {
      http.parentList((data) => {
        console.log(data)
      })
      
    },
    methods: {
      collapseClick() {
        this.isCollapse = !this.isCollapse
        this.$emit('on-collapse', this.isCollapse)
      },
      modifyPsw() {
        // 修改密码
        console.log('修改密码')
      },
      loginOut() {
        // 退出登录
        console.log('退出登录')
        userManager.signoutRedirect().catch((error) => {
          console.error('error', error)
        })
      },
      getFatherPath(item) {
        return '/' + item.split('/')[1]
      },
      onPageJumps(item) {
        this.$router.push(`${item.path}`)
      }
    }
  }
</script>
<style lang="scss">
  //这个class是给header专门用的不能放在common里。@todo
  .popper-modify {
    width: 104px !important;
    min-width: auto !important;
    height: 84px !important;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16) !important;
    opacity: 1;
    border-radius: 5px !important;
    padding: 0 !important;

    p {
      text-align: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #363636;
      cursor: pointer;
      opacity: 1;
      margin-top: 14px;

      &:hover {
        color: $blue;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .header {
    z-index: 99999999;
    height: 70px;
    background: $blue;
    padding: 0 50px;
    .header-left {
      display: flex;
      align-items: center;
      i {
        font-size: 25px;
        margin-left:50px;
        color:#fff;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      cursor: pointer;

      .icon-yonghuguanli {
        font-size: 18px;
        color: #363636;
        opacity: 0.8;
        margin-right: 5px;
      }

      .text {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #fff;
      }

    }

    .header-content {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .logo-icon {
        cursor: pointer;
        width: 120px;
        height: 62px;
        float: left;
        background: url('../assets/logo.png');
        background-size: 120px 62px;
      }

      .navbar {
        height: 70px;
        float: left;

        ul {
          flex-wrap: nowrap;
          padding: 0;
          margin: 0;
          overflow: hidden;

          li {
            margin: 26px 60px 0 0;
            float: left;
            box-sizing: border-box;
            list-style: none;
            cursor: pointer;
            display: block;
            font-weight: bold;
            font-size: 22px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #363636;

            &.active {
              color: $blue;
            }

            &:hover {
              color: $blue;
            }

            &.one {
              margin-left: 60px;
            }
          }
        }
      }
    }

  }
</style>