function curry(protocol) {
  return function (hostname, pathname) {
    return `${protocol}${hostname}${pathname}`;
  }
}

const url_curry = curry('https://');

const url1 = url_curry('www.baidu.com', '/hasa');
const url2 = url_curry('www.zhihu.com', '/saandsa');
const url3 = url_curry('www.segmentfault.com', '/hasak');

console.log(url1, url2, url3)