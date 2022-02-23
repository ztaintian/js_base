const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function Mypromise(executor) {
  var _this = this;
  this.state = PENDING; // 状态
  this.value = undefined;
  this.reason = undefined;

  this.onFulfilled = [];
  this.onRejected = [];
  function resolve(value) {
    if (_this.state === PENDING) {
      _this.state = FULFILLED;
      _this.value = value;
      _this.onFulfilled.forEach(fn => fn(value))
    }
  };
  function reject(reason) {
    if (_this.state === PENDING) {
      _this.state = REJECTED;
      _this.reason = reason;
      _this.onRejected.forEach(fn => fn(reason))
    }
  };
  try {
    executor(resolve, reject);
  } catch (e){
    reject(e)
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === 'function' && onFulfilled(this.value)
  }
  if (this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(this.reason)
  }
};

module.exports = MyPromise;
