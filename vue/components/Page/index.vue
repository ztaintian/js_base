<template>
  <el-pagination
    ref="page"
    :small="small"
    :current-page.sync="page.pageIndex"
    :page-size.sync="page.pageSize"
    :page-sizes="pageSizes"
    :total="total"
    :layout="layout"
    :pager-count="pagerCount"
    v-bind="$attrs"
    @current-change="getList"
    @size-change="getList"
  />
</template>

<script>
export default {
  name: 'ciic-page',
  props: {
    page: {
      type: Object,
      default: () => {
        return {
          pageIndex: 1,
          pageSize: 20
        };
      }
    },
    pageSizes: {
      type: Array,
      default: () => {
        return [10, 15, 20, 30];
      }
    },
    total: {
      type: Number,
      default: 0
    },
    getList: {
      type: Function,
      default: () => {}
    },
    layout: {
      type: String,
      default: 'total, prev, pager, next, jumper'
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    small: {
      type: Boolean,
      default: true
    },
    // 查询出来数据集合，用于重置pageIndex
    list: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Array | String,
      default: ''
    }
  },
  watch: {
    'list.length': {
      handler(val) {
        // total有值但是list没值的情况触发,重新获取
        if (typeof this.list !== 'string' && val === 0 && this.total !== 0) {
          this.$refs.page.emitChange();
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-pagination--small{
  ::v-deep span:not([class*=suffix]) {
    font-size:12px ;
  }
  ::v-deep .el-input .el-input__inner {
    font-size: 12px;
    height:22px;
  }
  ::v-deep .el-input{
    font-size: 12px;
    margin: 0 5px;
    font-weight: bold;
  }
  ::v-deep.el-icon-arrow-up{
    line-height: 22px;
  }
  ::v-deep .el-pagination__jump{
    font-size: 12px !important;
    font-weight: bold;
    color: rgba(54, 54, 54, 0.6);
    // @include box-center($justify: center, $align: center);
  }
  ::v-deep .el-pager{
    li{
      width: 40px;
      color: rgba(54, 54, 54, 0.6);
      background: #FFFFFF;
      border: 1px solid rgba(54, 54, 54, 0.2);
      overflow: hidden;
    }
    li:not(.disabled).active{
      background: #258CE7;
    }
  }
}

</style>
