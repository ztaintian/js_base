const cachedAsync = function (fn) {
  const cache = Object.create(null);
  return async (str) => {
    const hit = cache[str];
    if (hit) {
      return hit;
    }
    // 只缓存成功的Promise, 失败直接重新请求
    return (cache[str] = await fn(str));
  };
};
const fetch2 = cachedAsync(fetchData);
fetch2(2);
fetch2(2);
fetch2(2);

const cacheAsync = (promiseGenerator, symbol) => {
  const cache = new Map();
  return async (params) => {
    return new Promise((resolve, reject) => {
      // 可以提供键值
      symbol = symbol || params;
      let cacheCfg = cache.get(symbol);
      if (!cacheCfg) {
        cacheCfg = {
          res: null,
          exector: [{ resolve, reject }],
        };
        cache.set(symbol, cacheCfg);
      } else {
        // 命中缓存
        if (cacheCfg.res) {
          return resolve(cacheCfg.res);
        }
        cacheCfg.exector.push({ resolve, reject });
      }

      const { exector } = cacheCfg;

      // 处理并发，在请求还处于pending过程中就发起了相同的请求
      // 拿第一个请求
      if (exector.length === 1) {
        const next = async () => {
          try {
            if (!exector.length) return;
            const response = await promiseGenerator(params);
            // 如果成功了，那么直接resolve掉剩余同样的请求
            while (exector.length) {
              exector.shift().resolve(response); // 清空栈
            }
            // 缓存结果
            cacheCfg.res = response;
          } catch (error) {
            // 如果失败了 那么这个promise的则为reject
            const { reject } = exector.shift();
            reject(error);
            next();
          }
        };
        next();
      }
    });
  };
};
