<!-- <v-tree
ref="xyTree"
:treeData="treeData"
:replaceFields="{ children: 'children', key: 'id', name: 'name' }"
:defaultOpenedKeys="defaultOpenedKeys"
@cnecked="treeChecked"
@afterTreeInit="afterTreeInit"
></v-tree>
treeData: [
{
  id: "1",
  name: "南京市",
  children: [
    {
      id: "1-1",
      name: "玄武区",
      children: [
        {
          id: "1-1-1",
          name: "东南大学",
        },
        {
          id: "1-1-2",
          name: "南京林业大学",
        },
        {
          id: "1-1-3",
          name: "南京农业大学",
        },
      ],
    },
  ],
},
],
defaultOpenedKeys: [], -->

<template>
  <view class="">
    <view class="" v-for="node in treeList" :key="node.key">
      <view
        :class="{
          'node-active': !(node.childrenid && node.childrenid.length > 0),
          'tree-node': true,
        }"
        @click="toggleTree(!isOpen(node.key), node)"
        v-show="isShow(node.key) || node.rank === 0"
      >
        <block v-if="node.childrenid && node.childrenid.length > 0">
          <i :class="{ active: !isOpen(node.key), iconfont: true }">&#xe6a5;</i>
        </block>
        <i v-else class="iconfont">&#xe68d;</i>
        <!-- <u-checkbox
          class="checkbox-item"
          :style="{
            marginLeft: !node.childrenid ? `${28 + node.rank * 30}rpx` : '',
          }"
          @change="checkboxChange"
          v-model="node.checked"
          :name="node.key"
        ></u-checkbox> -->
        <text>{{ node.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "LayerTree",
  props: {
    // 树结构数据源
    treeData: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // 替换节点fields属性值，默认为 { children:'children', key:'key', name:'name' }
    replaceFields: {
      type: Object,
      default: function () {
        return {
          children: "children",
          key: "key",
          name: "name",
        };
      },
    },
    // 默认选中节点数组，传入此数组可指定哪些节点默认选中
    // 如果传入的key包含父节点 则默认选中所有其子节点
    defaultCheckedKeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
    // 默认打开节点数组，传入此数组可指定哪些节点默认打开
    defaultOpenedKeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  watch: {
    treeData: {
      handler: function (nVal, oVal) {
        this.loadTree();
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      openedList: [], // 展开节点数组（只存放带有子级的节点）
      checkedList: [], // 当前选中节点数组
      treeList: [], // 扁平化后的树数据源
      showList: [], // 当前展示的树节点（0级节点默认添加到数组中始终显示，其他级别动态控制显隐）
    };
  },
  computed: {
    // 判断节点展开/关闭
    isOpen() {
      return function (key) {
        return this.openedList.includes(key);
      };
    },
    // 判断节点显示/隐藏
    isShow() {
      return function (key) {
        return this.showList.includes(key);
      };
    },
  },
  methods: {
    // 初始化树方法，可在初始化及reload刷新时调用重新渲染树结构
    loadTree() {
      this.resetData();
      this.renderTreeList();
    },
    resetData() {
      this.openedList = [];
      this.checkedList = [];
      this.treeList = [];
      this.showList = [];
    },
    // 渲染树方法 将树数据扁平化并处理初始选中、打开状态
    // FIXME:渲染完成后传出事件 afterTreeInit 参数为 this.treeList (扁平化后的数组list)、this.checkedList (当前默认选中的数组)
    renderTreeList() {
      const replaceFields = this.replaceFields;
      this.treeList = [...getListByTree(this.treeData)];
      // 树结构数据扁平化处理
      function getListByTree(treeData) {
        const treeList = [];
        const treeToList = function (
          list = [],
          rank = 0,
          parentId = [],
          parents = []
        ) {
          list.forEach((item, index) => {
            const node = {
              key: item[replaceFields.key],
              name: item[replaceFields.name],
              source: item,
              parentId, // 父级id数组
              parents, // 父级id数组
              rank, // 层级
              checked: false,
            };
            if (
              Array.isArray(item[replaceFields.children]) &&
              item[replaceFields.children].length > 0
            ) {
              // 在这里声明父节点属性是因为第一个节点一定不会有父节点,所以从第二条开始才生效
              let parentid = [...parentId],
                parentArr = [...parents],
                childrenid = [...childrenid];
              delete parentArr[replaceFields.children];
              parentid.push(item[replaceFields.key]);
              parentArr.push({
                [replaceFields.key]: item[replaceFields.key],
                [replaceFields.name]: item[replaceFields.name],
              });
              // 这里的子节点使用直接赋值的方式是因为第一个节点就有可能存在子节点
              node.childrenid = item[replaceFields.children].map(
                (childItem) => {
                  return childItem[replaceFields.key];
                }
              );
              treeList.push(node);
              treeToList(
                item[replaceFields.children],
                rank + 1,
                parentid,
                parentArr
              );
            } else {
              treeList.push(node);
            }
          });
        };
        treeToList(treeData);
        return treeList;
      }
      // 遍历扁平化后的数组 根据初始参数如defaultCheckedList和defaultOpenedKeys渲染树节点初始状态
      this.checkedList = [...this.defaultCheckedKeys];
      this.treeList.forEach((node) => {
        const nodeItem = this.treeList.find((n) => n.key === node.key);
        // 如果有节点的key存在checkedList中且有childrenid则直接合并到checkedList中
        if (this.checkedList.includes(node.key)) {
          node.checked = true;
          if (
            nodeItem &&
            nodeItem.childrenid &&
            nodeItem.childrenid.length > 0
          ) {
            this.checkedList = [...this.checkedList, ...nodeItem.childrenid];
          }
          if (nodeItem && nodeItem.parentId && nodeItem.parentId.length > 0) {
            this.checkedList = [...this.checkedList, ...nodeItem.parentId];
          }
        }
        // 根据默认打开数组控制树节点默认打开
        if (this.defaultOpenedKeys.includes(node.key)) {
          if (nodeItem && nodeItem.parentId && nodeItem.parentId.length > 0) {
            this.openedList = [
              ...new Set([...this.openedList, ...nodeItem.parentId]),
            ];
            // 如果存在父节点 默认打开父节点并将父节点放进openedList中
            nodeItem.parentId.forEach((pKey) => {
              const parentNode = this.treeList.find((n) => n.key === pKey);
              this.toggleTree(true, parentNode);
            });
          }
        }
      });
      // 多层结构时合并后的数组会重复,这里进行去重处理
      this.checkedList = [
        ...new Set([...this.defaultCheckedKeys, ...this.checkedList]),
      ];
      this.checkedControl(this.checkedList, true);
      this.$emit("afterTreeInit", this.treeList, this.checkedList);
    },
    // 节点选中事件
    // FIXME: 选中后传出事件 cnecked参数为node(当前选中节点) this.checkedList(当前选中节点的keys)
    checkboxChange(e) {
      const checkedList = this.checkedList;
      const checked = e.value;
      const key = e.name;
      const node = this.treeList.find((item) => item.key === key);
      const hasChildren = node && node.childrenid && node.childrenid.length > 0;
      if (!checked) {
        // 取消勾选 若存在子级节点则级联取消所有层级勾选
        let uncheckedList = [];
        this.checkedList = [...this.delItemInArr(checkedList, key)];
        if (hasChildren) {
          uncheckedList = this.generationKeys(node.childrenid, this.treeList);
          uncheckedList.forEach((x) => {
            this.checkedList = this.checkedList.filter((k) => k !== x);
          });
        }
        this.checkedControl(uncheckedList, checked);
      } else {
        // 勾选 若存在子级节点则级联勾选所有层级
        this.checkedList.push(key);
        if (hasChildren) {
          this.checkedList = [
            ...new Set([
              ...this.checkedList,
              ...this.generationKeys(node.childrenid, this.treeList),
            ]),
          ];
        }
        this.checkedControl(this.checkedList, checked);
      }
      this.$emit("cnecked", node, checked, this.checkedList);
    },
    // 控制树节点选中状态修改数据并渲染到树中
    checkedControl(checkedList, checked) {
      this.treeList = this.treeList.map((node) => {
        if (checkedList.includes(node.key)) {
          node.checked = checked;
        }
        return node;
      });
    },
    // 深度遍历，如果有子级则逐层取出子级的key
    generationKeys(childrenid, treeList) {
      let checkedKeys = [];
      const deepEach = (ids, list) => {
        ids.forEach((id) => {
          const childNode = list.find((node) => node.key === id);
          if (
            childNode &&
            childNode.childrenid &&
            childNode.childrenid.length > 0
          ) {
            deepEach(childNode.childrenid, list);
            checkedKeys = [...checkedKeys, ...childNode.childrenid, id];
          } else {
            checkedKeys = [...checkedKeys, id];
          }
        });
      };
      deepEach(childrenid, treeList);
      return checkedKeys;
    },
    // 节点关闭打开事件
    toggleTree(opened, node) {
      console.log("opened", opened, node);
      if (!(node.childrenid && node.childrenid.length > 0)) {
        return;
      }
      const openedList = this.openedList;
      if (!opened) {
        this.openedList = [...this.delItemInArr(openedList, node.key)];
        const closed = [
          ...new Set(this.generationKeys(node.childrenid, this.treeList)),
        ];
        // 关闭时先遍历有没有存在子级的节点，如果有则级联关闭
        closed.forEach((x) => {
          const childNode = this.treeList.find((node) => node.key === x);
          if (childNode && childNode.childrenid) {
            this.openedList = [
              ...this.delItemInArr(this.openedList, childNode.key),
            ];
          }
          // 将关闭节点的子级全部隐藏
          this.showList = this.showList.filter((k) => k !== x);
        });
      } else {
        // 打开时显示所有子级节点
        this.openedList.push(node.key);
        this.showList = [
          ...new Set([
            ...this.openedList,
            ...this.showList,
            ...node.childrenid,
          ]),
        ];
      }
    },
    // 删除数组中指定子项方法
    delItemInArr(arr, item) {
      const newArr = arr;
      const index = newArr.findIndex((p) => p === item);
      if (index >= 0) {
        newArr.splice(index, 1);
      }
      return newArr;
    },
  },
};
</script>

<style lang="stylus" scoped>
.tree-node {
  height: 124rpx;
  line-height: 124rpx;
  border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
  margin: 0 40rpx;
  font-size: 30rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  ftWt400();
  color: #FFFFFF;

  .iconfont {
    float: right;
    color: #2185FF;
    font-size: 36rpx;
  }

  .active {
    transform: rotate(180deg);
    color:#ABB3C0;
  }
}

.node-active {
  background: rgba(0, 0, 0, 0.13);
  border-bottom: 0;
  margin: 0;
  padding: 0 40rpx;
  font-size: 28rpx;
  color: rgba(255, 255, 255, 0.51);
  .iconfont{
    color:#ABB3C0;
  }
}
</style>
