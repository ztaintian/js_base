<template>
  <div class="ys-verification">
    <div class="input-wrapper" v-for="item in amount" :key="item">
      <input
        style="padding-left:0;"
        type="number"
        @paste="handlePaste"
        title="code"
        v-focus="(item - 1) === currentIndex"
        maxlength="1"
        @input="handleInput($event,(item-1))"
        @keyup.delete="onDelete($event,(item-1))"
        v-model="code[item-1]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "VerificationCodeInput",
  props: {
    amount: {
      type: Number,
      default: 4
    }
  },
  directives: {
    focus: {
      componentUpdated: function(el, obj) {
        obj.value && el.focus();
      }
    }
  },
  created() {
    this.code = new Array(this.amount).fill("");
  },
  methods: {
    handleInput(e, index) {
      this.currentIndex = index;
      e.target.value = this.validateNumber(e.target.value);
      if (e.target.value.length > 1) {
        this.code[index] = e.target.value[e.target.value.length-1]
      }
      this.$emit("onCompleted", this.code.join(""));
      e.target.value !== "" && ++this.currentIndex;
      !this.code.includes("");
    },
    onDelete(e, index) {
      if (e.target.value === "") {
        this.currentIndex = index - 1;
      }
    },
    validateNumber(val) {
      return val.replace(/\D/g, "");
      
    },
    handlePaste(e) {
      e.preventDefault();
    }
  },
  data() {
    return {
      code: [],
      currentIndex: 0
    };
  }
};
</script>

<style lang="stylus" scoped>
.ys-verification {
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
