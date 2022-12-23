<template>
  <div :class="'aa' + localData.level">
    <div
      @click="open"
      :style="openShow ? 'border-bottom: 2rpx solid #EEEEEE;' : ''"
      class="company-name"
    >
      {{ localData.name }}
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
      openShow: false,
    };
  },
  computed: {
    ...mapGetters(["tempTemplate"]),
  },
  methods: {
    ...mapActions(["setTemptemplate"]),
    open() {
      let tempShow = this.openShow;
      let component = uni.createSelectorQuery().in(this)._component.$parent
        ? uni.createSelectorQuery().in(this)._component.$parent.$children
        : "";
      if (component && component.length > 0) {
        component.map((item) => {
          item.openShow = false;
        });
      }
      this.openShow = !tempShow;
      console.log('this', this)
    },
  },
};
</script>

<style lang="stylus" scoped>
.company-name {
  padding-left: 40rpx;
  height: 112rpx;
  font-size: 36rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #172340;
  line-height: 112rpx;
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
  font-size: 30rpx;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 600;
  color: #2652A0;
}
</style>