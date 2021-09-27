// 弹出框使用
export const dialog = {
  data() {
    return {
      visible: this.show
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  methods: {
    closeDialog() { // 关闭弹窗
      this.visible = false;
    },
    showDialog() { // 关闭弹窗
      this.visible = true;
    }
  }
};
