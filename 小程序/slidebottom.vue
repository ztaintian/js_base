<!-- 从下往上弹出框 底部滑动-->

<template>
  <view
    :class="{
      antbottomUp: animationFlag && first,
      antbottomDown: !animationFlag && first,
      'slide-bottom': true,
    }"
    @touchstart="touchstart"
    :animation="animationData"
    @touchend="touchend"
  >
    <div class="line"></div>
    <p>dadad</p>
    <p>dadad</p>
    <p>dadad</p>
    <p>dadad</p>
    <p>dadad</p>
  </view>
</template>

<script>
export default {
  name: "slidebottom",
  props: {},
  computed: {},
  data() {
    return {
      first: false,
      height: "126rpx",
      movestyle: {},
      startY: 0,
      moveY: 0,
      animationData: {},
      animation: "",
      animationFlag: false,
    };
  },
  created() {
    var animation = uni.createAnimation({
      duration: 1000,
      timingFunction: "ease",
    });

    this.animation = animation;

    this.animationData = animation.export();

    // setTimeout(
    //   function () {
    //     this.animationData = animation.export();
    //   }.bind(this),
    //   1000
    // );
  },
  methods: {
    close() {
      this.openPopup = false;
      this.$emit("change", true);
    },
    touchstart(e) {
      // this.startY = e.touches[0].clientY;
      this.startY = e.changedTouches[0].clientY;
      this.movestyle = {
        transition: "null",
      };
    },

    touchend(e) {
      // let newStyle = {
      //   ...this.movestyle,
      //   ...{ transition: "transform .3s ease" },
      // };
      console.log("ewww", e.changedTouches[0].clientY);
      if (e.changedTouches[0].clientY - this.startY > 30) {
        console.log("下拉");
        this.first = true;
        this.animationFlag = false;
      }
      if (e.changedTouches[0].clientY - this.startY < -30) {
        console.log("上拉");
        // this.height = "100%";
        this.first = true;
        this.animationFlag = true;
      }
    },
    doNothing() {
      return false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.slide-bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 126rpx;
  background: #FFFFFF;
  box-shadow: 0rpx -4rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
  border-radius: 40rpx 40rpx 0rpx 0rpx;
  color: #000;
  ios-safe();
}

.line {
  width: 72rpx;
  height: 10rpx;
  margin: 16rpx auto 0;
  background: #D8D9DA;
  border-radius: 6rpx;
}

.antbottomUp {
  animation: upAtn 1s forwards;
  box-sizing: border-box;
}

.antbottomDown {
  animation: downAtn 1s forwards;
}

@keyframes upAtn {
  100% {
    height: 100%;
  }
}

@keyframes downAtn {
  from {
    height: 100%;
  }

  to {
    height: 126rpx;
  }
}
</style>