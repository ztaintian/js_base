
<template>
  <el-dialog
    :visible.sync="visible"
    v-bind="dialogAttrs"
    @close="$emit('update:show', false)"
  >
    <div v-if="message !== ''" class="message-content">
      <slot>
        <p v-if="!dangerouslyUseHTMLString" pb15 pt15>
          {{ message }}
        </p>
        <p v-else v-html="message"></p>
      </slot>
    </div>
    <el-row justify="center" type="flex" mt20 mb10>
      <ciic-button
        v-if="showCancelButton"
        type=""
        style="min-width:80px"
        @click="handleAction('cancel')"
      >
        {{ cancelButtonText }}
      </ciic-button>
      <ciic-button
        v-if="showConfirmButton"
        type="deep"
        style="min-width:80px"
        ml10
        @click="handleAction('confirm')"
      >
        {{ confirmButtonText }}
      </ciic-button>
    </el-row>
  </el-dialog>
</template>

<script>
import { dialog } from '@/components/CiicDialog/mixin.js'
export default {
  name: 'ciic-confirm',
  mixins: [dialog],
  data() {
    return {
      visible: false,
      dialogAttrs: { }, // el-dialog 可以绑定的dialog,如 width showClose
      width: '340px',
      dangerouslyUseHTMLString: false, // 使用的话可能会有xss攻击
      message: '',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      promiseStatus: null
    }
  },
  computed: {
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        //
      } else {
        this.remove && this.remove()
      }
    }
  },
  methods: {
    confirm() {
      const _this = this
      this.visible = true
      return new Promise(function(resolve, reject) {
        _this.promiseStatus = { resolve, reject }
      })
    },
    handleAction(action) {
      this.visible = false
      if (action === 'confirm') {
        this.promiseStatus && this.promiseStatus.resolve()
      } else {
        this.promiseStatus && this.promiseStatus.reject()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.message-content{
  p{
    font-size: 12px;
    font-weight: 400;
    color: #363636;
    @include box-center($justify: center, $align: center);
  }
}
</style>
