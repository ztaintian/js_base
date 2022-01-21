<template>
  <el-dialog title="导出提示" :visible.sync="dialogVisible" width="30%">
    <div style="text-align:center;">
      <i style="font-size:45px;color:#409EFF;" class="el-icon-loading"></i>
    </div>
    <div style="text-align:center;margin-top:5px;">导出文件正在生成，请移步<span style="color:#409EFF;">文件导出</span>页面下载。</div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="goCheck">前往查看</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  name: 'ExportTip',
  data() {
    return {
      dialogVisible: true,
    }
  },
  mounted() {

  },
  methods: {
    goCheck() {
      console.log('ddd')
      this.$destroy(true);
    }
  },
  destroyed() {
    this.$el.parentNode.removeChild(this.$el);
  }
}
</script>



