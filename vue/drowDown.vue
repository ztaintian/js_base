<template>
  <div class="drop-down">
    <van-field
      v-model="searchValue"
      required
      clearable
      @blur="blurInput"
      @focus="focusInput"
      label="籍贯"
    />
    <div class="list-module" v-show="listShow">
      <p v-for="(item, index) in datalist" @click="appClick(item)" :key="index">
        <span class="list-item-text">{{ item.title }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Field } from "vant";
import { cityData } from "@/common/utils/cityData.js";
export default {
  components: {
    "van-field": Field,
  },
  data() {
    return {
      listShow: false,
      searchValue: "",
      _datalist: cityData,
      datalist: cityData,
    };
  },
  watch: {
    searchValue(value, oldValue) {
      this.datalist = this.$data._datalist.filter((item, index, arr) => {
        return item.title.indexOf(this.searchValue) != -1;
      });
    },
  },
  props: {
    required: {
      // 用于外部控制组件的显示/隐藏
      type: Boolean,
      default: true,
    },
    itemlist: Array,
    placeholder: String,
    nodatatext: String,
  },
  methods: {
    blurInput() {
      setTimeout(() => {
        this.listShow = false;
      }, 300);
    },
    focusInput() {
      this.listShow = true;
    },
    appClick(data) {
      this.searchValue = data.title;
      this.listShow = false;
      this.$emit("item-click", data);
    },
  },
  mounted: function () {},
};
</script>

<style lang="stylus">
.drop-down {
  position relative
  .list-module {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    z-index: 999;
    border: 1px solid #e4e7ed;
    box-sizing: border-box;
    background-color: #fff;
    width 240px
    box-sizing: border-box;
    max-height: 100px;
    overflow-y: auto;
    position absolute
    right 0
    p {
      padding 5px
    }
  }
}
</style>
