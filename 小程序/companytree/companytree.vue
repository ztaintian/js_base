<template>
  <div>
    <companyitem v-for="item in dataTree" :localData="item" :key="item.name"
      >11</companyitem
    >
  </div>
</template>

<script>
import companyitem from "./component/companyitem.vue";
export default {
  components: {
    companyitem,
  },
  name: "companytree",
  props: {
    dataTree: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  mounted() {
    console.log("this.dataTree", this.dataTree);
  },
};
</script>

<style lang="stylus" scoped></style>