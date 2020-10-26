<template>
  <div
    class="infinite"
    ref="container"
    :style="{height: height}"
  >
    <div
      class="inner"
      ref="inner"
    >
      <!-- 列表标题 -->
      <slot name="title"></slot>
      <!-- 这里放列表 -->
      <slot></slot>
      <!-- 加载中的动画 -->
      <slot
        name="loading"
        v-if="loading"
      ></slot>
      <!-- 加载完成的动画 -->
      <slot
        name="nomore"
        v-if="nomore"
      ></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "infinite-scroll",
  props: {
    height: {
      type: String,
      default: "100%",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    nomore: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      containerHeight: 0,
      innerHeight: 0,
    };
  },
  created() {},
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    this.innerHeight = this.$refs.inner.offsetHeight;
    this.$refs.container.addEventListener("scroll", this.initScroll);
  },
  methods: {
    initScroll(e) {
      if (this.loading || this.nomore) return;
      this.innerHeight = this.$refs.inner.offsetHeight;
      let scrollTop = e.target.scrollTop;
      if (scrollTop + this.containerHeight >= this.innerHeight) {
        console.log("-----------------触底了-------------");
        this.$emit("loadBottom");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.infinite {
  width: 100%;
  background-color: skyblue;
  overflow: auto;
  -webkit-overflow-scrolling: touch; // 解决iOS滚动问题
}
</style>