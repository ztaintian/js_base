function Person(name) {
  return new Man(name);
}

function Man(name) {
  this.task = [];
  let fn = () => {
    console.log(name);
    this.next();
  };
  this.task.push(fn);
  setTimeout(() => {
    this.next();
  });
  return this;
}
Man.prototype.firstWait = function (time) {
  console.time("firstSleep");
  let that = this;
  let fn = () => {
    setTimeout(() => {
      console.timeEnd("firstSleep");
      that.next();
    }, time);
  };
  this.task.unshift(fn);
  return this;
};
Man.prototype.wait = function (time) {
  console.time("Sleep");
  let that = this;
  let fn = () => {
    setTimeout(() => {
      console.timeEnd("Sleep");
      that.next();
    }, time);
  };
  this.task.push(fn);
  return this;
};
Man.prototype.eat = function (food) {
  let that = this;
  let fn = () => {
    console.log(`eat: ${food}`);
    that.next();
  };
  this.task.push(fn);
  return this;
};
Man.prototype.next = function () {
  let fn = this.task.shift();
  fn && fn();
};
Person("Tony").eat("apple").wait(500);
