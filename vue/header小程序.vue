<template>
  <div class="header-bar" :style="{ paddingTop: statusBarHeight + 'px', height: navHeight + 'px', background: flag==1?'#eee':'' }">
    <div class="back" v-if="isShow">
      <span  @click="jump('systemMessage')" class="iconmessage iconfont icon"></span>
      <p class="dot-red" v-if="redDot"></p>
    </div>
    <h1 class="titles">{{text}}</h1>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    text: String,
    flag: 0
  },
  data () {
    return {
      isShow: false,
      redDot: false,
      pixelRatio: this.getSysInfo().pixelRatio, // 系统像素比
      statusBarHeight: this.getSysInfo().statusBarHeight, // 系统状态栏高度
      navHeight: '', // 顶部导航栏高度
      headAreaHeight: this.getSysInfo().pixelRatio * 35 / this.getSysInfo().pixelRatio, // 顶部内容区域高度
      headAreaMarTop: '', // 顶部内容区域外边距
      headleftBoxW: '', // 顶部内容左侧区域外边距
      headRightBoxW: '', // 顶部内容右侧区域外边距
      containersHeight: '', // 页面内容区域高度
      isIos: false
    }
  },
  watch: {
    flag () {
      console.log('flag', this.flag)
    }
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'openId'
    ])
  },
  onShow () {
    this.GetRegStep()
  },
  mounted () {
    this.GetRegStep()
    this.init()
  },
  methods: {
    GetRegStep () { // 是否个人信息填写完毕
      this.$http.post('/Member/GetRegStep', {
        openId: this.openId
      }).then((response) => {
        this.isShow = true
        this.GetUserHasUnreadMessage()
      }).catch(() => {
        this.isShow = false
      })
    },
    GetUserHasUnreadMessage () { // 是否存在未读短信
      this.$http.post('/Message/GetUserHasUnreadMessage', {
        openId: this.openId
      }).then((response) => {
        if (response.isSuccess) {
          this.redDot = response.data
        }
      })
    },
    jump (url) {
      wx.navigateTo({
        url: `/pages/my/${url}/main`
      })
    },
    getSysInfo () {
      const res = wx.getSystemInfoSync()
      return res
    },
    init () {
      if (this.getSysInfo().system.toLowerCase().indexOf('ios') > -1) {
        this.isIos = true
        this.navHeight = this.pixelRatio * 40 / this.pixelRatio
        this.headAreaMarTop = this.pixelRatio * 0.5 / this.pixelRatio
        this.headleftBoxW = this.getSysInfo().windowWidth - this.pixelRatio * 100 / this.pixelRatio
        this.headRightBoxW = this.pixelRatio * 100 / this.pixelRatio
        this.containersHeight = this.getSysInfo().windowHeight - (this.statusBarHeight + this.pixelRatio * 40 / this.pixelRatio)
      } else {
        this.isIos = false
        this.navHeight = this.pixelRatio * 45 / this.pixelRatio
        this.headAreaMarTop = this.pixelRatio * 2.5 / this.pixelRatio
        this.headleftBoxW = this.getSysInfo().windowWidth - this.pixelRatio * 110 / this.pixelRatio
        this.headRightBoxW = this.pixelRatio * 110 / this.pixelRatio
        this.containersHeight = this.getSysInfo().windowHeight - (this.statusBarHeight + this.pixelRatio * 45 / this.pixelRatio)
      }
      this.$emit('barHeight', this.statusBarHeight + this.navHeight)
    }
  }
}
</script>
<style lang="stylus" scoped>
.header-bar{
  background #fff
  color:#000;
  position:fixed;
  left:0;
  top:0;
  width:100%;
  z-index:999;
  .back{
    float:left;
    position:relative;
    top:20rpx;
    left:30rpx;
    transform:scaleX(-1);
    .iconmessage {
      font-size 28rpx
    }
    .dot-red{
      position absolute
      top 3rpx
      right 28rpx
      background #FC4646
      border-radius 50%
      height 15rpx
      width 15rpx
    }
  }
  .titles{
    text-align:center;
    width:80%;
    margin:0 auto;
    padding-top:20rpx;
    font-weight: bold; 
    font-size:32rpx;
  }
}
</style>
