<template>
  <el-form
    ref="form"
    :label-width="labelWidth"
    :size="size"
    v-bind="$attrs"
    class="ciic-edit-form"
  >
    <slot />
  </el-form>
</template>

<script>
export default {
  name: 'ciic-edit-form',
  props: {
    labelWidth: {
      type: String,
      default: '100px'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    clearValidate() {
      this.$refs['form'].clearValidate();
    },
    resetForm() {
      this.$refs['form'].resetFields();
    },
    // validate(fn) {
    //   return this.$refs.form.validate(fn)
    // },
    validateForm() {
      return new Promise(resolve => {
        if (!this.$refs.form) {
          resolve(true);
        } else {
          this.$refs.form.validate(v => {
            if (v) {
              resolve(true);
            } else {
              resolve(false);
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$default-font-color:rgba(54, 54, 54, 0.6);
.ciic-edit-form{
  overflow: hidden;
  box-sizing: border-box;
  ::v-deep .el-checkbox__label,
  ::v-deep .el-form-item__label {
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    color: $default-font-color;
  }
  ::v-deep .el-form-item--mini.el-form-item,
  ::v-deep .el-form-item--small.el-form-item {
    margin-bottom: 15px;
  }
}
</style>
