function Promi(executor) {
  let _this = this;
  _this.$$status = 'pending';
  _this.failCallBack = undefined;
  _this.successCallback = undefined;
  _this.error = undefined;
  setTimeout(() => {
    try {
      executor(_this.onResolve.bind(_this),_this.onReject.bind(_this))
    } catch (e) {
      _this.error = e;
      if (_this.callBackDefer && _this.callBackDefer.fail) {
        _this.callBackDefer.fail(e)
      }
    }
  })
}