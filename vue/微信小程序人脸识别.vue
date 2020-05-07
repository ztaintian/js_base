<template>
<!-- 组件可以直接引用使用 -->
  <div class="takephoto">
    <p class="tip">拿起手机，面向手机</p>
    <div class="camera-top">
      <canvas class="progress_bg" canvas-id="canvasProgressbg"></canvas>
      <canvas class="progress_canvas" canvas-id="canvasProgress"></canvas>
      <div class="camera">
        <camera
          id="camera"
          device-position="front"
          bindinitdone="startdrawCanvas"
          flash="off"
          binderror="error"
        >
          <cover-view class="cameraGai">
            <cover-image src="../../static/images/circle.png" class="cover-image"></cover-image>
          </cover-view>
        </camera>
      </div>
    </div>
    <p class="tip2">正在采集脸部信息</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0, // 设置 计数器 初始为0
      countTimer: null, // 设置 定时器 初始为null
      complete: false
    };
  },
  mounted() {
    if (wx.createCameraContext()) {
      this.init();
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: "提示",
        content:
          "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
      });
    }
  },
  methods: {
    init() {
      var that = this;
      wx.authorize({
        scope: "scope.camera",
        success: function(res) {
          that.drawProgressbg();
          that.countInterval();
        },
        fail: function(res) {
          wx.showModal({
            title: "请求授权您的摄像头",
            content:
              "如需正常使用此小程序功能，请您按确定并在设置页面授权用户信息",
            confirmText: "确定",
            success: res => {
              if (res.confirm) {
                wx.openSetting({
                  success: function(res) {
                    console.log("成功");
                    console.log(res);
                    if (res.authSetting["scope.camera"]) {
                      //设置允许获取摄像头
                      console.log("设置允许获取摄像头");
                      wx.showToast({
                        title: "授权成功",
                        icon: "success",
                        duration: 1000
                      });
                    } else {
                      //不允许
                      wx.showToast({
                        title: "授权失败",
                        icon: "none",
                        duration: 1000
                      });
                      // wx.redirectTo({
                      //   url: "addCarInfo/addCarInfo"
                      // });
                    }
                  }
                });
              } else {
                //取消
                wx.showToast({
                  title: "授权失败",
                  icon: "none",
                  duration: 1000
                });
                // wx.redirectTo({
                //   url: "addCarInfo/addCarInfo"
                // });
              }
            }
          });
        }
      });
    },
    getRpx() {
      let rpx = 1;
      wx.getSystemInfo({
        success(res) {
          rpx = res.windowWidth / 375;
        }
      });
      return rpx;
    },
    drawProgressbg() {
      // 使用 wx.createContext 获取绘图上下文 context
      var $width = 120 * this.getRpx();
      var $roundWidth = 5 * this.getRpx();
      var ctx = wx.createCanvasContext("canvasProgressbg");
      ctx.setLineWidth($roundWidth); // 设置圆环的宽度
      ctx.setStrokeStyle("#a9a9a9"); // 设置圆环的颜色
      ctx.setLineCap("round"); // 设置圆环端点的形状
      ctx.beginPath(); //开始一个新的路径
      ctx.arc($width, $width, $width - $roundWidth * 2, 0, 2 * Math.PI, false);
      //设置一个原点(100,100)，半径为90的圆的路径到当前路径
      ctx.stroke(); //对当前路径进行描边
      ctx.draw();
    },
    drawCircle(step) {
      var $width = 120 * this.getRpx();
      var $roundWidth = 5 * this.getRpx();
      var context = wx.createCanvasContext("canvasProgress");
      // 设置渐变
      var gradient = context.createLinearGradient(
        $width * 2 - $roundWidth * 4,
        $width,
        $width,
        $width * 2 - $roundWidth * 4
      );
      gradient.addColorStop("0", "#2661DD");
      gradient.addColorStop("0.5", "#2661DD");
      gradient.addColorStop("1.0", "#2661DD");
      context.setLineWidth($roundWidth);
      context.setStrokeStyle(gradient);
      context.setLineCap("round");
      context.beginPath();
      // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
      context.arc(
        $width,
        $width,
        $width - $roundWidth * 2,
        -Math.PI / 2,
        step * Math.PI - Math.PI / 2,
        false
      );
      context.stroke();
      context.draw();
    },
    countInterval() {
      // 设置倒计时 定时器 每100毫秒执行一次，计数器count+1 ,耗时6秒绘一圈
      this.countTimer = setInterval(() => {
        if (this.count <= 60) {
          /* 绘制彩色圆环进度条
          注意此处 传参 step 取值范围是0到2，
          所以 计数器 最大值 60 对应 2 做处理，计数器count=60的时候step=2
          */
          this.drawCircle(this.count / (60 / 2));
          this.count++;
        } else {
          this.complete = true;
          clearInterval(this.countTimer);
          this.takePhoto();
        }
      }, 100);
    },
    takePhoto() {
      const ctx = wx.createCameraContext();
      ctx.takePhoto({
        quality: "high",
        success: res => {
          console.log(res.tempImagePath);
          wx.showLoading({
            title: "识别中"
          });
          var imgbase64Url = wx
            .getFileSystemManager()
            .readFileSync(res.tempImagePath, "base64");
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
$width = 480rpx;

.progress_bg {
  position: absolute;
  width: $width;
  height: $width;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.takephoto {
  width: 100%;

  .tip {
    text-align: center;
    font-size: 46rpx;
    line-height: 226rpx;
    color: #2661DD;
  }

  .tip2 {
    text-align: center;
    color: #F1934D;
    font-size: 36rpx;
    margin-top: 100rpx;
  }

  .camera-top {
    // position: relative;
    margin: 0 auto;
    width: $width;
  }
}

.progress_canvas {
  width: $width;
  height: $width;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.takephoto .camera {
  // position: relative;
  width: 100%;
  display: flex;
  width: $width;
  height: $width;
  // position: absolute;
  align-items: center;
  justify-content: center;
}

.takephoto camera {
  width: $width;
  height: $width;
  // position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -99;
}
</style>