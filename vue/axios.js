/**
 * 拦截器
 *
 * @param {Axios} instance
 * @memberof HttpRequest
 */
interceptors(instance) {
  // 添加请求拦截器
  instance.interceptors.request.use((config) => {
    // 对请求进行拦截
    // 如果post请求格式是application/x-www-form-urlencoded，则序列化数据
    if (
      config.headers.post['Content-Type'].startsWith('application/x-www-form-urlencoded') &&
      config.method === 'post'
    ) {
      config.data = qs.stringify(config.data)
    }
    // 处理请求拦截和请求取消两种情况, 默认情况是请求取消,即取消已经发出去的请求
    // 传入第二个参数为false为拦截本次请求，等上一次请求响应后再发送
    config = this.handleRequestCancel(config)
    // 根据后台的要求可以返回格式化的json
    config.url = `${config.url}?pretty`
    return config
  }, (error) => {
    // 对请求错误做些什么
    errorHandle(error)
    return Promise.reject(error)
  })

  // 响应拦截器
  instance.interceptors.response.use((res) => {
    // 获取本次请求的key
    const manager = this.cancelKeyManager()
    const key = manager.getKey()
    // 清除pending中保存的key,来表明这个请求已经响应
    this.removeRequest(key, false)
    // axios正常响应
    if (res.status === 200) {
      return Promise.resolve(res.data)
    }
    return Promise.reject(res)
  }, (error) => {
    // 对响应错误做点什么
    errorHandle(error)
    return Promise.reject(error)
  })
}