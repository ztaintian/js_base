function testPlugin() {
  return {
    name: "test-plugin",
    buildStart() {
      if (!this.cache.has("prev")) {
        this.cache.set("prev", "上一次插件执行的结果");
      } else {
        // 第二次执行 rollup 的时候会执行
        console.log(this.cache.get("prev"));
      }
    },
  };
}
let cache;
async function build() {
  const chunks = await rollup.rollup({
    input: "src/main.js",
    plugins: [testPlugin()],
    // 需要传递上次的打包结果
    cache,
  });
  cache = chunks.cache;
}

build().then(() => {
  build();
});
