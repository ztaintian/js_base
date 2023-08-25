const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(executor) {
  var _this = this;
  this.state = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilled = [];
  this.onRejected = [];
  function resolve() {
    if (this.state === PENDING) {
      this.state = PENDING
    }
  }
  function reject() {

  }
  console.log('resolve,reject', resolve, reject)
  executor(resolve, reject)
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  if (this.state === FULFILLED) {
    typeof onFulfilled === 'function' && onFulfilled(this.value)
  }
  if (this.state === REJECTED) {
    typeof onRejected === 'function' && onRejected(this.reason)
  }
}
var aa = new MyPromise((resolve, reject) => {
  console.log('resolve', resolve)
})