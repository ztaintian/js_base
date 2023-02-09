<template>
  <div>
    <canvas canvas-id="share" class="canvas-ctnr"></canvas>
    <view id="my-canvas" class="cavans-html">
      <img
        class="bg my_draw_canvas"
        data-type="image"
        src="../../static/post-bg.png"
        data-url="../../static/post-bg.png"
        alt=""
      />
      <div class="content my_draw_canvas">
        <div class="my_draw_canvas" style="overflow: hidden">
          <img
            class="img-logo1 my_draw_canvas"
            data-type="image"
            src="../../static/post-logo1.png"
            data-url="../../static/post-logo1.png"
            alt=""
          />
        </div>
        <div class="quot-box my_draw_canvas">
          <!-- <p class="quot my_draw_canvas" data-type="text" data-text="＂">＂</p> -->
          <p
            class="tip my_draw_canvas"
            data-type="text"
            data-text="能将热爱的事情作为职业，"
          >
            能将热爱的事情作为职业，
          </p>
          <p
            class="tip my_draw_canvas"
            data-type="text"
            data-text="大概就是人生中理想中的样子"
          >
            大概就是人生中理想中的样子
          </p>
          <!-- <p class="quot quot2 my_draw_canvas" data-type="text" data-text="＂">＂</p> -->
        </div>
        <div class="postion-box my_draw_canvas">
          <img
            class="img-logo2 my_draw_canvas"
            data-type="image"
            src="../../static/post-logo2.png"
            data-url="../../static/post-logo2.png"
          />
          <p
            class="my_draw_canvas title"
            data-type="text"
            data-text="-销售BD"
          >
            -销售BD
          </p>
          <p
            data-type="text"
            data-text="15000-18000元/月"
            class="my_draw_canvas salary"
          >
            15000-18000元/月
          </p>
          <p
            data-type="text"
            data-text="北京·顺义区·3-5年·本科"
            class="my_draw_canvas city-year"
          >
            北京·顺义区·3-5年·本科
          </p>
          <p data-type="text" class="my_draw_canvas welfare">
            <span data-type="text" data-text="福利待遇好" class="my_draw_canvas"
              >福利待遇好</span
            >
            <span data-type="text" data-text="央企平台" class="my_draw_canvas"
              >央企平台</span
            >
          </p>
          <p class="duty">
            1、负责移动端及网页端产品设计，制定产品整体流程框架和规范；
            2、能基于产品业务要求分析用户，独立完成产品流能基于产品业务要求分析用户，独立完成产品流
          </p>
        </div>
      </div>
    </view>
    <div class="img">
      <img src="" alt="" />
    </div>
    <div class="share">
      <p>
        <img src="../../static/wechart.png" alt="" />
        <span>微信好友</span>
      </p>
      <p>
        <img src="../../static/friend.png" alt="" />
        <span>分享朋友圈</span>
      </p>
      <p>
        <img src="../../static/poster.png" alt="" />
        <span>保存相册</span>
      </p>
    </div>
    <div class="btn">取消</div>
  </div>
</template>

<script>
// "wxml2canvas": "^1.0.1"
import Wxml2Canvas from "wxml2canvas";
import bgImg from "@/static/post-bg.png";

