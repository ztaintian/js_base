class LoginFrame {
  static instance = null
  constructor(state) {
    this.state = state
  }
  show() {
    if (this.state === 'show') {
      console.log('登录框已显示')
      return
    }
    this.state = 'show'
    console.log('登录框展示成功')
  }
  hide() {
    if (this.state === 'hide') {
      console.log('登录框已隐藏')
      return
    }
    this.state = 'hide'
    console.log('登录框隐藏成功')
  }
  // 通过静态方法获取静态属性instance上是否存在实例，如果没有创建一个并返回，反之直接返回已有的实例
  static getInstance(state) {
    if (!this.instance) {
      this.instance = new LoginFrame(state)
    }
    return this.instance
  }
}
const p1 = LoginFrame.getInstance('show')
const p2 = LoginFrame.getInstance('hide')
p1.show()
p1.hide()
