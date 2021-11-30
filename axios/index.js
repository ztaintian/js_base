import axios from 'axios'
import store from '@/store/index.js'
import userManager from '@/utils/sso'
import { Message } from 'element-ui'
import Vue from 'vue'
import router from '../router'
const requestQuery = {} // 请求队列
// url入队
const inUrlQuery = (url) => {
  if (!Object.keys(requestQuery).length) {
    // 第一个入队
    Vue.$loading.show()
  }
  if (url.startsWith('/')) url = url.slice(1)
  requestQuery[url] = true
}
// url 出队
const outUrlQuery = (url) => {
  if (url.startsWith('/')) url = url.slice(1)
  delete requestQuery[url]
  if (!Object.keys(requestQuery).length) {
    Vue.$loading.hide()
  }
}
// 创建axios实例
var instance = axios.create({
  baseURL: window.baseURL,
})
instance.interceptors.request.use(
  (config) => {
    // Vue.$loading.show()
    if (config.headers['show-loading'] !== false) {
      inUrlQuery(config.url)
    }
    //增加随机数，防止缓存
    if (config.method === 'post') {
      config.data = {
        ...config.data,
        _t: Date.parse(new Date())
      }
    } else if (config.method === 'get') {
      config.params = {
        _t: Math.random(),
        ...config.params
      }
    }
    if (store.state.access_token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers['Authorization'] = 'Bearer ' + store.state.access_token
    }
    // console.log('configconfig',config)
    // 取消请求 白名单
    // var arr = ['/api/identity/organizationMail/add']
    // if (arr.indexOf(config.url) > -1 ) {
    //   const CancelToken = Axios.CancelToken;
    //   return {cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))}
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 处理json文件,统一转为json格式返回
const handleJsonFile = (file) => {
  return new Promise(function(resolve, reject) {
    try {
      var reader = new FileReader()
      reader.addEventListener('loadend', function(e) {
        // 输出字符串 {hello: world}
        const content = e.target.result
        const message = JSON.parse(content) // 错误信息
        resolve(message)
      })
      reader.readAsText(file)
    } catch (error) {
      console.log(error)
      resolve({ code: 'fail', message: '请求错误' })
    }
  })
}

// 处理文件blob格式返回的内容
const handleContentDisposition = (contentDisposition) => {
  const handleName = (name) => {
    try {
      const arr = name.split('=')
      if (arr.length === 2) {
        const name = arr[1]
        if (name.startsWith(`UTF-8''`)) {
          // utf-8解码
          return decodeURI(name.split(`UTF-8''`)[1])
        } else {
          return name
        }
      }
      return false
    } catch (error) {
      console.log(error)
      return false
    }
  }
  return new Promise(function(resolve, reject) {
    try {
      const patt = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/g // 匹配filename
      const matchs = contentDisposition.match(patt)
      for (let i = matchs.length; i > 0; i--) {
        // 从后往前
        const name = handleName(matchs[matchs.length - 1])
        if (name) {
          resolve(name)
          break
        }
      }
      resolve(false)
    } catch (error) {
      resolve(false)
    }
  })
}

// http response 拦截器
instance.interceptors.response.use(
  async(response) => {
    outUrlQuery(response.config.url)

    // 处理blob
    if (response.config.responseType === 'blob') {
      if (response.data.type.includes('application/json')) {
        response.data = await handleJsonFile(response.data)
      } else {
        // filename*=UTF-8''%E9%9B%87%E5%91%98%E4%BF%A1%E6%81%AF%E5%AF%BC%E5%87%BA-20201202195142462.xlsx
        const res = await handleContentDisposition(
          response.headers['content-disposition']
        )
        if (res) {
          response.data.fileName = res
        }
      }
    }
    if (!(['Success'].includes(response.data.code))) {
      response.data.message &&
        Message({
          message: response.data.message,
          type: 'error'
        })
    }
    if (response.data.type && response.data.type.includes('text/html')){
      Message({
        message: '接口返回格式不对',
        type: 'error'
      })
    }
    return response.data
  },
  async error => {
    outUrlQuery(error.config.url)
    // console.log('error.response', error.response.headers)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          try {
            const user = await userManager.getUser()
            if (user) {
              await userManager.signoutRedirect()
            } else {
              await userManager.signinRedirect()
            }
          } catch (error) {
            console.log('error', error)
          }
          break
        case 403:
          // if (error.response.data.error.code === "ShowMessage") {
          //   // 弹错误提示
          //   Message({
          //     message:
          //       (error.response.data && error.response.data.error.message) ||
          //       `error${error.response.status}`,
          //     type: "error",
          //   });
          // } else {
          // 无权限
          router.push('/')
          Message({
            message: `页面无权限`,
            type: 'error'
          })
          // }
          break
        case 400:
          Message({
            message:
              (error.response.data && error.response.data.error.message) ||
              `error${error.response.status}`,
            type: 'error'
          })
          break
        case 404:
          Message({
            message: `error404`,
            type: 'error'
          })
          break
        default:
          console.log('error', error)
          break
      }
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)
export default instance
