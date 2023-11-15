function resolvePromise(promise, x, resolve, reject) {
  if (x === promise) {
    new Error('x no === promise')
  }
  let called;
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise, y, resolve, reject);
        }, r => {
          if (called) return;
          called = true;
          reject(r)
        });
      } else {
        resolve(x);
      }
    } catch(e) {
      if (called) {
        return;
      }
      called = true;
      reject(e);
    }

  } else {
    resolve(x);
  }
}