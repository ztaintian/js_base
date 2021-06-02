import wx from 'weixin-js-sdk'; //微信sdk依赖
import Base from '../../assets/js/baseFun.js';
const jsApiList = ['updateAppMessageShareData', 'updateTimelineShareData'];
//要用到微信API
function getJSSDK(url, dataForWeixin) {
  // 调用后台接口换取参数
  Base.baseAjax({
    url: "/api/wechat/getShareJsApiParams?url=" + url,
    showLoading: true,
    type: "post",
    data: {},
    success: function (res) {
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appId, // 必填，公众号的唯一标识
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.noncestr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名
        jsApiList: jsApiList // 必填，需要使用的JS接口列表
      })
      wx.ready(function () {
        //分享给朋友
        wx.updateAppMessageShareData({
          title: dataForWeixin.title,
          link: dataForWeixin.linkurl,
          desc: dataForWeixin.desc,
          imgUrl: dataForWeixin.img,
          trigger: function trigger(res) {
            // alert('用户点击分享到朋友');
          },
          success: function (res) {
            // 用户确认分享后执行的回调函数
            // logUtil.printLog("分享给朋友成功返回的信息为:", res);
          },
          cancel: function (res) {
            // 用户取消分享后执行的回调函数
            // logUtil.printLog("取消分享给朋友返回的信息为:", res);
          },
          fail: function fail(res) {
            console.log(JSON.stringify(res));
          }
        });
        // 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
        wx.updateTimelineShareData({
          title: dataForWeixin.title,
          link: dataForWeixin.linkurl,
          desc: dataForWeixin.desc,
          imgUrl: dataForWeixin.img,
          trigger: function trigger(res) {
            // alert('用户点击分享到朋友圈');
          },
          success: function success(res) {
            //alert('已分享');
          },
          cancel: function cancel(res) {
            //alert('已取消');
          },
          fail: function fail(res) {
            console.log(JSON.stringify(res));
          }
        });
      })
      wx.error(function (res) {
        console.log(JSON.stringify(res) + "微信验证失败");
      });
    }
  });
}
export default {
  // 获取JSSDK
  getJSSDK: getJSSDK
}
