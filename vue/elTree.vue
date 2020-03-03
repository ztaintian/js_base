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
    // filterText(val) {
    //   this.$refs.tree.filter(val);
    // },
    filterText(val) {
      console.log("el-tree", val);
      var vm = this;
      if (val) {
        // var arr = $(
        //   ".el-tree-node .is-focusable .el-tree-node__content span:nth-child(2)"
        // );
        // for (var i = 0; i < arr.length; i++) {
        //   console.log("element-ui中el-tree组件的节点过滤中的关键字高亮实现");
        //   var values = $(arr[i]).html();
        //   $(arr[i]).html(
        //     values
        //       .split('<span style="color: red;">')
        //       .join("")
        //       .split("</span>")
        //       .join("")
        //   );
        //   $(arr[i]).html(values);
        // }
      } else {
        vm.treeFlag = false;
        setTimeout(() => {
          vm.treeFlag = true;
        }, 300);
      }
      this.$refs.menuTree.filter(val);
    }
  },
  mounted() {
    this.GetCounterTree();
  },
  methods: {
    // hr/FmcgCounterCommon/GetCounterTree
    GetCounterTree() {
      this.Ajax.post("/hr/FmcgCounterCommon/GetCounterTree", {
        OrganizationCode: ""
      }).then(response => {
        this.data = response.result;
      });
    },
    highLightText() {
      var vm = this;
      setTimeout(function() {
        var val = vm.filterText;
        if (val !== null && val !== "") {
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
            console.log("values", values);
            var reg = new RegExp(val, "g"); //创建正则RegExp对象
            $(arr[i]).html(
              values.replace(
                reg,
                '<span style="color: red;">' + val + "</span>"
              )
            );
          }
        }
      }, 300);
    },
    filterNode(value, data) {
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

