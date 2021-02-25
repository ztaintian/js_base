// var ajax = function (url) {
//   return new Promise((resolve, reject) => {
//     var http = new XMLHttpRequest()
//     http.open('GET', url)
//     http.onreadystatechange = function () {
//       if (this.readyState != 4) {
//         return
//       }
//       if (this.status === 200) {
//         resolve(this.response)
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//   })
// }
// ajax().then((response) => {
//   console.log(response)
// })
// 封装axios请求
import axios from 'axios'
import config from '@/config'
import errorHandle from './errorHandle'
const CancelToken = axios.CancelToken

class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
    this.pending = {}
  }
  // 获取预设的配置
  getInsideConfig() {
    return {
      baseURL: this.baseURL,
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      timeout: 10000,
      withCredentials: false // 跨域时是否使用凭证，默认false
    }
  }
  // 取请求url、method、params、data等组成key，标识这次请求
  getPendingKey(config) {
    return [
      config.url,
      config.method,
      JSON.stringify(config.params),
      JSON.stringify(config.data)
    ].join('&')
  }
  // 移除请求pending
  removePending(key, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }
  // 拦截处理
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use(
      config => {
        // 1、取请求标识key
        // 2、移除上一次该请求标识（如果有，则调用cancelToken取消上次请求）
        // 3、给这次请求增加cancelToken备用（如果后续有重复请求则调用）
        const key = this.getPendingKey(config)
        this.removePending(key, true)
        config.cancelToken = new CancelToken(cancel => {
          this.pending[key] = cancel
        })
        return config
      },
      error => {
        // 对请求错误做些什么
        errorHandle(error)
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      response => {
        // 请求返回结果，移除pending
        const key = this.getPendingKey(response.config)
        this.removePending(key)
        if (response.status === 200) {
          return Promise.resolve(response.data)
        } else {
          return Promise.reject(response)
        }
      },
      error => {
        // 对响应错误做些什么
        errorHandle(error)
        return Promise.reject(error)
      }
    )
  }
  // 发送请求
  request(config) {
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), config)
    this.interceptors(instance)
    return instance(newOptions)
  }

  // 语法糖，get请求
  get(url, config) {
    const options = Object.assign(
      {
        url,
        method: 'get'
      },
      config
    )
    return this.request(options)
  }
  // 语法糖，post请求
  post(url, data, config) {
    const options = Object.assign(
      {
        url,
        data,
        method: 'post'
      },
      config
    )
    return this.request(options)
  }
  // 语法糖，put请求
  put(url, data, config) {
    const options = Object.assign(
      {
        url,
        data,
        method: 'put'
      },
      config
    )
    return this.request(options)
  }
  // 语法糖，delete请求
  delete(url, config) {
    const options = Object.assign(
      {
        url,
        method: 'delete'
      },
      config
    )
    return this.request(options)
  }
}

HttpRequest.prototype.all = axios.all
HttpRequest.prototype.spread = axios.spread

export default new HttpRequest(config.baseURL)


