function ajaxA(success) {
  setTimeout(function () {
    console.log("AAAAAAAAAA");
    success();
  }, 3000);
}

function ajaxB(success) {
  setTimeout(function () {
    console.log("BBBBBBBBBB");
    success();
  }, 2000);
}

function ajaxC(success) {
  setTimeout(function () {
    console.log("CCCCCCCCCC");
    success();
  }, 1000);
}

function ajaxD(success) {
  setTimeout(function () {
    console.log("DDDDDDDDD");
    success();
  }, 2000);
} //模拟异步编程效果
function MyPromise(func) {
  var self = this;
  var count = 0;
  this.cbklist = [];
  this.then = function (callback) {
    console.log('callback', callback)
    this.cbklist.push(callback);
    return this;
  }
  this.success = function () {
    console.log('count', count, self.cbklist[count++])
    if (count == self.cbklist.length) return;
    self.cbklist[count++](self.success);
  }
  // setTimeout(function () {
    func(self.success);
  // }, 0);
}
//强制程序按then的顺序执行
new MyPromise(ajaxA).then(ajaxB).then(ajaxC).then(ajaxD).then(() => {
  console.log('dadada')
});