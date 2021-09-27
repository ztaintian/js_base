<!-- 通用的表格
:cell-style="cellClass"
:header-cell-style="cellClass2"-->
<template>
  <el-table
    ref="table"
    v-loading="loading"
    :data="data"
    :show-header="showHeader"
    :border="border"
    :height="height"
    :max-height="maxHeight "
    :size="size"
    :cell-style="cellStyle"
    :class="className"
    :row-class-name="rowClassName"
    v-bind="$attrs"
    :stripe="stripe"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    fit
    style="width: 100%;"
    @row-dblclick="dblclick"
    @selection-change="handleSelectionChange"
    @current-change="handleCurrentChange"
  >
    <!--使用v-for遍历-->
    <template v-for="(colConfig, index) in colConfigs">
      <!--slot 添加自定义配置项-->
      <slot v-if="colConfig.slot" :name="colConfig.slot" />
      <!--component 特殊处理某一项 需要apps中传入 -->
      <!-- :is="colConfig.component" -->
      <component
        :is="apps[colConfig.component]"
        v-else-if="colConfig.component"
        :key="index"
        :col-config="colConfig"
        @event="event"
      />
      <el-table-column v-else :key="index" v-bind="colConfig" />
    </template>
  </el-table>
</template>
<script>
export default {
  name: 'ciic-table',
  props: {
    colConfigs: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    border: {
      type: Boolean,
      default: false
    },
    showsummary: {
      type: Boolean,
      default: false
    },
    // eslint-disable-next-line vue/require-default-prop
    height: {
      type: [String, Number]
    },
    // eslint-disable-next-line vue/require-default-prop
    maxHeight: {
      type: [String, Number]
    },
    // 监听resize响应最大高度
    leaveButtom: {
      type: Number,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    },
    stripe: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'mini'
    },
    rowClassName: {
      type: Function,
      default: () => { return ''; }
    },
    // 'A组件' : 'aaa' 动态传入需要使用的异步组件
    apps: {
      type: Object,
      default: () => {}
    },
    cellStyle: {
      type: Function,
      default: () => {
        return 'padding: 0px; height: 38px;';
      }
    }
  },
  mounted() {

  },
  methods: {
    dblclick(row, $event) {
      this.$emit('dblclick', row, $event);
    },
    handleCurrentChange(val) {
      this.$emit('handleCurrentChange', val);
    },
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val);
    },
    // component 事件使用
    event(obj) {
      this.$emit(obj.name, obj.val);
    },
    doLayout() {
      this.$refs.table && this.$refs.table.doLayout();
    },
    // 使用 selection 时获取选中行数据 和 handleSelectionChange 类似
    getSelect() {
      return this.$refs.table.selection;
    }
  }
};
</script>

<!--userList:[{
name:'1',
birth:'2',
age:'3',
addr:'4'
}],
colConfigs: [
{ slot: "operate" },
{ prop: "name",label: "姓名" },
{ slot: "sex" },
{ prop: "birth", label: "出生日期" },
{ prop: "age", label: "年龄" },
{ prop: "addr", label: "地址" },
],-->

<!--<div id="">
    <ciic-table :data="userList" :col-configs="colConfigs" row-key="id">
        <el-table-column slot="sex" label="性别">
          <template slot-scope="scope">
            {{scope.row.sex === 0 ? "男" : "女"}}
          </template>
        </el-table-column>
        <el-table-column slot="operate" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </ciic-table>
</div>-->
