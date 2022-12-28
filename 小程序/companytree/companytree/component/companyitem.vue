<template>
  <div>
    <div
      @click="open"
      :style="openShow ? 'border-bottom: 2rpx solid #EEEEEE;' : ''"
      class="company-name"
    >
      <span :class="cssShow ? 'active-select' : ''">{{ localData.name }}</span>
      <sapn :class="[openShow ? 'aactvie' : '', 'iconfont']">&#xe685;</sapn>
    </div>
    <div
      :class="'company-item' + localData.level"
      v-if="localData.child && localData.child.length > 0 && openShow"
    >
      <companyitem
        :class="'company-name-cpt' + item.level"
        v-for="item in localData.child"
        :localData="item"
        :key="item.name"
      ></companyitem>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "companyitem",
  props: {
    localData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      cssShow: false,
      openShow: false,
    };
  },
  computed: {
    ...mapGetters(["tempTemplate"]),
  },
  methods: {
    ...mapActions(["setTemptemplate"]),
    open() {
      uni.$emit('getCss',this.localData)
      let tempShow = this.openShow;
      let component = uni.createSelectorQuery().in(this)._component.$parent
        ? uni.createSelectorQuery().in(this)._component.$parent.$children
        : "";
        uni.createSelectorQuery().in(this)._component.$parent.cssShow = false;
      if (component && component.length > 0) {
        component.map((item) => {
          item.openShow = false;
          item.cssShow = false;
        });
      }
      this.cssShow = true;
      this.openShow = !tempShow;
      console.log("this", this);
      
    },
  },
};
</script>

<style lang="stylus" scoped>
.company-name {
  display: flex;
  justify-content: space-between;
  padding: 0 40rpx;
  height: 112rpx;
  font-size: 36rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #172340;
  box-sizing: border-box;
  line-height: 112rpx;

  .iconfont {
    color: #D1D4DB;
    transform: rotate(180deg);
  }

  .aactvie {
    transform: rotate(0deg);
  }
}



.company-name-cpt2 .company-name {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  color: rgba(23, 35, 64, 0.85);
}

.company-name-cpt3 .company-name {
  font-size: 32rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 500;
  color: rgba(23, 35, 64, 0.85);
}

.company-name-cpt4 .company-name {
  background: #F5F6F7;
  font-size: 30rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 400;
  color: rgba(23, 35, 64, 0.65);
}
.active-select {
  font-weight: 500;
  color: #2652A0;
}
</style>