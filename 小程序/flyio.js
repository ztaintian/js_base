import Fly from 'flyio/dist/npm/wx'
import Config from '../config/index'
import { hexMD5 } from "@/common/js/md5.js"
const fly = new Fly();
let host = Config.WebApi.url;
let time = Config.ShowTime;
// 添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading()
  request.headers = {
    'X-Tag': 'flyio',
    'content-type': 'application/json',
    'switch': hexMD5(Config.appId)
  }
  if (wx.getStorageSync('access_token')) {
    request.headers['Token'] = wx.getStorageSync('access_token') // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  var lang;
  if (wx.getStorageSync("lang")) {
    lang = wx.getStorageSync("lang") === "zh-CN" ? "zh" : "en";
  } else {
    lang = "zh";
  }
  request.headers['lang'] = lang;
  return request
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading()
    if (response.data && response.data.code != 0) {
      wx.showToast({
        title: response.data.message,
        icon: "none",
        duration: time
      });
    }
    return response.data // 请求成功之后将返回值返回
  },
  (err) => {
    console.log('dada', err)
    // 请求出错，根据返回状态码判断出错原因
    wx.hideLoading()
  }
)

fly.config.baseURL = host

export default fly
