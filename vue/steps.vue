<template>
  <ul class="steps">
    <li v-for="(item,index) in SetData" :key="item+index">
      <span :class="[Steps>index?'active-num num':'num']">{{index+1}}</span>
      <span :class="[Steps>index?'active-text text':'text']">{{item}}</span>
      <span v-if="index!=2" :class="[Steps>index?'active-line line':'line']"></span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    SetData: Array,
    active: 0
  },
  data() {
    return {
      Steps: 1
    }
  },
  watch: {
    active() {
      this.Steps = Number(this.active) + 1
    }
  }
};
</script>

<style lang="stylus" scoped>
.steps {
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  margin-left: 15%;
}

/* 步骤描述 */
.steps li {
  list-style-type: none;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  width: 32%;
  position: relative;
}

/* 步骤数字 */
.num {
  border: 1px #C0C0C0 solid;
  display: block;
  width: 25px;
  height: @width;
  line-height: @width;
  border-radius: @width;
  font-size: 14px;
  color: #C0C0C0;
  text-align: center;
}

.text {
  width: 80px;
  color: #8D8D8D;
  font-size: 16px;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #E8E8E8;
}

.active-num {
  border: none;
  background-color: #1890FF;
  color: #fff;
}

.active-text {
  font-weight: bold;
  color: #000;
}
</style>
