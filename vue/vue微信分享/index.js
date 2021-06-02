// https://www.cnblogs.com/hashtang/p/12347071.html
// router.js
router.beforeEach((to, from, next) => {
  let url = window.location.href;
  if (url.includes('?from=')) { // 判断是否携带了 from 参数，这一步灵活变通，只要能判断出是从微信分享链接进来的就 OK
    url = url.replace(/vip.+.#/, 'vip/#'); // 利用正则表达式去掉微信携带的 ?from=singlemessage&isappinstalled=0 这串参数，如果这串参数对于你当前的页面有用处的话，可以重新拼接到你正常的链接后面去
    window.location.href = url; // 重定向到正常链接
  }
})
function weiShare () {
  var url = location.href.split('#')[0];
  var link = location.href.replace(/\?\#/, '#');
  var arrLink = link.split('#');
  let dataForWeixin = {
    title: '【优选名企，职等你来】', //分享标题
    desc: "优选名企，职等你来", //分享内容
    linkurl: arrLink[0]+'?#'+arrLink[1], //分享链接
    img: location.href.split('#')[0]+'static/share.png', //分享内容显示的图片(图片必须是正方形的链接)
  };
  let ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    sdk.getJSSDK(url, dataForWeixin); //传入sdk.js需要的参数
  } else {
    console.log('不是微信浏览器')
  }
}