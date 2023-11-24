class WPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    executor(this._resolve.bind(this), this._reject.bind(this))
  }
  _resolve(value) {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = value;
    }
  }
  _reject(reason) {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.reason = reason;
    }
  }
  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
      onRejected(this.reason)
    }
  }
}

var aa = new WPromise((resolve, reject) => {
  resolve('aaa')
});
aa.then((cc) => {
  console.log(cc)
})


class myPromise {
  constructor(executor) {
    this.reason = '';
    this.value = '';
    this.state = 'pending';
    executor(this._resolve.bind(this), this._reject.bind(this));
  }
  _resolve(value) {
    if (this.state === 'pending') {
      this.state = 'resolve';
      this.value = value;
    }
  }
  _reject(reason) {
    if (this.state === 'reject') {
      this.state = 'reject';
      this.value = reason;
    }
  }
  then(resolveFn, rejectFn) {
    if (this.state === 'resolve') {
      resolveFn && resolveFn(this.value)
    }
    if (this.state === 'reject') {
      rejectFn && rejectFn(this.value);
    }
  }
}