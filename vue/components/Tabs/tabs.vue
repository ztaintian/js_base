<template>
  <div class="tabs">
    <div class="tabs-bar">
      <!--标签页标题，通过v-for实现循环-->
      <div
        v-for="(item,index) in navList"
        :key="item.name"
        :class="tabCls(item)"
        @click="handleChange(index)"
      >
        {{ item.label }}
      </div>
    </div>
    <div class="tabs-content">
      <!--slot放置pane组件内容-->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ciic-tabs',
  props: {
    value: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Number,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    }
  },
  watch: {
    value: function(val) {
      this.currentValue = val
    },
    currentValue() {
      this.updateStatus()
    }
  },
  methods: {
    tabCls(item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    getTabs() {
    // 获取pane
      return this.$children.filter(function(item) {
        return item.$options.name === 'ciic-pane'
      })
    },
    updateNav() {
    // 获取标题，name,并放置到navList数组中
      this.navList = []
      const _this = this
      this.getTabs().forEach(function(pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index

        })
        if (!pane.name) pane.name = index
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index
          }
        }
      })
      this.updateStatus()
    },
    updateStatus() {
      const tabs = this.getTabs()
      const _this = this
      tabs.forEach(function(tab) {
        const b = tab.name === _this.currentValue
        tab.show = b
        return tab.show
      })
    },
    handleChange(index) {
      const nav = this.navList[index]
      const name = nav.name
      this.currentValue = name
      this.$emit('input', name)
      this.$emit('on-click', name)
    }
  }
}
</script>

<style lang="scss" scoped>
$avtive-bg-color:#258CE7;
$odd-bg-color:rgb(253, 253, 253); // 奇数tab
$even-bg-color:#fff; // 偶数tab
$nomal-font-color:rgba(54, 54, 54, 0.6);//一般字体色
$hover-font-color:#258CE7; //悬浮字体色
$base-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
.tabs{
  .tabs-bar{
    // font-size:0;
    .tabs-tab{
      font-size: 14px;
      font-weight: bold;
      font-family: Microsoft YaHei;
      color: $nomal-font-color;
      display: inline-block;
      box-sizing: border-box;
      width:160px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      position: relative;
      border-radius: 0 10px 0 0;
      transition: .1s;
      box-shadow:0 2px 3px -1px rgba(0, 0, 0, 0.03); //底部阴影
      &:first-child{
        border-radius: 10px 10px 0 0;
        width:156px;
      }
      &:not(:first-child) {
        margin-left:-5px;
        padding-left:5px ;
        &.tabs-tab-active{
          height: 49.4px;// 不知道为什么会有左边底部有一像素左右的线
        }
      }
      &:nth-child(odd){
        background: $odd-bg-color;
        &:after {
          background:$odd-bg-color;
        }
      }
      &:nth-child(even){
        background: $even-bg-color;
        &:after {
          background:$even-bg-color;
        }
      }
      //tab后面的斜边
      &:after {
        content: '';
        box-shadow:
          // 0 1px 3px -1px rgba(0, 0, 0, 0.009), //底部阴影
          2px 0 2px -2px rgba(0, 0, 0, 0.1); //右边阴影
        position: absolute;
        z-index: 1;
        top: 0;
        right: -10px;
        bottom: 0;
        width: 25px;
        transform: skew(20deg);
        border-radius: 0 10px 0 0;
        // height: 99%;
        transition: .1s;
      }
      &:hover{
        color:$hover-font-color;
      }
    }
    .tabs-tab-active{
      color:#fff;
      background: $avtive-bg-color !important;
      box-shadow: none;
      &:after {
        background: $avtive-bg-color !important;
        box-shadow: none;
      }
      &:hover{
        color:#fff;
      }
    }
  }
  .tabs-content{
      overflow: hidden;
      background: #fff;
      border-radius: 0px 10px 10px 10px;
      box-shadow: $base-shadow;
  }
}
</style>
