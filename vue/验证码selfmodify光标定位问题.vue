<template>
  <div class="ys-verification">
    <div class="content">
      <input
        type="tel"
        @click="inputLast"
        id="textarea-1"
        maxlength="4"
        @input="numberChange"
        v-model="inputValue"
        class="input"
      />
      <span
        class="span"
        :style="'left:'+index*50+'px'"
        v-for="(item,index) in arrNumber"
        :key="index"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
// 完整组件 直接用
import { XInput } from "vux";
export default {
  components: {
    XInput
  },
  name: "VerificationCodeInput",
  props: {
    amount: {
      type: Number,
      default: 4
    }
  },
  mounted() {
    this.code = new Array(this.amount).fill("");
    this.arrNumber = new Array(this.amount).fill("");
  },
  methods: {
    validateNumber(val) {
      return val.replace(/\D/g, "");
    },
    inputLast() {
      this.setCss();
    },
    setCss() {
      var sr = document.getElementById("textarea-1");
      var len = sr.value.length;
      this.setSelectionRange(sr, len, len); //将光标定位到文本最后
    },
    setSelectionRange(input, selectionStart, selectionEnd) {
      if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
      } else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd("character", selectionEnd);
        range.moveStart("character", selectionStart);
        range.select();
      }
    },

    numberChange() {
      this.arrNumber = new Array(this.amount).fill("");
      this.inputValue = this.inputValue.slice(0, 4);
      this.inputValue = this.validateNumber(this.inputValue);
      this.inputValue.split("").map((item, index) => {
        this.arrNumber[index] = item;
      });
      this.$emit("onCompleted", this.arrNumber.join(""));
    },
    validateNumber(val) {
      // 替换非数字的值为空
      return val.replace(/\D/g, "");
    }
  },
  data() {
    return {
      inputValue: "",
      arrNumber: [],
      temp: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
.ys-verification {
  .content {
    height: 40px;
    width: 200px;
    margin: 20px 0 20px 20px;
    position: relative;

    .input {
      width: 180px;
      opacity: 0;
      position: absolute;
      height: 40px;
      z-index: 999;
      letter-spacing: 43px;
    }

    .span {
      font-size: 18px;
      display: inline-block;
      width: 30px;
      position: absolute;
      text-align: center;
      border-bottom: 1px solid #000;
      height: 40px;
      line-height: 40px;
      margin-right: 20px;
    }
  }

  width: 100%;
  display: flex;
  justify-content: space-around;

  .input-wrapper {
    border-bottom: 1px solid #d6d6d6;
    width: 15%;
    height: 0;
    padding-bottom: 20%;
    position: relative;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: all 0.3s;
      font-size: 7vw;
      color: #333333;
    }
  }

  input:focus {
    border-bottom: 1px solid #666666;
  }
}
</style>
