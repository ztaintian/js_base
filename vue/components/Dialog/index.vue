<template>
  <el-dialog
    :visible.sync="visible"
    v-bind="$attrs"
    @close="$emit('update:show', false)"
  >
    <slot />
    <!-- 底部按钮 -->
    <!-- <div slot="footer" class="dialog-footer">
      <el-button size="mini" @click="close">取消</el-button>
    </div> -->
  </el-dialog>
</template>

<script>
import { dialog } from './mixin.js';
export default {
  name: 'ciic-dialog',
  mixins: [dialog],
  data() {
    return {
    };
  },
  computed: {
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        //
      }
    }
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>

</style>
