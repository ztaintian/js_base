<template>
  <div>
    <!-- <city/> -->
    <div v-for="item in list">222</div>
    <uni-load-more :status="status" :content-text="contentText" />
  </div>
</template>
<script>
import city from "./city";
export default {
  components: {
    city,
  },
  data() {
    return {
      status: "more",
      contentText: {
        contentdown: "查看更多",
        contentrefresh: "加载中",
        contentnomore: "没有更多",
      },
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5, 6, 4, 2, 2, 3, 2, 2],
    };
  },
  onReachBottom() {
    console.log(1111);
		this.status = 'loading'
		setTimeout(() => {
			this.status = 'noMore'
		}, 3000)
  },
};
</script>

<style lang="scss">
div {
  height: 50px;
}
</style>