export default {
  data() {
    return {
      bgImg: bgImg,
      width: undefined,
      height: undefined,
      imgUrl: "",
    };
  },
  mounted() {
    this.drawMyCanvas();
  },
  methods: {
    drawMyCanvas() {
      wx.showLoading();
      const that = this;
      wx.createSelectorQuery()
        .in(this)
        .select("#my-canvas")
        .fields(
          {
            // 选择需要生成canvas的范围
            size: true,
            scrollOffset: true,
          },
          (data) => {
            console.log("data", data);
            let width = data.width;
            let height = data.height;
            // that.setData({
            //   width,
            //   height
            // })
            that.width = width;
            that.height = height;
            setTimeout(() => {
              that.startDraw();
            }, 1500);
          }
        )
        .exec();
    },
    startDraw() {
      let that = this;

      // 创建wxml2canvas对象
      let drawMyImage = new Wxml2Canvas(
        {
          element: "share", // canvas的id,
          obj: that, // 传入当前组件的this
          width: that.width * 2,
          height: that.height * 2,
          background: "#f00", // 生成图片的背景色
          progress(percent) {
            // 进度
            // console.log(percent);
          },
          finish(url) {
            // 生成的图片
            wx.hideLoading();
            console.log("finish", url);
            that.imgUrl = url;
            // that.savePoster(url)
          },
          error(res) {
            // 失败原因
            console.log(res);
            wx.hideLoading();
          },
        },
        this
      );
      let data = {
        // 获取wxml数据
        list: [
          {
            type: "wxml",
            class: ".cavans-html .my_draw_canvas", // my_canvas要绘制的wxml元素根类名， my_draw_canvas单个元素的类名（所有要绘制的单个元素都要添加该类名）
            limit: ".cavans-html", // 要绘制的wxml元素根类名
            x: 0,
            y: 0,
          },
        ],
      };
      // 绘制canvas
      drawMyImage.draw(data, this);
    },
    savePoster() {
      const that = this;
      wx.saveImageToPhotosAlbum({
        filePath: that.imgUrl,
        success: function () {
          wx.showToast({
            title: "保存成功",
            icon: "none",
            duration: 1500,
          });
        },
        fail(err) {
          if (
            err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" ||
            err.errMsg === "saveImageToPhotosAlbum:fail auth deny" ||
            err.errMsg === "saveImageToPhotosAlbum:fail authorize no response"
          ) {
            wx.showModal({
              title: "提示",
              content: "需要您授权保存相册",
              showCancel: false,
              success: (modalSuccess) => {
                wx.openSetting({
                  success(settingdata) {
                    if (settingdata.authSetting["scope.writePhotosAlbum"]) {
                      wx.saveImageToPhotosAlbum({
                        filePath: that.imgUrl,
                        success: function () {
                          wx.showToast({
                            title: "保存成功",
                            icon: "success",
                            duration: 2000,
                          });
                        },
                      });
                    } else {
                      wx.showToast({
                        title: "授权失败，请稍后重新获取",
                        icon: "none",
                        duration: 1500,
                      });
                    }
                  },
                });
              },
            });
          }
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.canvas-ctnr {
  width: 750rpx;
  height: 1334rpx;
}
.postion-box {
  width: 590rpx;
  position: relative;
  height: 634rpx;
  background: #ffffff;
  box-shadow: 0rpx 10rpx 10rpx -8rpx rgba(0, 0, 0, 0.05);
  border-radius: 20rpx;
  margin: 0 auto;
  padding: 0 40rpx;
  .title {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #172340;
    line-height: 50rpx;
    padding-top: 40rpx;
    margin: 40rpx 0 12rpx;
  }
  .salary {
    height: 50rpx;
    font-size: 36rpx;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #238ce7;
    line-height: 50rpx;
  }
  .city-year {
    height: 34rpx;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(23, 35, 64, 0.65);
    line-height: 34rpx;
    margin: 12rpx 0 20rpx;
  }
  .img-logo2 {
    width: 84rpx;
    height: 84rpx;
    top: 44rpx;
    right: 40rpx;
    position: absolute;
  }
  .welfare {
    span {
      display: inline-block;
      height: 40rpx;
      padding: 0 12rpx;
      background: #f7f8f9;
      border-radius: 4rpx;
      margin-right: 12rpx;
      font-size: 20rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(23, 35, 64, 0.65);
      line-height: 40rpx;
    }
  }
  .duty {
    margin-top: 34rpx;
    height: 160rpx;
    font-size: 26rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(23, 35, 64, 0.65);
    line-height: 40rpx;
  }
}
.cavans-html {
  width: 750rpx;
  height: 1624rpx;
  position: relative;
  // background: url(../../static/post-bg.png) no-repeat center;
  .ctnr {
    width: 100%;
    height: 500rpx;
    display: flex;
  }
  .bg {
    width: 750rpx;
    height: 1624rpx;
    position: absolute;
  }
  .content {
    width: 750rpx;
    height: 1624rpx;
    position: absolute;
    z-index: 9999;
  }
  .img-logo1 {
    width: 208rpx;
    height: 40rpx;
    float: right;
    margin: 60rpx 40rpx 0 0;
  }
  .quot-box {
    width: 572rpx;
    margin-left: 40rpx;
    margin-top: 120rpx;
    .quot {
      width: 28rpx;
      height: 68rpx;
      font-size: 44rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 68rpx;
    }
    .quot2 {
      float: right;
      margin-top: 28rpx;
      height: 44rpx;
    }

    .tip {
      height: 136rpx;
      font-size: 44rpx;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #ffffff;
      line-height: 68rpx;
    }
  }
}
.btn {
  margin-top: 50rpx;
  height: 100rpx;
  background: #f9fafb;
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  text-align: center;
  color: rgba(23, 35, 64, 0.45);
  line-height: 100rpx;
}

.img {
  width: 540rpx;
  height: 962rpx;
  background: #d8d8d8;
  border-radius: 18rpx;
  margin: 48rpx auto 64rpx;
}

.share {
  display: flex;
  padding: 0 82rpx;
  justify-content: space-between;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100rpx;
      height: 100rpx;
    }

    span {
      margin-top: 24rpx;
      height: 36rpx;
      font-size: 26rpx;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(23, 35, 64, 0.65);
      line-height: 36rpx;
    }
  }
}
</style>




// uniapp写法
export default {
    data(){
        绘制对象元素的宽高
        wxmlCanvas: {},
        // canvas元素的style值
        canvasStyle: ""
    }
    onLoad() {
        this.$nextTick(() => {
          setTimeout(async () => {
            // 获取绘制元素的宽高
            const htmlWidthHeight = await this.getWidthHeight('#wxml-canvas')
            Object.assign(this.wxmlCanvas, {
              width: Math.floor(htmlWidthHeight.width),
              height: Math.floor(htmlWidthHeight.height)
            })
            // 设置canvas元素的宽高
            this.canvasStyle = `width: ${htmlWidthHeight.width}px;height: ${htmlWidthHeight.height}px`
            setTimeout(() => {
              this.draw()
            }, 100)
          }, 300)
        })
    },
    methods: {
        // 获取节点的宽高
        getWidthHeight(selector) {
          return new Promise((resolve) => {
            const query = uni.createSelectorQuery().in(this)
            query
              .select(selector)
              .boundingClientRect((data) => {
                return resolve(data)
              })
              .exec()
          })
        },
        draw() {
          let that = this
          let data = {
            //直接获取wxml数据
            list: [
              {
                type: 'wxml',
                // 第一个参数是绘制对象的根元素的类名，第二个参数是需要绘制节点的类名
                class: '.canvas_ele_limit, .draw_canvas',
                limit: '.canvas_ele_limit',// 绘制对象的根元素的类名
                x: 0,
                y: 0
              }
            ]
          }
           //创建wxml2canvas对象
          let drawImage = new Wxml2Canvas(
            {
              element: 'canvasId', // canvas节点的id,
              obj: that, // 在组件中使用时，需要传入当前组件的this
              width: that.wxmlCanvas.width, // 宽高
              height: that.wxmlCanvas.height, // 这里的高度要动态获取
              background: '#fff', // 默认背景色
              progress() {
                // 绘制进度
              },
              async finish(tempFilePath) {
                console.log(tempFilePath)

              },
              error(err) {
                console.log(err, 'err')
              }
            },
            that
          )
          //传入数据，画制canvas图片
          setTimeout(() => {
            drawImage.draw(data, that)
          }, 30)
        },
    }
}
