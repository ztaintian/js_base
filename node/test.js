var p = new Promise((resolve, reject) => {
  console.log('Promise - 初始化');
  resolve('Promise - 结果')
})

function fn1() {
  console.log('fn1 - 执行');
}

function fn2() {
  console.log('fn2 - 开始执行');
  setTimeout(() => {
      console.log('setTimeout - 执行');
  })
  fn1();
  console.log('fn2 - 再次执行');
  p.then(res => {
      console.log('Promise - 第一个then ：' + res);
  }).then(() => {
      console.log('Promise - 第二个then');
  })
}

fn2();

