class Wpromise {
  static PENDINF = "pending";
  static REJECT = "reject";
  static FULFILLED = "fulfilled";
  constructor(fn) {
    this.state = Wpromise.PENDINF;
    this.result = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      fn(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  _resolve(val) {
    if (this.state === Wpromise.PENDINF) {
      setTimeout(() => {
        this.state = Wpromise.FULFILLED;
        this.result = val;
        this.onFulfilledCallbacks.forEach(callback => {
          callback(val)
        })  
      })
    }
  }
  _reject(reason) {
    if (this.state === Wpromise.PENDINF) {
      setTimeout(() => {
        this.state = Wpromise.REJECT;
        this.result = reason;
        this.onRejectedCallbacks.forEach((callback) => {
          callback(reason)
        })
      }) 
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    if (this.state === Wpromise.PENDINF) {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }
    if (this.state === Wpromise.FULFILLED) {
      setImmediate(() => {
        onFulfilled(this.result);
      });
    }
    if (this.state === Wpromise.REJECT) {
      setImmediate(() => {
        onRejected(this.result);
      });
    }
  }
}
console.log(1);
let promise1 = new Wpromise((resolve, reject) => {
    resolve("不成功");
    console.log(4);
});
promise1.then(
  (result) => {
    console.log("fulfiiled:", result);
    return 44
  },
  (reason) => {
    console.log("rejected:", reason);
  }
).then((result) => {
  console.log()
});
console.log(3);
