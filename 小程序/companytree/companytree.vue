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
        return [
          {
            name: "中国国际技术智能合作",
            level: 1,
            child: [
              {
                level: 2,
                name: "中国国际技术智能合作股份有限责任公司",
                child: [
                  {
                    level: 3,
                    name: "中智上海经济有限公司",
                    child: [
                      {
                        level: 4,
                        name: "中智邯郸经济有限责任有限公司",
                      },

                      {
                        level: 4,
                        name: "中智邯郸经济有限责任有限公司2",
                      },
                    ],
                  },
                  {
                    level: 3,
                    name: "中智上海经济有限公司",
                    child: [
                      {
                        level: 4,
                        name: "中智邯郸经济有限责任有限公司",
                      },

                      {
                        level: 4,
                        name: "中智邯郸经济有限责任有限公司2",
                      },
                    ],
                  },
                ],
              },
              {
                level: 2,
                name: "中国国际技术智能合作股份有限责任公司",
                child: [
                  {
                    level: 3,
                    name: "中智上海经济有限公司",
                    child: [
                      {
                        level: 4,
                        name: "中智邯郸经济有限责任有限公司",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ];
      },
    },
  },
  mounted() {
    console.log("this.dataTree", this.dataTree);
  },
};
</script>

<style lang="stylus" scoped></style>