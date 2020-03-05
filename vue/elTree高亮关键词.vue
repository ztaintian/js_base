<template>
  <div class="store-structure">
    <el-input
      @input="highLightText"
      placeholder="输入关键字进行过滤"
      class="input"
      v-model="filterText"
      size="small"
    ></el-input>

    <el-tree
      v-if="treeFlag"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="menuTree"
    ></el-tree>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  watch: {
    filterText(val) {
      // 从新渲染tree
      this.$refs.menuTree.filter(val);
    }
  },
  mounted() {
    this.GetCounterTree();
  },
  methods: {
    GetCounterTree() {
      // 获取数据
      this.Ajax.post("/hr/FmcgCounterCommon/GetCounterTree", {
        OrganizationCode: ""
      }).then(response => {
        this.data = response.result;
      });
    },
    highLightText() {
      // 高亮文字
      var vm = this;
      setTimeout(function() {
        var val = vm.filterText;
        var arr = $(
          ".el-tree-node .is-focusable .el-tree-node__content span:nth-child(2)"
        );
        for (var i = 0; i < arr.length; i++) {
          var values = $(arr[i]).html();
          $(arr[i]).html(
            values
              .split('<span style="color: red;">')
              .join("")
              .split("</span>")
              .join("")
          );
        }

        for (var i = 0; i < arr.length; i++) {
          var values = $(arr[i]).html();
          var reg = new RegExp(val, "g"); //创建正则RegExp对象
          $(arr[i]).html(
            values.replace(reg, '<span style="color: red;">' + val + "</span>")
          );
        }
      }, 300);
    },
    filterNode(value, data) {
      // 过滤文字
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  },

  data() {
    return {
      treeFlag: true,
      filterText: "",
      data: [],
      // data: [
      //   {
      //     id: 1,
      //     label: "一级 1",
      //     children: [
      //       {
      //         id: 4,
      //         label: "二级 1-1",
      //         children: [
      //           {
      //             id: 9,
      //             label: "三级 1-1-1"
      //           },
      //           {
      //             id: 10,
      //             label: "三级 1-1-2"
      //           }
      //         ]
      //       }
      //     ]
      //   },
      //   {
      //     id: 2,
      //     label: "一级 2",
      //     children: [
      //       {
      //         id: 5,
      //         label: "二级 2-1"
      //       },
      //       {
      //         id: 6,
      //         label: "二级 2-2"
      //       }
      //     ]
      //   },
      //   {
      //     id: 3,
      //     label: "一级 3",
      //     children: [
      //       {
      //         id: 7,
      //         label: "二级 3-1"
      //       },
      //       {
      //         id: 8,
      //         label: "二级 3-2"
      //       }
      //     ]
      //   }
      // ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  }
};
</script>

<style lang="stylus">
.store-structure {
  margin-top: 50px;

  .input {
    width: 300px;
  }
}
</style>

